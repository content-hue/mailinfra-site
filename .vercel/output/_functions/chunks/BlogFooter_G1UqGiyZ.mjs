import { jsx, jsxs } from 'react/jsx-runtime';

const WP_API_URL = "https://cms.mailinfra.co/wp-json/wp/v2/posts?_embed";
const WP_CATEGORIES_URL = "https://cms.mailinfra.co/wp-json/wp/v2/categories";
const WP_MEDIA_URL = "https://cms.mailinfra.co/wp-json/wp/v2/media";
async function fetchPosts() {
  try {
    const response = await fetch(WP_API_URL);
    if (!response.ok) throw new Error(`Failed: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
async function fetchPostBySlug(slug) {
  try {
    const response = await fetch(
      `https://cms.mailinfra.co/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );
    if (!response.ok) throw new Error(`Failed: ${response.statusText}`);
    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Error fetching post "${slug}":`, error);
    return null;
  }
}
async function fetchCategories() {
  try {
    const response = await fetch(WP_CATEGORIES_URL);
    if (!response.ok) throw new Error(`Failed: ${response.statusText}`);
    const cats = await response.json();
    return cats.filter((c) => c.slug !== "uncategorized");
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
function getAuthorName(post) {
  return post.acf?.author_name || post._embedded?.author?.[0]?.name || "Mailinfra Team";
}
function getReadingTime(post) {
  if (post.acf?.reading_time) return post.acf.reading_time;
  const text = post.content.rendered.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}
function getLastUpdated(post) {
  if (post.acf?.last_updated) return post.acf.last_updated;
  return new Date(post.modified).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
function getCategory(post) {
  return post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General";
}
function getFeaturedImage(post) {
  if (post.acf?.featured_image_url) {
    return post.acf.featured_image_url;
  }
  const embedded = post._embedded?.["wp:featuredmedia"]?.[0];
  if (embedded && embedded.source_url && !embedded.code) {
    return embedded.source_url;
  }
  if (post.featured_media && post.featured_media > 0) {
    return `${WP_MEDIA_URL}/${post.featured_media}`;
  }
  return null;
}

function BlogHeader() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 border-b border-white border-opacity-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-12 py-5 flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co", className: "text-2xl font-bold text-white hover:opacity-90 transition-opacity", children: "Mailinfra" }),
    /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-10", children: [
      /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/#features", className: "text-sm font-medium text-white hover:text-gray-100 transition-colors", children: "Features" }),
      /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/#pricing", className: "text-sm font-medium text-white hover:text-gray-100 transition-colors", children: "Pricing" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://mailinfra.co/trial",
          className: "px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all shadow-md hover:shadow-lg",
          children: "Start Free Trial →"
        }
      )
    ] })
  ] }) });
}

function BlogFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#071326] mt-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-12 pt-20 pb-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-16 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white mb-4", children: "Mailinfra" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-400 leading-relaxed", children: [
          "Email infrastructure built for modern businesses.",
          /* @__PURE__ */ jsx("br", {}),
          "Send now, pay later."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-5", children: "Product" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/#features", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "Features" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/#pricing", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "Pricing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/docs", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "Documentation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/api", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "API Reference" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-5", children: "Resources" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "Blog" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "Guides" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "Case Studies" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "Support" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-5", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/about", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/contact", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "Contact" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/terms", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "Terms of Service" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/privacy", className: "text-sm text-gray-400 hover:text-white transition-colors", children: "Privacy Policy" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "© 2026 Mailinfra. All rights reserved." }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-8", children: [
        { label: "Google Workspace", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "SOC 2 Certified", d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
        { label: "GDPR Compliant", d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
      ].map(({ label, d }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-500", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d }) }),
        label
      ] }, label)) })
    ] })
  ] }) });
}

export { BlogHeader as B, BlogFooter as a, fetchCategories as b, getAuthorName as c, getReadingTime as d, getLastUpdated as e, fetchPosts as f, getCategory as g, getFeaturedImage as h, fetchPostBySlug as i };
