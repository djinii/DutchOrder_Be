"use strict";(self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[]).push([[456],{5456:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var i=r(6768),s=r(4232),n=r(5130);const a=(0,i.Lk)("div",{id:"pageName"},[(0,i.Lk)("h2",null,"리뷰답글 -사업자-")],-1),o=(0,i.Lk)("hr",{class:"my-4"},null,-1),c={id:"reviewContent",class:"card text-center"},l={class:"card-header"},m={class:"card-body"},v={class:"card-text"},d={class:"card-footer text-body-secondary"},u=(0,i.Lk)("hr",{class:"my-4"},null,-1),h={key:0,class:"form-floating"},w=["placeholder"],k=(0,i.Lk)("label",{for:"floatingTextarea2"},"답글 입력",-1),f={key:1},y={class:"text-center"},C={key:2,class:"reviewButton"},_={id:"liveAlertPlaceholder"};function p(e,t,r,p,L,b){return(0,i.uX)(),(0,i.CE)(i.FK,null,[a,o,(0,i.Lk)("div",c,[(0,i.Lk)("div",l," 별점 : "+(0,s.v_)(L.review.rstar)+" -- "+(0,s.v_)(L.review.mnic),1),(0,i.Lk)("div",m,[(0,i.Lk)("p",v,(0,s.v_)(L.review.rcontent),1)]),(0,i.Lk)("div",d,(0,s.v_)(L.review.strRdate),1)]),u,1001===L.review.rstatus_mikey?((0,i.uX)(),(0,i.CE)("div",h,[(0,i.bo)((0,i.Lk)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>L.review.rcomment=e),class:"form-control",placeholder:L.contentPh,id:"floatingTextarea2",style:{height:"300px"}},null,8,w),[[n.Jo,L.review.rcomment]]),k])):((0,i.uX)(),(0,i.CE)("div",f,[(0,i.Lk)("p",y,(0,s.v_)(L.review.rcomment),1)])),1001===L.review.rstatus_mikey?((0,i.uX)(),(0,i.CE)("div",C,[(0,i.Lk)("div",_,(0,s.v_)(L.message),1),(0,i.Lk)("button",{id:"liveAlertBtn",class:"btn btn-primary",onClick:t[1]||(t[1]=(...e)=>b.submitWriteComment&&b.submitWriteComment(...e))},"답글작성완료")])):(0,i.Q3)("",!0)],64)}r(4114);var L=r(8355),b={data(){return{review:{},message:"",contentPh:"답글을 입력하세요"}},mounted(){this.fetchReviewComment()},methods:{async fetchReviewComment(){try{const e=await L.A.post("/JY_B_ReviewComment",{rnum:this.$route.query.rnum});this.review=e.data,console.log("Response:",e.data)}catch(e){console.error("Error fetching reviewComment:",e)}},async submitWriteComment(){if(""!==this.review.rcomment.trim())try{this.review.rstatus_mikey=1002;const e=await L.A.post("/JY_B_CommentWrite",this.review);console.log(e.data),alert("답글이 성공적으로 작성되었습니다."),this.$router.push("/JY_B_ReviewList")}catch(e){console.error("Error fetching reviewCommentWrite",e),alert("답글 작성에 실패했습니다.")}else this.message=this.contentPh}}},g=r(1241);const x=(0,g.A)(b,[["render",p]]);var E=x}}]);
//# sourceMappingURL=456.f19f6de9.js.map