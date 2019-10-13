/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e368486c1ecb5fb03ae89460d647f9bc"
  },
  {
    "url": "account/register.html",
    "revision": "24ae6f819c42cedfcca6ac21744f8950"
  },
  {
    "url": "account/signin.html",
    "revision": "1ca673eae11853c6613cb48ca47ea5db"
  },
  {
    "url": "account/user.html",
    "revision": "799adde7da1ae5a489ba03820a3b2a23"
  },
  {
    "url": "admin/index.html",
    "revision": "c13326f4635605f2e68c1f5ef68bb5a3"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.af08cd68.css",
    "revision": "88d634ebd9d3da69ec0d4a980fb33ed5"
  },
  {
    "url": "assets/favicon.png",
    "revision": "8ee0e9fe60bb61527dd8a71509950cc4"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.1dc35d25.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.25a32416.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.c8ddf1e5.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.e6cf7c6e.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "assets/fonts/ionicons.37939349.ttf",
    "revision": "379393493c3672e03017f8c4078afcd4"
  },
  {
    "url": "assets/fonts/ionicons.3f2acd40.eot",
    "revision": "3f2acd40149b3704f3a97364d0fed0d3"
  },
  {
    "url": "assets/fonts/ionicons.96f1c901.woff2",
    "revision": "96f1c901c087fb64019f7665f7f8aca6"
  },
  {
    "url": "assets/fonts/ionicons.e74f7161.woff",
    "revision": "e74f7161730ced5656582f9faf231661"
  },
  {
    "url": "assets/GitHub-Screen.jpg",
    "revision": "cdd56f0db9457548ee9dc9c8baf0a83d"
  },
  {
    "url": "assets/HomeScreen.jpg",
    "revision": "5e8c344326920119a79db2930124d58d"
  },
  {
    "url": "assets/img/fontawesome-webfont.d7c63908.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "assets/img/ionicons.326445b5.svg",
    "revision": "326445b510380aedd5b7c9711d8ca9d2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.578ac721.js",
    "revision": "4ebe832ec8e393215d3dbbc8ceee5f41"
  },
  {
    "url": "assets/js/11.af1ce2e5.js",
    "revision": "5dceb4e3dd745864831917362ee10ce1"
  },
  {
    "url": "assets/js/12.a596c992.js",
    "revision": "79e432a033bafce8b82d6ef1a326f535"
  },
  {
    "url": "assets/js/13.c607ac3a.js",
    "revision": "6860bf773bdfd932aa254243d8a9689c"
  },
  {
    "url": "assets/js/14.53147991.js",
    "revision": "d2ce5188307fca0e53794abbe4516b3e"
  },
  {
    "url": "assets/js/15.f014ac19.js",
    "revision": "ce36d78f02c96ad0baf3481a9eba630e"
  },
  {
    "url": "assets/js/16.97d10851.js",
    "revision": "ae598bb2266c3b447b7a5aef0fbf8349"
  },
  {
    "url": "assets/js/17.5a9deaed.js",
    "revision": "5aafd678d17e6e0eb200b6bd5e897307"
  },
  {
    "url": "assets/js/18.184914d3.js",
    "revision": "1241b1a55c72a1f56a9cbc5259c949d9"
  },
  {
    "url": "assets/js/19.c8ccae18.js",
    "revision": "49ac56f833cf62fb5820d2142474e1d2"
  },
  {
    "url": "assets/js/2.ea6b91c0.js",
    "revision": "dfea1c4274cdc31baeda74ccba98b386"
  },
  {
    "url": "assets/js/20.ff0c202a.js",
    "revision": "7c4148a20adb714cfbfd4d63d93cb73c"
  },
  {
    "url": "assets/js/21.e76dd759.js",
    "revision": "c48a68f490714fe54a875389cdcf37d6"
  },
  {
    "url": "assets/js/22.4b85eea6.js",
    "revision": "33efb06d1063cf27a0441de5f418cd75"
  },
  {
    "url": "assets/js/23.16319488.js",
    "revision": "0a3358a2d121ea6cfcb671d3d594bc45"
  },
  {
    "url": "assets/js/24.ba0936cb.js",
    "revision": "abe194b0fafc309266af4bd043e65d25"
  },
  {
    "url": "assets/js/25.837feae7.js",
    "revision": "38c17b354b7b5012cb324d40963e1b1e"
  },
  {
    "url": "assets/js/26.9c00bfba.js",
    "revision": "cb749f16ec5bdb20bb930b3d81027e2d"
  },
  {
    "url": "assets/js/27.6bd8b823.js",
    "revision": "2afd42e1f9a17cec8ebf7b3a3fd4b14f"
  },
  {
    "url": "assets/js/28.1273030a.js",
    "revision": "ebc65ce904de713966896234a0e55dbb"
  },
  {
    "url": "assets/js/29.ab781d8c.js",
    "revision": "fa3184d3c39cd45c732869b14ae47e78"
  },
  {
    "url": "assets/js/3.09a2ea57.js",
    "revision": "53f73570d21347ac0c9ab62433a48668"
  },
  {
    "url": "assets/js/30.f679bd3e.js",
    "revision": "15735b591a79accacb5c37326e49fc3d"
  },
  {
    "url": "assets/js/31.e81fbf45.js",
    "revision": "41fd3b1b413eb5ea8da7cc7bf38f6ddb"
  },
  {
    "url": "assets/js/32.a7a617c0.js",
    "revision": "394d1ea3aeec6e15eac17b9345a4c7c6"
  },
  {
    "url": "assets/js/33.7412290c.js",
    "revision": "dc403e095f87308d35ee5d6c19d5648f"
  },
  {
    "url": "assets/js/34.9d2cb6cd.js",
    "revision": "cd8c0393d2c428f2838d2ea8ec65b0ab"
  },
  {
    "url": "assets/js/35.727719f1.js",
    "revision": "9ebca40cb0d5ecafda5974170450ea2b"
  },
  {
    "url": "assets/js/36.e8883361.js",
    "revision": "6fd1b035a255e42cb9d350f428fc293d"
  },
  {
    "url": "assets/js/37.c50380ae.js",
    "revision": "1722a5794dcc36eb250a1d42a0882fd1"
  },
  {
    "url": "assets/js/38.5fb7e9a8.js",
    "revision": "248522ac03d49c385bd38e4c71fd0bf6"
  },
  {
    "url": "assets/js/39.666536a1.js",
    "revision": "b36450a12b419ff7038eac9b0ec899b0"
  },
  {
    "url": "assets/js/4.9aaf6f39.js",
    "revision": "057b6227d177675a7ac3659dd76f9e48"
  },
  {
    "url": "assets/js/40.935cccda.js",
    "revision": "5110a54ff568dc2fba581911d8c57d41"
  },
  {
    "url": "assets/js/41.a1831363.js",
    "revision": "6a72996d4f8a80e2795c031cc824bc93"
  },
  {
    "url": "assets/js/42.6d0b4a08.js",
    "revision": "5b62640ec65e29e2ac6080b65c46e290"
  },
  {
    "url": "assets/js/43.31274f2c.js",
    "revision": "be05ce7b937e1836690e000002aee48a"
  },
  {
    "url": "assets/js/44.7be31aef.js",
    "revision": "8e595f7bbe86ec6be38638b8cfb2ce2f"
  },
  {
    "url": "assets/js/45.76c9b092.js",
    "revision": "5afa788cebb4fa5d112757010011a233"
  },
  {
    "url": "assets/js/46.fdd0caf0.js",
    "revision": "7894586b65684fd0b4b6b5b6799a223a"
  },
  {
    "url": "assets/js/47.1c6bed88.js",
    "revision": "0a5beca9e2681b689385bd02b8b9a963"
  },
  {
    "url": "assets/js/48.219d0105.js",
    "revision": "1c669c2a4c1d1e70489b23501fe3a93a"
  },
  {
    "url": "assets/js/49.78b782fd.js",
    "revision": "f92d5aa8cb5eb74a9b4c0dd71666f6b3"
  },
  {
    "url": "assets/js/5.82c4e66e.js",
    "revision": "427b78d84d2e874ac01f30db724b4519"
  },
  {
    "url": "assets/js/50.a5e68286.js",
    "revision": "d716d0841a53602fd9dbb1f692c87da6"
  },
  {
    "url": "assets/js/51.028a2e18.js",
    "revision": "ade9b4daa19b6e3615e44e21d01817cc"
  },
  {
    "url": "assets/js/52.3019dd45.js",
    "revision": "52a2fc4e839abca2e864f512d2e91243"
  },
  {
    "url": "assets/js/53.006a15e3.js",
    "revision": "6c4b6092ee1594894678ff03d3cc3f91"
  },
  {
    "url": "assets/js/54.54065504.js",
    "revision": "33dd7b9e0bebbd546b92fa016cf1f329"
  },
  {
    "url": "assets/js/55.dc4e55c8.js",
    "revision": "6bbbe63ea44dbf64a7ac74f1dd0a4f27"
  },
  {
    "url": "assets/js/56.77b0990d.js",
    "revision": "5396818129df5ef9def381cea62d8e6c"
  },
  {
    "url": "assets/js/57.1004a74c.js",
    "revision": "7289e91f6e89abd49c95ec12050e2b30"
  },
  {
    "url": "assets/js/58.bba864d4.js",
    "revision": "b78b297ad1a4c50bde1bfc8fd0e4ab76"
  },
  {
    "url": "assets/js/59.c941cd8f.js",
    "revision": "ca3e3b8f33f3744fed3e27226686454e"
  },
  {
    "url": "assets/js/6.ffa76ffe.js",
    "revision": "3852506934cf7ad2d124c3763059d733"
  },
  {
    "url": "assets/js/60.03086f40.js",
    "revision": "92f05a62cc468709204c9083928aaea7"
  },
  {
    "url": "assets/js/61.5ab11249.js",
    "revision": "f3557eacd0ba462b745bc650f142dd22"
  },
  {
    "url": "assets/js/62.35f56627.js",
    "revision": "8ca536394b78d9588c7bc04ab4afeb0b"
  },
  {
    "url": "assets/js/63.60d6aff6.js",
    "revision": "e34a27df8125b391b1d49c64e91c8a80"
  },
  {
    "url": "assets/js/64.2a74aeaa.js",
    "revision": "ed5ec7457b1aea0d8775ea9fc2e761c7"
  },
  {
    "url": "assets/js/65.6cb5620c.js",
    "revision": "008b3680309eb122d76196ba0e6c4be7"
  },
  {
    "url": "assets/js/66.57fb80b1.js",
    "revision": "84f7fbafcaa4b9728c75e7c75c0ffa93"
  },
  {
    "url": "assets/js/67.884d9295.js",
    "revision": "94d30324a47c37c4a088eeae83491793"
  },
  {
    "url": "assets/js/68.77873043.js",
    "revision": "c7cb12e92f7cc3f78beead785a358c65"
  },
  {
    "url": "assets/js/69.1e1bd923.js",
    "revision": "5ca008de36c5daa3aedb20cde94d460b"
  },
  {
    "url": "assets/js/7.b0c6480d.js",
    "revision": "5863778a04fabde50acdfea7997458f7"
  },
  {
    "url": "assets/js/70.c18d4d39.js",
    "revision": "35ba871255b0b54541387e4da24031dd"
  },
  {
    "url": "assets/js/8.e1c463e2.js",
    "revision": "d971df900838d26988266f68b8838779"
  },
  {
    "url": "assets/js/9.f3bf2cd6.js",
    "revision": "f2a207e65bd25aa86a9591f4e870df89"
  },
  {
    "url": "assets/js/app.4e7c7583.js",
    "revision": "a50e97e89a05af7ea7a90ac930c63021"
  },
  {
    "url": "assets/logo-152.png",
    "revision": "d2c3cfd041e1674425b3da8cd151863b"
  },
  {
    "url": "assets/mstile-150x150.png",
    "revision": "30e8029a8104de1c56abfb1b8da1e717"
  },
  {
    "url": "assets/safari-pinned-tab.svg",
    "revision": "976e4cff83a9587ff906f81f86fd64b0"
  },
  {
    "url": "images/awesome-styled-components.png",
    "revision": "0c7fdbb06c8bc0fd9261b2695b772755"
  },
  {
    "url": "images/blended-learning.jpg",
    "revision": "c8913c3fb5d2bdc03aa94680fedad6a7"
  },
  {
    "url": "images/chiken-life-cycle.jpg",
    "revision": "09ead4a4ac8099e1ab277bd636dbe5f7"
  },
  {
    "url": "images/component-tree.jpeg",
    "revision": "ba03e78c3873b90d36f384e84e09ebd6"
  },
  {
    "url": "images/context-01.jpg",
    "revision": "a413a456e5bbc1397709dde2435ec205"
  },
  {
    "url": "images/context-02.jpg",
    "revision": "5aee3aab69bb80f159f9adf5d582c76c"
  },
  {
    "url": "images/DeliveryComment.jpg",
    "revision": "06bf384ff7e9e2e955c174e64de5cee8"
  },
  {
    "url": "images/DeliveryCommentExtractComponents.jpg",
    "revision": "cf2521cb9d796d74d1a50e5e8d06545b"
  },
  {
    "url": "images/diff-patch.jpg",
    "revision": "36b6ac955286feb47374686322d8ada9"
  },
  {
    "url": "images/hands-man.gif",
    "revision": "428c68fe4575f900ecaad4a75cb9da23"
  },
  {
    "url": "images/login-user.png",
    "revision": "edacc301a0b1c2def320bc3353bba432"
  },
  {
    "url": "images/pass-props copy.jpg",
    "revision": "fd669d8b21a3d9d504e5072b5e43c435"
  },
  {
    "url": "images/pass-props.jpg",
    "revision": "fd669d8b21a3d9d504e5072b5e43c435"
  },
  {
    "url": "images/pay-system.jpg",
    "revision": "d32f53b94c3606804626295d8f35d02c"
  },
  {
    "url": "images/pay.jpg",
    "revision": "1d8d622d45b098b3cb96f6a3628d1dda"
  },
  {
    "url": "images/prop-callback2.jpg",
    "revision": "9d805856ef3e98e5aa942fe798a13256"
  },
  {
    "url": "images/props-callback.jpg",
    "revision": "af8e087645de73de84dc7da472ec182c"
  },
  {
    "url": "images/props-state.jpg",
    "revision": "8dd54f37d2073648d7ee6fbbbef6e809"
  },
  {
    "url": "images/Provider.jpg",
    "revision": "bbef0c098772471691a4baca2cdbcb9d"
  },
  {
    "url": "images/r-rd-rn.jpg",
    "revision": "cb3ce7d4ca41a60ac106a0e53532dd77"
  },
  {
    "url": "images/react-diagram.jpg",
    "revision": "2cd35e009001046dc671364b67c564a6"
  },
  {
    "url": "images/react-jsx.png",
    "revision": "5852150753cd096fa4de9e3e382c286a"
  },
  {
    "url": "images/react-state-lifecycle.jpg",
    "revision": "76a7588c22c947712d298f8c70f27a16"
  },
  {
    "url": "images/redux-architecture.png",
    "revision": "491e2aec7337dedcbc38f00d2218c11e"
  },
  {
    "url": "images/redux-devtools.png",
    "revision": "08a218fa62e511bf8951a538e60f7e6a"
  },
  {
    "url": "images/simple-redux.jpg",
    "revision": "a339e490073120ddcdfd4dfc583984dd"
  },
  {
    "url": "images/spa.png",
    "revision": "72c02ce3739d51c99864fa91da42f5dd"
  },
  {
    "url": "images/store-pattern.jpg",
    "revision": "577aeed7c784b25ab761e1cf9578d83d"
  },
  {
    "url": "images/ui-component.png",
    "revision": "08cef00094ae90eaf522ea46cd2d3b39"
  },
  {
    "url": "images/unold_icon_animation_loop.gif",
    "revision": "1b1e37721cf248b07ae7ed07966df60b"
  },
  {
    "url": "images/user-login.jpg",
    "revision": "33136450d57529dfda039ec531fb70e0"
  },
  {
    "url": "images/user-page-free.jpg",
    "revision": "f224bfa4c05ae438fe3d8bfc281107b0"
  },
  {
    "url": "images/user-page.jpg",
    "revision": "946cfffc72aaadee6190e815c8b0a006"
  },
  {
    "url": "images/virtual-dom.png",
    "revision": "466dd5e41c28f06ee97e5880a885f4ac"
  },
  {
    "url": "images/vscode-editor.jpg",
    "revision": "9e9b2f35b217c42fb21a97e766bde02b"
  },
  {
    "url": "images/why-use-es6.png",
    "revision": "bef443534a4e57a4fd084c1db2d593d9"
  },
  {
    "url": "images/why-using-react.png",
    "revision": "13f41fe415b614ed18acf4c1a0a2f063"
  },
  {
    "url": "images/why-using-redux.jpg",
    "revision": "646411a245506f1053135f59bb0a807c"
  },
  {
    "url": "index.html",
    "revision": "6ed94b13b338e8d6c7eae09364fe5541"
  },
  {
    "url": "lecture/index.html",
    "revision": "a9f8342bab5d0898c939fb67386e5a43"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "7622e3db5f00f0c0b213a24acc07eec8"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "304ab6913f274de215a26a13e96773f9"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "59a3e877f4c1ce22a7c75a5222bee33e"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "f6fe49f4de83c0c2af662a8a7c189113"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "82e1c745d0bf23a990ba53d9d177ec1c"
  },
  {
    "url": "lecture/r-pay-a11y.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "88148b9f84e318703443daae3ab419e6"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "d295e97be244cb94f347ba4b91d1acb8"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "be84148daeb305a59aed9c7b82325d3d"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "f81c952b70cb1d0d253912b5a17ab624"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "bea077fdac13760c12f6f0eb0249405f"
  },
  {
    "url": "payment-information.html",
    "revision": "51a469ed4bd5e89f75e2b4dfd32d3db6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
