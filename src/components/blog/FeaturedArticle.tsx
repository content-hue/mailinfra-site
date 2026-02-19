import { ArrowRight } from 'lucide-react';
import type { WordPressPost } from '../../lib/wordpress';
import { getAuthorName, getReadingTime, getCategory, getFeaturedImage } from '../../lib/wordpress';

interface FeaturedArticleProps {
  post?: WordPressPost;
}

export function FeaturedArticle({ post }: FeaturedArticleProps) {
  if (!post) return null;

  const featuredImage = getFeaturedImage(post);
  const category = getCategory(post);
  const author = getAuthorName(post);
  const readingTime = getReadingTime(post);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <a
        href={`/blog/${post.slug}`}
        className="block bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 md:order-1">
            <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3 sm:mb-4 w-fit">
              {category}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </h2>
            <div className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg line-clamp-3">
              <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
              <span className="font-medium">{author}</span>
              <span>•</span>
              <span>{readingTime}</span>
            </div>
            <span className="inline-flex items-center gap-2 text-blue-700 font-semibold text-base sm:text-lg">
              Read Article
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </span>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-[250px] sm:min-h-[350px] md:min-h-[450px] flex items-center justify-center overflow-hidden order-1 md:order-2">
            {featuredImage ? (
              <img src={featuredImage} alt={post.title.rendered} className="w-full h-full object-cover" loading="lazy" />
            ) : (
              <div className="text-blue-300 text-sm font-medium">Hero Image</div>
            )}
          </div>
        </div>
      </a>
    </section>
  );
}
