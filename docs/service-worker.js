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
    "revision": "bde7c241b1388c5b4f0f85ad5c64e945"
  },
  {
    "url": "account/register.html",
    "revision": "9afdacfaae2a1b373e53dab69e812827"
  },
  {
    "url": "account/signin.html",
    "revision": "9128253de15e6edfbf28103989950c00"
  },
  {
    "url": "account/user.html",
    "revision": "7d874e80e00c6253fe9dbb7a13c3a2cd"
  },
  {
    "url": "admin/index.html",
    "revision": "ee09498b6717dd47fd07e2633a885cac"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.578a219f.css",
    "revision": "39a312eee5bccd50313b078ee8f13779"
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
    "url": "assets/js/10.f8d3e959.js",
    "revision": "91d463fe49245cd6ce017286a4bb941f"
  },
  {
    "url": "assets/js/11.78a12abc.js",
    "revision": "9aa070224531e00ecab8a9974aef0a02"
  },
  {
    "url": "assets/js/12.88b445c5.js",
    "revision": "a8ace0cd2d997bb7d92df9eeb99cdde8"
  },
  {
    "url": "assets/js/13.c607ac3a.js",
    "revision": "6860bf773bdfd932aa254243d8a9689c"
  },
  {
    "url": "assets/js/14.a707b7e3.js",
    "revision": "cd8160bdd4ba4b0e3b0f08c151ad4bc9"
  },
  {
    "url": "assets/js/15.70fed4e2.js",
    "revision": "f58bde05bae0ec7930e77cc1333c79b1"
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
    "url": "assets/js/18.911e6512.js",
    "revision": "99727cc04bb79ca5cc34aae75e237a7c"
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
    "url": "assets/js/22.e7c85776.js",
    "revision": "445b99fa0ee91754c7054506f7a4481c"
  },
  {
    "url": "assets/js/23.21618699.js",
    "revision": "daeedc8df88bd935752b0c75afc3408e"
  },
  {
    "url": "assets/js/24.ec8b7eb3.js",
    "revision": "8ed72a8d15b369e77c2035ba281ff886"
  },
  {
    "url": "assets/js/25.837feae7.js",
    "revision": "38c17b354b7b5012cb324d40963e1b1e"
  },
  {
    "url": "assets/js/26.69bfbb82.js",
    "revision": "e694d0b89b65484f2614bf932da8c01d"
  },
  {
    "url": "assets/js/27.1204fa16.js",
    "revision": "1cc2938aada16d82f792429247870347"
  },
  {
    "url": "assets/js/28.1273030a.js",
    "revision": "ebc65ce904de713966896234a0e55dbb"
  },
  {
    "url": "assets/js/29.ef8e2e9a.js",
    "revision": "ac5bed31eca80efe5b8809af72e1c941"
  },
  {
    "url": "assets/js/3.09a2ea57.js",
    "revision": "53f73570d21347ac0c9ab62433a48668"
  },
  {
    "url": "assets/js/30.e510af83.js",
    "revision": "b7e562730a39f2578f2e670feff0e739"
  },
  {
    "url": "assets/js/31.e81fbf45.js",
    "revision": "41fd3b1b413eb5ea8da7cc7bf38f6ddb"
  },
  {
    "url": "assets/js/32.9ffb9990.js",
    "revision": "65bd97aa63f1dfd57637488c7f885de4"
  },
  {
    "url": "assets/js/33.bf40a42d.js",
    "revision": "84f1cb3ed4b424d410677030e8fb8e47"
  },
  {
    "url": "assets/js/34.dcafdf40.js",
    "revision": "63cd71cd6148cd45c313b46eeb2031fc"
  },
  {
    "url": "assets/js/35.90c0ea96.js",
    "revision": "be4d5fadf2a56162b373f00d4c4a9cce"
  },
  {
    "url": "assets/js/36.e8883361.js",
    "revision": "6fd1b035a255e42cb9d350f428fc293d"
  },
  {
    "url": "assets/js/37.ecab0c85.js",
    "revision": "e24493459e539a96b34cbbd721e3f10e"
  },
  {
    "url": "assets/js/38.c85a0529.js",
    "revision": "05b21378bbea217c0ef4affbf142a00f"
  },
  {
    "url": "assets/js/39.39f6d38d.js",
    "revision": "930e9616984f5b2afad836cd38bdbccf"
  },
  {
    "url": "assets/js/4.f21fa4df.js",
    "revision": "bb8ed2d76436c57f91e94814bf24a6ca"
  },
  {
    "url": "assets/js/40.430c9273.js",
    "revision": "248d936a715e38c5a95d1165eb2aebac"
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
    "url": "assets/js/43.bc1c0e0d.js",
    "revision": "9fde1378f16526797dbe925acc1d881e"
  },
  {
    "url": "assets/js/44.99c0c129.js",
    "revision": "7b6deb59228b45606639e1395a3689de"
  },
  {
    "url": "assets/js/45.76c9b092.js",
    "revision": "5afa788cebb4fa5d112757010011a233"
  },
  {
    "url": "assets/js/46.fe274633.js",
    "revision": "de336944a17d5dbba9d4b5af778149fe"
  },
  {
    "url": "assets/js/47.b4edfc14.js",
    "revision": "c9949b83c5e322023cde918604482c52"
  },
  {
    "url": "assets/js/48.60f5d196.js",
    "revision": "fb4eb8eba6718a2dfbb49d4bdab2181f"
  },
  {
    "url": "assets/js/49.051b62ee.js",
    "revision": "7173ba918845f45a201001a798deebd3"
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
    "url": "assets/js/53.5ab6f969.js",
    "revision": "0eacc1f75d5f48744a6dac3291f3d496"
  },
  {
    "url": "assets/js/54.21d998ed.js",
    "revision": "9c18525b191c74047fbb45bafb40409a"
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
    "url": "assets/js/57.bc1a8016.js",
    "revision": "44ab77fd0eff8ec9f4bbf9b4b67f0976"
  },
  {
    "url": "assets/js/58.0dde8293.js",
    "revision": "e7450c84fffa254622ba830c6af07924"
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
    "url": "assets/js/60.faa40eb3.js",
    "revision": "7f682b900fc80b8e783c8558b74fb6e1"
  },
  {
    "url": "assets/js/61.92e562a0.js",
    "revision": "eb36afc195e1c91094b9a3a9d8cea454"
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
    "url": "assets/js/7.aafd7346.js",
    "revision": "b5a0f28d43a75f1077512d33dfff4ed4"
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
    "url": "assets/js/app.6d7d0e2d.js",
    "revision": "735ba430b4aebbe9ab80ead97bdd961b"
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
    "revision": "5783d095313267f8dee801d10bdb5a70"
  },
  {
    "url": "lecture/index.html",
    "revision": "a4e3176cb293bb29a8dd525e9b5628fc"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "b402a8c37b63a5286c1d499c9df34a93"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "c5033366b0fefadc46912d63c914332b"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "36eb226dd1485f5b0994ee9cf4099a25"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "60f8cf88976b001a7cfe10466818b8b8"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "b77fa0dd92c5ce0ff04f6c835d0e4d7e"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "7686895a3ac49ac10ae3df779be370b5"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "257fb651437c3c2be8893c141c8e5747"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "ead56af9383cdef55468b2dda79b1230"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "d0da92bf631a2f55e2d3ad17226f03c9"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "804277dc5da0ecf0056c66ce89fcc960"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "ffa40094288f7c7c4feff4d04dc4a7af"
  },
  {
    "url": "payment-information.html",
    "revision": "10424975eb303dfbd724c6187506fdb8"
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
