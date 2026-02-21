const WP_API_URL = "https://cms.mailinfra.co/wp-json/wp/v2/posts?_embed";
const WP_CATEGORIES_URL = "https://cms.mailinfra.co/wp-json/wp/v2/categories";
const WP_MEDIA_URL = "https://cms.mailinfra.co/wp-json/wp/v2/media";
async function fetchPosts() {
  try {
    const response = await fetch(WP_API_URL);
    if (!response.ok) throw new Error(`Failed: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
async function fetchPostBySlug(slug) {
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
async function fetchCategories() {
  try {
    const response = await fetch(WP_CATEGORIES_URL);
    if (!response.ok) throw new Error(`Failed: ${response.statusText}`);
    const cats = await response.json();
    return cats.filter((c) => c.slug !== "uncategorized");
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
function getAuthorName(post) {
  return post.acf?.author_name || post._embedded?.author?.[0]?.name || "Mailinfra Team";
}
function getReadingTime(post) {
  if (post.acf?.reading_time) return post.acf.reading_time;
  const text = post.content.rendered.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}
function getLastUpdated(post) {
  if (post.acf?.last_updated) return post.acf.last_updated;
  return new Date(post.modified).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
function getCategory(post) {
  return post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General";
}
function getFeaturedImage(post) {
  if (post.acf?.featured_image_url) {
    return post.acf.featured_image_url;
  }
  const embedded = post._embedded?.["wp:featuredmedia"]?.[0];
  if (embedded && embedded.source_url && !embedded.code) {
    return embedded.source_url;
  }
  if (post.featured_media && post.featured_media > 0) {
    return `${WP_MEDIA_URL}/${post.featured_media}`;
  }
  return null;
}

export { fetchCategories as a, getAuthorName as b, getReadingTime as c, getLastUpdated as d, getFeaturedImage as e, fetchPosts as f, getCategory as g, fetchPostBySlug as h };
