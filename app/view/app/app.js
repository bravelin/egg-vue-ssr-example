!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={},n={0:0};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(e){if(0!==n[e]){var r=require("./"+({}[e]||e)+".js"),o=r.modules,i=r.ids;for(var a in o)t[a]=o[a];for(var s=0;s<i.length;s++)n[i[s]]=0}return Promise.all([])},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/public/",r.oe=function(t){process.nextTick(function(){throw t})},r(r.s=19)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c=typeof(t=t||{}).default;"object"!==c&&"function"!==c||(t=t.default);var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId=i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var p=l.render;l.render=function(t,e){return u.call(e),p(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}n.d(e,"a",function(){return r})},function(t,e){t.exports=require("vuex")},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";function r(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var i=r._styles||(r._styles={});e=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}(t,e),n?function(t,e){for(var n=0;n<e.length;n++)for(var r=e[n].parts,o=0;o<r.length;o++){var i=r[o],a=i.media||"default",s=t[a];s?s.ids.indexOf(i.id)<0&&(s.ids.push(i.id),s.css+="\n"+i.css):t[a]={ids:[i.id],css:i.css,media:i.media}}}(i,e):function(t,e){for(var n=0;n<e.length;n++)for(var r=e[n].parts,o=0;o<r.length;o++){var i=r[o];t[i.id]={ids:[i.id],css:i.css,media:i.media}}}(i,e)}}function o(t){var e="";for(var n in t){var r=t[n];e+='<style data-vue-ssr-id="'+r.ids.join(" ")+'"'+(r.media?' media="'+r.media+'"':"")+">"+r.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return r})},function(t,e){t.exports=require("axios")},function(t,e){("object"==typeof t&&"object"==typeof t.exports?t.exports:window).noop=function(){}},function(t,e){t.exports=require("vue-router")},function(t,e){t.exports=require("vuex-router-sync")},function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n(4).default;t.exports.__inject__=function(t){o("5e8aa669",r,!1,t)}},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"",""])},function(t,e,n){t.exports=n.p+"img/loading.0c81ad12.gif"},function(t,e){},function(t,e,n){var r=n(14);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n(4).default;t.exports.__inject__=function(t){o("4416133c",r,!1,t)}},function(t,e,n){(e=t.exports=n(3)(!1)).i(n(6),""),e.push([t.i,"body{margin:0}a{text-decoration:none}",""])},function(t,e,n){var r=n(16);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n(4).default;t.exports.__inject__=function(t){o("5f9dcaca",r,!1,t)}},function(t,e,n){(e=t.exports=n(3)(!1)).i(n(6),""),e.push([t.i,"",""])},function(t,e,n){var r=n(18);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n(4).default;t.exports.__inject__=function(t){o("4da829b6",r,!1,t)}},function(t,e,n){(e=t.exports=n(3)(!1)).i(n(6),""),e.push([t.i,"",""])},function(t,e,n){"use strict";n.r(e);var r=n(8),o=n(0),i=n.n(o),a=n(2),s=n.n(a),c=n(5),u=n.n(c);i.a.use(s.a);var l,p="http://127.0.0.1:7001",d={FETCH_ARTICLE_LIST:function(t){var e=t.commit;t.dispatch;return t.state.articleList.length?Promise.resolve():u.a.get(p+"/api/article/list").then(function(t){var n=t.data.list;return e("SET_ARTICLE_LIST",n),n})},FETCH_ARTICLE_DETAIL:function(t,e){var n=t.commit,r=(t.dispatch,t.state),o=e.id;return r.article.id!=o?u.a.get(p+"/api/article/"+o).then(function(t){var e=t.data;n("SET_ARTICLE_DETAIL",e)}):Promise.resolve()}},f={};function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=(_(l={},"SET_ARTICLE_LIST",function(t,e){t.articleList=e}),_(l,"SET_ARTICLE_DETAIL",function(t,e){t.article=e}),l);i.a.use(s.a);var m=new s.a.Store({state:{articleList:[],article:{}},actions:d,getters:f,mutations:v}),h=n(7),g=n.n(h),y={computed:{isLoading:function(){return!1},articleList:function(){return this.$store.state.articleList}},preFetch:function(t){t.state;var e=t.dispatch;t.commit;return Promise.all([e("FETCH_ARTICLE_LIST")])},beforeMount:function(){return Promise.all([this.$store.dispatch("FETCH_ARTICLE_LIST")])}},b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"font-size":"24px","text-align":"center"}},[t._ssrNode('<div class="container smart-container">',"</div>",[t._ssrNode('<div class="row row-offcanvas row-offcanvas-right">',"</div>",[t._ssrNode('<div class="col-xs-12 col-sm-9">',"</div>",[t._ssrNode('<ul id="articleList" class="smart-artiles">',"</ul>",t._l(t.articleList,function(e){return t._ssrNode("<li>","</li>",[t._ssrNode('<div class="point">'+t._ssrEscape("+"+t._s(e.hits))+"</div> "),t._ssrNode('<div class="card">',"</div>",[t._ssrNode("<h2>","</h2>",[r("router-link",{staticClass:"nav-item-a",attrs:{to:"/detail/"+e.id}},[t._v(t._s(e.title))])],1),t._ssrNode(' <div><ul class="actions"><li><time class="timeago">'+t._ssrEscape(t._s(e.moduleName))+'</time></li> <li class="tauthor"><a href="#" target="_blank" class="get">Sky</a></li> <li><a'+t._ssrAttr("href",e.url)+' target="_blank">原文</a></li> <li><span class="timeago">'+t._ssrEscape(t._s(e.summary))+'</span></li> <li><span class="timeago"></span></li></ul></div>')],2)],2)})),t._ssrNode(" "+(t.isLoading?'<div id="pagerBottom" class="smart-pager"><img'+t._ssrAttr("src",n(11))+"></div>":"\x3c!----\x3e"))],2)])])])};b._withStripped=!0;var w=n(1);var x=function(t){var e;(e=n(9)).__inject__&&e.__inject__(t)},T=Object(w.a)(y,b,[],!1,x,null,"d1477bb2");T.options.__file="app/web/component/app/list.vue";var j=T.exports;i.a.use(g.a);var E=new g.a({mode:"history",base:"/",routes:[{path:"/",component:j},{path:"/list",component:j},{path:"/detail/:id",component:function(){return n.e(1).then(n.bind(null,22))}}]}),L=function(){var t=this.$createElement,e=this._self._c||t;return e("app-layout",[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)};L._withStripped=!0;var S=Object(w.a)({computed:{},mounted:function(){}},L,[],!1,null,null,"5ae22508");S.options.__file="app/web/page/app/app.vue";var C=S.exports;i.a.filter("removeHtml",function(t){return t&&t.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,"")});n(12);var O={data:function(){return{selectedMenu:"/app"}},computed:{},mounted:function(){this.selectedMenu=window.location.pathname.toLowerCase().replace(/\/$/,"")}},I=function(){var t=this.$createElement;return(this._self._c||t)("header",{staticClass:"header"},[this._ssrNode('<div class="container"><h1><a href class="router-link-active">Egg + Vue</a></h1> <ul class="nav"><li class="nav-item"><a href="/"'+this._ssrClass(null,{active:"/"===this.selectedMenu})+">Single-Page</a></li></ul></div>")])};I._withStripped=!0;var N=function(t){var e;(e=n(15)).__inject__&&e.__inject__(t)},A=Object(w.a)(O,I,[],!1,N,null,"c10b7cd2");A.options.__file="app/web/component/layout/app/header/header.vue";var P=A.exports,$=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"main"},[this._ssrNode('<div class="page-container page-component">',"</div>",[this._t("content")],2)])};$._withStripped=!0;var R=function(t){var e;(e=n(17)).__inject__&&e.__inject__(t)},k=Object(w.a)({name:"v-content",data:function(){return{}},components:{},mounted:function(){}},$,[],!1,R,null,"60bad02b");k.options.__file="app/web/component/layout/app/content/content.vue";var M={components:{LayoutHeader:P,LayoutContent:k.exports}},q=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("LayoutHeader"),this._ssrNode(" "),e("LayoutContent",[e("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],2)};q._withStripped=!0;var F=function(t){var e;(e=n(13)).__inject__&&e.__inject__(t)},H=Object(w.a)(M,q,[],!1,F,null,"289987a1");H.options.__file="app/web/component/layout/app/main.vue";var U={name:"AppLayout",props:["title","description","keywords"],components:{MainLayout:H.exports},computed:{vTitle:function(){return this.$root.title||this.title||"Egg + Vue"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass}},template:'<!DOCTYPE html>\n                <html lang="en">\n                  <head>\n                    <title>{{vTitle}}</title>\n                    <meta name="keywords" :content="vKeywords">\n                    <meta name="description" :content="vDescription">\n                    <meta http-equiv="content-type" content="text/html;charset=utf-8">\n                    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">\n                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n                    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css">\n                  </head>\n                  <body :class="baseClass">\n                    <div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>\n                  </body>\n                </html>'};i.a.component(U.name,U);var D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},V={data:function(){return window.__INITIAL_STATE__||{}},init:function(t){return V.server(t)},client:function(t){i.a.prototype.$http=n(5),t.store?t.store.replaceState(D({},V.data(),t.store.state)):window.__INITIAL_STATE__&&(t.data=D(window.__INITIAL_STATE__,t.data&&t.data())),new i.a(t).$mount("#app")},server:function(t){return t.store&&t.router?function(e){t.router.push(e.state.url);var n=t.router.getMatchedComponents();return n?Promise.all(n.map(function(e){return e.preFetch?e.preFetch(t.store):null})).then(function(){return e.state=D(t.store.state,e.state),new i.a(t)}):Promise.reject({code:"404"})}:function(e){var n=new(i.a.extend(t))({data:e.state});return new Promise(function(t){t(n)})}},use:function(t){i.a.use(t)},component:function(t,e){i.a.component(t,e)}},X=V,K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};X.component(U.name,U),Object(r.sync)(m,E);e.default=X.init(K({base:"/app"},C,{router:E,store:m}))}]));