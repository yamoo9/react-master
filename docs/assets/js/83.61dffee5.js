(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{248:function(t,r,e){"use strict";e.r(r);var o=e(8),a=Object(o.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"redux-form-라이브러리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-form-라이브러리"}},[t._v("#")]),t._v(" Redux Form 라이브러리")]),t._v(" "),e("p",[t._v("React는 라이브러리로 별도의 폼(Form) 관리 도구를 제공하지 않습니다. 그러므로 사용자가 직접 폼 검증 및 입력 데이터 관리 방법에 대해 구현해야 합니다.\n또는 직접 구현하지 않고 Redux Form과 같은 인기있는 React와 통합 가능한 폼 라이브러리를 활용할 수도 있습니다.\nRedux Form 라이브러리는 React Redux와 통합 가능한 Form 상태 관리 도구입니다.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[t._v("Redux Form을 최대한 활용하기 위해서는 "),e("a",{attrs:{href:"https://facebook.github.io/react/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://ko.reactjs.org/docs/higher-order-components.html",target:"_blank",rel:"noopener noreferrer"}},[e("abbr",{attrs:{title:"Higher-order Components"}},[t._v("HOC")]),e("OutboundLink")],1),t._v(" 그리고 "),e("a",{attrs:{href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redux"),e("OutboundLink")],1),t._v(" 라이브러리 사용법에 대한 지식이 필요합니다.")])]),t._v(" "),e("base-img",{staticStyle:{width:"200px","margin-top":"40px"},attrs:{src:"redux-form.png"}}),t._v(" "),e("h2",{attrs:{id:"redux-form을-사용하는-이유"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-form을-사용하는-이유"}},[t._v("#")]),t._v(" Redux Form을 사용하는 이유")]),t._v(" "),e("p",[t._v("Redux Form 라이브러리와 통합된 애플리케이션의 폼 컴포넌트의 기능이 향상됩니다.")]),t._v(" "),e("ol",[e("li",[t._v("폼 컨트롤 시 입력 내용 검증, 데이터 전송을 위한 속성(props)을 제공합니다."),e("br"),t._v("( props → "),e("code",[t._v("pristine")]),t._v(" / "),e("code",[t._v("dirty")]),t._v(" / "),e("code",[t._v("submitting")]),t._v(" / "),e("code",[t._v("handleSubmit")]),t._v(" / "),e("code",[t._v("reset")]),t._v(" 등)")]),t._v(" "),e("li",[t._v("폼 유효성 검사(validation) 기능을 제공합니다.")]),t._v(" "),e("li",[t._v("여러 곳에서 재사용하기 용이합니다.")])]),t._v(" "),e("h2",{attrs:{id:"모듈-소개"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#모듈-소개"}},[t._v("#")]),t._v(" 모듈 소개")]),t._v(" "),e("p",[t._v("React 폼 컴포넌트을 Redux 스토어(Store)에 연결하려면 Redux Form 패키지에서 다음 모듈을 불러와 사용합니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("모듈")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("formReducer")]),t._v(" 리듀서")]),t._v(" "),e("td",[t._v("애플리케이션 업데이트를 기반으로 Redux 스토어에 액션을 전달(dispatch)하는 리듀서 함수입니다.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("reduxForm()")]),t._v(" HOC")]),t._v(" "),e("td",[t._v("컴포넌트를 래핑하여 새로운 컴포넌트를 반환하는 고차 컴포넌트(HOC)로 폼 컴포넌트를 래핑하여, 사용자와 인터랙션하는 Redux 액션 디스패치에 연결됩니다.")])]),t._v(" "),e("tr",[e("td",[t._v("<Field/> 컴포넌트")]),t._v(" "),e("td",[t._v("래핑 된 폼 컴포넌트 안에 있는 컴포넌트로 인풋(input) 컴포넌트를 Redux Form 로직(logic)에 연결합니다.")])])])]),t._v(" "),e("h2",{attrs:{id:"데이터-흐름"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#데이터-흐름"}},[t._v("#")]),t._v(" 데이터 흐름")]),t._v(" "),e("p",[t._v("아래 다이어그램은 데이터 흐름(Data Flow)을 간단하게 보여줍니다.\nRedux Form 라이브러리는 "),e("a",{attrs:{href:"https://redux-form.com/8.3.0/docs/api/ActionCreators.md/",target:"_blank",rel:"noopener noreferrer"}},[t._v("액션 생성 함수(ActionCreators)"),e("OutboundLink")],1),t._v("를 이미 제공하고 있어 사용자가 특별히 액션 생성 함수를 만들 필요는 없습니다.")]),t._v(" "),e("base-img",{staticStyle:{width:"740px","margin-top":"40px"},attrs:{src:"redux-form-diagram.jpg"}}),t._v(" "),e("p",[t._v("간단한 예를 통해 데이터의 흐름을 살펴봅시다. "),e("code",[t._v("reduxForm()")]),t._v(" 고차 컴포넌트(HOC)로 래핑된 폼 컴포넌트가 있습니다.\n내부에는 <Field /> 컴포넌트로 감싸진 <input /> 요소가 있을 때 데이터 흐름은 다음과 같이 흐르게 됩니다.")]),t._v(" "),e("ol",[e("li",[t._v("사용자는 인풋(input) 요소를 클릭합니다.")]),t._v(" "),e("li",[t._v('"포커스 액션(Focus action)"이 전달(dispatch) 됩니다.')]),t._v(" "),e("li",[t._v("폼 리듀서(formReducer)는 전달된 액션을 분석하여 상태를 업데이트 합니다.")]),t._v(" "),e("li",[t._v("업데이트 된 상태는 다시 인풋(input) 요소에 전달됩니다.")])]),t._v(" "),e("p",[t._v("다른 폼 인터랙션 유형(내용 입력, 상태 변경 또는 폼 데이터 전송 등)도 동일한 데이터 흐름으로 작동합니다.\nRedux Form 라이브러리를 사용하면 유효성 검사(validation), 폼 핸들러, 다양하게 활용 가능한 속성, 액션 생성 함수 등이 제공되어 Redux 폼을 손쉽게 관리할 수 있습니다.")])],1)}),[],!1,null,null,null);r.default=a.exports}}]);