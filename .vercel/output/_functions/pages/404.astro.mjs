/* empty css                                  */
import { f as createComponent, k as renderHead, l as renderComponent, r as renderTemplate } from '../chunks/astro/server_BIKnvX4a.mjs';
import 'piccolore';
import { B as BlogHeader, a as BlogFooter } from '../chunks/BlogFooter_DHb9Llvn.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>404 - Page Not Found | Mailinfra</title>${renderHead()}</head> <body style="font-family: 'Inter', system-ui, sans-serif;"> ${renderComponent($$result, "BlogHeader", BlogHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TAHIR KUN/mailinfra-site/src/components/blog/BlogHeader", "client:component-export": "BlogHeader" })} <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4"> <div class="max-w-md text-center"> <div class="mb-8"> <svg class="mx-auto w-24 h-24 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">404</h1> <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">Page Not Found</h2> <p class="text-gray-600 mb-8 text-sm sm:text-base">
Sorry, the page you're looking for doesn't exist or has been moved.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/blog" class="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors">
Go to Blog
</a> <a href="https://mailinfra.co" class="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors">
Go to Home
</a> </div> </div> </div> ${renderComponent($$result, "BlogFooter", BlogFooter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TAHIR KUN/mailinfra-site/src/components/blog/BlogFooter", "client:component-export": "BlogFooter" })} </body></html>`;
}, "C:/Users/TAHIR KUN/mailinfra-site/src/pages/404.astro", void 0);

const $$file = "C:/Users/TAHIR KUN/mailinfra-site/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
