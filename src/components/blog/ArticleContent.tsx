import type { WordPressPost } from '../../lib/wordpress';
import { getFeaturedImage, getAuthorName } from '../../lib/wordpress';
import { InlineCTA } from './InlineCTA';
import { AuthorBox } from './AuthorBox';
import { RelatedArticles } from './RelatedArticles';
import { TableOfContents } from './TableOfContents';

interface ArticleContentProps {
  post: WordPressPost;
  relatedPosts: WordPressPost[];
}

function removeH1Tag(html: string): string {
  return html.replace(/<h1[^>]*>.*?<\/h1>/is, '');
}

function addIdsToHeadings(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const headingElements = doc.querySelectorAll('h2, h3, h4');

  headingElements.forEach((heading, index) => {
    heading.id = `heading-${index}`;
  });

  return doc.body.innerHTML;
}

function splitContentForTOC(html: string): { beforeTOC: string; afterTOC: string } {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const body = doc.body;

  let insertIndex = -1;
  let elementCount = 0;

  for (let i = 0; i < body.children.length; i++) {
    const child = body.children[i];
    const tagName = child.tagName.toLowerCase();

    if (tagName === 'p') {
      elementCount++;
      if (elementCount === 1) {
        insertIndex = i + 1;
        break;
      }
    }
  }

  if (insertIndex === -1 || insertIndex >= body.children.length) {
    return { beforeTOC: html, afterTOC: '' };
  }

  const beforeElements = Array.from(body.children).slice(0, insertIndex);
  const afterElements = Array.from(body.children).slice(insertIndex);

  const beforeHTML = beforeElements.map(el => el.outerHTML).join('');
  const afterHTML = afterElements.map(el => el.outerHTML).join('');

  return { beforeTOC: beforeHTML, afterTOC: afterHTML };
}

export function ArticleContent({ post, relatedPosts }: ArticleContentProps) {
  const featuredImage = getFeaturedImage(post);
  const author = getAuthorName(post);
  const contentWithoutH1 = removeH1Tag(post.content.rendered);
  const contentWithIds = addIdsToHeadings(contentWithoutH1);
  const { beforeTOC, afterTOC } = splitContentForTOC(contentWithIds);

  return (
    <>
      {featuredImage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-16">
          <div className="max-w-[720px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            <img src={featuredImage} alt={post.title.rendered} className="w-full h-auto" loading="eager" />
          </div>
        </div>
      )}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="max-w-[720px]">
          <div className="wp-content prose-custom" dangerouslySetInnerHTML={{ __html: beforeTOC }} />

          <div className="my-12">
            <TableOfContents content={contentWithIds} />
          </div>

          <div className="wp-content prose-custom" dangerouslySetInnerHTML={{ __html: afterTOC }} />

          <InlineCTA />

          <AuthorBox post={post} author={author} />

          <RelatedArticles posts={relatedPosts} />
        </div>
      </article>
    </>
  );
}
