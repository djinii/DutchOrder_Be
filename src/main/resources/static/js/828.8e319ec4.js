"use strict";(self["webpackChunkv2_client"]=self["webpackChunkv2_client"]||[]).push([[828],{828:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var s=a(6768),i=a(5130);const n=e=>((0,s.Qi)("data-v-01ea4b5c"),e=e(),(0,s.jt)(),e),l={class:"container mt-5"},o=n((()=>(0,s.Lk)("h2",{class:"mb-4"},"개인정보수정",-1))),m={class:"mb-3"},c=n((()=>(0,s.Lk)("label",{for:"mname",class:"form-label"},"이름",-1))),r={class:"mb-3"},u=n((()=>(0,s.Lk)("label",{for:"mnic",class:"form-label"},"닉네임",-1))),d={class:"input-group"},h=["disabled"],p={class:"mb-3"},b=n((()=>(0,s.Lk)("label",{for:"memail",class:"form-label"},"이메일",-1))),k={class:"mb-3"},g=n((()=>(0,s.Lk)("label",{for:"mtel",class:"form-label"},"연락처",-1))),f={class:"input-group"},L=n((()=>(0,s.Lk)("small",{class:"text-muted"},"예시: 010-1234-5678",-1))),v={class:"form-buttons"},C=["disabled"];function y(e,t,a,n,y,N){return(0,s.uX)(),(0,s.CE)("div",l,[o,(0,s.Lk)("form",{onSubmit:t[1]||(t[1]=(0,i.D$)(((...t)=>e.submitForm&&e.submitForm(...t)),["prevent"]))},[(0,s.Lk)("div",m,[c,(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>y.mname=e),class:"form-control",id:"mname",required:"",disabled:""},null,512),[[i.Jo,y.mname]])])],32),(0,s.Lk)("div",r,[u,(0,s.Lk)("div",d,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>y.mnic=e),class:"form-control",id:"mnic",required:"",placeholder:"친구 추가시 사용됩니다",onInput:t[3]||(t[3]=(...e)=>N.enableNickNameChange&&N.enableNickNameChange(...e))},null,544),[[i.Jo,y.mnic]]),(0,s.Lk)("button",{type:"button",class:"btn btn-primary",onClick:t[4]||(t[4]=e=>N.checkDuplicates("mnic")),disabled:!y.isNickNameChanged}," 중복확인 ",8,h)])]),(0,s.Lk)("div",p,[b,(0,s.bo)((0,s.Lk)("input",{type:"memail","onUpdate:modelValue":t[5]||(t[5]=e=>y.memail=e),class:"form-control",id:"memail",required:"",disabled:""},null,512),[[i.Jo,y.memail]])]),(0,s.Lk)("div",k,[g,(0,s.Lk)("div",f,[(0,s.bo)((0,s.Lk)("input",{type:"tel","onUpdate:modelValue":t[6]||(t[6]=e=>y.mtel=e),class:"form-control",id:"mtel",pattern:"[0-9]{3}-[0-9]{4}-[0-9]{4}",required:"",onInput:t[7]||(t[7]=(...e)=>N.enableTelChange&&N.enableTelChange(...e))},null,544),[[i.Jo,y.mtel]])]),L]),(0,s.Lk)("div",v,[(0,s.Lk)("button",{type:"submit",class:"btn btn-primary withdraw",onClick:t[8]||(t[8]=(...e)=>N.updateAccountStatus&&N.updateAccountStatus(...e))}," 탈퇴하기 "),(0,s.Lk)("button",{type:"submit",class:"btn btn-primary",onClick:t[9]||(t[9]=(...e)=>N.updateUserInfo&&N.updateUserInfo(...e)),disabled:!y.isTelChanged&&!y.isNickNameChanged}," 수정하기 ",8,C)])])}a(4114);var N=a(8355),I={data(){return{mnum:"",mname:"",mnic:"",memail:"",mtel:"",originalMnic:"",originalMtel:"",isNickNameChanged:!1,isTelChanged:!1,error:""}},async mounted(){await this.fetchUserInfo()},methods:{async fetchUserInfo(){try{const e=this.$store.getters.getUserMnum;console.log("mnum : "+e);const t=await N.A.get(`/updateInfo/${e}`);console.log("response : "+t);const{mname:a,mnic:s,memail:i,mtel:n}=t.data;console.log("response.data : "+t.data),this.mnum=e,this.mname=a,this.mnic=s,this.originalMnic=s,this.memail=i,this.mtel=n,this.originalMtel=n}catch(e){console.error("사용자 정보를 불러오는데 실패했습니다.",e),this.error="사용자 정보를 불러오는 중 오류가 발생했습니다."}},async checkDuplicates(e){if("mnic"===e){if(!this.mnic.trim())return void alert("닉네임을 입력해주세요.");try{const e=await N.A.get(`/check-duplicate/mnic?mnic=${this.mnic}`);e.data.isDuplicate?alert("이미 사용 중인 닉네임입니다."):alert("사용 가능한 닉네임입니다.")}catch(t){console.error("닉네임 중복 확인 오류:",t),alert("닉네임 중복 확인 중 문제가 발생했습니다.")}}},async updateUserInfo(){if(console.log("updateUserInfo Start!"),this.isNickNameChanged||this.isTelChanged){if(this.isNickNameChanged)try{const e=await N.A.get(`/check-duplicate/mnic?mnic=${this.mnic}`);if(e.data.isDuplicate)return void alert("이미 사용 중인 닉네임입니다.")}catch(e){return console.error("닉네임 중복 확인 오류:",e),void alert("닉네임 중복 확인 중 문제가 발생했습니다.")}try{const e={mname:this.mname,mnic:this.mnic,memail:this.memail,mpw:this.newMpw,mtel:this.mtel};await N.A.put(`/updateInfo/${this.mnum}`,e),this.$router.push("/client/home"),alert("정보가 성공적으로 업데이트 되었습니다.")}catch(e){console.log("정보 업데이트 중 오류 발생",e),this.error="닉네임 중복을 확인해주세요",alert("닉네임 중복을 확인해주세요")}}else alert("수정할 내용이 없습니다.")},async updateAccountStatus(){if(confirm("정말로 탈퇴하시겠습니까? 탈퇴한 계정은 복구할 수 없습니다."))try{await N.A.put(`/updateAccountStatus/${this.mnum}`),this.$store.commit("setLoginStatus",!1),this.$store.commit("setUserLevel",null),this.$store.commit("setUserMnum",null),sessionStorage.removeItem("setLoginStatus"),sessionStorage.removeItem("userLevel"),sessionStorage.removeItem("userMnum"),this.$router.push("/selectMemberType"),alert("탈퇴되었습니다. 안녕히 가세요.")}catch(e){console.log("계정 삭제 중 오류 발생",e),alert("탈퇴하는 중 오류가 발생했습니다.")}},enableTelChange(){this.isTelChanged=!0},enableNickNameChange(){this.isNickNameChanged=!0}}},w=a(1241);const U=(0,w.A)(I,[["render",y],["__scopeId","data-v-01ea4b5c"]]);var $=U}}]);
//# sourceMappingURL=828.8e319ec4.js.map