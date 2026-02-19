import { useState, useEffect } from 'react';
import { fetchPostBySlug, fetchPosts, getAuthorName, getCategory, getFeaturedImage } from '../../lib/wordpress';
import type { WordPressPost } from '../../lib/wordpress';
import { BlogHeader } from './BlogHeader';
import { BlogFooter } from './BlogFooter';
import { HeroBand } from './HeroBand';
import { ArticleContent } from './ArticleContent';
import { PreFooterCTA } from './PreFooterCTA';
import { SEOHead, ArticleSchema } from './SEOHead';

export default function BlogPostPageComponent({ slug }: { slug: string }) {
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!slug) return;
    window.scrollTo(0, 0);
    async function load() {
      const fetchedPost = await fetchPostBySlug(slug);
      if (!fetchedPost) { setLoading(false); return; }
      setPost(fetchedPost);
      const all = await fetchPosts();
      setRelatedPosts(all.filter(p => p.id !== fetchedPost.id).slice(0, 3));
      setLoading(false);
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <BlogHeader />
        <div className="flex items-center justify-center py-32">
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <BlogHeader />
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <p className="text-gray-600 mb-4">Article not found.</p>
          <a href="/blog" className="text-blue-700 underline">← Back to blog</a>
        </div>
      </div>
    );
  }

  const seoTitle = `${post.title.rendered.replace(/<[^>]*>/g, '')} | Mailinfra Blog`;
  const seoDescription = post.acf?.seo_description || post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160);
  const canonicalUrl = `https://blog.mailinfra.co/${post.slug}`;
  const featuredImage = getFeaturedImage(post);
  const author = getAuthorName(post);
  const category = getCategory(post);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        ogImage={featuredImage || undefined}
        ogType="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.modified,
          author: author,
          section: category
        }}
      />
      <ArticleSchema
        headline={post.title.rendered.replace(/<[^>]*>/g, '')}
        description={seoDescription}
        image={featuredImage || undefined}
        datePublished={post.date}
        dateModified={post.modified}
        author={{
          name: author,
          url: `https://blog.mailinfra.co/author/${author.toLowerCase().replace(/\s+/g, '-')}`
        }}
        publisher={{
          name: 'Mailinfra',
          logo: 'https://mailinfra.co/logo.png'
        }}
        url={canonicalUrl}
      />
      <div
        className="fixed top-0 left-0 h-1 bg-yellow-400 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
      <BlogHeader />
      <HeroBand post={post} />
      <main className="bg-white">
        <ArticleContent post={post} relatedPosts={relatedPosts} />
      </main>
      <PreFooterCTA />
      <BlogFooter />
    </div>
  );
}