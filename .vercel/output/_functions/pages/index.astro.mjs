/* empty css                                  */
import { f as createComponent, k as renderHead, l as renderComponent, r as renderTemplate } from '../chunks/astro/server_BIKnvX4a.mjs';
import 'piccolore';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Mailinfra - Email Infrastructure</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "App", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/TAHIR KUN/mailinfra-site/src/App", "client:component-export": "default" })} </body></html>`;
}, "C:/Users/TAHIR KUN/mailinfra-site/src/pages/index.astro", void 0);

const $$file = "C:/Users/TAHIR KUN/mailinfra-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
