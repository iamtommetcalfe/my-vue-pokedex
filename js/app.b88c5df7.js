(function(){"use strict";var e={2024:function(e,t,n){var r=n(9242),o=n(3396),a=n(7139),i=function(e){return(0,o.dD)("data-v-2a193238"),e=e(),(0,o.Cn)(),e},l={class:"py-3 mb-4 border-bottom"},s={class:"container d-flex flex-wrap justify-content-center"},u={href:"/",class:"d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"},c={class:"fs-4"},d=["src"],p={class:"col-12 col-lg-auto mb-3 mb-lg-0",role:"search"},m={class:"py-3 bg-body-secondary"},g={class:"container"},f={class:"text-center text-body-secondary"},h=i((function(){return(0,o._)("a",{target:"_blank",title:"Tom Metcalfe Github",href:"https://github.com/iamtommetcalfe"},"Tom Metcalfe",-1)}));function v(e,t,n,i,v,k){var b=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("main",null,[(0,o._)("header",l,[(0,o._)("div",s,[(0,o._)("a",u,[(0,o._)("span",c,[(0,o._)("img",{src:e.pokemonLogo,alt:"Pokemon Logo",class:"d-inline-block align-top",width:"120",height:"67"},null,8,d)])]),(0,o._)("form",p,[(0,o.wy)((0,o._)("input",{type:"search","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.searchQuery=t}),class:"form-control",placeholder:"Search...","aria-label":"Search"},null,512),[[r.nr,e.searchQuery]])])])]),(0,o.Wm)(b,{class:"container",searchQuery:e.searchQuery},null,8,["searchQuery"]),(0,o._)("footer",m,[(0,o._)("div",g,[(0,o._)("p",f,[(0,o.Uk)("© "+(0,a.zw)((new Date).getFullYear())+" ",1),h])])])])}var k=(0,o.aZ)({name:"App",data:function(){return{pokemonLogo:n(2088),searchQuery:""}}}),b=n(89);const P=(0,b.Z)(k,[["render",v],["__scopeId","data-v-2a193238"]]);var y=P,w=n(2483),_={class:"container"},D=(0,o._)("h1",null,"Welcome to My Vue Pokédex",-1),x={key:0,class:"alert alert-danger"},M={key:1,class:"table table-hover table-striped table-bordered"},C=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"Name")])],-1),U=["onClick"];function z(e,t,n,i,l,s){var u=(0,o.up)("PaginationBar"),c=(0,o.up)("PokemonPage"),d=(0,o.up)("PokemonModal");return(0,o.wg)(),(0,o.iD)("div",_,[D,e.errorMessage?((0,o.wg)(),(0,o.iD)("div",x,(0,a.zw)(e.errorMessage),1)):((0,o.wg)(),(0,o.iD)("table",M,[C,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.paginatedPokemon,(function(t){return(0,o.wg)(),(0,o.iD)("tr",{key:t.name},[(0,o._)("td",null,[(0,o._)("a",{href:"#",onClick:(0,r.iM)((function(n){return e.openPokemonModal(t.name)}),["prevent"])},(0,a.zw)(e.capitalize(t.name)),9,U)])])})),128))]),(0,o._)("tfoot",null,[(0,o._)("tr",null,[(0,o._)("td",null,[(0,o.Wm)(u,{currentPage:e.currentPage,totalPages:e.totalPages,onNavigatePage:e.goToPage},null,8,["currentPage","totalPages","onNavigatePage"])])])])])),e.showModal?((0,o.wg)(),(0,o.j4)(d,{key:2,onClose:t[0]||(t[0]=function(t){return e.showModal=!1})},{default:(0,o.w5)((function(){return[(0,o.Wm)(c,{name:e.selectedPokemon},null,8,["name"])]})),_:1})):(0,o.kq)("",!0)])}n(7658);var O=n(199),Z=n(4870),H=n(4161),T="https://pokeapi.co/api/v2",j=function(e){return(0,O.mG)(void 0,void 0,void 0,(function(){var t,n;return(0,O.Jh)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,H.Z.get("".concat(T,"/pokemon/").concat(e))];case 1:return t=r.sent(),[2,t.data];case 2:throw n=r.sent(),console.error("Error fetching Pokémon named ".concat(e,":"),n),n;case 3:return[2]}}))}))},q=function(e,t){return void 0===e&&(e=2e3),void 0===t&&(t=0),(0,O.mG)(void 0,void 0,void 0,(function(){var n,r;return(0,O.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,H.Z.get("".concat(T,"/pokemon"),{params:{limit:e,offset:t}})];case 1:return n=o.sent(),[2,n.data];case 2:throw r=o.sent(),console.error("Failed to fetch Pokémon list:",r),r;case 3:return[2]}}))}))},Q={__name:"PokemonModal",emits:["close"],setup(e,{emit:t}){const n=()=>{t("close")};return(e,t)=>((0,o.wg)(),(0,o.j4)(r.uT,{name:"modal-fade"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"modal-backdrop",onClick:n},[(0,o._)("div",{class:"modal-content",onClick:t[0]||(t[0]=(0,r.iM)((()=>{}),["stop"]))},[(0,o.WI)(e.$slots,"default")])])])),_:3}))}};const F=(0,b.Z)(Q,[["__scopeId","data-v-926217fa"]]);var S=F,N={key:0},$=(0,o._)("p",null,"Loading Pokémon details...",-1),G=[$],L={key:1},W=["src"],I={key:2},J={class:"alert alert-danger"};function Y(e,t,n,r,i,l){return(0,o.wg)(),(0,o.iD)("div",null,[e.loading?((0,o.wg)(),(0,o.iD)("div",N,G)):e.pokemonDetails?((0,o.wg)(),(0,o.iD)("div",L,[(0,o._)("h1",null,(0,a.zw)(e.capitalize(e.pokemonDetails.name)),1),e.pokemonDetails.sprites&&e.pokemonDetails.sprites.front_default?((0,o.wg)(),(0,o.iD)("img",{key:0,src:e.pokemonDetails.sprites.front_default,alt:"Pokemon image"},null,8,W)):(0,o.kq)("",!0),(0,o._)("p",null,"Type: "+(0,a.zw)(e.pokemonDetails.types[0].type.name),1)])):e.errorMessage?((0,o.wg)(),(0,o.iD)("div",I,[(0,o._)("p",J,(0,a.zw)(e.errorMessage),1)])):(0,o.kq)("",!0)])}function A(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""}var B=(0,o.aZ)({props:{name:String},setup:function(e){var t=this,n=(0,Z.iH)(null),r=(0,Z.iH)(!0),a=(0,Z.iH)(null);return(0,o.bv)((function(){return(0,O.mG)(t,void 0,void 0,(function(){var t,o;return(0,O.Jh)(this,(function(i){switch(i.label){case 0:if(!e.name)return[3,6];i.label=1;case 1:return i.trys.push([1,3,4,5]),[4,j(e.name)];case 2:return t=i.sent(),n.value=t,[3,5];case 3:return o=i.sent(),console.error("Failed to fetch Pokémon details:",o),a.value="Failed to load Pokémon details. Please try again later.",[3,5];case 4:return r.value=!1,[7];case 5:return[3,7];case 6:a.value="Pokémon name is not provided.",r.value=!1,i.label=7;case 7:return[2]}}))}))})),{pokemonDetails:n,loading:r,errorMessage:a,capitalize:A}}});const E=(0,b.Z)(B,[["render",Y]]);var K=E,V={class:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},R={class:"btn-group me-2",role:"group","aria-label":"First group"},X=["data-url"],ee={class:"btn-group me-2",role:"group","aria-label":"Second group"},te={key:1},ne=["onClick"],re={key:2},oe={class:"btn-group",role:"group","aria-label":"Third group"},ae=["data-url"];function ie(e,t,n,r,i,l){return(0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("div",R,[(0,o._)("button",{id:"previous-btn",type:"button",class:(0,a.C_)(["btn btn-primary btn-sm",{disabled:!e.previousUrl}]),"data-url":e.previousUrl,onClick:t[0]||(t[0]=function(t){return e.previousUrl?e.$emit("navigate",e.previousUrl):null})}," Previous ",10,X)]),(0,o._)("div",ee,[e.currentPage>2?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t[1]||(t[1]=function(t){return e.$emit("navigatePage",1)}),class:"btn btn-primary btn-sm"},"1")):(0,o.kq)("",!0),e.currentPage>3?((0,o.wg)(),(0,o.iD)("span",te,"...")):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.displayedPages,(function(t){return(0,o.wg)(),(0,o.iD)("button",{key:t,class:(0,a.C_)(["btn","btn-primary","btn-sm",{active:t===e.currentPage}]),onClick:function(n){return e.$emit("navigatePage",t)}},(0,a.zw)(t),11,ne)})),128)),e.currentPage<e.totalPages-2?((0,o.wg)(),(0,o.iD)("span",re,"...")):(0,o.kq)("",!0),e.currentPage<e.totalPages-1?((0,o.wg)(),(0,o.iD)("button",{key:3,onClick:t[2]||(t[2]=function(t){return e.$emit("navigatePage",e.totalPages)}),class:"btn btn-primary btn-sm"},(0,a.zw)(e.totalPages),1)):(0,o.kq)("",!0)]),(0,o._)("div",oe,[(0,o._)("button",{id:"next-btn",type:"button",class:(0,a.C_)(["btn btn-primary btn-sm",{disabled:!e.nextUrl}]),"data-url":e.nextUrl,onClick:t[3]||(t[3]=function(t){return e.nextUrl?e.$emit("navigate",e.nextUrl):null})}," Next ",10,ae)])])}var le=(0,o.aZ)({props:{totalPages:{type:Number,required:!0},currentPage:{type:Number,required:!0},nextUrl:{type:String,default:null},previousUrl:{type:String,default:null}},computed:{displayedPages:function(){for(var e=[],t=0,n=[-2,-1,0,1,2];t<n.length;t++){var r=n[t],o=this.currentPage+r;o>0&&o<=this.totalPages&&e.push(o)}return e}}});const se=(0,b.Z)(le,[["render",ie],["__scopeId","data-v-1de2a4a7"]]);var ue=se,ce=(0,o.aZ)({name:"HomeDefault",props:{searchQuery:{type:String,default:""}},components:{PaginationBar:ue,PokemonModal:S,PokemonPage:K},data:function(){return{allPokemon:[],currentPage:1,itemsPerPage:10}},computed:{filteredPokemon:function(){var e=this;return this.searchQuery?this.allPokemon.filter((function(t){return t.name.includes(e.searchQuery.toLowerCase())})):this.allPokemon},paginatedPokemon:function(){var e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;return this.filteredPokemon.slice(e,t)},totalPages:function(){return Math.ceil(this.filteredPokemon.length/this.itemsPerPage)}},methods:{capitalize:A,openPokemonModal:function(e){this.selectedPokemon=e,this.showModal=!0},goToPage:function(e){this.currentPage=e}},created:function(){return(0,O.mG)(this,void 0,void 0,(function(){var e,t;return(0,O.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,q()];case 1:return e=n.sent(),this.allPokemon=e.results,[3,3];case 2:return t=n.sent(),console.error("Failed to fetch Pokémon list:",t),this.errorMessage="Failed to load Pokémon. Please try again later.",[3,3];case 3:return[2]}}))}))},setup:function(){var e=(0,Z.iH)(!1),t=(0,Z.iH)(null),n=(0,Z.iH)(null);return{showModal:e,selectedPokemon:t,errorMessage:n}}});const de=(0,b.Z)(ce,[["render",z]]);var pe=de,me=[{path:"/",name:"Home",component:pe},{path:"/pokemon/:name",name:"PokemonPage",component:K,props:!0}],ge=(0,w.p7)({history:(0,w.PO)("/my-vue-pokedex/"),routes:me}),fe=ge;(0,r.ri)(y).use(fe).mount("#app")},2088:function(e,t,n){e.exports=n.p+"img/pokemon-large.14f5d54f.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/my-vue-pokedex/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],l=r[1],s=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var c=s(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkmy_vue_pokedex"]=self["webpackChunkmy_vue_pokedex"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2024)}));r=n.O(r)})();
//# sourceMappingURL=app.b88c5df7.js.map