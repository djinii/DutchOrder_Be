"use strict";(self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[]).push([[119],{5119:function(l,e,t){t.r(e),t.d(e,{default:function(){return _}});var a=t(6768),o=t(5130),m=t(4232);const n=l=>((0,a.Qi)("data-v-ef21479c"),l=l(),(0,a.jt)(),l),s={class:"container mt-5"},r={class:"row justify-content-center"},c={class:"col-md-6"},i=n((()=>(0,a.Lk)("h3",{class:"text-center"},"아이디 찾기",-1))),d={class:"form-group row"},u=n((()=>(0,a.Lk)("label",{for:"mname",class:"col-sm-4 col-form-label"},"이름",-1))),f={class:"col-sm-11"},k={class:"form-group row"},v=n((()=>(0,a.Lk)("label",{for:"mtel",class:"col-sm-4 col-form-label"},"연락처",-1))),p={class:"col-sm-11"},y=n((()=>(0,a.Lk)("div",{class:"form-group row"},[(0,a.Lk)("div",{class:"col-sm-12 text-center"},[(0,a.Lk)("button",{type:"submit",class:"btn btn-primary"},"확인")])],-1))),L={class:"resultMessage"},E={key:0},b={key:1};function h(l,e,t,n,h,F){return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("div",r,[(0,a.Lk)("div",c,[i,(0,a.Lk)("form",{onSubmit:e[2]||(e[2]=(0,o.D$)(((...l)=>F.findMyEmail&&F.findMyEmail(...l)),["prevent"]))},[(0,a.Lk)("div",d,[u,(0,a.Lk)("div",f,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",id:"mname","onUpdate:modelValue":e[0]||(e[0]=l=>h.mname=l),required:"",placeholder:"이름을 입력하세요"},null,512),[[o.Jo,h.mname]])])]),(0,a.Lk)("div",k,[v,(0,a.Lk)("div",p,[(0,a.bo)((0,a.Lk)("input",{type:"tel","onUpdate:modelValue":e[1]||(e[1]=l=>h.mtel=l),class:"form-control",id:"mtel",pattern:"[0-9]{3}-[0-9]{4}-[0-9]{4}",required:"",placeholder:"예시: 010-1234-5678"},null,512),[[o.Jo,h.mtel]])])]),y],32),(0,a.Lk)("div",L,[null!==h.myEmailFound&&""!==h.myEmailFound?((0,a.uX)(),(0,a.CE)("div",E," 당신의 아이디는 "+(0,m.v_)(h.myEmailFound)+" 입니다. ",1)):""===h.myEmailFound?((0,a.uX)(),(0,a.CE)("div",b," 해당하는 아이디 정보를 찾을 수 없습니다. ")):(0,a.Q3)("",!0)])])])])}var F=t(8355),w={data(){return{mname:"",mtel:"",myEmailFound:null}},methods:{findMyEmail(){F.A.post("/findMyEmail",{mname:this.mname,mtel:this.mtel}).then((l=>{this.myEmailFound=l.data?l.data:""})).catch((l=>{console.error("Error:",l),this.myEmailFound=""}))}}},C=t(1241);const M=(0,C.A)(w,[["render",h],["__scopeId","data-v-ef21479c"]]);var _=M}}]);
//# sourceMappingURL=119.1c1ab831.js.map