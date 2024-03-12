"use strict";(self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[]).push([[229],{1229:function(e,s,n){n.r(s),n.d(s,{default:function(){return Je}});var a=n(6768),o=n(4232),t=n(5130);const l={class:"container mt-5",style:{height:"800px","overflow-y":"auto"}},i={class:"row justify-content-center"},r={class:"col-md-7 col-lg-8"},c=(0,a.Lk)("h4",{class:"mb-3"},"가게정보 수정",-1),d={class:"row g-3"},u={class:"col-sm-6"},m=(0,a.Lk)("label",{for:"ShopName",class:"form-label"},"상호명:",-1),f=["value"],p=(0,a.Lk)("div",{class:"invalid-feedback"},"Valid first name is required.",-1),b={class:"col-sm-6"},h=(0,a.Lk)("label",{for:"category",class:"form-label"},"분류:",-1),k=["value"],L=(0,a.Lk)("div",{class:"invalid-feedback"},"Valid last name is required.",-1),v={class:"col-12"},y=(0,a.Lk)("label",{for:"time",class:"form-label"},"운영시간",-1),g=(0,a.Lk)("div",{class:"invalid-feedback"},"시간을 입력해주세요.",-1),N={class:"form-group col-md-5"},_=(0,a.Lk)("label",{for:"my_number"},"전화번호",-1),C=["value"],M={class:"col-12"},I=(0,a.Lk)("label",{for:"address",class:"form-label"},"주소",-1),x=["value"],S=(0,a.Lk)("div",{class:"invalid-feedback"}," Please enter your shipping address. ",-1),B=(0,a.Lk)("button",{type:"submit",class:"btn btn-primary"},"저장",-1);function D(e,s,n,D,V,w){const P=(0,a.g2)("B_MenuPlusMD"),U=(0,a.g2)("B_MenuPluse");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.Lk)("div",i,[(0,a.Lk)("div",r,[c,(0,a.Lk)("h2",null,(0,o.v_)(V.shopName),1),(0,a.Lk)("form",{class:"needs-validation",onSubmit:s[2]||(s[2]=(0,t.D$)(((...e)=>w.submitForm&&w.submitForm(...e)),["prevent"]))},[(0,a.Lk)("div",d,[(0,a.Lk)("div",u,[m,(0,a.Lk)("input",{type:"text",class:"form-control",id:"ShopName",value:V.shopName,readonly:"",disabled:""},null,8,f),p]),(0,a.Lk)("div",b,[h,(0,a.Lk)("input",{type:"text",class:"form-control",id:"category",value:V.category,readonly:"",disabled:""},null,8,k),L]),(0,a.Lk)("div",v,[y,(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",id:"start",placeholder:"운영시작시간","onUpdate:modelValue":s[0]||(s[0]=e=>V.start=e),required:""},null,512),[[t.Jo,V.start]]),(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",id:"end",placeholder:"운영종료시간","onUpdate:modelValue":s[1]||(s[1]=e=>V.end=e),required:""},null,512),[[t.Jo,V.end]]),g]),(0,a.Lk)("div",N,[_,(0,a.Lk)("input",{type:"tel",class:"form-control",name:"my_number",id:"my_pnumber",maxlength:"13",placeholder:"전화번호",value:V.phoneNumber,readonly:"",disabled:""},null,8,C)]),(0,a.Lk)("div",M,[I,(0,a.Lk)("input",{type:"text",class:"form-control",id:"address",value:V.address,readonly:"",disabled:""},null,8,x),S]),(0,a.bF)(P,{bnum:V.bnum},null,8,["bnum"]),(0,a.bF)(U,{bnum:V.bnum,onMenuSelected:w.handleMenuSelected},null,8,["bnum","onMenuSelected"]),B])],32)])])])}const V=["onClick"],w={class:"card-body"},P={class:"card-title"},U={class:"card-text"},X={class:"card-text"};function q(e,s,n,t,l,i){const r=(0,a.g2)("B_MenuRevise");return(0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.menus,((s,n)=>((0,a.uX)(),(0,a.CE)("div",{class:"card",key:n,onClick:n=>e.show(s.fnum)},[(0,a.Lk)("div",w,[(0,a.Lk)("h5",P,(0,o.v_)(s.fname),1),(0,a.Lk)("p",U,(0,o.v_)(s.fprice)+" 원",1),(0,a.Lk)("p",X,(0,o.v_)(s.finfo),1),(0,a.bF)(r,{fnum:s.fnum},null,8,["fnum"])])],8,V)))),128)}var E=n(8355);const A={class:"modal-dialog"},F={class:"modal-content"},J=(0,a.Lk)("div",{class:"modal-header"},[(0,a.Lk)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"메뉴 수정하기"),(0,a.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$={class:"modal-body"},R={key:0,class:"mb-2"},Y={for:"menuName",class:"form-label"},Q={class:"mb-3"},j=(0,a.Lk)("label",{for:"menuDescription",class:"form-label"},"메뉴 설명",-1),T={class:"mb-3"},K=(0,a.Lk)("label",{for:"menuPrice",class:"form-label"},"메뉴 가격",-1),z={key:0,class:"text-danger"},G={class:"mb-3"},H=(0,a.Lk)("label",{class:"form-check-label"},"옵션 추가 여부:",-1),O={class:"form-check"},W=(0,a.Lk)("label",{for:"optionYes",class:"form-check-label"},"옵션 추가",-1),Z={class:"form-check"},ee=(0,a.Lk)("label",{for:"optionNo",class:"form-check-label"},"옵션 추가 안 함",-1),se={class:"modal-footer"},ne=(0,a.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),ae=["disabled"];function oe(e,s,n,l,i,r){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("div",A,[(0,a.Lk)("div",F,[J,(0,a.Lk)("div",$,[(0,a.Lk)("form",{onSubmit:s[6]||(s[6]=(0,t.D$)(((...s)=>e.saveChanges&&e.saveChanges(...s)),["prevent"]))},[i.menuInfo?((0,a.uX)(),(0,a.CE)("div",R,[(0,a.Lk)("label",Y,"현재 메뉴 이름 "+(0,o.v_)(i.fname),1),(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",id:"menuName","onUpdate:modelValue":s[0]||(s[0]=e=>i.fname=e),required:""},null,512),[[t.Jo,i.fname]])])):(0,a.Q3)("",!0),(0,a.Lk)("div",Q,[j,(0,a.bo)((0,a.Lk)("textarea",{class:"form-control",id:"menuDescription","onUpdate:modelValue":s[1]||(s[1]=e=>i.finfo=e),required:""},null,512),[[t.Jo,i.finfo]])]),(0,a.Lk)("div",T,[K,(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",id:"menuPrice","onUpdate:modelValue":s[2]||(s[2]=e=>i.fprice=e),required:"",pattern:"[0-9,]+",onInput:s[3]||(s[3]=(...s)=>e.checkIfNumber&&e.checkIfNumber(...s))},null,544),[[t.Jo,i.fprice]]),i.isNumber?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",z," 숫자만 입력해주세요. "))]),(0,a.Lk)("div",G,[H,(0,a.Lk)("div",O,[(0,a.bo)((0,a.Lk)("input",{type:"radio",id:"optionYes",class:"form-check-input","onUpdate:modelValue":s[4]||(s[4]=e=>i.foption=e),value:"1"},null,512),[[t.XL,i.foption]]),W]),(0,a.Lk)("div",Z,[(0,a.bo)((0,a.Lk)("input",{type:"radio",id:"optionNo",class:"form-check-input","onUpdate:modelValue":s[5]||(s[5]=e=>i.foption=e),value:"2"},null,512),[[t.XL,i.foption]]),ee])])],32)]),(0,a.Lk)("div",se,[ne,(0,a.Lk)("button",{type:"button",class:"btn btn-primary",onClick:s[7]||(s[7]=(...s)=>e.saveChanges&&e.saveChanges(...s)),disabled:!i.isNumber}," Save changes ",8,ae)])])])])}var te={name:"B_MenuRevise",props:["fnum"],data(){return{menuInfo:null,fname:"",finfo:"",fprice:"",foption:"2",isNumber:!0}},mounted(){this.fetchMenuInfo()},watch:{fnum:{immediate:!0,handler(e,s){e!==s&&this.fetchMenuInfo()}}},methods:{async fetchMenuInfo(){try{const e=await E.A.get(`/B_MenuReInfo?fnum=${this.fnum}`);this.menuInfo=e.data,this.menuInfo&&(this.fname=this.menuInfo.fname,this.finfo=this.menuInfo.finfo,this.fprice=this.menuInfo.fprice,this.foption=this.menuInfo.foption,console.log("Fetched menu info:",this.menuInfo),console.log("fnum:",this.fnum))}catch(e){console.error("Error fetching menu data:",e)}}}},le=n(1241);const ie=(0,le.A)(te,[["render",oe]]);var re=ie,ce={name:"B_MenuPluse",components:{B_MenuRevise:re},props:["bnum"],emits:["menuSelected"],data(){return{menus:[]}},created(){this.menuList()},methods:{async menuList(){try{const e=await E.A.get(`/B_MenuInfo?bnum=${this.bnum}`);this.menus=e.data.sort(((e,s)=>new Date(s.fnum)-new Date(e.fnum))),console.log("Response: ",e.data)}catch(e){console.log("Error fetching menus:",e)}},showMenu(e){this.$emit("menuSelected",e)}}};const de=(0,le.A)(ce,[["render",q]]);var ue=de;const me=(0,a.Lk)("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#B_MenuPlus"}," 메뉴 추가하기 ",-1),fe={class:"modal fade",id:"B_MenuPlus",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},pe={class:"modal-dialog"},be={class:"modal-content"},he=(0,a.Lk)("div",{class:"modal-header"},[(0,a.Lk)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"}," 메뉴 추가하기 "),(0,a.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ke={class:"modal-body"},Le={class:"mb-2"},ve=(0,a.Lk)("label",{for:"menuName",class:"form-label"},"메뉴 이름",-1),ye={class:"mb-3"},ge=(0,a.Lk)("label",{for:"menuDescription",class:"form-label"},"메뉴 설명",-1),Ne={class:"mb-3"},_e=(0,a.Lk)("label",{for:"menuPrice",class:"form-label"},"메뉴 가격",-1),Ce={key:0,class:"text-danger"},Me={class:"mb-3"},Ie=(0,a.Lk)("label",{class:"form-check-label"},"옵션 추가 여부:",-1),xe={class:"form-check"},Se=(0,a.Lk)("label",{for:"optionYes",class:"form-check-label"},"옵션 추가",-1),Be={class:"form-check"},De=(0,a.Lk)("label",{for:"optionNo",class:"form-check-label"},"옵션 추가 안 함",-1),Ve={class:"modal-footer"},we=(0,a.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),Pe=["disabled"];function Ue(e,s,n,o,l,i){return(0,a.uX)(),(0,a.CE)("div",null,[me,(0,a.Lk)("div",fe,[(0,a.Lk)("div",pe,[(0,a.Lk)("div",be,[he,(0,a.Lk)("div",ke,[(0,a.Lk)("form",{onSubmit:s[6]||(s[6]=(0,t.D$)(((...e)=>i.saveChanges&&i.saveChanges(...e)),["prevent"]))},[(0,a.Lk)("div",Le,[ve,(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",id:"menuName","onUpdate:modelValue":s[0]||(s[0]=e=>l.fname=e),required:""},null,512),[[t.Jo,l.fname]])]),(0,a.Lk)("div",ye,[ge,(0,a.bo)((0,a.Lk)("textarea",{class:"form-control",id:"menuDescription","onUpdate:modelValue":s[1]||(s[1]=e=>l.finfo=e),required:""},null,512),[[t.Jo,l.finfo]])]),(0,a.Lk)("div",Ne,[_e,(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",id:"menuPrice","onUpdate:modelValue":s[2]||(s[2]=e=>l.fprice=e),required:"",pattern:"[0-9,]+",onInput:s[3]||(s[3]=(...e)=>i.checkIfNumber&&i.checkIfNumber(...e))},null,544),[[t.Jo,l.fprice]]),l.isNumber?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",Ce," 숫자만 입력해주세요. "))]),(0,a.Lk)("div",Me,[Ie,(0,a.Lk)("div",xe,[(0,a.bo)((0,a.Lk)("input",{type:"radio",id:"optionYes",class:"form-check-input","onUpdate:modelValue":s[4]||(s[4]=e=>l.foption=e),value:"1"},null,512),[[t.XL,l.foption]]),Se]),(0,a.Lk)("div",Be,[(0,a.bo)((0,a.Lk)("input",{type:"radio",id:"optionNo",class:"form-check-input","onUpdate:modelValue":s[5]||(s[5]=e=>l.foption=e),value:"2"},null,512),[[t.XL,l.foption]]),De])])],32)]),(0,a.Lk)("div",Ve,[we,(0,a.Lk)("button",{type:"button",class:"btn btn-primary",onClick:s[7]||(s[7]=(...e)=>i.saveChanges&&i.saveChanges(...e)),disabled:!l.isNumber}," Save changes ",8,Pe)])])])])])}var Xe={name:"B_MenuPlusMD",props:["bnum","fnum"],data(){return{fname:"",finfo:"",fprice:"",foption:"2",isNumber:!0}},methods:{checkIfNumber(){const e=this.fprice.replace(/\D/g,"");this.fprice=Number(e).toLocaleString(),this.isNumber=/^[0-9,]+$/.test(e)},saveChanges(){if(!this.isNumber)return;const e=new FormData;e.append("fname",this.fname),e.append("finfo",this.finfo),e.append("fprice",this.fprice.replace(/,/g,"")),e.append("foption",this.foption),e.append("bnum",this.bnum),E.A.post("/MenuInsert",e,{headers:{"Content-Type":"application/json"}}).then((e=>{console.log("메뉴 추가 성공:",e.data)})).catch((e=>{console.error("메뉴 추가 실패:",e)}))}}};const qe=(0,le.A)(Xe,[["render",Ue]]);var Ee=qe,Ae={name:"B_ShopRevise",components:{B_MenuPlusMD:Ee,B_MenuPluse:ue},data(){return{shop:[],category:"",start:"",end:"",bnum:1003,shopName:"",phoneNumber:"",address:""}},created(){this.fetchStoreInfo(this.bnum)},methods:{handleMenuSelected(e){console.log("Selected fnum:",e)},fetchStoreInfo(e){E.A.get(`/B_ShopDetail?bnum=${e}`).then((e=>{this.shop=e.data,this.shopName=this.shop.sname,this.category=this.shop.fcategory_mikey,this.phoneNumber=this.shop.stel,this.address=this.shop.saddr,this.start=this.shop.start_time,this.end=this.shop.end_time})).catch((e=>{console.error("가게 정보 가져오기 실패:",e)}))},submitForm(){const e={bnum:this.bnum,start_time:this.start,end_time:this.end};E.A.post("/B_ShopTimeUpdate",e).then((e=>{console.log("서버 응답:",e.data)})).catch((e=>{console.error("서버 요청 실패:",e)}))}}};const Fe=(0,le.A)(Ae,[["render",D]]);var Je=Fe}}]);
//# sourceMappingURL=229.117086a8.js.map