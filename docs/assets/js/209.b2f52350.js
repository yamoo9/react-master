(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{460:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"사이드-이펙트-💰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사이드-이펙트-💰"}},[s._v("#")]),s._v(" 사이드 이펙트 💰")]),s._v(" "),a("p",[a("code",[s._v("React.useEffect()")]),s._v(" 훅은 함수 컴포넌트를 DOM 렌더링(또는 다시 렌더링) 한 후, 콜백 함수로 설정된 사용자가 설정한 코드를 실행합니다.")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[s._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 이 곳에 사이드 이펙트 코드를 작성합니다.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// HTTP 네트워크 요청 또는 DOM API 인터랙션을 설정합니다. ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"react-hooks-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks-flow"}},[s._v("#")]),s._v(" React Hooks Flow")]),s._v(" "),a("p",[a("code",[s._v("React.useEffect()")]),s._v(" 훅의 실행 타이밍 흐름은 아래 다이어그램을 참고하세요.")]),s._v(" "),a("base-img",{staticStyle:{"max-width":"500px","margin-top":"40px"},attrs:{src:"react-hooks-flow.png"}}),s._v(" "),a("br"),s._v(" "),a("p",[s._v('"하위(자식) 컴포넌트 감춤" 체크박스를 체크하면 Console 패널에 React 훅의 흐름이 출력됩니다. 표시 된 하위(자식) 컴포넌트를 클릭하면 카운트가 증가하고,\n업데이트에 따른 훅의 흐름 결과가 Console 패널에 출력됩니다.')]),s._v(" "),a("iframe",{staticStyle:{width:"100%",height:"500px",border:"1px solid #cdcdcd","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/headless-feather-3wefs?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FHookFlow.js&theme=light&view=preview",title:"headless-feather-3wefs",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}}),s._v(" "),a("h2",{attrs:{id:"실습"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실습"}},[s._v("#")]),s._v(" 실습")]),s._v(" "),a("p",[s._v("<GreetingEmail /> 컴포넌트의 상태 값으로 1차적으로는 "),a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage",target:"_blank",rel:"noopener noreferrer"}},[s._v("로컬 스토리지(localStorage)"),a("OutboundLink")],1),s._v("에 저장된 값을, 저장된 값이 없을 경우엔 2차적으로 컴포넌트에 전달된 속성 또는 초깃값을 가져오도록 설정해봅니다.\n뿐만 아니라 컴포넌트가 업데이트 될 때 로컬 스토리지에 email 키 값을 반복해서 저장할 수 있도록 컴포넌트를 구성해봅니다.")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" localStorage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" storage "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  스토리지 키 값 가져오기")]),s._v("\nstorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 스토리지 키 값 저장하기")]),s._v("\nstorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 스트로지 키 제거하기")]),s._v("\nstorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 모든 스토리지 키 제거하기")]),s._v("\nstorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("base-img",{staticStyle:{border:"1px solid #cdcdcd"},attrs:{src:"localstorage.png"}}),s._v(" "),a("h2",{attrs:{id:"추가-실습"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-실습"}},[s._v("#")]),s._v(" 추가 실습")]),s._v(" "),a("h3",{attrs:{id:"_1-지연된-초기화"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-지연된-초기화"}},[s._v("#")]),s._v(" 1. 지연된 초기화")]),s._v(" "),a("p",[s._v("앞서 진행한 로컬 스토리지 실습의 결과는 함수 컴포넌트가 실행될 때 마다 로컬 스토리지에서 값을 가져오려 시도하므로 성능 문제(병목 현상)를 유발합니다. (로컬 스토리지에서 값을 읽거나, 쓸 경우 속도가 느릴 수 있습니다)")]),s._v(" "),a("p",[s._v("로컬 스토리지에서 값을 읽어오는 동작은 컴포넌트 초기 렌더링 시 1회만 수행하고, 반복적으로 값 읽기를 시도하는 동작은 더 이상 하지 않도록 설정해야 합니다. 이 문제를 해결하려면 "),a("code",[s._v("React.useState()")]),s._v(" 훅에 지연된 상태 초기화 함수를 전달 설정해야 합니다. (지연된 초기화 함수는 필요한 때에만 실행됩니다)")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" setState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 지연된 계산 처리 후... 계산 된 값 반환(return)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("지연된 초기화 설정을 통해 성능 병목 현상 문제를 해결하는 실습을 진행합니다.")]),s._v(" "),a("h3",{attrs:{id:"_2-사이드-이펙트-의존성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-사이드-이펙트-의존성"}},[s._v("#")]),s._v(" 2. 사이드 이펙트 의존성")]),s._v(" "),a("p",[s._v("앞서 진행 된 실습의 "),a("code",[s._v("React.useEffect()")]),s._v(" 훅에 전달된 콜백 함수는 컴포넌트가 실행될 때마다 반복 실행되므로 성능 문제를 유발합니다.\n그러므로 필요한 때에만 콜백 함수가 실행되도록 의존성 배열을 설정하는 것이 좋습니다. 종속성 설정된 값이 변경될 때에만 React로 하여금 콜백 함수를 실행하게 합니다.")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[s._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 사이드 이펙트 콜백 로직 ")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2번째 인자로 의존 배열 설정 (아이템이 없는 경우, 1회 실행)")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("콜백 함수 로직을 분석하여 2번째 인자로 의존성 배열을 설정하는 실습을 진행합니다.")]),s._v(" "),a("h3",{attrs:{id:"_3-커스텀-훅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-커스텀-훅"}},[s._v("#")]),s._v(" 3. 커스텀 훅")]),s._v(" "),a("p",[s._v("React 훅의 가장 좋은 부분은 일반 JavaScript 함수처럼, 다른 함수 컴포넌트에서도 재사용 가능한 훅을 만들 수 있다는 점입니다. 이렇게 사용자에 의해 만들어 사용되는 훅을 커스텀 훅(Custom Hook)이라고 부릅니다.\n앞서 진행된 실습에서 로직을 추출해 useLocalStorageState 커스텀 훅을 만들어 활용하는 실습을 진행합니다.")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" setEmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useLocalStorageState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'email'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" initialEmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-플랙시블-커스텀-훅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-플랙시블-커스텀-훅"}},[s._v("#")]),s._v(" 4. 플랙시블 커스텀 훅")]),s._v(" "),a("p",[s._v("이전 실습에서 작성한 "),a("code",[s._v("useLocalStorageState()")]),s._v(" 커스텀 훅이 어떤 데이터 유형이라도 유연하게 사용 가능할 수 있도록 코드를 개선해봅니다.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("JavaScript 객체형 데이터를 로컬 스토리지(Local Storage)로 관리하려면 다음의 "),a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"}},[s._v("Serialize"),a("OutboundLink")],1),s._v(", "),a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",target:"_blank",rel:"noopener noreferrer"}},[s._v("Deserialize"),a("OutboundLink")],1),s._v("를 사용해야 합니다.")])]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Serialize")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 데이터 → JSON 문자열")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" course"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'React 러닝 프랙티스'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Deserialize")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// JSON 문자열 → 데이터")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"course":"React 러닝 프랙티스"}\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("컴포넌트 내부에 작성된 변수는 렌더링 과정에서 초기화 되는 문제가 있습니다. 이 문제를 해결하기 위해서는 "),a("code",[s._v("React.useRef()")]),s._v(" 훅을 활용해야 합니다. 이는 클래스 컴포넌트의 인스턴스 변수와 같은 역할을 합니다.")]),s._v(" "),a("p",[s._v("참조(ref) 객체의 "),a("code",[s._v("current")]),s._v(" 속성은 클래스의 인스턴스 변수처럼 모든 JavaScript의 값을 설정할 수 있고 변경 가능합니다. 참조 객체로 관리되는 변수는 변경되어도 컴포넌트가 다시 렌더링 되지 않습니다. 즉, 변경 후 값을 바로 읽을 수 있습니다.")])]),s._v(" "),a("h4",{attrs:{id:"타이머-활용-예"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#타이머-활용-예"}},[s._v("#")]),s._v(" 타이머 활용 예")]),s._v(" "),a("p",[s._v("컴포넌트 안에서 값이 변경되어도 컴포넌트를 다시 렌더링 되지 않도록 하려면 "),a("code",[s._v("참조")]),s._v(" 객체를 활용해야 합니다.")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 컴포넌트 내부에 `참조(ref)` 객체 생성")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" timerRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 사이드 이펙트")]),s._v("\nReact"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `참조` 객체의 current 속성에 타이머 ID 설정")]),s._v("\n    timerRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 이펙트 정리 (Effects Cleanup)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 저장 된 타이머 ID를 사용해 타임 인터벌 정리")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("clearInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("timerRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 타임 인터벌 취소 이벤트 핸들러")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("handleCancelTimeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("clearInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("timerRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h4",{attrs:{id:"로컬-스토리지-활용-예"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로컬-스토리지-활용-예"}},[s._v("#")]),s._v(" 로컬 스토리지 활용 예")]),s._v(" "),a("p",[s._v("컴포넌트 안에서 로컬 스토리지에 등록된 이전, 현재 "),a("code",[s._v("key")]),s._v(" 값을 저장하고 비교하려면 참조 객체를 활용할 수 있습니다.")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" localStorage "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 로컬 스토리지 key 값을 초깃값으로 하는 `참조` 객체 생성")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" prevKeyRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 사이드 이펙트")]),s._v("\nReact"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `참조` 객체의 current 속성 값을 추출해 prevKey에 할당")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" prevKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" prevKeyRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("current\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// prevKey 값과 key 값이 다르다면")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("prevKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 로컬 스토리지에서 prevKey 값을 제거")]),s._v("\n      localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("prevKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// key 값을 `참조` 객체의 current 값으로 할당")]),s._v("\n    prevKeyRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" key\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" serialize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);