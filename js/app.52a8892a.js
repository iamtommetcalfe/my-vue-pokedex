(function(){"use strict";var e={2750:function(e,t,a){var o=a(5130),n=a(6768),r=a(4232);const l=e=>((0,n.Qi)("data-v-5ea2f112"),e=e(),(0,n.jt)(),e),s={class:"py-3 mb-4 border-bottom"},i={class:"container d-flex flex-wrap justify-content-center"},u={class:"fs-4"},c=["src"],p={class:"py-3"},d={class:"container"},g={class:"text-center text-body-secondary"},m=l((()=>(0,n.Lk)("a",{target:"_blank",title:"Tom Metcalfe Github",href:"https://github.com/iamtommetcalfe"},"Tom Metcalfe",-1)));function v(e,t,a,l,v,k){const f=(0,n.g2)("router-link"),y=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("main",null,[(0,n.Lk)("header",s,[(0,n.Lk)("div",i,[(0,n.bF)(f,{to:"/",class:"d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"},{default:(0,n.k6)((()=>[(0,n.Lk)("span",u,[(0,n.Lk)("img",{src:e.pokemonLogo,alt:"Pokemon Logo",class:"d-inline-block align-top",width:"120",height:"67"},null,8,c)])])),_:1}),(0,n.Lk)("form",{class:"col-12 col-lg-auto mb-3 mb-lg-0",role:"search",onSubmit:t[1]||(t[1]=(0,o.D$)(((...t)=>e.updateSearch&&e.updateSearch(...t)),["prevent"]))},[(0,n.bo)((0,n.Lk)("input",{type:"search","onUpdate:modelValue":t[0]||(t[0]=t=>e.searchQuery=t),class:"form-control",placeholder:"Search...","aria-label":"Search"},null,512),[[o.Jo,e.searchQuery]])],32)])]),((0,n.uX)(),(0,n.Wv)(y,{class:"container",key:e.$route.fullPath})),(0,n.Lk)("footer",p,[(0,n.Lk)("div",d,[(0,n.Lk)("p",g,[(0,n.eW)(" © "+(0,r.v_)((new Date).getFullYear())+" ",1),m])])])])}a(4114);var k=a(144),f=a(1387),y=a.p+"img/pokemon-large.14f5d54f.png",b=(0,n.pM)({name:"App",setup(){const e=(0,f.lq)(),t=(0,f.rd)(),a=(0,k.KR)(e.query.search||"");(0,n.wB)(a,(a=>{t.push({path:"/",query:Object.assign(Object.assign({},e.query),{search:a})})}));const o=()=>{t.push({path:"/",query:Object.assign(Object.assign({},e.query),{search:a.value})})};return{pokemonLogo:y,searchQuery:a,updateSearch:o}}}),h=a(1241);const P=(0,h.A)(b,[["render",v],["__scopeId","data-v-5ea2f112"]]);var C=P;const L={class:"container"},E=(0,n.Lk)("h1",null,"Welcome to My Pokédex",-1),_={key:0,class:"alert alert-danger"},w={key:1,class:"table table-hover table-striped table-bordered"},X=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",{scope:"col"},"Name")])],-1),M=["onClick"];function q(e,t,a,l,s,i){const u=(0,n.g2)("PaginationBar"),c=(0,n.g2)("PokemonPage"),p=(0,n.g2)("PokemonModal");return(0,n.uX)(),(0,n.CE)("div",L,[E,e.errorMessage?((0,n.uX)(),(0,n.CE)("div",_,(0,r.v_)(e.errorMessage),1)):((0,n.uX)(),(0,n.CE)("table",w,[X,(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.paginatedPokemon,(t=>((0,n.uX)(),(0,n.CE)("tr",{key:t.name},[(0,n.Lk)("td",null,[(0,n.Lk)("a",{href:"#",onClick:(0,o.D$)((a=>e.openPokemonModal(t.name)),["prevent"])},(0,r.v_)(e.capitalize(t.name)),9,M)])])))),128))]),(0,n.Lk)("tfoot",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,[(0,n.bF)(u,{currentPage:e.currentPage,totalPages:e.totalPages,onNavigatePage:e.goToPage,canNavigatePrevious:e.currentPage>1,canNavigateNext:e.currentPage<e.totalPages},null,8,["currentPage","totalPages","onNavigatePage","canNavigatePrevious","canNavigateNext"])])])])])),(0,n.bF)(p,{isVisible:e.showModal,onClose:e.closePokemonModal,onNavigate:e.navigatePokemon},{default:(0,n.k6)((()=>[(0,n.bF)(c,{name:e.selectedPokemon},null,8,["name"])])),_:1},8,["isVisible","onClose","onNavigate"])])}var x=a(8542),N=a(4373);const D="https://pokeapi.co/api/v2",S=e=>(0,x.sH)(void 0,void 0,void 0,(function*(){try{const t=yield N.A.get(`${D}/pokemon/${e}`);return t.data}catch(t){throw console.error(`Error fetching Pokémon named ${e}:`,t),t}})),O=(...e)=>(0,x.sH)(void 0,[...e],void 0,(function*(e=2e3,t=0){try{const a=yield N.A.get(`${D}/pokemon`,{params:{limit:e,offset:t}});return a.data}catch(a){throw console.error("Failed to fetch Pokémon list:",a),a}}));var j=(0,n.pM)({__name:"PokemonModal",props:{isVisible:{type:Boolean}},emits:["close","navigate"],setup(e,{emit:t}){const{isVisible:a}=e,r=t,l=()=>{r("close")},s=()=>{r("navigate",-1)},i=()=>{r("navigate",1)},u=e=>{"ArrowLeft"===e.key?s():"ArrowRight"===e.key?i():"Escape"===e.key&&l()};return(0,n.sV)((()=>{window.addEventListener("keydown",u)})),(0,n.hi)((()=>{window.removeEventListener("keydown",u)})),(e,t)=>((0,n.uX)(),(0,n.Wv)(o.eB,{name:"modal-fade"},{default:(0,n.k6)((()=>[e.isVisible?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal-backdrop",onClick:l},[(0,n.Lk)("div",{class:"modal-content",onClick:t[0]||(t[0]=(0,o.D$)((()=>{}),["stop"]))},[(0,n.Lk)("button",{onClick:s,class:"nav-button left"},"←"),(0,n.RG)(e.$slots,"default"),(0,n.Lk)("button",{onClick:i,class:"nav-button right"},"→")])])):(0,n.Q3)("",!0)])),_:3}))}});const Q=(0,h.A)(j,[["__scopeId","data-v-43ab91d6"]]);var F=Q;const K=e=>((0,n.Qi)("data-v-1eb48cf0"),e=e(),(0,n.jt)(),e),$={key:0},R=K((()=>(0,n.Lk)("p",null,"Loading Pokémon details...",-1))),A=[R],I={key:1},B={class:"pokemon-card-header"},T={class:"pokemon-card-image"},W=["src"],V={class:"pokemon-card-details"},z={key:0},H=K((()=>(0,n.Lk)("b",null,"Type: ",-1))),G={key:0},U={key:1},J=K((()=>(0,n.Lk)("b",null,"Stats: ",-1))),Y={key:0},Z={key:2},ee={class:"alert alert-danger"};function te(e,t,a,o,l,s){return(0,n.uX)(),(0,n.CE)("div",null,[e.loading?((0,n.uX)(),(0,n.CE)("div",$,A)):e.pokemonDetails?((0,n.uX)(),(0,n.CE)("div",I,[(0,n.Lk)("div",B,[(0,n.Lk)("h1",null,(0,r.v_)(e.capitalize(e.pokemonDetails.name)),1)]),(0,n.Lk)("div",T,[e.pokemonDetails.sprites&&e.pokemonDetails.sprites.front_default?((0,n.uX)(),(0,n.CE)("img",{key:0,src:e.pokemonDetails.sprites.front_default,alt:"Pokemon image"},null,8,W)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",V,[e.pokemonDetails.types&&e.pokemonDetails.types.length>0?((0,n.uX)(),(0,n.CE)("p",z,[H,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.pokemonDetails.types,((t,a)=>((0,n.uX)(),(0,n.CE)("span",{key:a},[(0,n.eW)((0,r.v_)(e.capitalize(t.type.name)),1),a<e.pokemonDetails.types.length-1?((0,n.uX)(),(0,n.CE)("span",G,", ")):(0,n.Q3)("",!0)])))),128))])):(0,n.Q3)("",!0),e.pokemonDetails.stats&&e.pokemonDetails.stats.length>0?((0,n.uX)(),(0,n.CE)("p",U,[J,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.pokemonDetails.stats,((t,a)=>((0,n.uX)(),(0,n.CE)("span",{key:a},[(0,n.eW)((0,r.v_)(e.capitalize(t.stat.name))+" (Base: "+(0,r.v_)(t.base_stat)+", Effort: "+(0,r.v_)(t.effort)+")",1),a<e.pokemonDetails.stats.length-1?((0,n.uX)(),(0,n.CE)("span",Y,", ")):(0,n.Q3)("",!0)])))),128))])):(0,n.Q3)("",!0)])])):e.errorMessage?((0,n.uX)(),(0,n.CE)("div",Z,[(0,n.Lk)("p",ee,(0,r.v_)(e.errorMessage),1)])):(0,n.Q3)("",!0)])}function ae(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""}var oe=(0,n.pM)({props:{name:{type:String,required:!0}},setup(e){const t=(0,k.KR)(null),a=(0,k.KR)(!0),o=(0,k.KR)(null),r=e=>(0,x.sH)(this,void 0,void 0,(function*(){a.value=!0,o.value=null;try{t.value=yield S(e)}catch(n){console.error("Failed to fetch Pokémon details:",n),o.value="Failed to load Pokémon details. Please try again later."}finally{a.value=!1}}));return(0,n.wB)((()=>e.name),(e=>{e&&r(e)}),{immediate:!0}),{pokemonDetails:t,loading:a,errorMessage:o,capitalize:ae}}});const ne=(0,h.A)(oe,[["render",te],["__scopeId","data-v-1eb48cf0"]]);var re=ne;const le={class:"btn-toolbar align-items-center justify-content-center",role:"toolbar","aria-label":"Toolbar with button groups"},se={class:"btn-group btn-group-sm me-2",role:"group","aria-label":"Previous Group"},ie=["disabled"],ue={class:"btn-group btn-group-sm me-2",role:"group","aria-label":"Pages Group"},ce={key:0},pe=["onClick"],de={key:1},ge={class:"btn-group btn-group-sm me-2",role:"group","aria-label":"Next Group"},me=["disabled"];function ve(e,t,a,o,l,s){return(0,n.uX)(),(0,n.CE)("div",le,[(0,n.Lk)("div",se,[(0,n.Lk)("button",{class:"btn btn-primary",disabled:!e.canNavigatePrevious,onClick:t[0]||(t[0]=t=>e.$emit("navigatePage",e.currentPage-1))}," Previous ",8,ie)]),(0,n.Lk)("div",ue,[(0,n.Lk)("button",{onClick:t[1]||(t[1]=t=>e.$emit("navigatePage",1)),class:(0,r.C4)(["btn","btn-primary",{active:1===e.currentPage}])}," 1 ",2),e.currentPage>3?((0,n.uX)(),(0,n.CE)("span",ce,"...")):(0,n.Q3)("",!0),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.displayedPages,(t=>((0,n.uX)(),(0,n.CE)("button",{key:t,class:(0,r.C4)(["btn","btn-primary",{active:t===e.currentPage}]),onClick:a=>e.$emit("navigatePage",t)},(0,r.v_)(t),11,pe)))),128)),e.currentPage<e.totalPages-2?((0,n.uX)(),(0,n.CE)("span",de,"...")):(0,n.Q3)("",!0),e.totalPages>1?((0,n.uX)(),(0,n.CE)("button",{key:2,onClick:t[2]||(t[2]=t=>e.$emit("navigatePage",e.totalPages)),class:"test btn btn-primary btn-sm"},(0,r.v_)(e.totalPages),1)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",ge,[(0,n.Lk)("button",{class:"btn btn-primary",disabled:!e.canNavigateNext,onClick:t[3]||(t[3]=t=>e.$emit("navigatePage",e.currentPage+1))}," Next ",8,me)])])}var ke=(0,n.pM)({props:{totalPages:{type:Number,required:!0},currentPage:{type:Number,required:!0},canNavigatePrevious:{type:Boolean,required:!0},canNavigateNext:{type:Boolean,required:!0}},computed:{displayedPages(){const e=[];for(const t of[-2,-1,0,1,2]){const a=this.currentPage+t;a>1&&a<this.totalPages&&e.push(a)}return e}}});const fe=(0,h.A)(ke,[["render",ve]]);var ye=fe,be=(0,n.pM)({name:"HomeDefault",components:{PaginationBar:ye,PokemonModal:F,PokemonPage:re},setup(){const e=(0,f.lq)(),t=(0,f.rd)(),a=(0,k.KR)("true"===e.query.modal),o=(0,k.KR)(e.query.pokemon),r=(0,k.KR)(null),l=(0,k.KR)([]),s=(0,k.KR)(parseInt(e.query.page)||1),i=(0,k.KR)(10),u=(0,k.KR)(e.query.search?e.query.search.toString().toLowerCase():""),c=(0,n.EW)((()=>u.value?l.value.filter((e=>e.name.toLowerCase().includes(u.value))):l.value)),p=(0,n.EW)((()=>{const e=(s.value-1)*i.value,t=e+i.value;return c.value.slice(e,t)})),d=(0,n.EW)((()=>Math.ceil(c.value.length/i.value))),g=e=>{o.value=e,a.value=!0,b()},m=()=>{a.value=!1,b()},v=e=>{s.value=e,b()},y=e=>{const t=c.value.findIndex((e=>e.name===o.value));if(-1!==t){const a=(t+e+c.value.length)%c.value.length;o.value=c.value[a].name,b()}},b=()=>{t.push({path:"/",query:{page:s.value.toString(),modal:a.value.toString(),pokemon:o.value,search:u.value}})};(0,n.wB)(e,(()=>{s.value=parseInt(e.query.page)||1,a.value="true"===e.query.modal,o.value=e.query.pokemon,u.value=e.query.search?e.query.search.toString().toLowerCase():""}));const h=()=>(0,x.sH)(this,void 0,void 0,(function*(){try{const e=yield O();l.value=e.results}catch(e){console.error("Failed to fetch Pokémon list:",e),r.value="Failed to load Pokémon. Please try again later."}}));return h(),{showModal:a,selectedPokemon:o,errorMessage:r,allPokemon:l,currentPage:s,itemsPerPage:i,searchQuery:u,filteredPokemon:c,paginatedPokemon:p,totalPages:d,capitalize:ae,openPokemonModal:g,closePokemonModal:m,goToPage:v,navigatePokemon:y}}});const he=(0,h.A)(be,[["render",q]]);var Pe=he;const Ce=[{path:"/",name:"Home",component:Pe,props:e=>({page:parseInt(e.query.page)||1,modal:"true"===e.query.modal,pokemon:e.query.pokemon||null})},{path:"/pokemon/:name",name:"PokemonPage",component:re,props:!0}],Le=(0,f.aE)({history:(0,f.LA)("/"),routes:Ce});var Ee=Le;(0,o.Ef)(C).use(Ee).mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,r){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],r=e[c][2];for(var s=!0,i=0;i<o.length;i++)(!1&r||l>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(s=!1,r<l&&(l=r));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,n,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,l=o[0],s=o[1],i=o[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(i)var c=i(a)}for(t&&t(o);u<l.length;u++)r=l[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},o=self["webpackChunkmy_vue_pokedex"]=self["webpackChunkmy_vue_pokedex"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(2750)}));o=a.O(o)})();
//# sourceMappingURL=app.52a8892a.js.map