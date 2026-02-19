import type { WordPressPost } from '../../lib/wordpress';
import { getAuthorName, getReadingTime, getCategory, getFeaturedImage } from '../../lib/wordpress';

interface ArticleCardProps {
  post: WordPressPost;
}

export function ArticleCard({ post }: ArticleCardProps) {
  const featuredImage = getFeaturedImage(post);
  const category = getCategory(post);
  const author = getAuthorName(post);
  const readingTime = getReadingTime(post);

  return (
    <a
      href={`/blog/${post.slug}`}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden block"
    >
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-48 flex items-center justify-center overflow-hidden">
        {featuredImage ? (
          <img src={featuredImage} alt={post.title.rendered} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="text-blue-300 text-sm font-medium">Article Image</div>
        )}
      </div>
      <div className="p-6">
        <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
          {category}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </h3>
        <div className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="font-medium">{author}</span>
          <span>•</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </a>
  );
}
