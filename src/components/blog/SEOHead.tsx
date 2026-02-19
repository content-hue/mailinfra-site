import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
}

export function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  article
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    setMetaTag('description', description);
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:url', canonicalUrl, 'property');
    setMetaTag('og:type', ogType, 'property');
    if (ogImage) {
      setMetaTag('og:image', ogImage, 'property');
      setMetaTag('og:image:width', '1200', 'property');
      setMetaTag('og:image:height', '630', 'property');
    }
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    if (ogImage) setMetaTag('twitter:image', ogImage);
    if (article && ogType === 'article') {
      if (article.publishedTime) setMetaTag('article:published_time', article.publishedTime, 'property');
      if (article.modifiedTime) setMetaTag('article:modified_time', article.modifiedTime, 'property');
      if (article.author) setMetaTag('article:author', article.author, 'property');
      if (article.section) setMetaTag('article:section', article.section, 'property');
    }
    setLinkTag('canonical', canonicalUrl);
  }, [title, description, canonicalUrl, ogImage, ogType, article]);

  return null;
}

function setMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

export function ArticleSchema({ headline, description, image, datePublished, dateModified, author, publisher, url }: {
  headline: string; description: string; image?: string; datePublished: string;
  dateModified: string; author: { name: string; url?: string };
  publisher: { name: string; logo: string }; url: string;
}) {
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline, description, image: image ? [image] : undefined,
    datePublished, dateModified,
    author: { '@type': 'Person', name: author.name, url: author.url },
    publisher: { '@type': 'Organization', name: publisher.name, logo: { '@type': 'ImageObject', url: publisher.logo } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };
  useEffect(() => {
    let el = document.querySelector('script[type="application/ld+json"]');
    if (!el) { el = document.createElement('script'); (el as HTMLScriptElement).type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = JSON.stringify(schema);
    return () => { if (el?.parentNode) el.parentNode.removeChild(el); };
  }, []);
  return null;
}

export function WebsiteSchema({ name, url, description, publisher }: {
  name: string; url: string; description: string; publisher: { name: string; logo: string };
}) {
  const schema = {
    '@context': 'https://schema.org', '@type': 'WebSite',
    name, url, description,
    publisher: { '@type': 'Organization', name: publisher.name, logo: { '@type': 'ImageObject', url: publisher.logo } }
  };
  useEffect(() => {
    let el = document.querySelector('script[type="application/ld+json"]');
    if (!el) { el = document.createElement('script'); (el as HTMLScriptElement).type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = JSON.stringify(schema);
    return () => { if (el?.parentNode) el.parentNode.removeChild(el); };
  }, []);
  return null;
}