import type { WordPressPost } from '../../lib/wordpress';
import { getCategory, getReadingTime } from '../../lib/wordpress';

interface RelatedArticlesProps {
  posts: WordPressPost[];
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t-2 border-gray-200">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Related Articles</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {posts.map((post) => {
          const category = getCategory(post);
          const readingTime = getReadingTime(post);

          return (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white border-2 border-gray-200 rounded-xl p-5 sm:p-6 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                {category}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">{readingTime}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
