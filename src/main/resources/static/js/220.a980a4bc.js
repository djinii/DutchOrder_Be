"use strict";(self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[]).push([[220],{4220:function(a,e,t){t.r(e),t.d(e,{default:function(){return U}});var s=t(6768),i=t(4232),r=t(5130);const n=a=>((0,s.Qi)("data-v-0311d9e4"),a=a(),(0,s.jt)(),a),l=n((()=>(0,s.Lk)("h2",{class:"main-title"},"내 친구 확인하기",-1))),d=n((()=>(0,s.Lk)("hr",{class:"my-4"},null,-1))),o={id:"myInfo"},c=n((()=>(0,s.Lk)("strong",null,"이메일:",-1))),h=n((()=>(0,s.Lk)("hr",{class:"my-4"},null,-1))),m={class:"search-area"},u=n((()=>(0,s.Lk)("div",{class:"col-auto"},[(0,s.Lk)("label",{for:"friendSearch",class:"form-label"}," 친구 검색 - 닉네임으로 검색할 수 있습니다 ")],-1))),y={class:"col-auto"},k={class:"input-group"},L={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},p={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},f={class:"modal-content"},F=n((()=>(0,s.Lk)("div",{class:"modal-header"},[(0,s.Lk)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"검색된 친구 목록")],-1))),b={class:"modal-body"},C={key:0},v={key:1},w=n((()=>(0,s.Lk)("div",{class:"modal-footer"},[(0,s.Lk)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal","aria-label":"Close"},"닫기")],-1))),g=n((()=>(0,s.Lk)("hr",{class:"my-4"},null,-1))),_=n((()=>(0,s.Lk)("hr",{class:"my-4"},null,-1))),E={key:0},M={class:"card text-center"},W=n((()=>(0,s.Lk)("div",{class:"card-header"},[(0,s.Lk)("h5",{class:"card-title"},"나의 친구목록")],-1))),S={class:"card-body"},X={key:1},x={class:"card text-center"},Q=n((()=>(0,s.Lk)("div",{class:"card-header"},[(0,s.Lk)("h5",{class:"card-title"},"요청대기중인 친구")],-1))),D={class:"card-body"},A={key:2},J={class:"card text-center"},H=n((()=>(0,s.Lk)("div",{class:"card-header"},[(0,s.Lk)("h5",{class:"card-title"},"요청대기중인 친구")],-1))),I={class:"card-body"};function R(a,e,t,n,R,K){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",null,[l,d,(0,s.Lk)("div",o,[(0,s.Lk)("p",null,[(0,s.Lk)("strong",null,(0,i.v_)(R.myData.mnic),1),(0,s.eW)("님 안녕하세요!")]),(0,s.Lk)("p",null,[c,(0,s.eW)(" "+(0,i.v_)(R.myData.memail),1)])])]),h,(0,s.Lk)("div",m,[u,(0,s.Lk)("div",y,[(0,s.Lk)("div",k,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>R.friendSearchQuery=a),class:"form-control",id:"friendSearch",required:""},null,512),[[r.Jo,R.friendSearchQuery]]),(0,s.Lk)("button",{type:"submit",class:"btn btn-primary btn-primary-search","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:e[1]||(e[1]=(...a)=>K.showSearchFriend&&K.showSearchFriend(...a))}," 검색 ")])])]),(0,s.Lk)("div",L,[(0,s.Lk)("div",p,[(0,s.Lk)("div",f,[F,(0,s.Lk)("div",b,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(R.searchFriend,(a=>((0,s.uX)(),(0,s.CE)("div",{key:a},[0===a?((0,s.uX)(),(0,s.CE)("p",C," 검색된 닉네임이 없습니다. ")):(0,s.Q3)("",!0),201===a.mstatus_mikey?((0,s.uX)(),(0,s.CE)("p",v," - "+(0,i.v_)(a.mnic)+" - ",1)):(0,s.Q3)("",!0),(0,s.Lk)("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=(...a)=>K.fetchPlusFriend&&K.fetchPlusFriend(...a))},"친구추가")])))),128))]),w])])]),g,(0,s.Lk)("button",{id:"friendList",type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=(...a)=>K.showFriendList&&K.showFriendList(...a))},"나의 친구목록 보기"),(0,s.Lk)("button",{id:"friendWait",type:"button",class:"btn btn-primary",onClick:e[4]||(e[4]=(...a)=>K.showFriendWait&&K.showFriendWait(...a))},"요청 대기중인 친구보기"),(0,s.Lk)("button",{id:"friendCall",type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=(...a)=>K.showFriendCall&&K.showFriendCall(...a))},"받은 요청"),_,R.friendList?((0,s.uX)(),(0,s.CE)("div",E,[(0,s.Lk)("div",M,[W,(0,s.Lk)("div",S,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(R.myFriendList,(a=>((0,s.uX)(),(0,s.CE)("p",{class:"card-text",key:a}," - "+(0,i.v_)(a.mnic)+" - ",1)))),128))])])])):(0,s.Q3)("",!0),R.friendWait?((0,s.uX)(),(0,s.CE)("div",X,[(0,s.Lk)("div",x,[Q,(0,s.Lk)("div",D,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(R.myFriendWait,(a=>((0,s.uX)(),(0,s.CE)("p",{class:"card-text",key:a}," - "+(0,i.v_)(a.mnic)+" - ",1)))),128))])])])):(0,s.Q3)("",!0),R.friendCall?((0,s.uX)(),(0,s.CE)("div",A,[(0,s.Lk)("div",J,[H,(0,s.Lk)("div",I,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(R.myFriendCall,(a=>((0,s.uX)(),(0,s.CE)("p",{class:"card-text",key:a}," - "+(0,i.v_)(a.mnic)+" - ",1)))),128))])])])):(0,s.Q3)("",!0)],64)}var K=t(8355),P={data(){return{myFriendList:[],myFriendWait:[],myFriendCall:[],searchFriend:[],myData:{},friendList:!1,friendWait:!1,friendCall:!1,friendSearchQuery:""}},computed:{},mounted(){this.fetchMyData()},methods:{async fetchMyData(){try{const a=await K.A.post("/JH_C_MyFriend",{mnum:1001});this.myData=a.data,console.log("Response:",a.data)}catch(a){console.error("Error fetching MyFriends:",a)}},async showFriendList(){try{const a=await K.A.post("/JH_C_MyFriendList",{mnum:this.myData.mnum});this.myFriendList=a.data,console.log("showFriendList clicked"),this.friendList=!0,this.friendWait=!1,this.friendCall=!1,console.log("Response:",a.data)}catch(a){console.error("Error showing MyFriendList:",a)}},async showFriendWait(){try{const a=await K.A.post("/JH_C_MyFriendWait",{mnum:this.myData.mnum});this.myFriendWait=a.data,console.log("showFriendWait clicked"),this.friendWait=!0,this.friendList=!1,this.friendCall=!1,console.log("Response:",a.data)}catch(a){console.error("Error showing MyFriendWait:",a)}},async showFriendCall(){try{const a=await K.A.post("/JH_C_MyFriendCall",{mnum:this.myData.mnum});this.myFriendCall=a.data,console.log("showFriendCall clicked"),this.friendCall=!0,this.friendList=!1,this.friendWait=!1,console.log("Response:",a.data)}catch(a){console.error("Error showing MyFriendCall:",a)}},async showSearchFriend(){try{const a=await K.A.post("/JH_C_MyFriendSearch",{mnic:this.friendSearchQuery});this.searchFriend=a.data,console.log("Search",this.friendSearchQuery),console.log("Response:",a.data)}catch(a){console.error("Error showing MyFriendSearch:",a)}},async fetchPlusFriend(){try{const a=await K.A.post("/JH_C_PlusFriend",{mnum:this.mnum,mfnum:this.mfnum,mfstatus_makey:700,mfstatus_mikey:701});console.log("Response:",a.data)}catch(a){console.error("Error showing MyFriendSearch:",a)}}}},j=t(1241);const q=(0,j.A)(P,[["render",R],["__scopeId","data-v-0311d9e4"]]);var U=q}}]);
//# sourceMappingURL=220.a980a4bc.js.map