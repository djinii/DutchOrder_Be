"use strict";(self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[]).push([[50],{50:function(t,e,i){i.r(e),i.d(e,{default:function(){return B}});var n=i(6768),a=i(4232),l=i(5130);const o=(0,n.Lk)("div",{id:"pageName"},[(0,n.Lk)("h2",{class:"text-center"},"리뷰작성")],-1),r=(0,n.Lk)("hr",{class:"my-4"},null,-1),s={id:"starRating",class:"btn-group",role:"group","aria-label":"Basic radio toggle button group"},c=(0,n.Lk)("label",{class:"btn btn-outline-primary",for:"btnradio1"},"1",-1),m=(0,n.Lk)("label",{class:"btn btn-outline-primary",for:"btnradio2"},"2",-1),u=(0,n.Lk)("label",{class:"btn btn-outline-primary",for:"btnradio3"},"3",-1),h=(0,n.Lk)("label",{class:"btn btn-outline-primary",for:"btnradio4"},"4",-1),d=(0,n.Lk)("label",{class:"btn btn-outline-primary",for:"btnradio5"},"5",-1),g=(0,n.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-star-fill",viewBox:"0 0 16 16"},[(0,n.Lk)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})],-1),b=(0,n.Lk)("hr",{class:"my-4"},null,-1),k={id:"reviewImg",class:"custom-file"},f=(0,n.Lk)("label",{class:"custom-file-label",for:"customFile"},[(0,n.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",class:"bi bi-card-image",viewBox:"0 0 16 16"},[(0,n.Lk)("path",{d:"M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"}),(0,n.Lk)("path",{d:"M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"})])],-1),p=(0,n.Lk)("br",null,null,-1),v={id:"imagePreview"},L=["src"],w={id:"reviewWrite",class:"form-floating"},y=["placeholder"],C=(0,n.Lk)("label",{for:"floatingTextarea2"},"리뷰 입력",-1),R=(0,n.Lk)("hr",{class:"my-4"},null,-1),x={class:"reviewButton"},_={id:"liveAlertPlaceholder"};function W(t,e,i,W,A,U){return(0,n.uX)(),(0,n.CE)(n.FK,null,[o,r,(0,n.Lk)("div",s,[(0,n.Lk)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",onClick:e[0]||(e[0]=t=>U.selectRating(1))}),c,(0,n.Lk)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off",onClick:e[1]||(e[1]=t=>U.selectRating(2))}),m,(0,n.Lk)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3",autocomplete:"off",onClick:e[2]||(e[2]=t=>U.selectRating(3))}),u,(0,n.Lk)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio4",autocomplete:"off",onClick:e[3]||(e[3]=t=>U.selectRating(4))}),h,(0,n.Lk)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio5",autocomplete:"off",onClick:e[4]||(e[4]=t=>U.selectRating(5))}),d]),(0,n.Lk)("h2",null,[g,(0,n.eW)(" : "+(0,a.v_)(A.myRating),1)]),b,(0,n.Lk)("div",k,[(0,n.Lk)("input",{id:"customFile",type:"file",ref:"image",onChange:e[5]||(e[5]=(...t)=>U.upload&&U.upload(...t))},null,544),f]),p,(0,n.Lk)("div",v,[A.imageUrl?((0,n.uX)(),(0,n.CE)("img",{key:0,src:A.imageUrl,class:"rounded mx-auto d-block",style:{"max-width":"100%","max-height":"300px"}},null,8,L)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",w,[(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":e[6]||(e[6]=t=>A.reviewContent=t),class:"form-control",placeholder:A.contentPh,id:"floatingTextarea2",style:{height:"300px"}},null,8,y),[[l.Jo,A.reviewContent]]),C]),R,(0,n.Lk)("div",x,[(0,n.Lk)("div",_,[(0,n.Lk)("strong",null,(0,a.v_)(A.message),1)]),(0,n.Lk)("button",{id:"liveAlertBtn",class:"btn btn-primary",onClick:e[7]||(e[7]=(...t)=>U.submitReviewWrite&&U.submitReviewWrite(...t))},"리뷰작성완료")])],64)}i(4114);var A=i(8355),U={data(){return{info:{},reviewContent:"",myRating:"",image:null,imageUrl:null,message:"",ratingPh:"별점을 주세요",contentPh:"내용을 입력하세요"}},mounted(){this.fetchWrtieInfo()},methods:{async fetchWrtieInfo(){try{const t=await A.A.post("/JY_C_WriteInfo",{onum:this.$route.query.onum});this.info=t.data,this.mnum=this.info.mnum,this.bnum=this.info.bnum,this.onum=this.info.onum,console.log("kkk Response:",t.data)}catch(t){console.error("Error fetching writeInfo:",t)}},async upload(){if(this.image=this.$refs.image.files[0],console.log(this.image),!this.image)return;const t=new FileReader;t.onload=t=>{this.imageUrl=t.target.result},t.readAsDataURL(this.image)},async submitReviewWrite(){if(this.myRating)if(""!==this.reviewContent.trim())try{const t=new Date,e={onum:this.onum,mnum:this.mnum,bnum:this.bnum,rcontent:this.reviewContent,rstar:this.myRating,rdate:t.toISOString(),rstatus_makey:1e3,rstatus_mikey:1001,rcomment:null};this.imageUrl&&(e.rimg=this.imageUrl),console.log("reviewData->"+e);const i=await A.A.post("/JY_C_ReviewWrite",e);console.log(i.data),alert("리뷰가 성공적으로 작성되었습니다."),this.$router.push("/JY_C_ReviewList")}catch(t){console.error("Error fetching reviewWrite",t),alert("리뷰 작성에 실패했습니다.")}else this.message=this.contentPh;else this.message=this.ratingPh},selectRating(t){this.myRating=t}}},P=i(1241);const I=(0,P.A)(U,[["render",W]]);var B=I}}]);
//# sourceMappingURL=50.a1551356.js.map