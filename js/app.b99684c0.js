(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],l=0,p=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({game:"game"}[e]||e)+"."+{game:"ba2484c2"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/datathon/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4fe7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("6dc4"),n("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),s=i.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-screen h-screen flex",attrs:{id:"home"}},[n("div",{staticClass:"m-auto text-center pb-24"},[e._m(0),n("h2",{staticClass:"text-2xl"},[e._v("ตรวจสอบ-เข้าใจ-ออกความเห็น ไปด้วยกัน")]),n("div",{staticClass:"mt-12"},[n("router-link",{staticClass:"rounded-full px-6 py-2 text-2xl",staticStyle:{"background-color":"#FECC2F","box-shadow":"0px 4px 10px #FECC2F"},attrs:{to:"/quiz"}},[e._v("เริ่มเล่น")])],1)])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"font-bold",staticStyle:{"font-size":"15vh"}},[e._v(" กรุงเทพ "),n("br"),e._v("ในฝัน ")])}],d={name:"Home",methods:{}},m=d,h=(n("83c3"),Object(u["a"])(m,f,p,!1,null,"c34b38fc",null)),b=h.exports;r["a"].use(l["a"]);var v,g=[{path:"/",name:"Home",component:b},{path:"/game",name:"Game",component:function(){return n.e("game").then(n.bind(null,"7d36"))}},{path:"/game-result",name:"GameResult",component:function(){return n.e("game").then(n.bind(null,"e740"))}},{path:"/quiz",name:"Quiz",component:function(){return n.e("game").then(n.bind(null,"2e44"))}},{path:"/explore",name:"Explore",component:function(){return n.e("game").then(n.bind(null,"7797"))}},{path:"/yourvoice",name:"YourVoice",component:function(){return n.e("game").then(n.bind(null,"fefd"))}},{path:"/construction",name:"Construction",component:function(){return n.e("game").then(n.bind(null,"4a5b"))}}],y=new l["a"]({routes:g}),x=y,w=n("ade3"),j=n("2f62"),O=n("0e44"),_=n("ec26"),C=n("7002");r["a"].use(j["a"]);var E=new j["a"].Store({state:(v={},Object(w["a"])(v,C["a"].User,{userId:Object(_["a"])()}),Object(w["a"])(v,C["a"].Quiz,{}),Object(w["a"])(v,C["a"].Game,{}),v),mutations:{saveToStore:function(e,t){var n=t.collection,o=t.data;r["a"].set(e,n,o)}},plugins:[Object(O["a"])()]}),P=n("0ff2");n("ba8c"),n("a3ad");r["a"].config.productionTip=!1,r["a"].use(P["a"]),new r["a"]({router:x,store:E,render:function(e){return e(s)}}).$mount("#app")},"659b":function(e,t,n){},"6dc4":function(e,t,n){"use strict";var r=n("659b"),o=n.n(r);o.a},7002:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={User:"user",Quiz:"quiz",Game:"game"}},"83c3":function(e,t,n){"use strict";var r=n("4fe7"),o=n.n(r);o.a},a3ad:function(e,t,n){},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.b99684c0.js.map