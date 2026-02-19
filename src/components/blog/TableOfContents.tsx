import { useState, useEffect, useRef } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headingElements = doc.querySelectorAll('h2, h3, h4');

    const extractedHeadings: Heading[] = Array.from(headingElements).map((heading, index) => {
      const text = heading.textContent || '';
      const id = heading.id || `heading-${index}`;
      const level = parseInt(heading.tagName.substring(1));
      return { id, text, level };
    });

    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
      <div className="text-sm font-semibold text-gray-900 mb-4">On this page</div>
      <ul className="space-y-2 border-l-2 border-gray-200">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`block w-full text-left px-4 py-1 transition-colors ${
                activeId === id
                  ? 'text-yellow-600 border-l-2 border-yellow-600 -ml-[2px] font-medium'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{ paddingLeft: `${(level - 2) * 0.75 + 1}rem` }}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}