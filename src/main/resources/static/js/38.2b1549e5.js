"use strict";(self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[]).push([[38],{2038:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var o=i(6768),n=i(4232);const r=(0,o.Lk)("div",{id:"pageName"},[(0,o.Lk)("h2",null,"공지사항 -관리자-")],-1),s=(0,o.Lk)("hr",{class:"my-4"},null,-1),c={id:"noticeWrite"},a={class:"noticeList"},l={class:"d-grid gap-2 col-10 mx-auto"},u=["onClick"];function d(t,e,i,d,h,k){return(0,o.uX)(),(0,o.CE)(o.FK,null,[r,s,(0,o.Lk)("div",c,[(0,o.Lk)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...t)=>k.moveWrite&&k.moveWrite(...t))},"공지사항 작성하기")]),(0,o.Lk)("div",a,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(h.listNotice,(t=>((0,o.uX)(),(0,o.CE)("div",{key:t},[(0,o.Lk)("div",l,[(0,o.Lk)("button",{class:"btn btn-outline-dark",type:"button",onClick:e=>k.moveDetails(t.nonum)},(0,n.v_)(t.notitle),9,u)])])))),128))])],64)}i(4114);var h=i(8355),k={data(){return{listNotice:[]}},mounted(){this.fetchNoticeList()},methods:{async fetchNoticeList(){try{const t=await h.A.post("/JY_A_NoticeList",{});this.listNotice=t.data.map((t=>(t.nodate=this.formatDate(t.nodate),t))),console.log("Response:",t.data)}catch(t){console.error("Error fetching noticeList:",t)}},async moveDetails(t){try{this.$router.push({path:"/JY_A_NoticeDetails",query:{nonum:t}})}catch(e){console.error("Error fetching noticeDetails:",e)}},moveWrite(){this.$router.push("/JY_A_NoticeWrite")},formatDate(t){if(!t)return"";const e=new Date(t);return isNaN(e.getTime())?"":`${e.toISOString().slice(0,16).replace("T"," ")}`}}},m=i(1241);const p=(0,m.A)(k,[["render",d]]);var v=p}}]);
//# sourceMappingURL=38.2b1549e5.js.map