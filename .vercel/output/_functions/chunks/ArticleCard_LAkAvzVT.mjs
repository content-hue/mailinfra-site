import { jsx, jsxs } from 'react/jsx-runtime';
import { Mail } from 'lucide-react';
import { e as getFeaturedImage, g as getCategory, b as getAuthorName, c as getReadingTime } from './wordpress_BmtZBlD7.mjs';

function BlogNewsletter() {
  return /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16", children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4 sm:mb-6", children: /* @__PURE__ */ jsx(Mail, { className: "text-yellow-400", size: 36 }) }),
    /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4", children: "Get Infrastructure Insights Before Everyone Else" }),
    /* @__PURE__ */ jsx("p", { className: "text-blue-100 mb-6 sm:mb-8 text-base sm:text-lg", children: "Technical deep dives, case studies, and best practices delivered to your inbox. No spam, ever." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          placeholder: "your@email.com",
          className: "flex-1 px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg border-2 border-blue-600 focus:outline-none focus:border-blue-400 transition-colors text-sm bg-white"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "px-6 sm:px-8 py-3 sm:py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm sm:text-base font-bold rounded-lg transition-colors whitespace-nowrap",
          children: "Subscribe"
        }
      )
    ] })
  ] }) }) });
}

function ArticleCard({ post }) {
  const featuredImage = getFeaturedImage(post);
  const category = getCategory(post);
  const author = getAuthorName(post);
  const readingTime = getReadingTime(post);
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: `/blog/${post.slug}`,
      className: "bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden block",
      children: [
        /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 h-48 flex items-center justify-center overflow-hidden", children: featuredImage ? /* @__PURE__ */ jsx("img", { src: featuredImage, alt: post.title.rendered, className: "w-full h-full object-cover", loading: "lazy" }) : /* @__PURE__ */ jsx("div", { className: "text-blue-300 text-sm font-medium", children: "Article Image" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3", children: category }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors", children: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: post.title.rendered } }) }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3", children: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: post.excerpt.rendered } }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-500", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: author }),
            /* @__PURE__ */ jsx("span", { children: "•" }),
            /* @__PURE__ */ jsx("span", { children: readingTime })
          ] })
        ] })
      ]
    }
  );
}

export { ArticleCard as A, BlogNewsletter as B };
