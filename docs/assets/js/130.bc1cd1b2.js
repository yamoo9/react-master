(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{382:function(s,t,a){"use strict";a.r(t);var n=a(11),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"storybook-매뉴얼-설치-💰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storybook-매뉴얼-설치-💰"}},[s._v("#")]),s._v(" Storybook 매뉴얼 설치 💰")]),s._v(" "),a("h2",{attrs:{id:"패키지-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#패키지-설치"}},[s._v("#")]),s._v(" 패키지 설치")]),s._v(" "),a("p",[s._v("React 프로젝트에 "),a("a",{attrs:{href:"https://www.npmjs.com/package/@storybook/react",target:"_blank",rel:"noopener noreferrer"}},[s._v("@storybook/react"),a("OutboundLink")],1),s._v(" 패키지를 설치합니다.")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D @storybook/react "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 설치 오류가 발생할 경우 --legacy-peer-deps 옵션 설정 후 실행")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"스크립트-명령-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스크립트-명령-추가"}},[s._v("#")]),s._v(" 스크립트 명령 추가")]),s._v(" "),a("p",[s._v("NPM 스크립트 "),a("code",[s._v("storybook")]),s._v("을 "),a("code",[s._v("package.json")]),s._v(" 파일에 추가 등록합니다.")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"storybook"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start-storybook"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"storybook-구성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storybook-구성"}},[s._v("#")]),s._v(" .storybook 구성")]),s._v(" "),a("p",[s._v("Storybook 구성 파일을 프로젝트 루트 위치의 "),a("code",[s._v(".storybook")]),s._v(" 디렉토리 안에 생성합니다.")]),s._v(" "),a("p",[a("strong",[s._v(".storybook/config.js")])]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" configure "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@storybook/react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Story 파일 불러오기")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadStories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// stories 디렉토리 (하위 디렉토리 포함) 내부의 *.stories.js 파일 모두 탐색")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// components 디렉토리로 변경하고자 한다면? ../components로 수정")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" req "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../stories'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.stories\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("filename")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("req")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Story 구성")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loadStories"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",[a("a",{attrs:{href:"https://webpack.js.org/guides/dependency-management/#requirecontext",target:"_blank",rel:"noopener noreferrer"}},[s._v("require.contenxt()"),a("OutboundLink")],1),s._v(" 함수를 사용하면 자신 만의 컨텍스트를 만들 수 있습니다.\n검색 할 디렉토리, 하위 디렉토리도 검색해야 하는지 여부를 나타내는 플래그, 파일과 일치시킬 정규 식을 전달할 수 있습니다.")])]),s._v(" "),a("h2",{attrs:{id:"storybook-구동"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storybook-구동"}},[s._v("#")]),s._v(" Storybook 구동")]),s._v(" "),a("p",[a("code",[s._v("storybook")]),s._v(" 명령을 실행해 Storybook 개발 환경을 구동합니다.")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run storybook\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" manual-storybook@1.0.0 storybook\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" start-storybook\n\ninfo @storybook/react v6.1.21\ninfo \ninfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Loading presets\ninfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Loading presets\ninfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Loading "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./.storybook"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node:69406"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" DeprecationWarning: Configuration files such as "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"config"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"presets"')]),s._v(" and "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"addons"')]),s._v(" are deprecated and will be removed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" Storybook "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.0")]),s._v(".\nRead "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" about it "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the migration guide: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#to-mainjs-configuration")]),s._v("\ninfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Using default Webpack setup\nwebpack built 8e91993a1a556f746393 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 8102ms\n╭────────────────────────────────────────────────────────╮\n│                                                        │\n│   Storybook "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.2")]),s._v(".1 started                              │\n│   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.99")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" manager and "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.48")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" preview            │\n│                                                        │\n│   Local:            http://localhost:55480/            │\n│   On your network:  http://192.168.254.100:55480/      │\n│                                                        │\n╰────────────────────────────────────────────────────────╯\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("br"),s._v(" "),a("img",{staticClass:"zoom medium-zoom",staticStyle:{width:"100%",height:"auto"},attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-MUfqhMWK9ILIx0SXJTa%2F-MVW54WfV24X9qZoFWVp%2F-MVW5S4TOLyj14t5bkSi%2Fimage.png?alt=media&token=e7c0ef0f-1756-43f4-b00a-ddfb4a480951",alt:""}})])}),[],!1,null,null,null);t.default=e.exports}}]);