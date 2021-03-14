(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{207:function(t,s,a){},239:function(t,s,a){"use strict";a(207)},322:function(t,s,a){"use strict";a.r(s);a(239);var e=a(11),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[a("a",{attrs:{href:"#%EC%98%81%EC%83%81-%EA%B0%95%EC%9D%98"}},[t._v("영상 강의")]),t._v("를 시청하며 글을 읽고 실습하면 더욱 효과적입니다.")])]),t._v(" "),a("h1",{attrs:{id:"고차-컴포넌트-hoc-💰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고차-컴포넌트-hoc-💰"}},[t._v("#")]),t._v(" 고차 컴포넌트(HOC) 💰")]),t._v(" "),a("p",[a("a",{attrs:{href:"#%EA%B3%A0%EC%B0%A8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8"}},[t._v("고차 컴포넌트("),a("abbr",{attrs:{title:"Higher-order Component"}},[t._v("HOC")]),t._v(")")]),t._v(" 개념은 "),a("a",{attrs:{href:"#%EA%B3%A0%EC%B0%A8-%ED%95%A8%EC%88%98"}},[t._v("고차 함수("),a("abbr",{attrs:{title:"Higher-order Function"}},[t._v("HOF")]),t._v(")")]),t._v("와 유사합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("고차(高次)?")]),t._v(" "),a("p",[t._v("고차(Higher-order, 高次)의 의미는 '"),a("strong",[t._v("상위 차원(수준)")]),t._v("' 입니다. 사전적 의미는 '"),a("strong",[t._v("생각이나 행동 따위의 수준이나 정도가 높은 것")]),t._v("'을 말하며,\n수학에서는 '높은 차수(3차 이상)'를 뜻합니다. (예: "),a("a",{attrs:{href:"https://www.scienceall.com/%ea%b3%a0%ec%b0%a8%eb%b0%a9%ec%a0%95%ec%8b%9dequation-of-higher-degree/?term_slug=%ea%b3%bc%ed%95%99%eb%b0%b1%ea%b3%bc%ec%82%ac%ec%a0%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("고차 방정식"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://www.scienceall.com/%EA%B3%A0%EC%B0%A8%EB%B6%80%EB%93%B1%EC%8B%9Dinequality-of-higher-degree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("고차 부등식"),a("OutboundLink")],1),t._v(" 등)")])]),t._v(" "),a("h2",{attrs:{id:"고차-함수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고차-함수"}},[t._v("#")]),t._v(" 고차 함수")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EA%B3%A0%EC%B0%A8_%ED%95%A8%EC%88%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("'고차 함수'"),a("OutboundLink")],1),t._v("의 조건은 다음과 같습니다. "),a("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("함수형 프로그래밍"),a("OutboundLink")],1),t._v("에서 함수는 값(value)으로 취급됩니다. 즉, 함수에 숫자, 문자 데이터를 전달하듯 함수 또한\n다른 함수에 값으로 전달할 수 있습니다. 마찬가지로 함수를 값으로 반환하는 것도 가능합니다. ('고계 함수'로도 불립니다.)")]),t._v(" "),a("ul",[a("li",[t._v("하나 이상의 "),a("strong",[t._v("함수를 인자로 전달 받는다")]),t._v(". ("),a("code",[t._v("(fn) => {}")]),t._v(")")]),t._v(" "),a("li",[a("strong",[t._v("함수를 결과로 반환 한다")]),t._v(". ("),a("code",[t._v("() => fn")]),t._v(")")])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("JavaScript의 고차 함수 코드 예시를 보면 f 일반 함수를, twice 고차 함수에 인자로 전달해 결과를 연산한 후,\n함수를 반환합니다.")]),t._v(" "),a("blockquote",[a("p",[t._v("함수 전달 → 연산 → 함수 반환")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 고차 함수")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("twice")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 일반 함수")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 고차 함수 실행")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("twice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 24 ← (6 + 9) + 9")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("React 프로그래밍(리스트 렌더링)에서 자주 사용되는 Array의 "),a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map",target:"_blank",rel:"noopener noreferrer"}},[t._v("map()"),a("OutboundLink")],1),t._v(" 메서드는 '"),a("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D#%EA%B3%A0%EA%B3%84_%ED%95%A8%EC%88%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("고차 함수"),a("OutboundLink")],1),t._v("'입니다.\n아래 예시 코드는 숫자 리스트를 전달 받아 숫자 리스트를 반환합니다.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" otherNumbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("otherNumbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [2, 4, 6]")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"고차-컴포넌트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고차-컴포넌트"}},[t._v("#")]),t._v(" 고차 컴포넌트")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ko.reactjs.org/docs/higher-order-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("고차 컴포넌트"),a("OutboundLink")],1),t._v("는 컴포넌트 로직을 재사용 하기 위한 React 고급 프로그래밍 기술입니다.\n"),a("abbr",{attrs:{title:"Higher-order Component"}},[t._v("HOC")]),t._v('는 React API는 아니지만, React 프로그래밍에서 자주 활용됩니다. 고차 함수를 한마디로 정의하면\n"'),a("strong",[t._v("컴포넌트를 전달 받아 새로운 컴포넌트를 반환하는 함수")]),t._v('" 입니다.')]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" EnhancedComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withHOC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// withHOC           ▶︎ 고차 컴포넌트")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Component         ▶︎ 일반 컴포넌트")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EnhancedComponent ▶︎ 고차 컴포넌트가 반환한 향상된 컴포넌트")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("고차 컴포넌트가 어디서 사용될까요?")]),t._v(" "),a("p",[t._v("일반 컴포넌트가 UI(React 요소)를 반환하지만, 고차 컴포넌트는 컴포넌트를 반환합니다.\nHOC는 Redux "),a("RouterLink",{attrs:{to:"/lecture/rd-react-redux.html#connect"}},[t._v("connect")]),t._v(" 함수, React Router "),a("RouterLink",{attrs:{to:"/lecture/rr-connected-redux.html#connect-withrouter"}},[t._v("withRouter")]),t._v(" 함수, Relay "),a("a",{attrs:{href:"https://facebook.github.io/relay/docs/en/fragment-container.html#createfragmentcontainer",target:"_blank",rel:"noopener noreferrer"}},[t._v("createFragmentContainer"),a("OutboundLink")],1),t._v(" 함수 등 다양한 React 라이브러리에서 일반적으로 사용됩니다.")],1),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mapStateProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mapDispatchProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// withRouter ▶︎ 고차 컴포넌트")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// connect ▶︎ 고차 컴포넌트")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Counter ▶︎ 일반 컴포넌트")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"커스텀-고차-컴포넌트-hoc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#커스텀-고차-컴포넌트-hoc"}},[t._v("#")]),t._v(" 커스텀 고차 컴포넌트(HOC)")]),t._v(" "),a("p",[t._v("필요한 경우, 고차 컴포넌트(HOC)를 직접 만들어 사용할 수 있습니다. 간단한 예시를 살펴봅시다.")]),t._v(" "),a("p",[t._v("라이브 예제")]),t._v(" "),a("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/hoc-context-hwalyong-sdjjn?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcontainers%2FHeader.js&theme=dark&view=editor&autoresize=1&fontsize=14&hidenavigation=1",title:"HOC & Context 활용",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}}),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("고차 컴포넌트가 너무 어렵죠?")]),t._v(" "),a("p",[t._v("고차 컴포넌트 개념을 이해하거나, 활용하는 것이 어렵다고 좌절하지 마세요. 앞으로 학습 할 React 훅(Hooks)을 사용하면 같은 일을 훨씬 쉽게 처리 할 수 있으니까요! 😎")])]),t._v(" "),a("h2",{attrs:{id:"영상-강의"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#영상-강의"}},[t._v("#")]),t._v(" 영상 강의")]),t._v(" "),a("h3",{attrs:{id:"고차-함수-hof-란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고차-함수-hof-란"}},[t._v("#")]),t._v(" 고차 함수(HOF)란?")]),t._v(" "),a("wistia",{attrs:{source:"30lb0igpe5",color:"4A30E9"}}),t._v(" "),a("h3",{attrs:{id:"고차-컴포넌트-hoc-란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고차-컴포넌트-hoc-란"}},[t._v("#")]),t._v(" 고차 컴포넌트(HOC)란?")]),t._v(" "),a("wistia",{attrs:{source:"1lkkoyzlqz",color:"4A30E9"}}),t._v(" "),a("h3",{attrs:{id:"커스텀-고차-컴포넌트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#커스텀-고차-컴포넌트"}},[t._v("#")]),t._v(" 커스텀 고차 컴포넌트")]),t._v(" "),a("wistia",{attrs:{source:"fdl85blmyx",color:"4A30E9"}})],1)}),[],!1,null,null,null);s.default=n.exports}}]);