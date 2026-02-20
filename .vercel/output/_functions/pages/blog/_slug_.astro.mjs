/* empty css                                     */
import { e as createAstro, f as createComponent, k as renderHead, l as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BIKnvX4a.mjs';
import 'piccolore';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { g as getCategory, c as getAuthorName, d as getReadingTime, e as getLastUpdated, h as getFeaturedImage, B as BlogHeader, a as BlogFooter, i as fetchPostBySlug, f as fetchPosts } from '../../chunks/BlogFooter_G1UqGiyZ.mjs';
import { User, Clock, Calendar, ArrowRight } from 'lucide-react';
import { S as SEOHead, A as ArticleSchema } from '../../chunks/SEOHead_CnkyzmXu.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

function HeroBand({ post }) {
  const category = getCategory(post);
  const author = getAuthorName(post);
  const readingTime = getReadingTime(post);
  const lastUpdated = getLastUpdated(post);
  return /* @__PURE__ */ jsx("section", { className: "relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16 pb-8 sm:pb-10 md:pb-12", children: [
    /* @__PURE__ */ jsx("div", { className: "inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-700 bg-opacity-60 text-blue-100 text-[10px] sm:text-xs font-semibold rounded-full mb-4 sm:mb-6 uppercase", children: category }),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-4 sm:mb-6 max-w-3xl", children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: post.title.rendered } }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-blue-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
        /* @__PURE__ */ jsx(User, { size: 14, className: "sm:w-4 sm:h-4" }),
        /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
          "By ",
          author
        ] })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "•" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
        /* @__PURE__ */ jsx(Clock, { size: 14, className: "sm:w-4 sm:h-4" }),
        /* @__PURE__ */ jsx("span", { children: readingTime })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "•" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
        /* @__PURE__ */ jsx(Calendar, { size: 14, className: "sm:w-4 sm:h-4" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Updated ",
          lastUpdated
        ] })
      ] })
    ] })
  ] }) });
}

function InlineCTA() {
  return /* @__PURE__ */ jsx("div", { className: "my-16 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-block bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl px-10 py-8 shadow-md", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[19px] text-gray-900 font-medium mb-4", children: "Building outbound infrastructure that actually lands in inboxes?" }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://mailinfra.co/trial",
        className: "inline-flex items-center gap-2 px-8 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all shadow-md hover:shadow-lg",
        children: [
          "Try Mailinfra ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
        ]
      }
    )
  ] }) });
}

function AuthorBox({ post, author }) {
  const authorData = post._embedded?.author?.[0];
  const authorInitial = author.charAt(0).toUpperCase();
  const authorAvatar = authorData?.avatar_urls?.[96];
  const authorBio = authorData?.description || `${author} writes about email infrastructure and deliverability at Mailinfra.`;
  return /* @__PURE__ */ jsx("div", { className: "mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t-2 border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 sm:gap-6 items-start", children: [
    authorAvatar ? /* @__PURE__ */ jsx("img", { src: authorAvatar, alt: author, className: "w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0" }) : /* @__PURE__ */ jsx("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0", children: authorInitial }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-lg sm:text-xl font-bold text-gray-900 mb-1", children: author }),
      /* @__PURE__ */ jsx("div", { className: "text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3", children: "Author at Mailinfra" }),
      /* @__PURE__ */ jsx("div", { className: "text-[15px] sm:text-[17px] leading-[1.7] text-gray-700", dangerouslySetInnerHTML: { __html: authorBio } })
    ] })
  ] }) });
}

