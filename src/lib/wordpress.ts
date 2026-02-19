const WP_API_URL = 'https://cms.mailinfra.co/wp-json/wp/v2/posts?_embed';
const WP_CATEGORIES_URL = 'https://cms.mailinfra.co/wp-json/wp/v2/categories';
const WP_MEDIA_URL = 'https://cms.mailinfra.co/wp-json/wp/v2/media';

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface WordPressPost {
  id: number;
  slug: string;
  featured_media: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  _embedded: {
    'wp:featuredmedia'?: Array<{ source_url?: string; alt_text?: string; code?: string }>;
    author?: Array<{ name: string; description: string; avatar_urls: { 96: string } }>;
    'wp:term'?: Array<Array<{ name: string; slug: string }>>;
  };
  acf?: {
    author_name?: string;
    reading_time?: string;
    last_updated?: string;
    seo_description?: string;
    featured_image_url?: string;
  };
}

export async function fetchPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(WP_API_URL);
    if (!response.ok) throw new Error(`Failed: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function fetchPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `https://cms.mailinfra.co/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );
    if (!response.ok) throw new Error(`Failed: ${response.statusText}`);
    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Error fetching post "${slug}":`, error);
    return null;
  }
}

export async function fetchCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(WP_CATEGORIES_URL);
    if (!response.ok) throw new Error(`Failed: ${response.statusText}`);
    const cats = await response.json();
    return cats.filter((c: WordPressCategory) => c.slug !== 'uncategorized');
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function fetchMediaUrl(mediaId: number): Promise<string | null> {
  try {
    const response = await fetch(`${WP_MEDIA_URL}/${mediaId}`);
    if (!response.ok) return null;
    const media = await response.json();
    return media.source_url || null;
  } catch {
    return null;
  }
}

export function getAuthorName(post: WordPressPost): string {
  return post.acf?.author_name ||
    post._embedded?.author?.[0]?.name || 'Mailinfra Team';
}

export function getReadingTime(post: WordPressPost): string {
  if (post.acf?.reading_time) return post.acf.reading_time;
  const text = post.content.rendered.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export function getLastUpdated(post: WordPressPost): string {
  if (post.acf?.last_updated) return post.acf.last_updated;
  return new Date(post.modified).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });
}

export function getCategory(post: WordPressPost): string {
  return post._embedded?.['wp:term']?.[0]?.[0]?.name || 'General';
}

export function getFeaturedImage(post: WordPressPost): string | null {
  // Check ACF custom field first (manual override)
  if (post.acf?.featured_image_url) {
    return post.acf.featured_image_url;
  }

  // Try embedded — check it's not a forbidden error
  const embedded = post._embedded?.['wp:featuredmedia']?.[0];
  if (embedded && embedded.source_url && !embedded.code) {
    return embedded.source_url;
  }

  // Fall back to direct wp-content URL pattern using media ID
  if (post.featured_media && post.featured_media > 0) {
    return `${WP_MEDIA_URL}/${post.featured_media}`;
  }

  return null;
}