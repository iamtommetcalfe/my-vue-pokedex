if(!self.define){let e,o={};const s=(s,n)=>(s=new URL(s+".js",n).href,o[s]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=o,document.head.appendChild(e)}else e=s,importScripts(s),o()})).then((()=>{let e=o[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let u={};const l=e=>s(e,i),t={module:{uri:i},exports:u,require:l};o[i]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(r(...e),u)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-vue-pokedex"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/my-vue-pokedex/css/app.446e1b17.css",revision:null},{url:"/my-vue-pokedex/img/pokemon-large.14f5d54f.png",revision:null},{url:"/my-vue-pokedex/index.html",revision:"89664af26e8a40662191aa254bc1da99"},{url:"/my-vue-pokedex/js/app.088ea494.js",revision:null},{url:"/my-vue-pokedex/js/chunk-vendors.72469a31.js",revision:null},{url:"/my-vue-pokedex/manifest.json",revision:"9e7b7f498a3d7fa90f8dd854919bf306"},{url:"/my-vue-pokedex/pokeball.png",revision:"0e1e6c5e016a1151440098a90db93180"},{url:"/my-vue-pokedex/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
