(function(){"use strict";var e={8783:function(e,t,n){var o=n(5130),r=n(6768);function i(e,t){const n=(0,r.g2)("router-link"),o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",null,[(0,r.bF)(n,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.eW)(" | "),(0,r.bF)(n,{to:"/cart"},{default:(0,r.k6)((()=>[(0,r.eW)("CART")])),_:1}),(0,r.eW)(" | "),(0,r.bF)(n,{to:"/main"},{default:(0,r.k6)((()=>[(0,r.eW)("MAIN")])),_:1})]),(0,r.bF)(o)],64)}var a=n(1241);const c={},u=(0,a.A)(c,[["render",i]]);var s=u,f=n(1387);const d={class:"home"},l=(0,r.Lk)("a",{href:"/about"},"lego",-1);function m(e,t,n,i,a,c){return(0,r.uX)(),(0,r.CE)("div",d,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.mnum=e),type:"text",placeholder:"Enter mnum"},null,512),[[o.Jo,a.mnum]]),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>c.saveMnum&&c.saveMnum(...e))},"Save"),l])}var p=n(8704),h=n(8355),v={data(){return{mnum:""}},methods:{saveMnum(){p.A.set("mnum",this.mnum,{expires:1}),console.log("Saved mnum to cookie:",this.mnum)}},mounted(){let e=p.A.get("mnum");console.log(e),h.A.get("/test").then((e=>{console.log(e.data," data response")}))}};const g=(0,a.A)(v,[["render",m]]);var b=g;const L=[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,603))},{path:"/cart",name:"cart",component:()=>n.e(339).then(n.bind(n,339))},{path:"/ordPlaced",name:"ordPlaced",component:()=>n.e(738).then(n.bind(n,1738))},{path:"/main",name:"main",component:()=>n.e(265).then(n.bind(n,2265))},{path:"/shoplist",name:"shoplist",component:()=>n.e(255).then(n.bind(n,5255))},{path:"/shopinfo",name:"shopinfo",component:()=>n.e(191).then(n.bind(n,5191))},{path:"/item/itemView",name:"itemView",component:()=>n.e(481).then(n.bind(n,9481))},{path:"/biz/status",name:"bizOrderingStatus",component:()=>n.e(681).then(n.bind(n,5681))}],_=(0,f.aE)({history:(0,f.LA)("/"),routes:L});var A=_,E=n(782);n(4114);const y={namespaced:!0,state:{ordList:[{osfnum:1100,frdname:"friend1",frdprice:1e3},{osfnum:1100,frdname:"스타벅스",frdprice:100},{osfnum:1122,frdname:"스타벅스",frdprice:5e3}],recList:[]},getters:{GET_ORD_LIST:e=>e.ordList,GET_REC_LIST:e=>e.recList},mutations:{ADD_ORD_LIST:(e,t)=>{console.log("received ADD -> ",t);const n=e.ordList.filter((e=>e.osfnum===t.osfnum));n>0&&(e.ordList=e.ordList.filter((e=>e.osfnum!==t.osfnum))),n&&e.ordList.push(t),console.log(e.ordList)}}};var S=y,C=n(1114);const T={namespaced:!0,state:{ordMap:new Map,receiptLi:[],friends:new Set},getters:{GET_ORD:e=>e.ordMap,GET_REC:e=>e.receiptLi},mutations:{ADD_ORD:function(e,t){t.forEach((t=>{let{osfnum:n,...o}=t;e.ordMap.has(n)||e.ordMap.set(n,[]),this.commit("ordStore/ADD_FRD",t.ordname),e.ordMap.get(n).push(o)})),console.log(t),console.log(e.ordMap)},ADD_FRD(e,t){e.friends.add(t),console.log(e.friends," add_frd")},ADD_REC(e,t){e.receiptLi.push({item:"주문금액",amount:t})},ADD_REC1(e,t){e.receiptLi.push({item:"배달비",amount:t})},RM_ORD(e,t){e.ordMap.delete(t.osfnum);for(let n in t.ordList)console.log(t.ordList[n]+" rmORd"),e.friends.delete(t.ordList[n])},SET_REC(e,t){let n=0;for(let[o,r]of e.ordMap)Array.isArray(r)?r.forEach((e=>{e.ordname===t&&(n+=e.ordprice)})):r.ordname===t&&(n+=r.ordprice);e.receiptLi.push({item:t,amount:n}),console.log(e.receiptLi,"se_rec")},CAL_SUM:function(e){for(let t of e.friends)this.commit("ordStore/SET_REC",t)},RM_ALL(e){e.receiptLi=[],e.friends.clear(),e.ordMap.clear(),console.log(e.receiptLi.length+" after")}}};var k=T;const D=new E.Ay.Store({modules:{cartStore:C.A,frdStore:S,ordStore:k}});var O=D;(0,o.Ef)(s).use(A).use(O).mount("#app")},1114:function(e,t,n){n(4114);const o={namespaced:!0,state:{cartList:[{fname:"짬뽕",fnum:"1",foption:"곱빼기(+500원)",fprice:5e3,ftotal:5e3,fcnt:1,osfnum:2e3},{fname:"짬뽕",fnum:"2",foption:"곱빼기(+500원)",fprice:5e3,ftotal:5e3,fcnt:1,osfnum:2200}]},getters:{GET_CART_LIST:e=>e.cartList,TOTAL_CART:e=>{let t=0;return e.cartList.forEach((e=>{t+=e.ftotal})),console.log(t+"c_cartStore 합계"),t}},mutations:{MU_CART_LIST:(e,t)=>{e.cartStore=t},ADD_CART_LIST:(e,t)=>{e.cartList.push(t),console.log(t+"  stroe produ")},INCREASE_CNT:(e,t)=>{const n=e.cartList.find((e=>e.osfnum==t));n.fcnt+=1,n.ftotal=n.fprice*n.fcnt},DECREMENT_CNT:(e,t)=>{const n=e.cartList.find((e=>e.osfnum==t));n.fcnt-=1,n.ftotal=n.fprice*n.fcnt},RM_CART_LIST:(e,t)=>{const n=e.cartList.find((e=>e.osfnum==t));function o(e,t){return JSON.stringify(e)===JSON.stringify(t)}console.log(e.cartList),e.cartList=e.cartList.filter((e=>!o(e,n))),console.log(e.cartList)}}};t.A=o}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],i=e[f][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(f--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(594===e?"about":e)+"."+{191:"63e38053",255:"81d230ac",265:"aa5858b5",339:"9d375678",481:"1e1d2995",594:"51d6019a",681:"c8e307b7",738:"46980d3d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{191:"91329c09",255:"ce4616f8",481:"118eb694"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="v2_client:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[r];var l=function(t,n){c.onerror=c.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var c=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var o=n&&n.type,c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+c+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=c,a.parentNode&&a.parentNode.removeChild(a),i(u)}};return a.onerror=a.onload=c,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),c=n.p+a;if(t(a,c))return r();e(o,c,null,r,i)}))},r={524:0};n.f.miniCss=function(e,t){var n={191:1,255:1,481:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),c=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],c=o[1],u=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var f=u(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},o=self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(8783)}));o=n.O(o)})();
//# sourceMappingURL=app.34973779.js.map