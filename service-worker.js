if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>n(e,o),t={module:{uri:o},exports:c,require:l};s[o]=Promise.all(i.map((e=>t[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-281aae30"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-vue-pokedex"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/css/app.1640ae31.css",revision:null},{url:"/img/pokemon-large.14f5d54f.png",revision:null},{url:"/index.html",revision:"aae651657ecb84002fe58179f9d4153c"},{url:"/js/app.52a8892a.js",revision:null},{url:"/js/chunk-vendors.151e9f7d.js",revision:null},{url:"/manifest.json",revision:"6b511a01c00d7611f7ad1e806d030b01"},{url:"/pokeball.png",revision:"0e1e6c5e016a1151440098a90db93180"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:css|js)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
