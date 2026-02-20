import { useState, useEffect } from 'react';
import { fetchCategories, fetchPosts } from '../../lib/wordpress';
import type { WordPressPost, WordPressCategory } from '../../lib/wordpress';
import { BlogHeader } from './BlogHeader';
import { BlogFooter } from './BlogFooter';
import { BlogNewsletter } from './BlogNewsletter';
import { ArticleCard } from './ArticleCard';
import { EmptyState } from './EmptyState';
import { getCategory } from '../../lib/wordpress';

export function CategoryPage({ slug }: { slug: string }) {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [category, setCategory] = useState<WordPressCategory | null>(null);
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [allPosts, allCategories] = await Promise.all([
        fetchPosts(),
        fetchCategories()
      ]);
      const matchedCategory = allCategories.find(c => c.slug === slug) || null;
      const filteredPosts = allPosts.filter(p => getCategory(p).toLowerCase() === (matchedCategory?.name.toLowerCase() || slug));
      setCategory(matchedCategory);
      setCategories(allCategories);
      setPosts(filteredPosts);
      setLoading(false);
    }
    load();
  }, [slug]);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <BlogHeader />

      {/* Category Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 bg-blue-700 bg-opacity-60 text-blue-100 text-xs font-semibold rounded-full mb-4 uppercase tracking-wide">
              Category
            </div>
            <h1 className="text-5xl font-bold text-white leading-tight mb-4">
              {category?.name || slug}
            </h1>
            {category?.description && (
              <p className="text-xl text-blue-100 leading-relaxed">{category.description}</p>
            )}
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-6 py-8 border-b border-gray-200">
        <div className="flex items-center gap-4 flex-wrap">
          <a href="/blog"
            className="px-6 py-3 text-sm font-semibold rounded-full bg-blue-100 hover:bg-blue-200 text-blue-800 transition-colors">
            All Posts
          </a>
          {categories.map(cat => (
            <a key={cat.id} href={`/blog/category/${cat.slug}`}
              className={`px-6 py-3 text-sm font-semibold rounded-full transition-colors ${
                cat.slug === slug
                  ? 'bg-blue-700 text-white'
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
              }`}>
              {cat.name}
            </a>
          ))}
        </div>
      </section>

      {/* Posts */}
      <main>
        {loading ? (
          <div className="max-w-7xl mx-auto px-6 py-16 text-center">
            <p className="text-gray-600">Loading articles...</p>
          </div>
        ) : posts.length === 0 ? (
          <EmptyState />
        ) : (
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map(post => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}
        <BlogNewsletter />
      </main>
      <BlogFooter />
    </div>
  );
}