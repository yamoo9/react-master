(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{108:function(t,e,s){"use strict";var a=s(76);s.n(a).a},119:function(t,e,s){"use strict";s.r(e);var a=s(11),i=s(19);const r={closeOnClick:!0,timeout:1e3};var n={name:"RegisterForm",props:["mode"],data:()=>({name:"",email:"",password:"",user:null}),computed:{...Object(a.c)(["firebaseAuth","isAuth","authUser"])},methods:{...Object(a.b)(["getAuthUserSetStore","saveAuthUserToFirebase"]),noti(t,e={path:"/"},s=2e3){this.$snotify.success(t,{timeout:s}).on("destroyed",()=>this.$router.push(e))},signUp(){const{name:t,email:e,password:s}=this;t.trim()&&e.trim()&&s.trim()?this.$snotify.async("응답을 기다리고 있습니다.","가입 승인 대기 중",()=>new Promise((a,n)=>{this.firebaseAuth().createUserWithEmailAndPassword(e,s).then(({user:e})=>{this.user={...e,displayName:t},e.updateProfile({displayName:t}).then(()=>{e.sendEmailVerification().then(()=>{this.noti("가입 승인을 위한 메일을 보냈습니다. 메일을 확인해 승인 처리하세요.",0)}).catch(t=>{this.$snotify.error(Object(i.a)(t.message))}),this.saveAuthUserToFirebase(this.user),a({title:"SUCCESS ✔️",body:`${this.authUser.displayName}님 가입을 환영합니다!`,config:r}),this.noti("가입 되었습니다. 사용자 페이지로 이동합니다.",{path:"/account/user"},1e3)}).catch(t=>this.$snotify.error(Object(i.a)(t.message)))}).catch(t=>{n({title:"ERROR ✘",body:Object(i.a)(t.message),config:r})})})):window.alert("가입자 이름, 이메일, 패스워드 입력을 모두해야 합니다. 다시 한 번 검토한 후 가입 절차를 진행하세요.")},signIn(){const{email:t,password:e}=this;this.firebaseAuth().signInWithEmailAndPassword(t,e).then(({user:t})=>{this.getAuthUserSetStore(t),this.noti("로그인에 성공했습니다. 사용자 페이지로 이동합니다.",{path:"/account/user"},1e3)}).catch(t=>this.$snotify.error(Object(i.a)(t.message)))},signUpOrInSNS(t,e){const s=new this.firebaseAuth[`${t}AuthProvider`];this.firebaseAuth().signInWithPopup(s).then(({user:t,credential:s})=>{s.accessToken;this.saveAuthUserToFirebase(t),this.getAuthUserSetStore(t),"register"===e?this.noti("가입에 성공했습니다. 가입 된 계정으로 로그인을 시도해주세요.",{path:"/"},1e3):this.noti("로그인에 성공했습니다. (가입 과정 없이 로그인을 시도했다면 다시 로그인 필요)",{path:"/"},2e3)}).catch(t=>{console.log(t.message),this.$snotify.error(Object(i.a)(t.message))})}}},o=(s(108),s(5)),c=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"form-signin",on:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"text-center mb-4"},[s("img",{staticClass:"mb-4",attrs:{src:t.$withBase("/assets/HomeScreen.jpg"),alt:"",width:"140",height:"140"}}),t._v(" "),s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v(t._s("register"===t.mode?"회원 가입":"로그인"))])]),t._v(" "),"register"===t.mode?s("div",{staticClass:"form-label-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"inputName",placeholder:"이름",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"inputName"}},[t._v("이름")])]):t._e(),t._v(" "),s("div",{staticClass:"form-label-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"이메일",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"inputEmail"}},[t._v("이메일")])]),t._v(" "),s("div",{staticClass:"form-label-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"패스워드",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"inputPassword"}},[t._v("패스워드")])]),t._v(" "),"register"===t.mode?s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"button"},on:{click:t.signUp}},[t._v("가입")]):s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"button"},on:{click:t.signIn}},[t._v("로그인")]),t._v(" "),s("p",{staticClass:"text-center mt-4"},[t._v("또는")]),t._v(" "),s("div",{staticClass:"sns-account",attrs:{role:"group"}},[s("a",{staticClass:"btn btn-block btn-social btn-google btn-lg",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.signUpOrInSNS("Google",t.mode)}}},[s("span",{staticClass:"fa fa-google",attrs:{"aria-hidden":"true"}}),t._v("\n      Google 계정으로 "+t._s("register"===t.mode?"가입":"로그인")+"\n    ")])]),t._v(" "),s("div",{staticClass:"sns-account mt-2",attrs:{role:"group"}},[s("a",{staticClass:"btn btn-block btn-social btn-facebook btn-lg",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.signUpOrInSNS("Facebook",t.mode)}}},[s("span",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}}),t._v("\n      Facebook 계정으로 "+t._s("register"===t.mode?"가입":"로그인")+"\n    ")])]),t._v(" "),s("div",{staticClass:"sns-account mt-2",attrs:{role:"group"}},[s("a",{staticClass:"btn btn-block btn-social btn-github btn-lg",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.signUpOrInSNS("Github",t.mode)}}},[s("span",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),t._v("\n      GitHub 계정으로 "+t._s("register"===t.mode?"가입":"로그인")+"\n    ")])]),t._v(" "),s("div",{staticClass:"mt-5 text-center"},[s("p",{staticClass:"mb-1"},[t._v(t._s("register"===t.mode?"이미 회원 가입을 했다면?":"아직 회원 가입을 하지 않았다면?"))]),t._v(" "),s("RouterLink",{attrs:{to:"register"===t.mode?"/account/signin":"/account/register"}},[t._v("← "+t._s("register"===t.mode?"로그인 페이지":"회원 가입 페이지"))])],1)])},[],!1,null,"8bdbeafe",null);e.default=c.exports},76:function(t,e,s){}}]);