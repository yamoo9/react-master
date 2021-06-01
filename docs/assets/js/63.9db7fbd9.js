(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{311:function(s,a,t){"use strict";t.r(a);var e=t(12),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"firebase-구성-앱-등록-💰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firebase-구성-앱-등록-💰"}},[s._v("#")]),s._v(" Firebase 구성 (앱 등록) 💰")]),s._v(" "),t("h2",{attrs:{id:"firebase-웹-앱-등록"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firebase-웹-앱-등록"}},[s._v("#")]),s._v(" Firebase 웹 앱 등록")]),s._v(" "),t("p",[s._v("Firebase "),t("a",{attrs:{href:"https://console.firebase.google.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Console"),t("OutboundLink")],1),s._v("에서 웹 앱에 Firebase 등록 과정을 수행한 후, Firebase를 구성하는 코드를 추가합니다. (영상 "),t("code",[s._v("01:02")]),s._v(" 까지만 참고)")]),s._v(" "),t("iframe-wrapper",{attrs:{src:"https://www.youtube-nocookie.com/embed/tycjPIQVTys"}}),s._v(" "),t("h2",{attrs:{id:"firebase-sdk-구성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firebase-sdk-구성"}},[s._v("#")]),s._v(" Firebase SDK 구성")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/firebase",target:"_blank",rel:"noopener noreferrer"}},[s._v("firebase"),t("OutboundLink")],1),s._v(" 패키지를 프로젝트에 설치합니다.")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i firebase\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Firebase 앱 초기화 및 인증, 데이터베이스 객체를 생성하여 내보내는 "),t("code",[s._v("firebase.js")]),s._v(" 파일을 작성합니다.")]),s._v(" "),t("p",[t("strong",[s._v("src/services/firebase.js")])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase 앱 모듈 불러오기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" firebase "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firebase/app"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 데이터베이스, 인증 모듈 불러오기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firebase/firestore"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firebase/auth"')]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase 구성(Config)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase Console에서 구성 값을 가져와 이 곳에 붙여 넣습니다.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  apiKey"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AIzaSyA0zozq0tAcSqppM0MDUfGUk5aXXXXXXXXX"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  authDomain"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"learning-guide-firebase.firebaseapp.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  databaseURL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://learning-guide-firebase.firebaseio.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  projectId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"learning-guide-firebase"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  storageBucket"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"learning-guide-firebase.appspot.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  messagingSenderId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"474750000000"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  appId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1:000000000000:web:de4c020000000fdde83x3k"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase 앱 초기화")]),s._v("\nfirebase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("initializeApp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase 인증, 데이터베이스 객체 생성 (내보내기)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" auth "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" firebase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("auth")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" db "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" firebase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("firestore")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase 모듈 기본 내보내기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" firebase\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("[오류 발생] Firebase: No Firebase App '[DEFAULT]' has been created")]),s._v(" "),t("p",[s._v("Firebase 앱 초기화 호출 오류가 발생하면 아래처럼 초기화 코드를 수정한 후 실행해 문제를 해결합니다.")]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase 앱이 실행 중인 상태 확인")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("firebase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 실행 중인 앱이 없을 경우, Firebase 앱 초기화")]),s._v("\n  firebase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("initializeApp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 실행 중인 앱이 있을 경우, Firebase 앱 구동")]),s._v("\n  firebase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("br")]),s._v(" "),t("p",[s._v("라이브 예제")]),s._v(" "),t("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/firebase-guseong-aeb-deungrog-7epyt?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fservices%2Ffirebase.js&theme=dark",title:"Firebase 구성 (앱 등록)",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);