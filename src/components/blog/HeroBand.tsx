import { User, Clock, Calendar } from 'lucide-react';
import type { WordPressPost } from '../../lib/wordpress';
import { getCategory, getAuthorName, getReadingTime, getLastUpdated } from '../../lib/wordpress';

interface HeroBandProps {
  post: WordPressPost;
}

export function HeroBand({ post }: HeroBandProps) {
  const category = getCategory(post);
  const author = getAuthorName(post);
  const readingTime = getReadingTime(post);
  const lastUpdated = getLastUpdated(post);

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16 pb-8 sm:pb-10 md:pb-12">
        <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-700 bg-opacity-60 text-blue-100 text-[10px] sm:text-xs font-semibold rounded-full mb-4 sm:mb-6 uppercase">
          {category}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-4 sm:mb-6 max-w-3xl">
          <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </h1>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-blue-100">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <User size={14} className="sm:w-4 sm:h-4" />
            <span className="font-medium">By {author}</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Clock size={14} className="sm:w-4 sm:h-4" />
            <span>{readingTime}</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Calendar size={14} className="sm:w-4 sm:h-4" />
            <span>Updated {lastUpdated}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
