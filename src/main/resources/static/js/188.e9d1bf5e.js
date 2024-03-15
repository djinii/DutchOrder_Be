"use strict";(self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[]).push([[188],{8188:function(e,t,l){l.r(t),l.d(t,{default:function(){return C}});var a=l(6768),m=l(5130);const s=e=>((0,a.Qi)("data-v-03d716de"),e=e(),(0,a.jt)(),e),i={class:"container mt-5"},o=s((()=>(0,a.Lk)("h2",{class:"mb-4"},"회원가입(사업자)",-1))),r={class:"mb-3"},n=s((()=>(0,a.Lk)("label",{for:"mname",class:"form-label"},"이름",-1))),c={class:"mb-3"},u=s((()=>(0,a.Lk)("label",{for:"memail",class:"form-label"},"이메일",-1))),p={class:"input-group"},d={class:"btn-verify"},b={class:"mb-3"},k=s((()=>(0,a.Lk)("label",{for:"ecode",class:"form-label"},"인증번호",-1))),f={class:"input-group"},h={class:"mb-3"},L=s((()=>(0,a.Lk)("label",{for:"mpw",class:"form-label"},"비밀번호",-1))),y={class:"mb-3"},v=s((()=>(0,a.Lk)("label",{for:"confirm_mpw",class:"form-label"},"비밀번호 확인",-1))),w={class:"mb-3"},_=s((()=>(0,a.Lk)("label",{for:"mtel",class:"form-label"},"연락처",-1))),g=s((()=>(0,a.Lk)("div",{class:"center-btn"},[(0,a.Lk)("button",{type:"submit",class:"btn btn-primary"},"가입하기")],-1)));function q(e,t,l,s,q,J){return(0,a.uX)(),(0,a.CE)("div",i,[o,(0,a.Lk)("form",{onSubmit:t[9]||(t[9]=(0,m.D$)(((...e)=>J.submitForm&&J.submitForm(...e)),["prevent"]))},[(0,a.Lk)("div",r,[n,(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>q.mname=e),class:"form-control",id:"mname",required:""},null,512),[[m.Jo,q.mname]])]),(0,a.Lk)("div",c,[u,(0,a.Lk)("div",p,[(0,a.bo)((0,a.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>q.memail=e),class:"form-control",id:"memail",required:"",placeholder:"더치오더 아이디로 사용됩니다",onBlur:t[2]||(t[2]=(...e)=>J.validateEmail&&J.validateEmail(...e))},null,544),[[m.Jo,q.memail]]),(0,a.Lk)("div",d,[(0,a.Lk)("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=(...e)=>J.checkDuplicates&&J.checkDuplicates(...e))}," 중복확인 ")])])]),(0,a.Lk)("div",b,[k,(0,a.Lk)("div",f,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>q.ecode=e),class:"form-control",id:"ecode",required:"",placeholder:"이메일로 전송된 인증번호를 입력하세요"},null,512),[[m.Jo,q.ecode]]),(0,a.Lk)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=(...e)=>J.submitForm&&J.submitForm(...e))}," 확인 ")])]),(0,a.Lk)("div",h,[L,(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=e=>q.mpw=e),class:"form-control",id:"mpw",required:""},null,512),[[m.Jo,q.mpw]])]),(0,a.Lk)("div",y,[v,(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[7]||(t[7]=e=>q.confirm_mpw=e),class:"form-control",id:"confirm_mpw",required:""},null,512),[[m.Jo,q.confirm_mpw]])]),(0,a.Lk)("div",w,[_,(0,a.bo)((0,a.Lk)("input",{type:"tel","onUpdate:modelValue":t[8]||(t[8]=e=>q.mtel=e),class:"form-control",id:"mtel",pattern:"[0-9]{3}-[0-9]{4}-[0-9]{4}",required:"",placeholder:"예시: 010-1234-5678"},null,512),[[m.Jo,q.mtel]])]),g],32)])}l(4114);var J=l(8355),U={data(){return{mname:"",memail:"",ecode:"",mpw:"",confirm_mpw:"",mtel:"",mgroup_mikey:"100",mgroup_makey:"102",mstatus_mikey:"200",mstatus_makey:"201",hiredate:""}},mounted(){},methods:{async submitForm(){if(this.mname.trim()&&this.memail.trim()&&this.mpw.trim()&&this.mtel.trim())if(this.mpw===this.confirm_mpw)try{const e=await J.A.post("/business/join",{mname:this.mname,memail:this.memail,mpw:this.mpw,mtel:this.mtel,mgroup_makey:"100",mgroup_mikey:"102",mstatus_makey:"200",mstatus_mikey:"201"});200===e.status?(alert("회원가입이 완료되었습니다."),this.$router.push("/login/business")):alert("회원가입에 실패했습니다.")}catch(e){console.error("회원가입 오류:",e),alert("회원가입에 실패했습니다.")}else alert("비밀번호가 일치하지 않습니다.");else alert("모든 필드를 채워주세요.")},validateEmail(){const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;e.test(this.memail)||(alert("유효하지 않은 이메일 형식입니다."),this.memail="")},async checkDuplicates(){if(this.memail.trim())try{const e=await J.A.get(`/check-duplicate/memail?memail=${this.memail}`);e.data.isDuplicate?alert("이미 사용 중인 이메일입니다."):alert("사용 가능한 이메일입니다.")}catch(e){console.error("이메일 중복 확인 오류: ",e),alert("이메일 중복 확인 중 문제가 발생했습니다.")}else alert("이메일을 입력해주세요.")}}},V=l(1241);const A=(0,V.A)(U,[["render",q],["__scopeId","data-v-03d716de"]]);var C=A}}]);
//# sourceMappingURL=188.e9d1bf5e.js.map