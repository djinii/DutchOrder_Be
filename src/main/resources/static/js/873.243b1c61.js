"use strict";(self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[]).push([[873],{2873:function(t,e,r){r.r(e),r.d(e,{default:function(){return U}});var a=r(6768),s=r(4232);const n={class:"nav nav-tabs",id:"nav-tab",role:"tablist"},i=["id","data-bs-target","aria-controls","aria-selected","onClick"],o={class:"tab-content",id:"nav-tabContent"},d=["id","aria-labelledby"],l={class:"container"},u={class:"row"};function c(t,e,r,c,b,m){const v=(0,a.g2)("B_Ordcard"),h=(0,a.g2)("B_OrdSpecCard");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("nav",null,[(0,a.Lk)("div",n,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(b.tabs,((t,e)=>((0,a.uX)(),(0,a.CE)("button",{key:e,class:(0,s.C4)({"nav-link":!0,active:e===b.activeTabIndex}),id:"nav-"+t.id+"-tab","data-bs-toggle":"tab","data-bs-target":"#nav-"+t.id,type:"button",role:"tab","aria-controls":"nav-"+t.id,"aria-selected":e===b.activeTabIndex,onClick:t=>m.changeTab(e)},(0,s.v_)(t.name),11,i)))),128))])]),(0,a.Lk)("div",o,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(b.tabs,((t,e)=>((0,a.uX)(),(0,a.CE)("div",{key:e,id:"nav-"+t.id,class:(0,s.C4)(["tab-pane fade",{"show active":e===b.activeTabIndex}]),role:"tabpanel","aria-labelledby":"nav-"+t.id+"-tab"},[(0,a.Lk)("div",l,[(0,a.Lk)("div",u,["home"===t.id?((0,a.uX)(),(0,a.Wv)(v,{key:0,bnum:b.bnum},null,8,["bnum"])):((0,a.uX)(),(0,a.Wv)(h,{key:1,bnum:b.bnum,orderStatus:t.orderStatus},null,8,["bnum","orderStatus"]))])])],10,d)))),128))])])}const b={class:"container",style:{"max-height":"500px","overflow-y":"auto"}},m={class:"row"},v={class:"card mt-3",style:{width:"18rem"}},h=(0,a.Lk)("h5",{class:"card-title"},"이미지",-1),p={class:"card-body"},k={class:"card",style:{width:"16rem"}},L={class:"list-group list-group-flush"},g={class:"list-group-item"},y={class:"list-group-item"},f={class:"list-group-item"},C=(0,a.Lk)("p",null,null,-1),O=(0,a.Lk)("button",{type:"button"},"확인",-1),S=(0,a.Lk)("button",{type:"button"},"상세보기",-1);function _(t,e,r,n,i,o){return(0,a.uX)(),(0,a.CE)("div",b,[(0,a.Lk)("div",m,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.uniqueOrders,((t,e)=>((0,a.uX)(),(0,a.CE)("div",{key:e,class:"col-3 mb-3"},[(0,a.Lk)("div",v,[h,(0,a.Lk)("div",p,[(0,a.Lk)("div",k,[(0,a.Lk)("ul",L,[(0,a.Lk)("li",g," 주문일시: "+(0,s.v_)(o.formatDate(t.odate)),1),(0,a.Lk)("li",y,"주문번호: "+(0,s.v_)(t.osnum),1),(0,a.Lk)("li",f,"사업자번호: "+(0,s.v_)(t.bnum),1)])]),C,O,S])])])))),128))])])}var w=r(8355),E={name:"B_OrdSpecCard",props:["orderStatus","bnum"],data(){return{orderList:[]}},mounted(){this.fetchOrderList()},computed:{uniqueOrders(){const t={};return this.filteredOrders.forEach((e=>{t[e.osnum]||(t[e.osnum]=e)})),Object.values(t)},filteredOrders(){return this.orderStatus&&0!==this.orderStatus.length?this.orderList.filter((t=>t.ostatus_mikey===this.orderStatus&&t.bnum===this.bnum)):[]}},methods:{formatDate(t){const e=new Date(t);return e.toLocaleString()},async fetchOrderList(){try{const t=await w.A.get(`http://localhost:8888/B_Ordering?bnum=${this.bnum}`);this.orderList=t.data,console.log("Response:",t.data)}catch(t){console.error("Error fetching orderList:",t)}}}},X=r(1241);const x=(0,X.A)(E,[["render",_]]);var B=x;const I={class:"container",style:{"max-height":"500px","overflow-y":"auto"}},D={class:"row"},T={key:0,class:"card mt-3",style:{width:"18rem"}},q=(0,a.Lk)("h5",{class:"card-title"},"이미지",-1),A={class:"card-body"},F={class:"card",style:{width:"16rem"}},K={class:"list-group list-group-flush"},R={class:"list-group-item"},W={class:"list-group-item"},j={class:"list-group-item"},P=(0,a.Lk)("p",null,null,-1),Q=(0,a.Lk)("button",{type:"button"},"확인",-1),$=(0,a.Lk)("button",{type:"button"},"상세보기",-1);function z(t,e,r,n,i,o){return(0,a.uX)(),(0,a.CE)("div",I,[(0,a.Lk)("div",D,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.uniqueOrders,((t,e)=>((0,a.uX)(),(0,a.CE)("div",{key:e,class:"col-3 mb-3"},[t.bnum===r.bnum?((0,a.uX)(),(0,a.CE)("div",T,[q,(0,a.Lk)("div",A,[(0,a.Lk)("div",F,[(0,a.Lk)("ul",K,[(0,a.Lk)("li",R," 주문일시: "+(0,s.v_)(o.formatDate(t.odate)),1),(0,a.Lk)("li",W,"주문번호: "+(0,s.v_)(t.osnum),1),(0,a.Lk)("li",j,"사업자번호: "+(0,s.v_)(t.bnum),1)])]),P,Q,$])])):(0,a.Q3)("",!0)])))),128))])])}var G={name:"B_Ordcard",props:{bnum:{type:String,required:!0}},data(){return{orderList:[]}},mounted(){this.fetchOrderList()},computed:{uniqueOrders(){return this.orderList.filter((t=>t.bnum===this.bnum))}},methods:{formatDate(t){const e=new Date(t);return e.toLocaleString()},async fetchOrderList(){try{const t=await w.A.get("http://localhost:8888/B_Ordering");this.orderList=t.data.sort(((t,e)=>new Date(e.odate)-new Date(t.odate))),console.log("Response:",t.data)}catch(t){console.error("Error fetching orderList:",t)}}}};const H=(0,X.A)(G,[["render",z]]);var J=H,M={name:"B_Ordering",components:{B_OrdSpecCard:B,B_Ordcard:J},data(){return{tabs:[{id:"home",name:"전체",orderStatus:null},{id:"OrderReady",name:"주문수락대기",orderStatus:802},{id:"Preparing",name:"조리중",orderStatus:803},{id:"Start",name:"배달시작",orderStatus:804},{id:"contact",name:"배달완료",orderStatus:805}],activeTabIndex:0,bnum:"1001"}},methods:{changeTab(t){this.activeTabIndex=t}}};const N=(0,X.A)(M,[["render",c]]);var U=N}}]);
//# sourceMappingURL=873.243b1c61.js.map