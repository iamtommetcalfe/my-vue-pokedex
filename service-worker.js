if(!self.define){let e,s={};const n=(n,o)=>(n=new URL(n+".js",o).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const c=e=>n(e,r),l={module:{uri:r},exports:u,require:c};s[r]=Promise.all(o.map((e=>l[e]||c(e)))).then((e=>(i(...e),u)))}}define(["./workbox-dc1748f0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-vue-pokedex"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/my-vue-pokedex/css/app.446e1b17.css",revision:null},{url:"/my-vue-pokedex/img/pokemon-large.14f5d54f.png",revision:null},{url:"/my-vue-pokedex/index.html",revision:"5405ffc93f9b4e7ae4e3fd342f6000ad"},{url:"/my-vue-pokedex/js/app.1f0100ad.js",revision:null},{url:"/my-vue-pokedex/js/chunk-vendors.1bb48aad.js",revision:null},{url:"/my-vue-pokedex/manifest.json",revision:"1a8f524e0ea8039006aa30492d98fc1c"},{url:"/my-vue-pokedex/pokeball.png",revision:"0e1e6c5e016a1151440098a90db93180"},{url:"/my-vue-pokedex/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:css|js)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
