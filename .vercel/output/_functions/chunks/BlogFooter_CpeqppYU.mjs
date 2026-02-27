import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, Menu } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 min-h-[44px]",
  {
    variants: {
      variant: {
        default: "bg-[#0000FF] text-white hover:bg-[#0000CC] hover:-translate-y-0.5 shadow-md hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-[#E5E7EB] bg-white text-[#1A1A1A] hover:border-[#0000FF] hover:text-[#0000FF]",
        "outline-light": "border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[#0000FF] underline-offset-4 hover:underline",
        cta: "bg-[#FFD700] text-[#1A1A1A] font-bold hover:bg-[#FFC700] hover:-translate-y-1 shadow-[0_4px_12px_rgba(255,215,0,0.4)] hover:shadow-[0_8px_24px_rgba(255,215,0,0.5)]"
      },
      size: {
        default: "h-11 md:h-10 px-5 md:px-6 py-2",
        sm: "h-10 md:h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-6 md:px-8",
        xl: "h-12 md:h-14 rounded-xl px-8 md:px-10 text-base md:text-lg",
        "2xl": "h-14 md:h-16 rounded-xl md:rounded-2xl px-8 md:px-12 text-base md:text-xl",
        icon: "h-11 w-11 md:h-10 md:w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "/blog" }
  ];
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.5, delay: 0.2 },
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-14 md:h-16 lg:h-20", children: [
          /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2 md:gap-3 group", children: [
            /* @__PURE__ */ jsx(Mail, { className: `w-6 h-6 md:w-8 md:h-8 ${isScrolled ? "text-[#0000FF]" : "text-white"} group-hover:scale-110 transition-transform`, strokeWidth: 2 }),
            /* @__PURE__ */ jsx("span", { className: `text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`, children: "Mailinfra" })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-6 lg:gap-8", children: navItems.map((item) => /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              className: `font-medium transition-colors text-sm lg:text-base ${isScrolled ? "text-[#6B7280] hover:text-[#1A1A1A]" : "text-white/80 hover:text-white"}`,
              children: item.label
            },
            item.label
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-4", children: /* @__PURE__ */ jsx("a", { href: "https://calendly.com/10x-cold-email-infrastructure/15min", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { variant: "cta", size: "default", className: "text-sm lg:text-base", children: "Start Free Trial →" }) }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              className: `md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`,
              "aria-label": "Toggle menu",
              children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "md:hidden bg-white border-t border-[#E5E7EB]",
            children: /* @__PURE__ */ jsxs("nav", { className: "container mx-auto px-4 py-4 flex flex-col gap-2", children: [
              navItems.map((item) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.href,
                  onClick: () => setIsMobileMenuOpen(false),
                  className: "text-[#6B7280] hover:text-[#1A1A1A] font-medium py-3 px-2 transition-colors min-h-[44px] flex items-center",
                  children: item.label
                },
                item.label
              )),
              /* @__PURE__ */ jsx("div", { className: "pt-3 border-t border-[#E5E7EB]", children: /* @__PURE__ */ jsx("a", { href: "https://calendly.com/10x-cold-email-infrastructure/15min", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { variant: "cta", size: "lg", className: "w-full", children: "Start Free Trial →" }) }) })
            ] })
          }
        ) })
      ]
    }
  );
};

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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/#pricing", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Pricing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/docs", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Documentation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/api", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "API Reference" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm sm:text-base font-semibold text-white mb-4 sm:mb-5", children: "Resources" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 sm:space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Blog" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Guides" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Case Studies" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Support" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm sm:text-base font-semibold text-white mb-4 sm:mb-5", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 sm:space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/about", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/contact", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Contact" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/terms", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Terms of Service" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://mailinfra.co/privacy", className: "text-xs sm:text-sm text-gray-400 hover:text-white transition-colors", children: "Privacy Policy" }) })
        ] })
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

export { BlogFooter as B, Header as H, fetchCategories as a, getAuthorName as b, getReadingTime as c, getLastUpdated as d, getFeaturedImage as e, fetchPosts as f, getCategory as g, fetchPostBySlug as h };
