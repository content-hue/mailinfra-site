import 'piccolore';
import { n as decodeKey } from './chunks/astro/server_BIKnvX4a.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DSyqm0Ps.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/TAHIR%20KUN/mailinfra-site/","cacheDir":"file:///C:/Users/TAHIR%20KUN/mailinfra-site/node_modules/.astro/","outDir":"file:///C:/Users/TAHIR%20KUN/mailinfra-site/dist/","srcDir":"file:///C:/Users/TAHIR%20KUN/mailinfra-site/src/","publicDir":"file:///C:/Users/TAHIR%20KUN/mailinfra-site/public/","buildClientDir":"file:///C:/Users/TAHIR%20KUN/mailinfra-site/dist/client/","buildServerDir":"file:///C:/Users/TAHIR%20KUN/mailinfra-site/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.BWLC2eTM.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap\";.wp-content{color:#374151}.wp-content p{font-size:19px;line-height:1.75;margin-bottom:1.5rem}.wp-content h1{font-size:2.25rem;font-weight:700;color:#111827;margin-top:3rem;margin-bottom:1.5rem;line-height:1.2}.wp-content h2{font-size:1.875rem;font-weight:700;color:#111827;margin-top:3rem;margin-bottom:1.25rem;line-height:1.2}.wp-content h3{font-size:1.5rem;font-weight:700;color:#111827;margin-top:2rem;margin-bottom:1rem}.wp-content h4{font-size:1.25rem;font-weight:700;color:#111827;margin-top:1.5rem;margin-bottom:.75rem}.wp-content ul{list-style-type:disc;padding-left:1.5rem;margin-bottom:1.5rem}.wp-content ol{list-style-type:decimal;padding-left:1.5rem;margin-bottom:1.5rem}.wp-content li{font-size:19px;line-height:1.75;margin-bottom:.5rem}.wp-content a{color:#1d4ed8;text-decoration:underline}.wp-content a:hover{color:#1e40af}.wp-content strong{font-weight:600;color:#111827}.wp-content em{font-style:italic}.wp-content blockquote{border-left:4px solid #2563eb;padding:.5rem 0 .5rem 1.5rem;margin:2rem 0;color:#374151;font-style:italic;background:#f9fafb;border-radius:0 .5rem .5rem 0}.wp-content code{padding:.15em .45em;background:#f3f4f6;color:#1f2937;border-radius:4px;font-size:17px;font-family:Consolas,Monaco,monospace}.wp-content pre{background:#111827;color:#f3f4f6;padding:1.5rem;border-radius:.75rem;overflow-x:auto;margin:2rem 0}.wp-content pre code{background:transparent;color:#f3f4f6;padding:0;font-size:15px;line-height:1.7}.wp-content img{border-radius:.5rem;max-width:100%;height:auto;margin:2rem 0;box-shadow:0 4px 12px #0000001a}.wp-content table{width:100%;border-collapse:collapse;margin:2rem 0}.wp-content th{padding:.75rem 1rem;font-weight:600;color:#111827;border:1px solid #d1d5db;background:#f3f4f6}.wp-content td{padding:.75rem 1rem;border:1px solid #d1d5db;font-size:17px}.wp-content tbody tr:nth-child(2n){background:#f9fafb}.wp-content hr{border:none;border-top:1px solid #d1d5db;margin:3rem 0}.wp-content img{width:100%!important;height:auto!important;max-width:100%!important}.wp-content figure{width:100%!important;max-width:100%!important}.wp-content figure img{width:100%!important;height:auto!important}.wp-content .aligncenter,.wp-content .alignleft,.wp-content .alignright,.wp-content .alignfull,.wp-content .alignwide{width:100%!important;max-width:100%!important;height:auto!important}.wp-content .wp-block-image{width:100%!important}.wp-content .wp-block-image img{width:100%!important;height:auto!important}.wp-content figure,.wp-content figure img,.wp-content .wp-block-image,.wp-content .wp-block-image img,.wp-content div img,.wp-content p img,.wp-content img{width:100%!important;max-width:100%!important;height:auto!important;display:block!important}.wp-content figure,.wp-content .wp-block-image{margin-left:0!important;margin-right:0!important}\n"}],"routeData":{"route":"/blog/category/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/category\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"category","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/category/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.BWLC2eTM.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap\";.wp-content{color:#374151}.wp-content p{font-size:19px;line-height:1.75;margin-bottom:1.5rem}.wp-content h1{font-size:2.25rem;font-weight:700;color:#111827;margin-top:3rem;margin-bottom:1.5rem;line-height:1.2}.wp-content h2{font-size:1.875rem;font-weight:700;color:#111827;margin-top:3rem;margin-bottom:1.25rem;line-height:1.2}.wp-content h3{font-size:1.5rem;font-weight:700;color:#111827;margin-top:2rem;margin-bottom:1rem}.wp-content h4{font-size:1.25rem;font-weight:700;color:#111827;margin-top:1.5rem;margin-bottom:.75rem}.wp-content ul{list-style-type:disc;padding-left:1.5rem;margin-bottom:1.5rem}.wp-content ol{list-style-type:decimal;padding-left:1.5rem;margin-bottom:1.5rem}.wp-content li{font-size:19px;line-height:1.75;margin-bottom:.5rem}.wp-content a{color:#1d4ed8;text-decoration:underline}.wp-content a:hover{color:#1e40af}.wp-content strong{font-weight:600;color:#111827}.wp-content em{font-style:italic}.wp-content blockquote{border-left:4px solid #2563eb;padding:.5rem 0 .5rem 1.5rem;margin:2rem 0;color:#374151;font-style:italic;background:#f9fafb;border-radius:0 .5rem .5rem 0}.wp-content code{padding:.15em .45em;background:#f3f4f6;color:#1f2937;border-radius:4px;font-size:17px;font-family:Consolas,Monaco,monospace}.wp-content pre{background:#111827;color:#f3f4f6;padding:1.5rem;border-radius:.75rem;overflow-x:auto;margin:2rem 0}.wp-content pre code{background:transparent;color:#f3f4f6;padding:0;font-size:15px;line-height:1.7}.wp-content img{border-radius:.5rem;max-width:100%;height:auto;margin:2rem 0;box-shadow:0 4px 12px #0000001a}.wp-content table{width:100%;border-collapse:collapse;margin:2rem 0}.wp-content th{padding:.75rem 1rem;font-weight:600;color:#111827;border:1px solid #d1d5db;background:#f3f4f6}.wp-content td{padding:.75rem 1rem;border:1px solid #d1d5db;font-size:17px}.wp-content tbody tr:nth-child(2n){background:#f9fafb}.wp-content hr{border:none;border-top:1px solid #d1d5db;margin:3rem 0}.wp-content img{width:100%!important;height:auto!important;max-width:100%!important}.wp-content figure{width:100%!important;max-width:100%!important}.wp-content figure img{width:100%!important;height:auto!important}.wp-content .aligncenter,.wp-content .alignleft,.wp-content .alignright,.wp-content .alignfull,.wp-content .alignwide{width:100%!important;max-width:100%!important;height:auto!important}.wp-content .wp-block-image{width:100%!important}.wp-content .wp-block-image img{width:100%!important;height:auto!important}.wp-content figure,.wp-content figure img,.wp-content .wp-block-image,.wp-content .wp-block-image img,.wp-content div img,.wp-content p img,.wp-content img{width:100%!important;max-width:100%!important;height:auto!important;display:block!important}.wp-content figure,.wp-content .wp-block-image{margin-left:0!important;margin-right:0!important}\n"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.BWLC2eTM.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap\";.wp-content{color:#374151}.wp-content p{font-size:19px;line-height:1.75;margin-bottom:1.5rem}.wp-content h1{font-size:2.25rem;font-weight:700;color:#111827;margin-top:3rem;margin-bottom:1.5rem;line-height:1.2}.wp-content h2{font-size:1.875rem;font-weight:700;color:#111827;margin-top:3rem;margin-bottom:1.25rem;line-height:1.2}.wp-content h3{font-size:1.5rem;font-weight:700;color:#111827;margin-top:2rem;margin-bottom:1rem}.wp-content h4{font-size:1.25rem;font-weight:700;color:#111827;margin-top:1.5rem;margin-bottom:.75rem}.wp-content ul{list-style-type:disc;padding-left:1.5rem;margin-bottom:1.5rem}.wp-content ol{list-style-type:decimal;padding-left:1.5rem;margin-bottom:1.5rem}.wp-content li{font-size:19px;line-height:1.75;margin-bottom:.5rem}.wp-content a{color:#1d4ed8;text-decoration:underline}.wp-content a:hover{color:#1e40af}.wp-content strong{font-weight:600;color:#111827}.wp-content em{font-style:italic}.wp-content blockquote{border-left:4px solid #2563eb;padding:.5rem 0 .5rem 1.5rem;margin:2rem 0;color:#374151;font-style:italic;background:#f9fafb;border-radius:0 .5rem .5rem 0}.wp-content code{padding:.15em .45em;background:#f3f4f6;color:#1f2937;border-radius:4px;font-size:17px;font-family:Consolas,Monaco,monospace}.wp-content pre{background:#111827;color:#f3f4f6;padding:1.5rem;border-radius:.75rem;overflow-x:auto;margin:2rem 0}.wp-content pre code{background:transparent;color:#f3f4f6;padding:0;font-size:15px;line-height:1.7}.wp-content img{border-radius:.5rem;max-width:100%;height:auto;margin:2rem 0;box-shadow:0 4px 12px #0000001a}.wp-content table{width:100%;border-collapse:collapse;margin:2rem 0}.wp-content th{padding:.75rem 1rem;font-weight:600;color:#111827;border:1px solid #d1d5db;background:#f3f4f6}.wp-content td{padding:.75rem 1rem;border:1px solid #d1d5db;font-size:17px}.wp-content tbody tr:nth-child(2n){background:#f9fafb}.wp-content hr{border:none;border-top:1px solid #d1d5db;margin:3rem 0}.wp-content img{width:100%!important;height:auto!important;max-width:100%!important}.wp-content figure{width:100%!important;max-width:100%!important}.wp-content figure img{width:100%!important;height:auto!important}.wp-content .aligncenter,.wp-content .alignleft,.wp-content .alignright,.wp-content .alignfull,.wp-content .alignwide{width:100%!important;max-width:100%!important;height:auto!important}.wp-content .wp-block-image{width:100%!important}.wp-content .wp-block-image img{width:100%!important;height:auto!important}.wp-content figure,.wp-content figure img,.wp-content .wp-block-image,.wp-content .wp-block-image img,.wp-content div img,.wp-content p img,.wp-content img{width:100%!important;max-width:100%!important;height:auto!important;display:block!important}.wp-content figure,.wp-content .wp-block-image{margin-left:0!important;margin-right:0!important}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.BWLC2eTM.css"},{"type":"external","src":"/_astro/App.DvUVPiwg.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://mailinfra.co","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/TAHIR KUN/mailinfra-site/src/pages/blog/category/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/TAHIR KUN/mailinfra-site/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/TAHIR KUN/mailinfra-site/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/TAHIR KUN/mailinfra-site/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/blog/category/[slug]@_@astro":"pages/blog/category/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_eqpnK0jt.mjs","C:/Users/TAHIR KUN/mailinfra-site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DIauiNPO.mjs","C:/Users/TAHIR KUN/mailinfra-site/src/components/blog/CategoryPage.tsx":"_astro/CategoryPage.BG6Zj5XN.js","C:/Users/TAHIR KUN/mailinfra-site/src/components/blog/BlogPostPageComponent.tsx":"_astro/BlogPostPageComponent.DKYayORe.js","C:/Users/TAHIR KUN/mailinfra-site/src/components/blog/BlogIndexPage.tsx":"_astro/BlogIndexPage.lscKufaB.js","C:/Users/TAHIR KUN/mailinfra-site/src/App":"_astro/App.lTWES4S9.js","@astrojs/react/client.js":"_astro/client.CL7ToQLS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.BWLC2eTM.css","/favicon.ico","/favicon.svg","/robots.txt","/_astro/App.DvUVPiwg.css","/_astro/App.lTWES4S9.js","/_astro/arrow-right.DoGtY22z.js","/_astro/ArticleCard.HNi3ZV3y.js","/_astro/BlogFooter.CAlxgcXK.js","/_astro/BlogIndexPage.lscKufaB.js","/_astro/BlogPostPageComponent.DKYayORe.js","/_astro/CategoryPage.BG6Zj5XN.js","/_astro/client.CL7ToQLS.js","/_astro/clock.B1CzdM5r.js","/_astro/google-workspace.D42N3W7T.svg","/_astro/index.BR_dh4GY.js","/_astro/index.CWXBSLiN.js","/_astro/mail.BguMSdNv.js","/_astro/SEOHead.Bj_Icu7O.js","/_astro/testimonial-james.BHHiXtlD.webp","/_astro/testimonial-michael.nMNHfr95.webp","/_astro/testimonial-sarah.BzLP3Ile.webp"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"gzVpX7ls1PtJXa0cTTr2AqGkpKoHaxYNSWWKn0IRE6k="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
