(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{221:function(s,a,t){"use strict";t.r(a);var e=t(8),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"소개"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#소개"}},[s._v("#")]),s._v(" 소개")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/CSFrequency/react-firebase-hooks",target:"_blank",rel:"noopener noreferrer"}},[s._v("React Firebase Hooks"),t("OutboundLink")],1),s._v("은 "),t("a",{attrs:{href:"https://firebase.google.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Firebase"),t("OutboundLink")],1),s._v(" 서비스 활용을 위한 훅(Hooks) 라이브러리입니다.")]),s._v(" "),t("base-img",{attrs:{src:"https://miro.medium.com/fit/c/1838/551/1*SzrSsS1stZQ7ipYObndbAw.png"}}),s._v(" "),t("h2",{attrs:{id:"훅을-사용하는-이유"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#훅을-사용하는-이유"}},[s._v("#")]),s._v(" 훅을 사용하는 이유")]),s._v(" "),t("p",[s._v("React Hooks은 좀 과장된 면이 없잖아 있지만, 훅이 React 앱 개발에 편의성을 높여준 것은 사실입니다.\n훅을 사용한 방법이 이전에 사용되던 방법 보다 훨씬 간단합니다.\n이 라이브러리는 "),t("a",{attrs:{href:"https://www.npmjs.com/package/rxfire",target:"_blank",rel:"noopener noreferrer"}},[s._v("RxFire"),t("OutboundLink")],1),s._v("에서 영감을 얻었으며, React Hooks 출시 전에\n여러 앱에서 사용되던 라이브러리를 기반으로 합니다.")]),s._v(" "),t("h2",{attrs:{id:"라이브러리-훅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#라이브러리-훅"}},[s._v("#")]),s._v(" 라이브러리 훅")]),s._v(" "),t("p",[s._v("React Firebase Hooks 라이브러리가 제공하는 훅은 다음의 4가지입니다.")]),s._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/lecture/r-fb-hooks-auth.html"}},[s._v("Auth Hooks")])],1),s._v(" "),t("li",[t("a",{attrs:{href:"#realtime-database-hooks"}},[s._v("Realtime Database Hooks")]),s._v(" (준비중)")]),s._v(" "),t("li",[t("a",{attrs:{href:"#cloud-firestore-hooks"}},[s._v("Cloud Firestore Hooks")]),s._v(" (준비중)")]),s._v(" "),t("li",[t("a",{attrs:{href:"#cloud-storage-hooks"}},[s._v("Cloud Storage Hooks")]),s._v(" (준비중)")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[s._v("React Native 0.59.0 이상 버전부터 훅을 공식 지원합니다. React Firebase Hooks은 Firebase JS SDK 및 React Native Firebase와 함께 작동하지만, 일부 Flow 및 Typescript 유형(types)이 문제가 되는 경우가 있습니다. React Native Firebase 사용자를 위해 이를 개선하는 방법을 찾고 있습니다.")])]),s._v(" "),t("h2",{attrs:{id:"설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[s._v("#")]),s._v(" 설치")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/firebase",target:"_blank",rel:"noopener noreferrer"}},[s._v("firebase"),t("OutboundLink")],1),s._v(" JS 클라이언트를 설치합니다.")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i firebase\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/react-firebase-hooks",target:"_blank",rel:"noopener noreferrer"}},[s._v("react-firebase-hooks"),t("OutboundLink")],1),s._v(" 패키지를 프로젝트에 설치합니다.")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i react-firebase-hooks\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",[s._v("React Firebase Hooks은 React 16.8.0 이상, Firebase v5.0.0 이상에서 정상 작동합니다.")])]),s._v(" "),t("h2",{attrs:{id:"firebase-실습-준비"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firebase-실습-준비"}},[s._v("#")]),s._v(" Firebase 실습 준비")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("이미 Firebase 프로젝트가 준비되어 있다면? 아래(⬇) 소개하는 프로세스는 넘어가도 좋습니다.")])]),s._v(" "),t("h3",{attrs:{id:"firebase-로그인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firebase-로그인"}},[s._v("#")]),s._v(" Firebase 로그인")]),s._v(" "),t("p",[s._v("필자가 이전에 작성한 "),t("a",{attrs:{href:"https://yamoo9.github.io/firebase/guide/GettingStarted/NewProject.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Firebase 러닝 가이드, '로그인'"),t("OutboundLink")],1),s._v(" 섹션 글을 참고하세요.")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[s._v("이전 작성 시, 캡처한 이미지는 현재 Firebase 서비스 UI와 다를 수 있고, Vue 프레임워크에서의 활용 예를 정리한 것임을 알려드립니다.")])]),s._v(" "),t("iframe-wrapper",{attrs:{src:"https://yamoo9.github.io/firebase/guide/GettingStarted/NewProject.html"}}),s._v(" "),t("h3",{attrs:{id:"firebase-구성-정보"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firebase-구성-정보"}},[s._v("#")]),s._v(" Firebase 구성 정보")]),s._v(" "),t("p",[s._v("아래 URL의 "),t("code",[s._v("프로젝트")]),s._v("를 "),t("strong",[s._v("프로젝트 이름으로 변경")]),s._v("해 브라우저 주소 창에 입력하면 Firebase 구성 정보를 확인할 수 있습니다.")]),s._v(" "),t("blockquote",[t("p",[s._v("https://console.firebase.google.com/project/프로젝트/settings/general")])]),s._v(" "),t("base-img",{staticStyle:{"max-width":"690px","margin-left":"-15px"},attrs:{src:"firebase-sdk-snippet.jpg"}}),s._v(" "),t("p",[t("strong",[s._v("Firebase 구성(configuration)")]),s._v(" 정보 구성은 다음과 같습니다.")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" firebaseConfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  apiKey"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"API-키-정보"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  projectId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"프로젝트-아이디"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  authDomain"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"인증-도메인-이름"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  databaseURL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"데이터베이스-이름-URL"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  storageBucket"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"스토리지-버킷"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  messagingSenderId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"메시징-샌더-아이디"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  appId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"앱-아이디"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v('"프로젝트에 앱이 없습니다."라고 표시되면?')]),s._v(" "),t("p",[s._v("Firebase 구성(Config) 정보를 얻기 위해 앱을 생성해야 합니다. 웹 앱 생성 버튼(</>)을 눌러 앱을 생성하세요.")]),s._v(" "),t("base-img",{staticStyle:{"max-width":"900px","margin-left":"0"},attrs:{src:"firebase-app-nothing.png"}})],1),s._v(" "),t("h3",{attrs:{id:"환경-변수-등록"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#환경-변수-등록"}},[s._v("#")]),s._v(" 환경 변수 등록")]),s._v(" "),t("p",[s._v("프로젝트 루트(root) 위치에 있는 환경 변수 "),t("code",[s._v(".env")]),s._v(" 파일에 Firebase 정보 값을 등록합니다.")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("REACT_APP_FB_API_KEY=API키\nREACT_APP_FB_PROJECT_ID=프로젝트ID\nREACT_APP_FB_MESSANGER_SENDER_ID=메신저샌더ID\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"firebase-앱-초기화"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firebase-앱-초기화"}},[s._v("#")]),s._v(" Firebase 앱 초기화")]),s._v(" "),t("p",[t("code",[s._v("firebase/config.js")]),s._v(" 파일에 다음과 같이 작성하여 Firebase 앱을 초기화 하도록 구성합니다.")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase 앱 패키지 호출")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" firebase "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firebase/app"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase 앱 KEY & ID")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REACT_APP_FB_API_KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REACT_APP_FB_PROJECT_ID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REACT_APP_FB_MESSANGER_SENDER_ID")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase 앱 구성")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  apiKey"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REACT_APP_FB_API_KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  projectId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REACT_APP_FB_PROJECT_ID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  messagingSenderId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REACT_APP_FB_MESSANGER_SENDER_ID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  authDomain"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"인증-도메인-이름"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  databaseURL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"데이터베이스-이름-URL"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  storageBucket"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"스토리지-버킷"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase 앱 초기화")]),s._v("\nfirebase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("initializeApp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("JavaScript 환경에서 Firebase를 통합하는 최신 내용은 "),t("a",{attrs:{href:"https://firebase.google.com/docs/web/setup",target:"_blank",rel:"noopener noreferrer"}},[s._v("공식 문서"),t("OutboundLink")],1),s._v("를 참고하세요.")])]),s._v(" "),t("h2",{attrs:{id:"영상-강의"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#영상-강의"}},[s._v("#")]),s._v(" 영상 강의")]),s._v(" "),t("p",[s._v("촬영 후 업데이트 될 예정입니다.")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);