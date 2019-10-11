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
    "revision": "4994eb85ab837ade94277f6b37828ca4"
  },
  {
    "url": "account/register.html",
    "revision": "b224bfe569ee7107d84cacc20eb6b615"
  },
  {
    "url": "account/signin.html",
    "revision": "28ce2dbaf7b67a313e05480421443a75"
  },
  {
    "url": "account/user.html",
    "revision": "95b8bd00ee61d7ac2b00cf25599ce7c2"
  },
  {
    "url": "admin/index.html",
    "revision": "f8e64141a4a16daa4ebb6d83efb30294"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.e7f25d9d.css",
    "revision": "9152a0fe19ad1888a9d2827ab682ce98"
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
    "url": "assets/js/14.53147991.js",
    "revision": "d2ce5188307fca0e53794abbe4516b3e"
  },
  {
    "url": "assets/js/15.75e7daf1.js",
    "revision": "b40af54f4d74819fbc4f18d036a30ffb"
  },
  {
    "url": "assets/js/16.d6354f8c.js",
    "revision": "42646ac1498eb365cc4f0a01222e3567"
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
    "url": "assets/js/26.69bfbb82.js",
    "revision": "e694d0b89b65484f2614bf932da8c01d"
  },
  {
    "url": "assets/js/27.1204fa16.js",
    "revision": "1cc2938aada16d82f792429247870347"
  },
  {
    "url": "assets/js/28.4e3d1f17.js",
    "revision": "a42cd2b92b551e565912fd13a4bc83c7"
  },
  {
    "url": "assets/js/29.2245aa2b.js",
    "revision": "589f783b2d7e5e63cfec832551288e2e"
  },
  {
    "url": "assets/js/3.09a2ea57.js",
    "revision": "53f73570d21347ac0c9ab62433a48668"
  },
  {
    "url": "assets/js/30.f05728ec.js",
    "revision": "fb2653c02edc0855c2f1c4d34ea97de3"
  },
  {
    "url": "assets/js/31.63ef2d63.js",
    "revision": "5af222f6d48ed5eca28c3c4db17ce577"
  },
  {
    "url": "assets/js/32.23fdf49b.js",
    "revision": "b55cdbb611e6765af31ba1a166654782"
  },
  {
    "url": "assets/js/33.7412290c.js",
    "revision": "dc403e095f87308d35ee5d6c19d5648f"
  },
  {
    "url": "assets/js/34.5f18c8ea.js",
    "revision": "98c471496ec7897bb530d2554ec45673"
  },
  {
    "url": "assets/js/35.cffba0fd.js",
    "revision": "7ff5152864cd9e2b3643ed53242d83f1"
  },
  {
    "url": "assets/js/36.259dff24.js",
    "revision": "431308d263d437a9fb6477dc8513ce94"
  },
  {
    "url": "assets/js/37.11065cd0.js",
    "revision": "37eba078db6c4c0a12237c1c99b38232"
  },
  {
    "url": "assets/js/38.5fb7e9a8.js",
    "revision": "248522ac03d49c385bd38e4c71fd0bf6"
  },
  {
    "url": "assets/js/39.7af96ce5.js",
    "revision": "21517df376e8a3384ce701a2aa153ad3"
  },
  {
    "url": "assets/js/4.9aaf6f39.js",
    "revision": "057b6227d177675a7ac3659dd76f9e48"
  },
  {
    "url": "assets/js/40.60630f80.js",
    "revision": "77f10d6f004e034f9485d6f3bad879ae"
  },
  {
    "url": "assets/js/41.fbc4a571.js",
    "revision": "272513349aa932634c77fcbfc2a90a7f"
  },
  {
    "url": "assets/js/42.b2f7ca2f.js",
    "revision": "3173f0f76492d048fbf522c582e3079a"
  },
  {
    "url": "assets/js/43.97b0e44f.js",
    "revision": "2ce4e2e7f077ec1e4fce07dae7d729d4"
  },
  {
    "url": "assets/js/44.99c0c129.js",
    "revision": "7b6deb59228b45606639e1395a3689de"
  },
  {
    "url": "assets/js/45.0ab7a369.js",
    "revision": "d2d552572547ce75c51e069cb1412e36"
  },
  {
    "url": "assets/js/46.0b5447d2.js",
    "revision": "93846e019c7da08d3f4f93c7e9c93480"
  },
  {
    "url": "assets/js/47.1c6bed88.js",
    "revision": "0a5beca9e2681b689385bd02b8b9a963"
  },
  {
    "url": "assets/js/48.0e430e65.js",
    "revision": "d22e17fae19d798c027472ca1697d4e0"
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
    "url": "assets/js/50.642c7267.js",
    "revision": "841839cf71574e682af0d0299a705d95"
  },
  {
    "url": "assets/js/51.271e0327.js",
    "revision": "06e192f79e8231527d33f96042a9343d"
  },
  {
    "url": "assets/js/52.52541394.js",
    "revision": "1d93751b384cefdc824717bea5d9aae2"
  },
  {
    "url": "assets/js/53.e85296cd.js",
    "revision": "1e0ee3628bcbf594d839df9682f53172"
  },
  {
    "url": "assets/js/54.21d998ed.js",
    "revision": "9c18525b191c74047fbb45bafb40409a"
  },
  {
    "url": "assets/js/55.12734767.js",
    "revision": "baea22197379f7426141bd856b6f427d"
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
    "url": "assets/js/58.22c12bfb.js",
    "revision": "bffc8f3804164da162740745fb0594c5"
  },
  {
    "url": "assets/js/59.1924b499.js",
    "revision": "f94fadbb623b874d593ba3c8dd88819a"
  },
  {
    "url": "assets/js/6.ffa76ffe.js",
    "revision": "3852506934cf7ad2d124c3763059d733"
  },
  {
    "url": "assets/js/60.2ad0ed4d.js",
    "revision": "e24fa9898c188ada1ae1758e305c0584"
  },
  {
    "url": "assets/js/61.5ab11249.js",
    "revision": "f3557eacd0ba462b745bc650f142dd22"
  },
  {
    "url": "assets/js/62.b0dea233.js",
    "revision": "88b9b235aad8b6d5d32b85e3a00c55c8"
  },
  {
    "url": "assets/js/63.f694c4ed.js",
    "revision": "1603235abdd0bdfb0beb3b73402132e3"
  },
  {
    "url": "assets/js/64.6aa5e4d5.js",
    "revision": "c6b168637a7c5148a7bec0f857b1e1f5"
  },
  {
    "url": "assets/js/65.9e37e736.js",
    "revision": "e37494f579eeb9c78fa9ecc923591a6f"
  },
  {
    "url": "assets/js/66.8493c0c3.js",
    "revision": "c8c8f41f534e52700ea7a95edc97cab4"
  },
  {
    "url": "assets/js/67.8e367249.js",
    "revision": "76b52f75721c0446c1e7689850ba6f59"
  },
  {
    "url": "assets/js/68.8e4310c8.js",
    "revision": "8987dc3456f05c8041ed01e5fa7ccfe6"
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
    "url": "assets/js/app.ec6afc6c.js",
    "revision": "39388b07b7b48a633c3f193bcd259053"
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
    "revision": "c5d12a38f4f3bbbbdf34db153492519b"
  },
  {
    "url": "lecture/index.html",
    "revision": "6fd5602e95503b1261f825b39b48dee4"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "5abeb54536f3596ad4e258776bfdea2f"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "215f7964470bb7c15a0b8de76e06712f"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "0c45cca349c295a46595e06135601704"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "857496759b0e945674b4381b3fab34b0"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "a92122a012c9a43be8eb738a043a2cb2"
  },
  {
    "url": "lecture/r-pay-a11y.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "ed2da6f7bf8104ccf2c75a6609ad8584"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "c2dbd6be6d100fc2054bbeb537bc2e33"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "e284dae4d1d2e5656288aad0481cb125"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "8de7d22a84ee939f56757b17b4f4acd7"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "ad1a0d963b1f95789fc27cf6d4b80487"
  },
  {
    "url": "payment-information.html",
    "revision": "f972f1ebc2944931424e4633d0ec7a4a"
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
