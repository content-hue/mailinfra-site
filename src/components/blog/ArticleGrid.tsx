import type { WordPressPost } from '../../lib/wordpress';
import { ArticleCard } from './ArticleCard';

interface ArticleGridProps {
  posts: WordPressPost[];
}

export function ArticleGrid({ posts }: ArticleGridProps) {
  if (posts.length === 0) return null;

  return (
    <section id="articles" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
