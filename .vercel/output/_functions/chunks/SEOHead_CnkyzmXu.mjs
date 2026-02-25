import { useEffect } from 'react';

function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = "website",
  article
}) {
  useEffect(() => {
    document.title = title;
    setMetaTag("description", description);
    setMetaTag("og:title", title, "property");
    setMetaTag("og:description", description, "property");
    setMetaTag("og:url", canonicalUrl, "property");
    setMetaTag("og:type", ogType, "property");
    if (ogImage) {
      setMetaTag("og:image", ogImage, "property");
      setMetaTag("og:image:width", "1200", "property");
      setMetaTag("og:image:height", "630", "property");
    }
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    if (ogImage) setMetaTag("twitter:image", ogImage);
    if (article && ogType === "article") {
      if (article.publishedTime) setMetaTag("article:published_time", article.publishedTime, "property");
      if (article.modifiedTime) setMetaTag("article:modified_time", article.modifiedTime, "property");
      if (article.author) setMetaTag("article:author", article.author, "property");
      if (article.section) setMetaTag("article:section", article.section, "property");
    }
    setLinkTag("canonical", canonicalUrl);
  }, [title, description, canonicalUrl, ogImage, ogType, article]);
  return null;
}
function setMetaTag(name, content, attribute = "name") {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}
function setLinkTag(rel, href) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}
function ArticleSchema({ headline, description, image, datePublished, dateModified, author, publisher, url }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image ? [image] : void 0,
    datePublished,
    dateModified,
    author: { "@type": "Person", name: author.name, url: author.url },
    publisher: { "@type": "Organization", name: publisher.name, logo: { "@type": "ImageObject", url: publisher.logo } },
    mainEntityOfPage: { "@type": "WebPage", "@id": url }
  };
  useEffect(() => {
    let el = document.querySelector('script[type="application/ld+json"]');
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
    return () => {
      if (el?.parentNode) el.parentNode.removeChild(el);
    };
  }, []);
  return null;
}
function WebsiteSchema({ name, url, description, publisher }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    publisher: { "@type": "Organization", name: publisher.name, logo: { "@type": "ImageObject", url: publisher.logo } }
  };
  useEffect(() => {
    let el = document.querySelector('script[type="application/ld+json"]');
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
    return () => {
      if (el?.parentNode) el.parentNode.removeChild(el);
    };
  }, []);
  return null;
}

export { ArticleSchema as A, SEOHead as S, WebsiteSchema as W };
