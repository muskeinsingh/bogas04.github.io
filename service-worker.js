!function(){"use strict";const g=["client/constants.24af0629.js","client/resume.7c3ecbb4.js","client/_layout.e75a6403.js","client/seo-tags.02afe885.js","client/[slug].d207f293.js","client/index.7df13f4d.js","client/index.6c9ff23d.js","client/uses.de75f998.js","client/client.d134ebb2.js","client/index.1f153862.js"].concat(["service-worker-index.html",".DS_Store","Rapes.pdf","global.css","img/blazing-fast-web.png","img/blog/0__pLB__t2lROZfPlJML.jpg","img/blog/1__0WjBWfdkbcob39FMklwp7A.png","img/blog/1__3sVFY7SBNW9xRiFmSFF__uA.png","img/blog/1__4xpPKwDeI__BomsMMRntRTw.png","img/blog/1__7emoMCCIFij0dncEASB94g.gif","img/blog/1__AW6KCuaBBSUSWKu8dIrmLA.png","img/blog/1__B3QKpZdPXxmFaDsc9XQbdg.png","img/blog/1__BrdQH1cUwbrbO6MO7QF__aQ.jpeg","img/blog/1__EmZytUAuspI__mycZ__o9OGw.png","img/blog/1__HlLIbHI0Bxf6tRiDMtqBaA.gif","img/blog/1__KvkZ__uwm7oa3ENgorLT5ug.jpeg","img/blog/1__O3UIYiDjYTXMAZd7GBMwVg.png","img/blog/1__OHlYFf__A8U689ORGveNMHA.png","img/blog/1__QDe5rZ2qH__fLP2L1wfjW3w.gif","img/blog/1__RDHDZhOnDTUKypNH__vp1wQ.jpeg","img/blog/1__UFCQ__sve25zCXqzQc__rYxA.png","img/blog/1__WFkALvcY68HD__PaoixgiiQ.png","img/blog/1__ZzlBaQH6w1BgwZdo3bIYRQ.png","img/blog/1____L__bUfSLVT6EboXRO7SSGg.png","img/blog/1____g5l9BybNJiUO22dNPEeYg.jpeg","img/blog/1__axarHRa8ZbcIwJwJr2xGoA.jpeg","img/blog/1__d6bWg__Yhi2DyDM0JSZdrjA.png","img/blog/1__e16MS4BgBe8e__DtlF666JA.png","img/blog/1__hE8PGhNMYIhyt3WsuEF50Q.png","img/blog/1__jyjt1qAnIltmgTFsitTGFg.png","img/blog/1__kvwGrM__62LBXWLHxH__QwGw.png","img/blog/1__ng__tz1ZRfUcuEaSPWdKFdQ.jpeg","img/blog/1__qDzv5NoBmcDetWPiftOj__A.jpeg","img/blog/1__qYPi94TVyTF1p1aX1BCW9g.gif","img/blog/1__qp3z0ij8v372R__DVbuJB6Q.jpeg","img/blog/1__rW9LubrRX5l06KUeRoCzsA.png","img/blog/1__sCPawDEOQs9dTX5wPN4e__A.jpeg","img/blog/1__tG9r8R94VFoKyde0oAws__g.gif","img/blog/1__tGS6QdpXiL7m21oPm25v7A.png","img/blog/1__x9oZ2fWNHKVWgEap__5YoCA.jpeg","img/blog/1__zRKNo__JVjQFn2EOCwQ1QNA.gif","img/blog/1__zWhHZUDWuxJwfEoumC1__OQ.png","img/blog.png","img/chefs-basket.png","img/errors/404.png","img/errors/500.png","img/github.svg","img/housing.png","img/linkedin.png","img/react-2019.png","img/samsung.png","img/swiggy.png","img/testing-with-jest.png","img/twitter.png","manifest.json"]),e=new Set(g);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1581587563519").then(e=>e.addAll(g)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",g=>{g.waitUntil(caches.keys().then(async g=>{for(const e of g)"cache1581587563519"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",g=>{if("GET"!==g.request.method||g.request.headers.has("range"))return;const _=new URL(g.request.url);_.protocol.startsWith("http")&&(_.hostname===self.location.hostname&&_.port!==self.location.port||(_.host===self.location.host&&e.has(_.pathname)?g.respondWith(caches.match(g.request)):"only-if-cached"!==g.request.cache&&g.respondWith(caches.open("offline1581587563519").then(async e=>{try{const _=await fetch(g.request);return e.put(g.request,_.clone()),_}catch(_){const i=await e.match(g.request);if(i)return i;throw _}}))))})}();
