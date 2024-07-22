(function(){"use strict";var e={7846:function(e,t,n){var a=n(9242),r=n(3396),o=n(7139),i=function(e){return(0,r.dD)("data-v-05084265"),e=e(),(0,r.Cn)(),e},s={class:"py-3 mb-4 border-bottom"},l={class:"container d-flex flex-wrap justify-content-center"},u={class:"fs-4"},c=["src"],p={class:"col-12 col-lg-auto mb-3 mb-lg-0",role:"search"},d={class:"py-3"},g={class:"container"},m={class:"text-center text-body-secondary"},f=i((function(){return(0,r._)("a",{target:"_blank",title:"Tom Metcalfe Github",href:"https://github.com/iamtommetcalfe"},"Tom Metcalfe",-1)}));function v(e,t,n,i,v,h){var k=(0,r.up)("router-link"),P=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("main",null,[(0,r._)("header",s,[(0,r._)("div",l,[(0,r.Wm)(k,{to:"/",class:"d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"},{default:(0,r.w5)((function(){return[(0,r._)("span",u,[(0,r._)("img",{src:e.pokemonLogo,alt:"Pokemon Logo",class:"d-inline-block align-top",width:"120",height:"67"},null,8,c)])]})),_:1}),(0,r._)("form",p,[(0,r.wy)((0,r._)("input",{type:"search","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.searchQuery=t}),class:"form-control",placeholder:"Search...","aria-label":"Search"},null,512),[[a.nr,e.searchQuery]])])])]),(0,r.Wm)(P,{class:"container",searchQuery:e.searchQuery},null,8,["searchQuery"]),(0,r._)("footer",d,[(0,r._)("div",g,[(0,r._)("p",m,[(0,r.Uk)("© "+(0,o.zw)((new Date).getFullYear())+" ",1),f])])])])}var h=(0,r.aZ)({name:"App",data:function(){return{pokemonLogo:n(2088),searchQuery:""}}}),k=n(89);const P=(0,k.Z)(h,[["render",v],["__scopeId","data-v-05084265"]]);var b=P,y=n(2483),w={class:"container"},_=(0,r._)("h1",null,"Welcome to My Vue Pokédex",-1),D={key:0,class:"alert alert-danger"},M={key:1,class:"table table-hover table-striped table-bordered"},x=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"Name")])],-1),C=["onClick"];function N(e,t,n,i,s,l){var u=(0,r.up)("PaginationBar"),c=(0,r.up)("PokemonPage"),p=(0,r.up)("PokemonModal");return(0,r.wg)(),(0,r.iD)("div",w,[_,e.errorMessage?((0,r.wg)(),(0,r.iD)("div",D,(0,o.zw)(e.errorMessage),1)):((0,r.wg)(),(0,r.iD)("table",M,[x,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.paginatedPokemon,(function(t){return(0,r.wg)(),(0,r.iD)("tr",{key:t.name},[(0,r._)("td",null,[(0,r._)("a",{href:"#",onClick:(0,a.iM)((function(n){return e.openPokemonModal(t.name)}),["prevent"])},(0,o.zw)(e.capitalize(t.name)),9,C)])])})),128))]),(0,r._)("tfoot",null,[(0,r._)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(u,{currentPage:e.currentPage,totalPages:e.totalPages,onNavigatePage:e.goToPage,canNavigatePrevious:e.currentPage>1,canNavigateNext:e.currentPage<e.totalPages},null,8,["currentPage","totalPages","onNavigatePage","canNavigatePrevious","canNavigateNext"])])])])])),(0,r.Wm)(p,{isVisible:e.showModal,onClose:t[0]||(t[0]=function(t){return e.showModal=!1})},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{name:e.selectedPokemon},null,8,["name"])]})),_:1},8,["isVisible"])])}n(560);var z=n(199),q=n(4870),O=n(9882),H="https://pokeapi.co/api/v2",Z=function(e){return(0,z.mG)(void 0,void 0,void 0,(function(){var t,n;return(0,z.Jh)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,O.Z.get("".concat(H,"/pokemon/").concat(e))];case 1:return t=a.sent(),[2,t.data];case 2:throw n=a.sent(),console.error("Error fetching Pokémon named ".concat(e,":"),n),n;case 3:return[2]}}))}))},j=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,z.mG)(void 0,(0,z.ev)([],e,!0),void 0,(function(e,t){var n,a;return void 0===e&&(e=2e3),void 0===t&&(t=0),(0,z.Jh)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,O.Z.get("".concat(H,"/pokemon"),{params:{limit:e,offset:t}})];case 1:return n=r.sent(),[2,n.data];case 2:throw a=r.sent(),console.error("Failed to fetch Pokémon list:",a),a;case 3:return[2]}}))}))},S=(0,r.aZ)({__name:"PokemonModal",props:{isVisible:Boolean},emits:["close"],setup:function(e,t){var n=t.emit,o=n,i=function(){o("close")};return function(t,n){return(0,r.wg)(),(0,r.j4)(a.uT,{name:"modal-fade"},{default:(0,r.w5)((function(){return[e.isVisible?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"modal-backdrop",onClick:i},[(0,r._)("div",{class:"modal-content",onClick:n[0]||(n[0]=(0,a.iM)((function(){}),["stop"]))},[(0,r.WI)(t.$slots,"default")])])):(0,r.kq)("",!0)]})),_:3})}}});const T=(0,k.Z)(S,[["__scopeId","data-v-5423bcaa"]]);var Q=T,G=function(e){return(0,r.dD)("data-v-44a98b18"),e=e(),(0,r.Cn)(),e},F={key:0},W=G((function(){return(0,r._)("p",null,"Loading Pokémon details...",-1)})),B=[W],V={key:1},$={class:"pokemon-card-header"},L={class:"pokemon-card-image"},U=["src"],Y={class:"pokemon-card-details"},I={key:0},J=G((function(){return(0,r._)("b",null,"Type: ",-1)})),K={key:0},E={key:1},A=G((function(){return(0,r._)("b",null,"Stats: ",-1)})),R={key:0},X={key:2},ee={class:"alert alert-danger"};function te(e,t,n,a,i,s){return(0,r.wg)(),(0,r.iD)("div",null,[e.loading?((0,r.wg)(),(0,r.iD)("div",F,B)):e.pokemonDetails?((0,r.wg)(),(0,r.iD)("div",V,[(0,r._)("div",$,[(0,r._)("h1",null,(0,o.zw)(e.capitalize(e.pokemonDetails.name)),1)]),(0,r._)("div",L,[e.pokemonDetails.sprites&&e.pokemonDetails.sprites.front_default?((0,r.wg)(),(0,r.iD)("img",{key:0,src:e.pokemonDetails.sprites.front_default,alt:"Pokemon image"},null,8,U)):(0,r.kq)("",!0)]),(0,r._)("div",Y,[e.pokemonDetails.types&&e.pokemonDetails.types.length>0?((0,r.wg)(),(0,r.iD)("p",I,[J,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.pokemonDetails.types,(function(t,n){return(0,r.wg)(),(0,r.iD)("span",{key:n},[(0,r.Uk)((0,o.zw)(e.capitalize(t.type.name)),1),n<e.pokemonDetails.types.length-1?((0,r.wg)(),(0,r.iD)("span",K,", ")):(0,r.kq)("",!0)])})),128))])):(0,r.kq)("",!0),e.pokemonDetails.stats&&e.pokemonDetails.stats.length>0?((0,r.wg)(),(0,r.iD)("p",E,[A,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.pokemonDetails.stats,(function(t,n){return(0,r.wg)(),(0,r.iD)("span",{key:n},[(0,r.Uk)((0,o.zw)(e.capitalize(t.stat.name))+" (Base: "+(0,o.zw)(t.base_stat)+", Effort: "+(0,o.zw)(t.effort)+")",1),n<e.pokemonDetails.stats.length-1?((0,r.wg)(),(0,r.iD)("span",R,", ")):(0,r.kq)("",!0)])})),128))])):(0,r.kq)("",!0)])])):e.errorMessage?((0,r.wg)(),(0,r.iD)("div",X,[(0,r._)("p",ee,(0,o.zw)(e.errorMessage),1)])):(0,r.kq)("",!0)])}function ne(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""}var ae=(0,r.aZ)({props:{name:String},setup:function(e){var t=this,n=(0,q.iH)(null),a=(0,q.iH)(!0),o=(0,q.iH)(null);return(0,r.bv)((function(){return(0,z.mG)(t,void 0,void 0,(function(){var t,r;return(0,z.Jh)(this,(function(i){switch(i.label){case 0:if(!e.name)return[3,6];i.label=1;case 1:return i.trys.push([1,3,4,5]),t=n,[4,Z(e.name)];case 2:return t.value=i.sent(),[3,5];case 3:return r=i.sent(),console.error("Failed to fetch Pokémon details:",r),o.value="Failed to load Pokémon details. Please try again later.",[3,5];case 4:return a.value=!1,[7];case 5:return[3,7];case 6:o.value="Pokémon name is not provided.",a.value=!1,i.label=7;case 7:return[2]}}))}))})),{pokemonDetails:n,loading:a,errorMessage:o,capitalize:ne}}});const re=(0,k.Z)(ae,[["render",te],["__scopeId","data-v-44a98b18"]]);var oe=re,ie={class:"btn-toolbar align-items-center justify-content-center",role:"toolbar","aria-label":"Toolbar with button groups"},se={class:"btn-group btn-group-sm me-2",role:"group","aria-label":"Previous Group"},le=["disabled"],ue={class:"btn-group btn-group-sm me-2",role:"group","aria-label":"Pages Group"},ce={key:0},pe=["onClick"],de={key:1},ge={class:"btn-group btn-group-sm me-2",role:"group","aria-label":"Next Group"},me=["disabled"];function fe(e,t,n,a,i,s){return(0,r.wg)(),(0,r.iD)("div",ie,[(0,r._)("div",se,[(0,r._)("button",{class:"btn btn-primary",disabled:!e.canNavigatePrevious,onClick:t[0]||(t[0]=function(t){return e.$emit("navigatePage",e.currentPage-1)})}," Previous ",8,le)]),(0,r._)("div",ue,[(0,r._)("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("navigatePage",1)}),class:(0,o.C_)(["btn","btn-primary",{active:1===e.currentPage}])},"1",2),e.currentPage>3?((0,r.wg)(),(0,r.iD)("span",ce,"...")):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.displayedPages,(function(t){return(0,r.wg)(),(0,r.iD)("button",{key:t,class:(0,o.C_)(["btn","btn-primary",{active:t===e.currentPage}]),onClick:function(n){return e.$emit("navigatePage",t)}},(0,o.zw)(t),11,pe)})),128)),e.currentPage<e.totalPages-2?((0,r.wg)(),(0,r.iD)("span",de,"...")):(0,r.kq)("",!0),e.totalPages>1?((0,r.wg)(),(0,r.iD)("button",{key:2,onClick:t[2]||(t[2]=function(t){return e.$emit("navigatePage",e.totalPages)}),class:"test btn btn-primary btn-sm"},(0,o.zw)(e.totalPages),1)):(0,r.kq)("",!0)]),(0,r._)("div",ge,[(0,r._)("button",{class:"btn btn-primary",disabled:!e.canNavigateNext,onClick:t[3]||(t[3]=function(t){return e.$emit("navigatePage",e.currentPage+1)})}," Next ",8,me)])])}var ve=(0,r.aZ)({props:{totalPages:{type:Number,required:!0},currentPage:{type:Number,required:!0},canNavigatePrevious:{type:Boolean,required:!0},canNavigateNext:{type:Boolean,required:!0}},computed:{displayedPages:function(){for(var e=[],t=0,n=[-2,-1,0,1,2];t<n.length;t++){var a=n[t],r=this.currentPage+a;r>1&&r<this.totalPages&&e.push(r)}return e}}});const he=(0,k.Z)(ve,[["render",fe]]);var ke=he,Pe=(0,r.aZ)({name:"HomeDefault",props:{searchQuery:{type:String,default:""}},components:{PaginationBar:ke,PokemonModal:Q,PokemonPage:oe},watch:{searchQuery:{immediate:!0,handler:function(e,t){e!==t&&(this.currentPage=1)}}},data:function(){return{allPokemon:[],currentPage:1,itemsPerPage:10}},computed:{filteredPokemon:function(){var e=this;return this.searchQuery?this.allPokemon.filter((function(t){return t.name.includes(e.searchQuery.toLowerCase())})):this.allPokemon},paginatedPokemon:function(){var e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;return this.filteredPokemon.slice(e,t)},totalPages:function(){return Math.ceil(this.filteredPokemon.length/this.itemsPerPage)}},methods:{capitalize:ne,openPokemonModal:function(e){this.selectedPokemon=e,this.showModal=!0},goToPage:function(e){this.currentPage=e}},created:function(){return(0,z.mG)(this,void 0,void 0,(function(){var e,t;return(0,z.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,j()];case 1:return e=n.sent(),this.allPokemon=e.results,[3,3];case 2:return t=n.sent(),console.error("Failed to fetch Pokémon list:",t),this.errorMessage="Failed to load Pokémon. Please try again later.",[3,3];case 3:return[2]}}))}))},setup:function(){var e=(0,q.iH)(!1),t=(0,q.iH)(null),n=(0,q.iH)(null);return{showModal:e,selectedPokemon:t,errorMessage:n}}});const be=(0,k.Z)(Pe,[["render",N]]);var ye=be,we=[{path:"/",name:"Home",component:ye},{path:"/pokemon/:name",name:"PokemonPage",component:oe,props:!0}],_e=(0,y.p7)({history:(0,y.PO)("/my-vue-pokedex/"),routes:we}),De=_e;(0,a.ri)(b).use(De).mount("#app")},2088:function(e,t,n){e.exports=n.p+"img/pokemon-large.14f5d54f.png"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/my-vue-pokedex/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],s=a[1],l=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(t&&t(a);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkmy_vue_pokedex"]=self["webpackChunkmy_vue_pokedex"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7846)}));a=n.O(a)})();
//# sourceMappingURL=app.b3b2a5f9.js.map