function RelatedArticles({ posts }) {
  if (posts.length === 0) return null;
  return /* @__PURE__ */ jsxs("section", { className: "mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t-2 border-gray-200", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8", children: "Related Articles" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6", children: posts.map((post) => {
      const category = getCategory(post);
      const readingTime = getReadingTime(post);
      return /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/blog/${post.slug}`,
          className: "group bg-white border-2 border-gray-200 rounded-xl p-5 sm:p-6 hover:border-blue-300 hover:shadow-md transition-all",
          children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3", children: category }),
            /* @__PURE__ */ jsx("h4", { className: "text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-snug group-hover:text-blue-700 transition-colors", children: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: post.title.rendered } }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-gray-600", children: readingTime })
          ]
        },
        post.id
      );
    }) })
  ] });
}

function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef(null);
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headingElements = doc.querySelectorAll("h2, h3, h4");
    const extractedHeadings = Array.from(headingElements).map((heading, index) => {
      const text = heading.textContent || "";
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
      { rootMargin: "-80px 0px -80% 0px" }
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
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  if (headings.length === 0) return null;
  return /* @__PURE__ */ jsxs("nav", { className: "bg-gray-50 border border-gray-200 rounded-lg p-6 my-8", children: [
    /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-gray-900 mb-4", children: "On this page" }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-2 border-l-2 border-gray-200", children: headings.map(({ id, text, level }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => handleClick(id),
        className: `block w-full text-left px-4 py-1 transition-colors ${activeId === id ? "text-yellow-600 border-l-2 border-yellow-600 -ml-[2px] font-medium" : "text-gray-600 hover:text-gray-900"}`,
        style: { paddingLeft: `${(level - 2) * 0.75 + 1}rem` },
        children: text
      }
    ) }, id)) })
  ] });
}

function removeH1Tag(html) {
  return html.replace(/<h1[^>]*>.*?<\/h1>/is, "");
}
function addIdsToHeadings(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const headingElements = doc.querySelectorAll("h2, h3, h4");
  headingElements.forEach((heading, index) => {
    heading.id = `heading-${index}`;
  });
  return doc.body.innerHTML;
}
function splitContentForTOC(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const body = doc.body;
  let insertIndex = -1;
  let elementCount = 0;
  for (let i = 0; i < body.children.length; i++) {
    const child = body.children[i];
    const tagName = child.tagName.toLowerCase();
    if (tagName === "p") {
      elementCount++;
      if (elementCount === 1) {
        insertIndex = i + 1;
        break;
      }
    }
  }
  if (insertIndex === -1 || insertIndex >= body.children.length) {
    return { beforeTOC: html, afterTOC: "" };
  }
  const beforeElements = Array.from(body.children).slice(0, insertIndex);
  const afterElements = Array.from(body.children).slice(insertIndex);
  const beforeHTML = beforeElements.map((el) => el.outerHTML).join("");
  const afterHTML = afterElements.map((el) => el.outerHTML).join("");
  return { beforeTOC: beforeHTML, afterTOC: afterHTML };
}
function ArticleContent({ post, relatedPosts }) {
  const featuredImage = getFeaturedImage(post);
  const author = getAuthorName(post);
  const contentWithoutH1 = removeH1Tag(post.content.rendered);
  const contentWithIds = addIdsToHeadings(contentWithoutH1);
  const { beforeTOC, afterTOC } = splitContentForTOC(contentWithIds);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    featuredImage && /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-[720px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg", children: /* @__PURE__ */ jsx("img", { src: featuredImage, alt: post.title.rendered, className: "w-full h-auto", loading: "eager" }) }) }),
    /* @__PURE__ */ jsx("article", { className: "max-w-4xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[720px]", children: [
      /* @__PURE__ */ jsx("div", { className: "wp-content prose-custom", dangerouslySetInnerHTML: { __html: beforeTOC } }),
      /* @__PURE__ */ jsx("div", { className: "my-12", children: /* @__PURE__ */ jsx(TableOfContents, { content: contentWithIds }) }),
      /* @__PURE__ */ jsx("div", { className: "wp-content prose-custom", dangerouslySetInnerHTML: { __html: afterTOC } }),
      /* @__PURE__ */ jsx(InlineCTA, {}),
      /* @__PURE__ */ jsx(AuthorBox, { post, author }),
      /* @__PURE__ */ jsx(RelatedArticles, { posts: relatedPosts })
    ] }) })
  ] });
}

function PreFooterCTA() {
  return /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 mt-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6 leading-tight", children: "Infrastructure That Delivers — Before You Pay." }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto", children: "Start sending with production-grade email infrastructure. No upfront costs, no credit card required." }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://mailinfra.co/trial",
        className: "inline-flex items-center gap-2 px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all shadow-lg hover:shadow-xl text-lg",
        children: [
          "Start Free Trial ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
        ]
      }
    )
  ] }) });
}

function BlogPostPageComponent({ slug }) {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(total > 0 ? window.scrollY / total * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!slug) return;
    window.scrollTo(0, 0);
    async function load() {
      const fetchedPost = await fetchPostBySlug(slug);
      if (!fetchedPost) {
        setLoading(false);
        return;
      }
      setPost(fetchedPost);
      const all = await fetchPosts();
      setRelatedPosts(all.filter((p) => p.id !== fetchedPost.id).slice(0, 3));
      setLoading(false);
    }
    load();
  }, [slug]);
  if (loading) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { fontFamily: "'Inter', system-ui, sans-serif" }, children: [
      /* @__PURE__ */ jsx(BlogHeader, {}),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-32", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Loading article..." }) })
    ] });
  }
  if (!post) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { fontFamily: "'Inter', system-ui, sans-serif" }, children: [
      /* @__PURE__ */ jsx(BlogHeader, {}),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-32 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Article not found." }),
        /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-blue-700 underline", children: "← Back to blog" })
      ] })
    ] });
  }
  const seoTitle = `${post.title.rendered.replace(/<[^>]*>/g, "")} | Mailinfra Blog`;
  const seoDescription = post.acf?.seo_description || post.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 160);
  const canonicalUrl = `https://blog.mailinfra.co/${post.slug}`;
  const featuredImage = getFeaturedImage(post);
  const author = getAuthorName(post);
  const category = getCategory(post);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { fontFamily: "'Inter', system-ui, sans-serif" }, children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: seoTitle,
        description: seoDescription,
        canonicalUrl,
        ogImage: featuredImage || void 0,
        ogType: "article",
        article: {
          publishedTime: post.date,
          modifiedTime: post.modified,
          author,
          section: category
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ArticleSchema,
      {
        headline: post.title.rendered.replace(/<[^>]*>/g, ""),
        description: seoDescription,
        image: featuredImage || void 0,
        datePublished: post.date,
        dateModified: post.modified,
        author: {
          name: author,
          url: `https://blog.mailinfra.co/author/${author.toLowerCase().replace(/\s+/g, "-")}`
        },
        publisher: {
          name: "Mailinfra",
          logo: "https://mailinfra.co/logo.png"
        },
        url: canonicalUrl
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed top-0 left-0 h-1 bg-yellow-400 z-50 transition-all duration-100",
        style: { width: `${scrollProgress}%` }
      }
    ),
    /* @__PURE__ */ jsx(BlogHeader, {}),
    /* @__PURE__ */ jsx(HeroBand, { post }),
    /* @__PURE__ */ jsx("main", { className: "bg-white", children: /* @__PURE__ */ jsx(ArticleContent, { post, relatedPosts }) }),
    /* @__PURE__ */ jsx(PreFooterCTA, {}),
    /* @__PURE__ */ jsx(BlogFooter, {})
  ] });
}

const $$Astro = createAstro("https://mailinfra.co");
const prerender = false;
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Mailinfra Blog</title>${renderHead()}</head> <body> ${renderComponent($$result, "BlogPostPageComponent", BlogPostPageComponent, { "client:load": true, "slug": slug, "client:component-hydration": "load", "client:component-path": "C:/Users/TAHIR KUN/mailinfra-site/src/components/blog/BlogPostPageComponent.tsx", "client:component-export": "default" })} </body></html>`;
}, "C:/Users/TAHIR KUN/mailinfra-site/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/TAHIR KUN/mailinfra-site/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
