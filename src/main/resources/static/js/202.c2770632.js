"use strict";(self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[]).push([[202],{202:function(e,r,t){t.r(r),t.d(r,{default:function(){return R}});var c=t(6768),s=t(4232);const a=(0,c.Lk)("div",{id:"pageName"},[(0,c.Lk)("h2",{class:"text-center"},"내가쓴 리뷰")],-1),n=(0,c.Lk)("hr",{class:"my-4"},null,-1),i={id:"reviewContent",class:"card text-center"},d={class:"card-header"},l={class:"card-body"},o={id:"imagePreview"},v=["src"],u={class:"card-text"},m={class:"card-footer text-body-secondary"},k=(0,c.Lk)("hr",{class:"my-4"},null,-1),h=(0,c.Lk)("div",null,[(0,c.Lk)("h3",{class:"text-center"},"사장님의 답변")],-1),w=(0,c.Lk)("hr",{class:"my-4"},null,-1),y={id:"onerComment",class:"card text-center"},L={class:"card-body"},x={key:0,class:"card-text text-body-secondary"},f={key:1,class:"card-text"},p=(0,c.Lk)("hr",{class:"my-4"},null,-1);function C(e,r,t,C,_,g){return(0,c.uX)(),(0,c.CE)(c.FK,null,[a,n,(0,c.Lk)("div",i,[(0,c.Lk)("div",d," 별점 : "+(0,s.v_)(_.review.rstar)+" "+(0,s.v_)(_.review.mnic)+" 님 ",1),(0,c.Lk)("div",l,[(0,c.Lk)("div",o,[_.review.rimg?((0,c.uX)(),(0,c.CE)("img",{key:0,src:_.review.rimg,class:"rounded mx-auto d-block",style:{"max-width":"100%","max-height":"300px"}},null,8,v)):(0,c.Q3)("",!0)]),(0,c.Lk)("p",u,(0,s.v_)(_.review.rcontent),1)]),(0,c.Lk)("div",m,(0,s.v_)(_.review.strRdate),1)]),k,h,w,(0,c.Lk)("div",y,[(0,c.Lk)("div",L,[null===_.review.rcomment?((0,c.uX)(),(0,c.CE)("p",x," 아직 답변이 달리지 않았어요 ")):((0,c.uX)(),(0,c.CE)("p",f,(0,s.v_)(_.review.rcomment),1))])]),p],64)}var _=t(8355),g={data(){return{review:{}}},mounted(){this.fetchMyReview()},methods:{async fetchMyReview(){try{const e=await _.A.post("/JY_C_MyReview",{rnum:this.$route.query.rnum});this.review=e.data,console.log("Response:",e.data)}catch(e){console.error("Error fetching reviewComment:",e)}}}},b=t(1241);const E=(0,b.A)(g,[["render",C]]);var R=E}}]);
//# sourceMappingURL=202.c2770632.js.map