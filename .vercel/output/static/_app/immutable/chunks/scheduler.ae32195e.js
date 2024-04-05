var G=Object.defineProperty;var R=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(R(t,typeof e!="symbol"?e+"":e,n),n);function M(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t()}function ot(){return Object.create(null)}function W(t){t.forEach(F)}function I(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e}function ft(t){return Object.keys(t).length===0}function S(t,...e){if(t==null){for(const i of e)i(void 0);return M}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t){let e;return S(t,n=>e=n)(),e}function ht(t,e,n){t.$$.on_destroy.push(S(e,n))}function dt(t,e,n,i){if(t){const s=j(t,e,n,i);return t[0](s)}}function j(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function mt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function pt(t,e,n,i,s,r){if(s){const c=j(e,n,i,r);t.p(c,s)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function bt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function gt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function xt(t){return t&&I(t.destroy)?t.destroy:M}let p=!1;function vt(){p=!0}function Et(){p=!1}function J(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(s>0&&e[n[s]].claim_order<=u?s+1:J(1,s,q=>e[n[q]].claim_order,u))-1;i[l]=n[a]+1;const w=a+1;n[w]=l,s=Math.max(w,s)}const r=[],c=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);o>=l;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);r.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<r.length&&c[l].claim_order>=r[u].claim_order;)u++;const a=u<r.length?r[u]:null;t.insertBefore(c[l],a)}}function Q(t,e){if(p){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function V(t,e,n){p&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function Tt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function L(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function wt(){return E(" ")}function Nt(){return E("")}function At(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function kt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function T(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const X=["width","height"];function Y(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&X.indexOf(i)===-1?t[i]=e[i]:T(t,i,e[i])}function Ht(t,e){for(const n in e)T(t,n,e[n])}function Z(t,e){Object.keys(e).forEach(n=>{$(t,n,e[n])})}function $(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:T(t,e,n)}function Mt(t){return/-/.test(t)?Z:Y}function St(t){return t.dataset.svelteH}function jt(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,i,s=!1){P(t);const r=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function O(t,e,n,i){return C(t,s=>s.nodeName===e,s=>{const r=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||r.push(o.name)}r.forEach(c=>s.removeAttribute(c))},()=>i(e))}function Dt(t,e,n){return O(t,e,n,D)}function Lt(t,e,n){return O(t,e,n,L)}function tt(t,e){return C(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>E(e),!0)}function Pt(t){return tt(t," ")}function N(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Ct(t,e){const n=N(t,"HTML_TAG_START",0),i=N(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new A(e);P(t);const s=t.splice(n,i-n+1);x(s[0]),x(s[s.length-1]);const r=s.slice(1,s.length-1);for(const c of r)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new A(e,r)}function Ot(t,e){e=""+e,t.data!==e&&(t.data=e)}function Bt(t,e){t.value=e??""}function qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Gt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const r=s.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(s)):r===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class nt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=L(n.nodeName):this.e=D(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class A extends nt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],n)}}function Rt(t,e){return new t(e)}let m;function b(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function zt(t){y().$$.on_mount.push(t)}function Ft(t){y().$$.after_update.push(t)}function Wt(t){y().$$.on_destroy.push(t)}function It(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=et(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,r)}),!r.defaultPrevented}return!0}}function Jt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],k=[];let h=[];const H=[],B=Promise.resolve();let v=!1;function it(){v||(v=!0,B.then(ct))}function Kt(){return it(),B}function st(t){h.push(t)}const g=new Set;let _=0;function ct(){if(_!==0)return;const t=m;do{try{for(;_<d.length;){const e=d[_];_++,b(e),lt(e.$$)}}catch(e){throw d.length=0,_=0,e}for(b(null),d.length=0,_=0;k.length;)k.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];g.has(n)||(g.add(n),n())}h.length=0}while(d.length);for(;H.length;)H.pop()();v=!1,g.clear(),b(t)}function lt(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}function Qt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{ft as $,At as A,pt as B,yt as C,mt as D,W as E,xt as F,I as G,at as H,Q as I,ht as J,L as K,Lt as L,M,S as N,Wt as O,Tt as P,Y as Q,A as R,Gt as S,Ct as T,Ht as U,St as V,Bt as W,kt as X,It as Y,ot as Z,ct as _,wt as a,st as a0,Qt as a1,m as a2,b as a3,F as a4,d as a5,it as a6,vt as a7,Et as a8,Ft as b,Pt as c,x as d,Nt as e,D as f,Dt as g,jt as h,V as i,T as j,qt as k,E as l,tt as m,Ot as n,zt as o,k as p,Rt as q,_t as r,ut as s,Kt as t,gt as u,z as v,bt as w,Jt as x,dt as y,Mt as z};