function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function u(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){const e=t.subscribe(n);return e.unsubscribe?()=>e.unsubscribe():e}function a(t,n,e){t.$$.on_destroy.push(i(n,e))}function f(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}const p="undefined"!=typeof window;let m=p?()=>window.performance.now():()=>Date.now(),h=p?t=>requestAnimationFrame(t):t;const $=new Set;function g(t){$.forEach(n=>{n.c(t)||($.delete(n),n.f())}),0!==$.size&&h(g)}function y(t,n){t.appendChild(n)}function b(t,n,e){t.insertBefore(n,e||null)}function w(t){t.parentNode.removeChild(t)}function x(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function _(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function A(){return E(" ")}function C(){return E("")}function j(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t){return Array.from(t.childNodes)}function N(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){let n=0;for(;n<r.attributes.length;){const t=r.attributes[n];e[t.name]?n++:r.removeAttribute(t.name)}return t.splice(o,1)[0]}}return o?v(n):_(n)}function S(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return E(n)}function O(t){return S(t," ")}function P(t,n){n=""+n,t.data!==n&&(t.data=n)}function q(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function z(t,n=document.body){return Array.from(n.querySelectorAll(t))}let M,R,F=0,B={};function D(t,n,e,o,r,s,u,c=0){const i=16.666/o;let a="{\n";for(let t=0;t<=1;t+=i){const o=n+(e-n)*s(t);a+=100*t+`%{${u(o,1-o)}}\n`}const f=a+`100% {${u(e,1-e)}}\n}`,l=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${c}`;if(!B[l]){if(!M){const t=_("style");document.head.appendChild(t),M=t.sheet}B[l]=!0,M.insertRule(`@keyframes ${l} ${f}`,M.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${l} ${o}ms linear ${r}ms 1 both`,F+=1,l}function T(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--F&&h(()=>{if(F)return;let t=M.cssRules.length;for(;t--;)M.deleteRule(t);B={}})}function G(t){R=t}function H(){if(!R)throw new Error("Function called outside component initialization");return R}function I(t,n){H().$$.context.set(t,n)}function J(t){return H().$$.context.get(t)}const K=[],L=[],Q=[],U=[],V=Promise.resolve();let W,X=!1;function Y(t){Q.push(t)}function Z(){const t=new Set;do{for(;K.length;){const t=K.shift();G(t),tt(t.$$)}for(;L.length;)L.pop()();for(let n=0;n<Q.length;n+=1){const e=Q[n];t.has(e)||(e(),t.add(e))}Q.length=0}while(K.length);for(;U.length;)U.pop()();X=!1}function tt(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Y)}}function nt(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const et=new Set;let ot;function rt(){ot={r:0,c:[],p:ot}}function st(){ot.r||s(ot.c),ot=ot.p}function ut(t,n){t&&t.i&&(et.delete(t),t.i(n))}function ct(t,n,e,o){if(t&&t.o){if(et.has(t))return;et.add(t),ot.c.push(()=>{et.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const it={duration:0};function at(e,o,r,c){let i=o(e,r),a=c?0:1,f=null,l=null,d=null;function p(){d&&T(e,d)}function y(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function b(o){const{delay:r=0,duration:u=300,easing:c=n,tick:b=t,css:w}=i||it,x={start:m()+r,b:o};o||(x.group=ot,ot.r+=1),f?l=x:(w&&(p(),d=D(e,a,o,u,r,c,w)),o&&b(0,1),f=y(x,u),Y(()=>nt(e,o,"start")),function(t){let n;0===$.size&&h(g),new Promise(e=>{$.add(n={c:t,f:e})})}(t=>{if(l&&t>l.start&&(f=y(l,u),l=null,nt(e,f.b,"start"),w&&(p(),d=D(e,a,f.b,f.duration,0,c,i.css))),f)if(t>=f.end)b(a=f.b,1-a),nt(e,f.b,"end"),l||(f.b?p():--f.group.r||s(f.group.c)),f=null;else if(t>=f.start){const n=t-f.start;a=f.a+f.d*c(n/f.duration),b(a,1-a)}return!(!f&&!l)}))}return{run(t){u(i)?(W||(W=Promise.resolve()).then(()=>{W=null}),W).then(()=>{i=i(),b(t)}):b(t)},end(){p(),f=l=null}}}const ft="undefined"!=typeof window?window:global;function lt(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const u=t[s],c=n[s];if(c){for(const t in u)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function dt(t){return"object"==typeof t&&null!==t?t:{}}function pt(t){t&&t.c()}function mt(t,n){t&&t.l(n)}function ht(t,n,e){const{fragment:r,on_mount:c,on_destroy:i,after_update:a}=t.$$;r&&r.m(n,e),Y(()=>{const n=c.map(o).filter(u);i?i.push(...n):s(n),t.$$.on_mount=[]}),a.forEach(Y)}function $t(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function gt(t,n){-1===t.$$.dirty[0]&&(K.push(t),X||(X=!0,V.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function yt(n,e,o,u,c,i,a=[-1]){const f=R;G(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:a};let p=!1;d.ctx=o?o(n,l,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&gt(n,t)),e}):[],d.update(),p=!0,s(d.before_update),d.fragment=!!u&&u(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(k(e.target)):d.fragment&&d.fragment.c(),e.intro&&ut(n.$$.fragment),ht(n,e.target,e.anchor),Z()),G(f)}class bt{$destroy(){$t(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{$t as A,a as B,f as C,E as D,S as E,P as F,z as G,e as H,lt as I,dt as J,I as K,J as L,v as M,ft as N,q as O,x as P,bt as S,yt as a,y as b,N as c,k as d,_ as e,w as f,j as g,b as h,n as i,C as j,i as k,l,d as m,t as n,Y as o,at as p,ct as q,pt as r,c as s,ut as t,A as u,mt as v,O as w,ht as x,rt as y,st as z};
