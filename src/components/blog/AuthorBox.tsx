import type { WordPressPost } from '../../lib/wordpress';

interface AuthorBoxProps {
  post: WordPressPost;
  author: string;
}

export function AuthorBox({ post, author }: AuthorBoxProps) {
  const authorData = post._embedded?.author?.[0];
  const authorInitial = author.charAt(0).toUpperCase();
  const authorAvatar = authorData?.avatar_urls?.[96];
  const authorBio = authorData?.description || `${author} writes about email infrastructure and deliverability at Mailinfra.`;

  return (
    <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t-2 border-gray-200">
      <div className="flex gap-4 sm:gap-6 items-start">
        {authorAvatar ? (
          <img src={authorAvatar} alt={author} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0" />
        ) : (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0">
            {authorInitial}
          </div>
        )}
        <div>
          <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{author}</div>
          <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Author at Mailinfra</div>
          <div className="text-[15px] sm:text-[17px] leading-[1.7] text-gray-700" dangerouslySetInnerHTML={{ __html: authorBio }} />
        </div>
      </div>
    </div>
  );
}
