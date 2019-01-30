(function(t){function e(e){for(var a,i,u=e[0],o=e[1],s=e[2],d=0,h=[];d<u.length;d++)i=u[d],r[i]&&h.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(h.length)h.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},c=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b59":function(t,e,n){"use strict";var a=n("9326"),r=n.n(a);r.a},"32ca":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Table")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("span",{staticClass:"table__title"},[t._v("current "+t._s(t.base_currency)+" exchange course")]),n("div",{staticClass:"table__button-wrapper"},[t.exchange_data?n("div",{staticClass:"table__button scale-in-center",class:{disabled:t.exchange_data&&Object.keys(t.exchange_data).includes("CAD")},on:{click:function(e){t.addCurrencyHandler(e,"CAD")}}},[t._v("Add CAD\n        ")]):t._e(),t.exchange_data?n("div",{staticClass:"table__button scale-in-center",class:{disabled:Object.keys(t.exchange_data).includes("JPY")},on:{click:function(e){t.addCurrencyHandler(e,"JPY")}}},[t._v("Add JPY\n        ")]):t._e()]),t.exchange_data?n("div",{staticClass:"table__container scale-in-center"},[n("transition-group",{attrs:{name:"slide-fade"}},t._l(t.exchange_data,function(e,a){return n("CurrencyRow",{key:e,attrs:{currency:a,rate:e}},[t._v(t._s(e)+"\n            ")])}),1)],1):t._e()])},u=[],o=n("cebc"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curr-row"},[n("span",{staticClass:"curr-row__title",class:{highlighted:t.highlight}},[t._v(t._s(t.currency)+": ")]),n("span",{staticClass:"curr-row__value",class:{highlighted:t.highlight}},[t._v(t._s(t.rate))]),n("div",{staticClass:"curr-row__update",on:{click:t.updateHandler}})])},l=[],d={name:"CurrencyRow",props:["currency","rate"],data:function(){return{highlight:!1}},methods:{updateHandler:function(){this.$store.dispatch("updateCurrency",{currency:this.currency,pointer:this,highlight_timeout:200})}}},h=d,p=(n("0b59"),n("2877")),f=Object(p["a"])(h,s,l,!1,null,"71108112",null),_=f.exports,b=n("2f62"),g={name:"Table",components:{CurrencyRow:_},computed:Object(o["a"])({},Object(b["b"])(["base_currency","exchange_data"])),methods:{addCurrencyHandler:function(t,e){t.preventDefault(),t.stopPropagation(),this.$store.dispatch("addCurrency",e)}}},y=g,v=(n("fd5e"),Object(p["a"])(y,i,u,!1,null,"59f0319b",null)),m=v.exports,x={name:"app",components:{Table:m},mounted:function(){this.$store.dispatch("fetchInitialData")}},C=x,w=(n("5c0b"),Object(p["a"])(C,r,c,!1,null,null,null)),O=w.exports,j=n("bc3a"),R=n.n(j);a["a"].use(b["a"]);var P=new b["a"].Store({state:{exchange_data:null,base_url:"https://api.exchangeratesapi.io/latest?base=",base_currency:"RUB"},mutations:{setRate:function(t,e){t.exchange_data[e.currency]=e.rate,e.point_update?e.point_update():t.exchange_data=Object(o["a"])({},t.exchange_data)}},actions:{updateCurrency:function(t,e){var n=t.state,a=t.commit;R.a.get("".concat(n.base_url).concat(n.base_currency)).then(function(t){a("setRate",{currency:e.currency,rate:t.data.rates[e.currency]}),e.pointer&&(e.pointer.highlight=!0,setTimeout(function(){e.pointer.highlight=!1},e.highlight_timeout))}).catch(function(t){return console.log(t)})},addCurrency:function(t,e){var n=t.state,a=t.commit;R.a.get("".concat(n.base_url).concat(n.base_currency)).then(function(t){a("setRate",{currency:e,rate:t.data.rates[e]})}).catch(function(t){return console.log(t)})},fetchInitialData:function(t){var e=t.state,n=t.commit;R.a.get("".concat(e.base_url).concat(e.base_currency)).then(function(t){e.exchange_data={};var a=t.data.rates;n("setRate",{currency:"USD",rate:a.USD}),n("setRate",{currency:"EUR",rate:a.EUR})}).catch(function(t){return console.log(t)})}}});a["a"].config.productionTip=!1,new a["a"]({store:P,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){},9326:function(t,e,n){},fd5e:function(t,e,n){"use strict";var a=n("32ca"),r=n.n(a);r.a}});
//# sourceMappingURL=app.1f07dff1.js.map