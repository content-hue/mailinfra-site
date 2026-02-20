/* empty css                                        */
import { e as createAstro, f as createComponent, k as renderHead, l as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_BIKnvX4a.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { B as BlogHeader, a as BlogFooter, f as fetchPosts, b as fetchCategories, g as getCategory } from '../../../chunks/BlogFooter_G1UqGiyZ.mjs';
import { A as ArticleCard, B as BlogNewsletter } from '../../../chunks/ArticleCard_C89wyZYm.mjs';
import { Mail, ArrowRight } from 'lucide-react';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

function EmptyState() {
  return /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-6 py-32 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(Mail, { className: "text-blue-600", size: 32 }) }),
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: "Articles coming soon." }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-8", children: "We're working on new content. Check back soon for technical insights and infrastructure guides." }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "/blog",
        className: "inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors",
        children: [
          "View All Articles ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
        ]
      }
    )
  ] }) });
}

function CategoryPage({ slug }) {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function load() {
      const [allPosts, allCategories] = await Promise.all([
        fetchPosts(),
        fetchCategories()
      ]);
      const matchedCategory = allCategories.find((c) => c.slug === slug) || null;
      const filteredPosts = allPosts.filter((p) => getCategory(p).toLowerCase() === (matchedCategory?.name.toLowerCase() || slug));
      setCategory(matchedCategory);
      setCategories(allCategories);
      setPosts(filteredPosts);
      setLoading(false);
    }
    load();
  }, [slug]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", style: { fontFamily: "'Inter', system-ui, sans-serif" }, children: [
    /* @__PURE__ */ jsx(BlogHeader, {}),
    /* @__PURE__ */ jsx("section", { className: "relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center px-4 py-1.5 bg-blue-700 bg-opacity-60 text-blue-100 text-xs font-semibold rounded-full mb-4 uppercase tracking-wide", children: "Category" }),
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-white leading-tight mb-4", children: category?.name || slug }),
      category?.description && /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 leading-relaxed", children: category.description })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-6 py-8 border-b border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/blog",
          className: "px-6 py-3 text-sm font-semibold rounded-full bg-blue-100 hover:bg-blue-200 text-blue-800 transition-colors",
          children: "All Posts"
        }
      ),
      categories.map((cat) => /* @__PURE__ */ jsx(
        "a",
        {
          href: `/blog/category/${cat.slug}`,
          className: `px-6 py-3 text-sm font-semibold rounded-full transition-colors ${cat.slug === slug ? "bg-blue-700 text-white" : "bg-blue-100 hover:bg-blue-200 text-blue-800"}`,
          children: cat.name
        },
        cat.id
      ))
    ] }) }),
    /* @__PURE__ */ jsxs("main", { children: [
      loading ? /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 py-16 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Loading articles..." }) }) : posts.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {}) : /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-6 py-16", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: posts.map((post) => /* @__PURE__ */ jsx(ArticleCard, { post }, post.id)) }) }),
      /* @__PURE__ */ jsx(BlogNewsletter, {})
    ] }),
    /* @__PURE__ */ jsx(BlogFooter, {})
  ] });
}

const $$Astro = createAstro("https://mailinfra.co");
const prerender = false;
async function getStaticPaths() {
  const response = await fetch("https://cms.mailinfra.co/wp-json/wp/v2/categories");
  const categories = await response.json();
  return categories.filter((cat) => cat.slug !== "uncategorized").map((cat) => ({
    params: { slug: cat.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Mailinfra Blog</title>${renderHead()}</head> <body> ${renderComponent($$result, "CategoryPage", CategoryPage, { "client:load": true, "slug": slug, "client:component-hydration": "load", "client:component-path": "C:/Users/TAHIR KUN/mailinfra-site/src/components/blog/CategoryPage.tsx", "client:component-export": "CategoryPage" })} </body></html>`;
}, "C:/Users/TAHIR KUN/mailinfra-site/src/pages/blog/category/[slug].astro", void 0);

const $$file = "C:/Users/TAHIR KUN/mailinfra-site/src/pages/blog/category/[slug].astro";
const $$url = "/blog/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
