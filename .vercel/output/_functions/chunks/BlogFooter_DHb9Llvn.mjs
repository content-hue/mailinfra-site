import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';

function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 border-b border-white border-opacity-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co", className: "text-xl sm:text-2xl font-bold text-white hover:opacity-90 transition-opacity", children: "Mailinfra" }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-6 lg:gap-10", children: [
        /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/#features", className: "text-sm font-medium text-white hover:text-gray-100 transition-colors", children: "Features" }),
        /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/#pricing", className: "text-sm font-medium text-white hover:text-gray-100 transition-colors", children: "Pricing" }),
        /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-sm font-medium text-white hover:text-gray-100 transition-colors", children: "Blog" }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://mailinfra.co/trial",
            className: "px-4 lg:px-6 py-2 lg:py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-lg",
            children: "Start Free Trial →"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsMenuOpen(!isMenuOpen),
          className: "md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors",
          "aria-label": "Toggle menu",
          children: isMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
        }
      )
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden bg-blue-800 border-t border-white/10", children: /* @__PURE__ */ jsxs("nav", { className: "px-4 py-4 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/#features", className: "text-sm font-medium text-white hover:text-gray-100 transition-colors py-2", children: "Features" }),
      /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/#pricing", className: "text-sm font-medium text-white hover:text-gray-100 transition-colors py-2", children: "Pricing" }),
      /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-sm font-medium text-white hover:text-gray-100 transition-colors py-2", children: "Blog" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://mailinfra.co/trial",
          className: "px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-semibold rounded-lg transition-all shadow-md text-center",
          children: "Start Free Trial →"
        }
      )
    ] }) })
  ] });
}

function BlogFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#071326] mt-16 sm:mt-20 md:mt-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4", children: "Mailinfra" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-gray-400 leading-relaxed", children: [
          "Email infrastructure built for modern businesses.",
          /* @__PURE__ */ jsx("br", {}),
          "Send now, pay later."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm sm:text-base font-semibold text-white mb-4 sm:mb-5", children: "Product" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 sm:space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/#features", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Features" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/#pricing", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Pricing" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm sm:text-base font-semibold text-white mb-4 sm:mb-5", children: "Resources" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 sm:space-y-3", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Blog" }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm sm:text-base font-semibold text-white mb-4 sm:mb-5", children: "Company" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 sm:space-y-3", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/contact", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Contact" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-gray-500 text-center md:text-left", children: "© 2026 Mailinfra. All rights reserved." }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8", children: [
        { label: "Google Workspace", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "SOC 2 Certified", d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
        { label: "GDPR Compliant", d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
      ].map(({ label, d }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 sm:w-4 sm:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d }) }),
        /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap", children: label })
      ] }, label)) })
    ] })
  ] }) });
}

export { BlogHeader as B, BlogFooter as a };
