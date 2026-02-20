import{b as v,r as p}from"./index.CWXBSLiN.js";var _={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function C(){if(x)return c;x=1;var r=v(),e=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(i,t,f){var n,m={},d=null,h=null;f!==void 0&&(d=""+f),t.key!==void 0&&(d=""+t.key),t.ref!==void 0&&(h=t.ref);for(n in t)s.call(t,n)&&!a.hasOwnProperty(n)&&(m[n]=t[n]);if(i&&i.defaultProps)for(n in t=i.defaultProps,t)m[n]===void 0&&(m[n]=t[n]);return{$$typeof:e,type:i,key:d,ref:h,props:m,_owner:u.current}}return c.Fragment=o,c.jsx=l,c.jsxs=l,c}var R;function k(){return R||(R=1,_.exports=C()),_.exports}var P=k();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(...r)=>r.filter((e,o,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,s)=>s?s.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=r=>{const e=E(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=p.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:u="",children:a,iconNode:l,...i},t)=>p.createElement("svg",{ref:t,...b,width:e,height:e,stroke:r,strokeWidth:s?Number(o)*24/Number(e):o,className:y("lucide",u),...!a&&!A(i)&&{"aria-hidden":"true"},...i},[...l.map(([f,n])=>p.createElement(f,n)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(r,e)=>{const o=p.forwardRef(({className:s,...u},a)=>p.createElement(O,{ref:a,iconNode:e,className:y(`lucide-${g(w(r))}`,`lucide-${r}`,s),...u}));return o.displayName=w(r),o};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$=j("arrow-right",L);export{$ as A,j as c,P as j};
