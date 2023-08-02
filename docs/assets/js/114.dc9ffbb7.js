(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{362:function(s,a,t){"use strict";t.r(a);var n=t(12),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"커스텀-템플릿-💰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#커스텀-템플릿-💰"}},[s._v("#")]),s._v(" 커스텀 템플릿 💰")]),s._v(" "),t("h2",{attrs:{id:"cra-template-ko"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cra-template-ko"}},[s._v("#")]),s._v(" cra-template-ko")]),s._v(" "),t("p",[s._v("기본 템플릿 대신, 사용자 정의 템플릿(예: "),t("a",{attrs:{href:"https://www.npmjs.com/package/cra-template-ko",target:"_blank",rel:"noopener noreferrer"}},[s._v("cra-template-ko"),t("OutboundLink")],1),s._v(")을 사용해 새로운 프로젝트를 구성 할 수도 있습니다.")]),s._v(" "),t("h3",{attrs:{id:"설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[s._v("#")]),s._v(" 설치")]),s._v(" "),t("p",[t("code",[s._v("cra-template-ko")]),s._v(" 프로젝트는 "),t("a",{attrs:{href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"noopener noreferrer"}},[s._v("Create React App"),t("OutboundLink")],1),s._v("의 템플릿에 따라 제작 된 사용자 정의 한국어 버전 프로젝트 키트(Kit)입니다.")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx create-react-app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("프로젝트_이름"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --template ko\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("CRA 커스텀 템플릿 이름은 "),t("code",[s._v("cra-template-")]),s._v(' 접두사로 시작하지만, "템플릿 이름"만으로도 설치가 가능합니다.')])]),s._v(" "),t("h3",{attrs:{id:"추가된-항목"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#추가된-항목"}},[s._v("#")]),s._v(" 추가된 항목")]),s._v(" "),t("p",[s._v("기본 템플릿 "),t("code",[s._v("cra-template")]),s._v("에 추가된 항목입니다.")]),s._v(" "),t("ul",[t("li",[s._v("Dart Sass 패키지 추가")]),s._v(" "),t("li",[s._v("classnames 패키지 추가")]),s._v(" "),t("li",[s._v("serve 패키지 및 빌드 실행 명령 추가")]),s._v(" "),t("li",[s._v("jsconfig.json 절대 경로 및 Webpack 별칭(alias) 설정")]),s._v(" "),t("li",[s._v("Browserslist 배포(production) 한국(KR) 환경으로 수정 및 IE 11 이상 지원 설정")])]),s._v(" "),t("h3",{attrs:{id:"템플릿-구조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#템플릿-구조"}},[s._v("#")]),s._v(" 템플릿 구조")]),s._v(" "),t("p",[s._v("커스텀 템플릿 구조는 "),t("a",{attrs:{href:"https://github.com/yamoo9/cra-template-ko",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub 저장소"),t("OutboundLink")],1),s._v("에서 자세히 살펴볼 수 있습니다.")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── template/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 템플릿 디렉토리")]),s._v("\n│   ├── public/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 정적 에셋 디렉토리")]),s._v("\n│   │   ├── assets/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 정적 자산 관리")]),s._v("\n│   │   │   ├── favicon.png\n│   │   │   ├── logo192.png\n│   │   │   ├── logo512.png\n│   │   │   └── og-image.jpg\n│   │   ├── index.html "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 스태틱 엔트리 파일")]),s._v("\n│   │   ├── manifest.json\n│   │   └── robots.txt\n│   ├── src/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 프로젝트 소스 디렉토리")]),s._v("\n│   │   ├── app/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 앱 컴포넌트 디렉토리")]),s._v("\n│   │   │   ├── App.css\n│   │   │   ├── App.js\n│   │   │   └── App.test.js\n│   │   ├── assets/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 동적 자산 디렉토리")]),s._v("\n│   │   │   └── logo.svg\n│   │   ├── components/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 컴포넌트 디렉토리")]),s._v("\n│   │   │   └── empty\n│   │   ├── containers/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 컨테이너 디렉토리")]),s._v("\n│   │   │   └── empty\n│   │   ├── styles/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 스타일 디렉토리")]),s._v("\n│   │   │   ├── common.module.css\n│   │   │   ├── custom-reset.css\n│   │   │   └── index.css\n│   │   ├── index.js "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 엔트리 파일")]),s._v("\n│   │   ├── reportWebVitals.js\n│   │   └── setupTests.js\n│   ├── README.md\n│   ├── gitignore\n│   ├── jsconfig.json "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jsconfig 구성 파일")]),s._v("\n│   ├── package-lock.json\n│   └── package.json "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 패키지 관리 파일")]),s._v("\n├── README.md\n├── package.json "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 템플릿 패키지 관리 파일")]),s._v("\n└── template.json "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 템플릿 구성 파일")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br")])]),t("h2",{attrs:{id:"커스텀-템플릿-제작"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#커스텀-템플릿-제작"}},[s._v("#")]),s._v(" 커스텀 템플릿 제작")]),s._v(" "),t("p",[s._v("커스텀 템플릿(Custom Templates)을 사용하면 Create React App의 모든 기능 위에 프로젝트에 필요한 도구를 추가한 템플릿을 만들어 활용할 수 있습니다. 공식적으로 지원하는 기본 템플릿은 2가지이지만, NPM에서 검색하면 "),t("a",{attrs:{href:"https://www.npmjs.com/search?q=cra-template-*",target:"_blank",rel:"noopener noreferrer"}},[s._v("매우 다양한 커스텀 템플릿이 검색"),t("OutboundLink")],1),s._v(" 될 정도로 만들기 쉽고 여러 곳에서 커스텀 템플릿이 사용됩니다.")]),s._v(" "),t("h3",{attrs:{id:"템플릿-구성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#템플릿-구성"}},[s._v("#")]),s._v(" 템플릿 구성")]),s._v(" "),t("p",[s._v("템플릿을 만들기 위한 구조는 다음과 같습니다. 템플릿 디렉토리에 기본적으로 다음의 파일이 필요합니다. ("),t("a",{attrs:{href:"https://github.com/facebook/create-react-app/tree/master/packages/cra-template",target:"_blank",rel:"noopener noreferrer"}},[s._v("참고"),t("OutboundLink")],1),s._v(")")]),s._v(" "),t("p",[t("strong",[s._v("cra-template-[템플릿-이름]/")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("template/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 템플릿 디렉토리")]),s._v("\n├── public/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 정적 에셋 디렉토리")]),s._v("\n│   └── index.html "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 스태틱 엔트리 파일")]),s._v("\n├── src/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 프로젝트 소스 디렉토리")]),s._v("\n│   └── index.js "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 엔트리 파일 (또는 index.tsx)")]),s._v("\n├── README.md "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NPM 용 ")]),s._v("\n├── gitignore\n└── package.json "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 패키지 관리 파일")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",[s._v("디렉토리 / 파일")]),s._v(" "),t("th",[s._v("설명")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("template")])]),s._v(" "),t("td",[s._v("Create React App이 설치 될 때 사용자의 앱 디렉토리에 복사됩니다.")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("template.json")])]),s._v(" "),t("td",[s._v("템플릿의 구성 파일입니다. "),t("code",[s._v("package")]),s._v(" 키를 사용하면 "),t("code",[s._v("package.json")]),s._v(" 템플릿 종속성, NPM 스크립트 등 새 프로젝트에 추가 하려는 모든 키/값을 제공 할 수 있습니다.")])])])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"package"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eslint-plugin-jsx-a11y"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^6.2.3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"serve"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^11.2.0"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"serve"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"serve -s build"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build-and-serve"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build && npm run serve"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eslintConfig"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"extends"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-app"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugin:jsx-a11y/recommended"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jsx-a11y"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[t("code",[s._v("template.json")]),s._v(" 파일의 "),t("code",[s._v("dependencies")]),s._v(", "),t("code",[s._v("scripts")]),s._v(" 항목에 추가한 모든 값들은\nCreate Rect App의 기본 설정과 병합되며 Create React App 기본 값과 일치하는 모든 값은 대체됩니다.")]),s._v(" "),t("h3",{attrs:{id:"템플릿-테스트"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#템플릿-테스트"}},[s._v("#")]),s._v(" 템플릿 테스트")]),s._v(" "),t("p",[s._v("템플릿을 로컬에서 테스트하려면 "),t("code",[s._v("file:")]),s._v(" 접두사 뒤에 템플릿 디렉토리 파일 경로를 전달합니다.")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx create-react-app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("테스트"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --template file:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/cra-template-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("템플릿-이름"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"npm-회원가입-로그인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-회원가입-로그인"}},[s._v("#")]),s._v(" NPM 회원가입/로그인")]),s._v(" "),t("p",[s._v("NPM에 커스텀 템플릿 패키지를 배포하려면 먼저 "),t("a",{attrs:{href:"https://www.npmjs.com/signup",target:"_blank",rel:"noopener noreferrer"}},[s._v("가입"),t("OutboundLink")],1),s._v("한 후, 이메일 인증을 받아야 합니다.\n이미 가입, 인증 완료 된 사용자라면 로그인 하여 커스템 템플릿 루트 위치에서 다음 명령을 실행해 배포할 수 있습니다. ("),t("a",{attrs:{href:"https://heropy.blog/2019/01/31/node-js-npm-module-publish/",target:"_blank",rel:"noopener noreferrer"}},[s._v("참고"),t("OutboundLink")],1),s._v(")")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 로그인 여부 확인")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 로그인 | 로그오프 npm logout")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"npm-패키지-버전-관리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-패키지-버전-관리"}},[s._v("#")]),s._v(" NPM 패키지 버전 관리")]),s._v(" "),t("p",[s._v("배포 할 때는 "),t("a",{attrs:{href:"https://semver.org/lang/ko/",target:"_blank",rel:"noopener noreferrer"}},[s._v("시멘틱 버전(Semantic Versioning)"),t("OutboundLink")],1),s._v("을 참고한 후 업데이트 합니다.\n다음의 NPM 명령을 사용하면 손쉽게 버전을 업데이트 할 수 있습니다. ( "),t("code",[s._v("patch")]),s._v(" ▸ "),t("code",[s._v("minor")]),s._v(" ▸ "),t("code",[s._v("major")]),s._v(" )")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version patch "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0.0.1 +")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version minor "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0.1.0 +")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version major "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.0.0 +")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"npm-패키지-배포"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-패키지-배포"}},[s._v("#")]),s._v(" NPM 패키지 배포")]),s._v(" "),t("p",[t("code",[s._v("publish")]),s._v(" NPM 명령을 사용해 패키지를 배포합니다.")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 패키지 모듈 배포")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("배포에 성공하면 잠시 뒤 NPM 사이트에 올라간 커스텀 템플릿 모듈 페이지를 확인할 수 있습니다.")]),s._v(" "),t("base-img",{attrs:{src:"deploy-npm-package.png"}})],1)}),[],!1,null,null,null);a.default=e.exports}}]);