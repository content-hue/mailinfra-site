/* empty css                                  */
import { f as createComponent, k as renderHead, l as renderComponent, r as renderTemplate } from '../chunks/astro/server_BIKnvX4a.mjs';
import 'piccolore';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { h as getFeaturedImage, g as getCategory, c as getAuthorName, d as getReadingTime, B as BlogHeader, a as BlogFooter, f as fetchPosts, b as fetchCategories } from '../chunks/BlogFooter_G1UqGiyZ.mjs';
import { A as ArticleCard, B as BlogNewsletter } from '../chunks/ArticleCard_C89wyZYm.mjs';
import { ArrowRight } from 'lucide-react';
import { S as SEOHead, W as WebsiteSchema } from '../chunks/SEOHead_CnkyzmXu.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

function FeaturedArticle({ post }) {
  if (!post) return null;
  const featuredImage = getFeaturedImage(post);
  const category = getCategory(post);
  const author = getAuthorName(post);
  const readingTime = getReadingTime(post);
  return /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16", children: /* @__PURE__ */ jsx(
    "a",
    {
      href: `/blog/${post.slug}`,
      className: "block bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow",
      children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 md:order-1", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3 sm:mb-4 w-fit", children: category }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight", children: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: post.title.rendered } }) }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg line-clamp-3", children: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: post.excerpt.rendered } }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: author }),
            /* @__PURE__ */ jsx("span", { children: "•" }),
            /* @__PURE__ */ jsx("span", { children: readingTime })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-blue-700 font-semibold text-base sm:text-lg", children: [
            "Read Article",
            /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "sm:w-5 sm:h-5" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 min-h-[250px] sm:min-h-[350px] md:min-h-[450px] flex items-center justify-center overflow-hidden order-1 md:order-2", children: featuredImage ? /* @__PURE__ */ jsx("img", { src: featuredImage, alt: post.title.rendered, className: "w-full h-full object-cover", loading: "lazy" }) : /* @__PURE__ */ jsx("div", { className: "text-blue-300 text-sm font-medium", children: "Hero Image" }) })
      ] })
    }
  ) });
}

function ArticleGrid({ posts }) {
  if (posts.length === 0) return null;
  return /* @__PURE__ */ jsx("section", { id: "articles", className: "max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: posts.map((post) => /* @__PURE__ */ jsx(ArticleCard, { post }, post.id)) }) });
}

function CategorySection({ categories }) {
  if (categories.length === 0) return null;
  return /* @__PURE__ */ jsxs("section", { id: "categories", className: "max-w-7xl mx-auto px-6 py-16", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Explore by Category" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 flex-wrap", children: categories.map((category) => /* @__PURE__ */ jsx(
      "a",
      {
        href: `/blog/category/${category.slug}`,
        className: "px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-semibold rounded-full transition-colors",
        children: category.name
      },
      category.id
    )) })
  ] });
}

function BlogIndexPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function load() {
      const [fetchedPosts, fetchedCategories] = await Promise.all([
        fetchPosts(),
        fetchCategories()
      ]);
      setPosts(fetchedPosts);
      setCategories(fetchedCategories);
      setLoading(false);
    }
    load();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", style: { fontFamily: "'Inter', system-ui, sans-serif" }, children: [
    /* @__PURE__ */ jsx(BlogHeader, {}),
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Mailinfra Blog | Infrastructure Insights for Modern Email Teams",
        description: "Deep technical guides on deliverability, SMTP, scaling cold email infrastructure, and building reliable outbound systems.",
        canonicalUrl: "https://blog.mailinfra.co/",
        ogType: "website"
      }
    ),
    /* @__PURE__ */ jsx(
      WebsiteSchema,
      {
        name: "Mailinfra Blog",
        url: "https://blog.mailinfra.co/",
        description: "Infrastructure Insights for Modern Email Teams",
        publisher: { name: "Mailinfra", logo: "https://mailinfra.co/logo.png" }
      }
    ),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-6xl font-bold text-white leading-tight mb-6", children: "The Mailinfra Blog" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl text-blue-100 font-medium mb-3", children: "Infrastructure Insights for Modern Email Teams" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-blue-200 leading-relaxed", children: "Deep technical guides on deliverability, SMTP, scaling cold email infrastructure, and building reliable outbound systems." })
      ] }) }) }),
      loading ? /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 py-16 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Loading articles..." }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(FeaturedArticle, { post: posts[0] }),
        /* @__PURE__ */ jsx(ArticleGrid, { posts: posts.slice(1) })
      ] }),
      /* @__PURE__ */ jsx(CategorySection, { categories }),
      /* @__PURE__ */ jsx(BlogNewsletter, {})
    ] }),
    /* @__PURE__ */ jsx(BlogFooter, {})
  ] });
}

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Mailinfra Blog</title>${renderHead()}</head> <body> ${renderComponent($$result, "BlogIndexPage", BlogIndexPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TAHIR KUN/mailinfra-site/src/components/blog/BlogIndexPage.tsx", "client:component-export": "default" })} </body></html>`;
}, "C:/Users/TAHIR KUN/mailinfra-site/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/TAHIR KUN/mailinfra-site/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
