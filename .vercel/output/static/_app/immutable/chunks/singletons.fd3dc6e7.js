import{M as p,N as I,E as x,s as N,G as O}from"./scheduler.ae32195e.js";const f=[];function U(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let n;const o=new Set;function r(s){if(N(e,s)&&(e=s,n)){const i=!f.length;for(const l of o)l[1](),f.push(l,e);if(i){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function c(s){r(s(e))}function a(s,i=p){const l=[s,i];return o.add(l),o.size===1&&(n=t(r,c)||p),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:a}}function G(e,t,n){const o=!Array.isArray(e),r=o?[e]:e;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const c=t.length<2;return U(n,(a,s)=>{let i=!1;const l=[];let _=0,g=p;const v=()=>{if(_)return;g();const u=t(o?l[0]:l,a,s);c?a(u):g=O(u)?u:p},S=r.map((u,h)=>I(u,T=>{l[h]=T,_&=~(1<<h),i&&v()},()=>{_|=1<<h}));return i=!0,v(),function(){x(S),g(),i=!1}})}var w;const L=((w=globalThis.__sveltekit_g4n6no)==null?void 0:w.base)??"";var E;const P=((E=globalThis.__sveltekit_g4n6no)==null?void 0:E.assets)??L,V="1712334255828",K="sveltekit:snapshot",$="sveltekit:scroll",z="sveltekit:index",k={tap:1,hover:2,viewport:3,eager:4,off:-1};function B(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function C(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...k,"":k.hover};function A(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function D(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=A(e)}}function X(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||j(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:o,download:c}}function H(e){let t=null,n=null,o=null,r=null,c=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=d(s,"preload-code")),r===null&&(r=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),c===null&&(c=d(s,"reload")),a===null&&(a=d(s,"replacestate")),s=A(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:y[o??"off"],preload_data:y[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(c),replace_state:i(a)}}function m(e){const t=b(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function c(a){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:o,set:r,subscribe:c}}function Y(){const{set:e,subscribe:t}=b(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${P}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==V;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function j(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let R;function M(e){R=e.client}function W(e){return(...t)=>R[e](...t)}const F={url:m({}),page:m({}),navigating:b(null),updated:Y()};export{z as I,k as P,$ as S,K as a,X as b,H as c,F as d,L as e,D as f,B as g,M as h,j as i,G as j,W as k,U as r,C as s,b as w};
