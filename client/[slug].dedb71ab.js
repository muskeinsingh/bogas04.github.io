import{S as t,a as e,e as s,b as r,s as o,r as a,u as n,D as i,v as h,w as l,c,d as g,E as p,f as b,g as d,x as m,h as f,F as u,t as v,q as $,A as x}from"./index.176fbaa9.js";import{S as w}from"./seo-tags.c594c0a3.js";import{B as j,W as y}from"./constants.24af0629.js";function D(t){let e,o,j,y,D,k,E,S,B,H,I,T,U,A,q,z,L,M,C,F=t[0].title+"",R=new Date(t[0].date).toDateString()+"",V=t[0].keywords.join(", ")+"",W=t[0].html+"";const G=new w({props:{title:t[1],description:t[0].description,imageUrl:t[3],pageUrl:t[2],keywords:t[0].keywords.join(", ")}});return{c(){a(G.$$.fragment),e=n(),o=s("h1"),j=i(F),y=n(),D=s("h4"),k=s("a"),E=i("Divjot Singh"),S=i("\n  |\n  "),B=s("a"),H=i("Blog"),I=i("\n  | "),T=i(R),U=n(),A=s("br"),q=n(),z=i(V),L=n(),M=s("div"),this.h()},l(t){h(G.$$.fragment,t),e=l(t),o=c(t,"H1",{});var s=g(o);j=p(s,F),s.forEach(b),y=l(t),D=c(t,"H4",{class:!0});var r=g(D);k=c(r,"A",{href:!0});var a=g(k);E=p(a,"Divjot Singh"),a.forEach(b),S=p(r,"\n  |\n  "),B=c(r,"A",{href:!0});var n=g(B);H=p(n,"Blog"),n.forEach(b),I=p(r,"\n  | "),T=p(r,R),U=l(r),A=c(r,"BR",{}),q=l(r),z=p(r,V),r.forEach(b),L=l(t),M=c(t,"DIV",{class:!0}),g(M).forEach(b),this.h()},h(){d(k,"href","/"),d(B,"href","/blog"),d(D,"class","svelte-1bhbh7r"),d(M,"class","content svelte-1bhbh7r")},m(t,s){m(G,t,s),f(t,e,s),f(t,o,s),r(o,j),f(t,y,s),f(t,D,s),r(D,k),r(k,E),r(D,S),r(D,B),r(B,H),r(D,I),r(D,T),r(D,U),r(D,A),r(D,q),r(D,z),f(t,L,s),f(t,M,s),M.innerHTML=W,C=!0},p(t,[e]){const s={};1&e&&(s.description=t[0].description),1&e&&(s.keywords=t[0].keywords.join(", ")),G.$set(s),(!C||1&e)&&F!==(F=t[0].title+"")&&u(j,F),(!C||1&e)&&R!==(R=new Date(t[0].date).toDateString()+"")&&u(T,R),(!C||1&e)&&V!==(V=t[0].keywords.join(", ")+"")&&u(z,V),(!C||1&e)&&W!==(W=t[0].html+"")&&(M.innerHTML=W)},i(t){C||(v(G.$$.fragment,t),C=!0)},o(t){$(G.$$.fragment,t),C=!1},d(t){x(G,t),t&&b(e),t&&b(o),t&&b(y),t&&b(D),t&&b(L),t&&b(M)}}}async function k({params:t,query:e}){const s=await this.fetch(`blog/${t.slug}.json`),r=await s.json();if(200===s.status)return{post:r};this.error(s.status,r.message)}function E(t,e,s){let{post:r}=e;const o=`${r.title} | Blog | Divjot Singh`,a=`${j}/${r.slug}`,n=`${y}/${r.image}`;return t.$set=(t=>{"post"in t&&s(0,r=t.post)}),[r,o,a,n]}export default class extends t{constructor(t){var a;super(),document.getElementById("svelte-1bhbh7r-style")||((a=s("style")).id="svelte-1bhbh7r-style",a.textContent=".content.svelte-1bhbh7r h2{font-size:1.4em;font-weight:500}.content.svelte-1bhbh7r img,.content.svelte-1bhbh7r h4{margin:1em 0}.content.svelte-1bhbh7r pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0, 0, 0, 0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-1bhbh7r pre code{background-color:transparent;padding:0}.content.svelte-1bhbh7r ul{line-height:1.5}.content.svelte-1bhbh7r li{margin:0 0 0.5em 0}h4.svelte-1bhbh7r{text-transform:capitalize;margin-bottom:2em}",r(document.head,a)),e(this,t,E,D,o,{post:0,postTitle:1,postUrl:2,postImage:3})}get postTitle(){return this.$$.ctx[1]}get postUrl(){return this.$$.ctx[2]}get postImage(){return this.$$.ctx[3]}}export{k as preload};
