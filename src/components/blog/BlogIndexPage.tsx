import { useState, useEffect } from 'react';
import { fetchPosts, fetchCategories } from '../../lib/wordpress';
import type { WordPressPost, WordPressCategory } from '../../lib/wordpress';
import { BlogHeader } from './BlogHeader';
import { BlogFooter } from './BlogFooter';
import { BlogNewsletter } from './BlogNewsletter';
import { FeaturedArticle } from './FeaturedArticle';
import { ArticleGrid } from './ArticleGrid';
import { CategorySection } from './CategorySection';
import { SEOHead, WebsiteSchema } from './SEOHead';

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [fetchedPosts, fetchedCategories] = await Promise.all([
        fetchPosts(),
        fetchCategories()
      ]);
      setPosts(fetchedPosts);
      setCategories(fetchedCategories);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <BlogHeader />
      <SEOHead
        title="Mailinfra Blog | Infrastructure Insights for Modern Email Teams"
        description="Deep technical guides on deliverability, SMTP, scaling cold email infrastructure, and building reliable outbound systems."
        canonicalUrl="https://blog.mailinfra.co/"
        ogType="website"
      />
      <WebsiteSchema
        name="Mailinfra Blog"
        url="https://blog.mailinfra.co/"
        description="Infrastructure Insights for Modern Email Teams"
        publisher={{ name: 'Mailinfra', logo: 'https://mailinfra.co/logo.png' }}
      />
      <main>
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                The Mailinfra Blog
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-medium mb-2 sm:mb-3">
                Infrastructure Insights for Modern Email Teams
              </p>
              <p className="text-base sm:text-lg text-blue-200 leading-relaxed">
                Deep technical guides on deliverability, SMTP, scaling cold email infrastructure, and building reliable outbound systems.
              </p>
            </div>
          </div>
        </section>

        {loading ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
            <p className="text-gray-600">Loading articles...</p>
          </div>
        ) : (
          <>
            <FeaturedArticle post={posts[0]} />
            <ArticleGrid posts={posts.slice(1)} />
          </>
        )}
        <CategorySection categories={categories} />
        <BlogNewsletter />
      </main>
      <BlogFooter />
    </div>
  );
}
