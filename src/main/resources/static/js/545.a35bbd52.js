"use strict";(self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[]).push([[545],{6545:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var i=n(6768),o=n(4232);const s=(0,i.Lk)("div",{id:"pageName"},[(0,i.Lk)("h2",null,"공지사항 -개인-")],-1),c=(0,i.Lk)("hr",{class:"my-4"},null,-1),a={class:"noticeList"},r={class:"d-grid gap-2 col-10 mx-auto"},l=["onClick"];function u(t,e,n,u,d,h){return(0,i.uX)(),(0,i.CE)(i.FK,null,[s,c,(0,i.Lk)("div",a,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(d.listNotice,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t},[(0,i.Lk)("div",r,[(0,i.Lk)("button",{class:"btn btn-outline-dark",type:"button",onClick:e=>h.moveDetails(t.nonum)},(0,o.v_)(t.notitle),9,l)])])))),128))])],64)}n(4114);var d=n(8355),h={data(){return{listNotice:[]}},mounted(){this.fetchNoticeList()},methods:{async fetchNoticeList(){try{const t=await d.A.post("/JY_C_NoticeList",{});this.listNotice=t.data.map((t=>(t.nodate=this.formatDate(t.nodate),t))),console.log("Response:",t.data)}catch(t){console.error("Error fetching noticeList:",t)}},async moveDetails(t){try{this.$router.push({path:"/JY_C_NoticeDetails",query:{nonum:t}})}catch(e){console.error("Error fetching noticeDetails:",e)}},formatDate(t){if(!t)return"";const e=new Date(t);return isNaN(e.getTime())?"":`${e.toISOString().slice(0,16).replace("T"," ")}`}}},k=n(1241);const f=(0,k.A)(h,[["render",u]]);var m=f}}]);
//# sourceMappingURL=545.a35bbd52.js.map