(function(){"use strict";var e={5179:function(e,t,n){var o=n(5130),r=n(1387),i=n(782),a=n(8355),s=(0,i.y$)({state:{isLoggedIn:"true"===sessionStorage.getItem("setLoginStatus"),userLevel:sessionStorage.getItem("userLevel"),userMnum:sessionStorage.getItem("userMnum"),userBnum:sessionStorage.getItem("userBnum")},mutations:{setLoginStatus(e,t){e.isLoggedIn=t,sessionStorage.setItem("setLoginStatus",String(t))},setUserLevel(e,t){e.userLevel=t,sessionStorage.setItem("userLevel",t)},setUserMnum(e,t){e.userMnum=t,sessionStorage.setItem("userMnum",t)},setUserBnum(e,t){e.userBnum=t,sessionStorage.setItem("userBnum",t)},setUserInfo(e,t){e.userMname=t.mname,e.userMnic=t.mnic,e.userMemail=t.memail,e.userMpw=t.mpw,e.userMtel=t.mtel}},actions:{updateLoginStatus({commit:e},t){e("setLoginStatus",t)},async login({commit:e},{memail:t,mpw:n}){try{const o=await a.A.post("/login",{memail:t,mpw:n});o.data.success?(e("setLoginStatus",!0),e("setUserLevel",o.data.userLevel),e("setUserMnum",o.data.userMnum),e("setUserBnum",o.data.userBnum),sessionStorage.setItem("setLoginStatus","true"),sessionStorage.setItem("userLevel",o.data.userLevel),sessionStorage.setItem("userMnum",o.data.userMnum),sessionStorage.setItem("userBnum",o.data.userBnum)):e("setLoginStatus",!1)}catch(o){console.error("로그인 중 오류 발생",o),e("setLoginStatus",!1)}},logout({commit:e}){e("setLoginStatus",!1),e("setUserLevel",null),e("setUserMnum",null),e("setUserBnum",null),sessionStorage.removeItem("setLoginStatus"),sessionStorage.removeItem("userLevel"),sessionStorage.removeItem("userMnum"),sessionStorage.removeItem("setUserBnum")},async fetchUserInfo({commit:e,state:t}){try{const n=await a.A.get(`/updateInfo/${t.userMnum}`);n.data&&e("setUserInfo",n.data)}catch(n){console.log("사용자 정보를 불러오는 데 실패했습니다",n)}}},getters:{isLoggedIn:e=>e.isLoggedIn,getUserLevel:e=>e.userLevel,getUserMnum:e=>e.userMnum,getUserBnum:e=>e.userBnum}});const u=[{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,603))},{path:"/:level/login",name:"login",component:()=>n.e(354).then(n.bind(n,3354))},{path:"/:level/findMyEmail",name:"findMyEmail",component:()=>n.e(119).then(n.bind(n,5119))},{path:"/:level/findMyPw",name:"findMyPw",component:()=>n.e(342).then(n.bind(n,342))},{path:"/selectMemberType",name:"selectMemberType",component:()=>n.e(858).then(n.bind(n,3225))},{path:"/business/home",name:"home",component:()=>n.e(981).then(n.bind(n,6981))},{path:"/business/join",name:"B_Join",component:()=>n.e(216).then(n.bind(n,216))},{path:"/business/updateInfo",name:"B_updateInfo",component:()=>n.e(10).then(n.bind(n,7010)),props:!0},{path:"/business/reviewList",name:"JY_B_ReviewList",component:()=>n.e(790).then(n.bind(n,4790))},{path:"/JY_B_ReviewComment",name:"JY_B_ReviewComment",component:()=>n.e(754).then(n.bind(n,1754))},{path:"/client/home",name:"C_Home",component:()=>n.e(960).then(n.bind(n,6960))},{path:"/client/join",name:"C_Join",component:()=>n.e(868).then(n.bind(n,1868))},{path:"/client/myFriend",name:"JH_C_MyFriend",component:()=>n.e(298).then(n.bind(n,9298))},{path:"/client/updateInfo",name:"C_updateInfo",component:()=>n.e(828).then(n.bind(n,828)),props:!0},{path:"/client/noticeList",name:"JY_C_NoticeList",component:()=>n.e(189).then(n.bind(n,5189))},{path:"/JY_C_NoticeDetails",name:"JY_C_NoticeDetails",component:()=>n.e(597).then(n.bind(n,1597))},{path:"/client/reviewList",name:"JY_C_ReviewList",component:()=>n.e(727).then(n.bind(n,727))},{path:"/JY_C_ReviewWrite",name:"JY_C_ReviewWrite",component:()=>n.e(50).then(n.bind(n,50))},{path:"/JY_C_MyReview",name:"JY_C_MyReview",component:()=>n.e(202).then(n.bind(n,202))},{path:"/admin/home",name:"A_Home",component:()=>n.e(540).then(n.bind(n,7540))},{path:"/admin/noticeList",name:"JY_A_NoticeList",component:()=>n.e(847).then(n.bind(n,9847))},{path:"/JY_A_NoticeWrite",name:"JY_A_NoticeWrite",component:()=>n.e(840).then(n.bind(n,1840))},{path:"/JY_A_NoticeDetails",name:"JY_A_NoticeDetails",component:()=>n.e(588).then(n.bind(n,4588))},{path:"/JY_A_NoticeModify",name:"JY_A_NoticeModify",component:()=>n.e(764).then(n.bind(n,1764))}],c=(0,r.aE)({history:(0,r.LA)("/"),routes:u});c.beforeEach(((e,t,n)=>{const o=s.getters.isLoggedIn;"/login"===e.path&&o?n("/home"):n()}));var l=c,d=n(6768),m=(n(4114),n.p+"img/dutchOrder_colored.bfdc0983.png");const f=e=>((0,d.Qi)("data-v-0075bbe7"),e=e(),(0,d.jt)(),e),p=f((()=>(0,d.Lk)("img",{src:m,alt:"Logo",class:"logo-image"},null,-1))),h=[p],v=f((()=>(0,d.Lk)("span",{class:"site-name"},"더치오더",-1))),g={class:"nav-header"};var b={__name:"JH_Comm_Header",setup(e){const t=(0,i.Pj)(),n=(0,r.rd)(),o=(0,d.EW)((()=>t.getters.isLoggedIn)),a=(0,d.EW)((()=>t.getters.getUserLevel)),s=()=>{t.dispatch("logout").then((()=>{n.push("/selectMemberType")}))},u=()=>{o.value?101===a.value?n.push("/client/home"):102===a.value?n.push("/business/home"):103===a.value?n.push("/admin/home"):(alert("유효하지 않은 사용자 레벨입니다."),n.push("/selectMemberType")):(alert("로그인 후 이용하세요"),n.push("/selectMemberType"))},c=()=>{o.value||(alert("로그인 후 이용하세요"),n.push("/selectMemberType"))};return(e,t)=>{const n=(0,d.g2)("router-link");return(0,d.uX)(),(0,d.CE)("div",null,[(0,d.Lk)("header",{class:"logo-header"},[(0,d.Lk)("div",{class:"logo-container"},[(0,d.Lk)("a",{to:"client/home",onClick:u},h),v])]),(0,d.Lk)("header",g,[103===a.value?((0,d.uX)(),(0,d.CE)(d.FK,{key:0},[o.value?((0,d.uX)(),(0,d.Wv)(n,{key:0,to:"/admin/clientCheck",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("회원관리")])),_:1})):(0,d.Q3)("",!0),o.value?((0,d.uX)(),(0,d.Wv)(n,{key:1,to:"/admin/businessCheck",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("사업자관리")])),_:1})):(0,d.Q3)("",!0),o.value?((0,d.uX)(),(0,d.Wv)(n,{key:2,to:"/admin/reviewBoard",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("리뷰관리")])),_:1})):(0,d.Q3)("",!0),(0,d.bF)(n,{to:"/admin/noticeList",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("공지사항")])),_:1}),o.value?((0,d.uX)(),(0,d.Wv)(n,{key:3,to:"/login/admin",style:{"text-decoration":"none",color:"#454545"},onClick:s},{default:(0,d.k6)((()=>[(0,d.eW)("로그아웃")])),_:1})):((0,d.uX)(),(0,d.Wv)(n,{key:4,to:"/selectMemberType",style:{"text-decoration":"none",color:"#454545"}},{default:(0,d.k6)((()=>[(0,d.eW)("로그인")])),_:1}))],64)):(0,d.Q3)("",!0),102===a.value?((0,d.uX)(),(0,d.CE)(d.FK,{key:1},[(0,d.bF)(n,{to:"/business/orderState",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("주문현황")])),_:1}),(0,d.bF)(n,{to:"/business/reviewList",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("리뷰관리하기")])),_:1}),(0,d.bF)(n,{to:"/client/noticeList",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("공지사항")])),_:1}),o.value?((0,d.uX)(),(0,d.Wv)(n,{key:0,to:"/business/updateInfo",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("정보수정")])),_:1})):(0,d.Q3)("",!0),o.value?((0,d.uX)(),(0,d.Wv)(n,{key:1,to:"business/login",style:{"text-decoration":"none",color:"#454545"},onClick:s},{default:(0,d.k6)((()=>[(0,d.eW)("로그아웃")])),_:1})):((0,d.uX)(),(0,d.Wv)(n,{key:2,to:"/selectMemberType",style:{"text-decoration":"none",color:"#454545"}},{default:(0,d.k6)((()=>[(0,d.eW)("로그인")])),_:1}))],64)):((0,d.uX)(),(0,d.CE)(d.FK,{key:2},[(0,d.bF)(n,{to:"/client/home",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("주문내역")])),_:1}),(0,d.bF)(n,{to:"/client/myCart",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("장바구니")])),_:1}),(0,d.bF)(n,{to:"/client/noticeList",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("공지사항")])),_:1}),(0,d.bF)(n,{to:"/client/reviewList",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("내리뷰보기")])),_:1}),(0,d.bF)(n,{to:"/client/myFriend",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("내친구확인")])),_:1}),o.value?((0,d.uX)(),(0,d.Wv)(n,{key:0,to:"/client/updateInfo",style:{"text-decoration":"none",color:"#454545"},onClick:c},{default:(0,d.k6)((()=>[(0,d.eW)("정보수정")])),_:1})):(0,d.Q3)("",!0),o.value?((0,d.uX)(),(0,d.Wv)(n,{key:1,to:"/login/client",style:{"text-decoration":"none",color:"#454545"},onClick:s},{default:(0,d.k6)((()=>[(0,d.eW)("로그아웃")])),_:1})):((0,d.uX)(),(0,d.Wv)(n,{key:2,to:"/selectMemberType",style:{"text-decoration":"none",color:"#454545"}},{default:(0,d.k6)((()=>[(0,d.eW)("로그인")])),_:1}))],64))])])}}},k=n(1241);const y=(0,k.A)(b,[["__scopeId","data-v-0075bbe7"]]);var _=y,L=n(4232),C=n(144);const w=e=>((0,d.Qi)("data-v-5e13ea67"),e=e(),(0,d.jt)(),e),S={class:"footer-container"},M={class:"container"},I={class:"footer-content"},W=w((()=>(0,d.Lk)("div",{class:"footer-section"},[(0,d.Lk)("h2",null,"Dutch Order"),(0,d.Lk)("p",null,"주소: 서울시 더치구 오더로 123"),(0,d.Lk)("p",null,"대표이사 : 중앙정보 4조"),(0,d.Lk)("p",null,"개인정보보호책임자 : 팀원"),(0,d.Lk)("p",null,"Email: dutchOrder4@gmail.com")],-1))),x=w((()=>(0,d.Lk)("div",{class:"footer-section"},[(0,d.Lk)("h2",null,"고객센터"),(0,d.Lk)("p",null,"연락처 : 02-1234-5678"),(0,d.Lk)("p",null,"운영시간 09:00 ~ 18 : 00")],-1))),F={class:"footer-section"},A=w((()=>(0,d.Lk)("h2",null,"About Us",-1))),E=w((()=>(0,d.Lk)("p",null,"각자 결제 배달시스템 더치오더입니다",-1))),B=w((()=>(0,d.Lk)("p",{href:"https://www.flaticon.com/kr/free-icons/",title:"메뉴 아이콘"}," 메뉴 아이콘 제작자: ariefstudio - Flaticon ",-1))),J=w((()=>(0,d.Lk)("p",{href:"https://www.flaticon.com/kr/free-icons/-",title:"음식 배달 아이콘"}," 음식 배달 아이콘 제작자: Freepik - Flaticon ",-1))),N="DutchOrder";var O={__name:"JH_Comm_Footer",setup(e){const t=(new Date).getFullYear();return(e,n)=>((0,d.uX)(),(0,d.CE)("footer",null,[(0,d.Lk)("div",S,[(0,d.Lk)("div",M,[(0,d.Lk)("div",I,[W,x,(0,d.Lk)("div",F,[A,E,(0,d.Lk)("p",null,"ⓒ "+(0,L.v_)((0,C.R1)(t))+" "+(0,L.v_)(N)+". All rights reserved.",1),B,J])])])])]))}};const U=(0,k.A)(O,[["__scopeId","data-v-5e13ea67"]]);var Y=U;const T={id:"app",class:"site"},j={class:"site-content p-5"};var X={__name:"App",setup(e){return(e,t)=>{const n=(0,d.g2)("router-view");return(0,d.uX)(),(0,d.CE)("div",T,[(0,d.bF)(_),(0,d.Lk)("div",j,[(0,d.bF)(n)]),(0,d.bF)(Y)])}}};const P=X;var D=P;n(8077);const R=(0,o.Ef)(D),Q="true"===sessionStorage.getItem("isLoggedIn");s.dispatch("updateLoginStatus",Q),R.use(s),R.use(l),R.config.globalProperties.axios=a.A,R.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(594===e?"about":e)+"."+{10:"221d4242",50:"a1551356",119:"1c1ab831",189:"ad1cdcc5",202:"c2770632",216:"0a1fcd3f",298:"d465a003",342:"6a372f3b",354:"5e5b2333",540:"ac7b6726",588:"7c00f081",594:"557fdbe5",597:"8044ddba",727:"16d3dda1",754:"db3aac42",764:"9d5238ba",790:"d22e72f9",828:"8e319ec4",840:"3ec1dbe7",847:"2e8568b3",858:"2834dee2",868:"c02d1793",960:"346d4929",981:"50f28764"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{10:"ea41aafd",50:"68517008",119:"4b2b0b55",189:"a312a903",202:"8cd7c2c3",216:"a5eefa8b",298:"faa8aeef",342:"87ca35f7",354:"228966b3",588:"a60faf56",597:"8d6236fe",727:"7007e888",754:"fad74846",764:"24e8785f",790:"4dc08778",828:"a147c7df",840:"24e8785f",847:"28565f19",858:"ea815d95",868:"fe97cb87"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="v2_client:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&n.type,s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,i.parentNode&&i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,null,r,i)}))},r={524:0};n.f.miniCss=function(e,t){var n={10:1,50:1,119:1,189:1,202:1,216:1,298:1,342:1,354:1,588:1,597:1,727:1,754:1,764:1,790:1,828:1,840:1,847:1,858:1,868:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],u=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5179)}));o=n.O(o)})();
//# sourceMappingURL=app.7e99dc11.js.map