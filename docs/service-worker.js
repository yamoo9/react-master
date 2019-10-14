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
    "revision": "3386e234be6a38236a017491baaa42cf"
  },
  {
    "url": "account/register.html",
    "revision": "7a9afd6856eea6aed974d689cd7de134"
  },
  {
    "url": "account/signin.html",
    "revision": "31f687bef9153757bc72c301d475b17b"
  },
  {
    "url": "account/user.html",
    "revision": "088bd395ac33cbfa023d5683cb22ce5d"
  },
  {
    "url": "admin/index.html",
    "revision": "e7b8c2d9d07255fcf5203a7730dc0f20"
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
    "url": "assets/js/14.e1705865.js",
    "revision": "47d6c6f9f848e6f5dd14d24d638bc7e8"
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
    "url": "assets/js/30.f67a6328.js",
    "revision": "33c707f349b00b1b8b4bb96dc65fc1bf"
  },
  {
    "url": "assets/js/31.28c81c1c.js",
    "revision": "0c51aa10c3c398321fa989e9ea78484d"
  },
  {
    "url": "assets/js/32.cd38fcc8.js",
    "revision": "d8248ca2928679d6fdff62404098a470"
  },
  {
    "url": "assets/js/33.7412290c.js",
    "revision": "dc403e095f87308d35ee5d6c19d5648f"
  },
  {
    "url": "assets/js/34.e5813e76.js",
    "revision": "4530a4ed398499c74403887a5cc2eabe"
  },
  {
    "url": "assets/js/35.727719f1.js",
    "revision": "9ebca40cb0d5ecafda5974170450ea2b"
  },
  {
    "url": "assets/js/36.07affc85.js",
    "revision": "8852a9cc31656409a9e37278acec727d"
  },
  {
    "url": "assets/js/37.83dfd483.js",
    "revision": "a7469b4bcb407d3ada6681edac451a0a"
  },
  {
    "url": "assets/js/38.c85a0529.js",
    "revision": "05b21378bbea217c0ef4affbf142a00f"
  },
  {
    "url": "assets/js/39.759b912c.js",
    "revision": "ddeccaad2459fdc97eaa8c2093c9c399"
  },
  {
    "url": "assets/js/4.f21fa4df.js",
    "revision": "bb8ed2d76436c57f91e94814bf24a6ca"
  },
  {
    "url": "assets/js/40.dc7991c5.js",
    "revision": "02586d2bcf04f00f8dd0faab9b05eb38"
  },
  {
    "url": "assets/js/41.9d1ffe24.js",
    "revision": "0cfeb0a3df98e027223c53322e23a851"
  },
  {
    "url": "assets/js/42.6d0b4a08.js",
    "revision": "5b62640ec65e29e2ac6080b65c46e290"
  },
  {
    "url": "assets/js/43.ecdab0c0.js",
    "revision": "d2ac2efe670178a57f5649d0b62bfaae"
  },
  {
    "url": "assets/js/44.99c0c129.js",
    "revision": "7b6deb59228b45606639e1395a3689de"
  },
  {
    "url": "assets/js/45.ba0f5114.js",
    "revision": "1e6b40edcda44e76d96f209ff51007fb"
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
    "url": "assets/js/48.219d0105.js",
    "revision": "1c669c2a4c1d1e70489b23501fe3a93a"
  },
  {
    "url": "assets/js/49.657856d5.js",
    "revision": "a29a7243ca31e5eb84c41e9c1795fe51"
  },
  {
    "url": "assets/js/5.82c4e66e.js",
    "revision": "427b78d84d2e874ac01f30db724b4519"
  },
  {
    "url": "assets/js/50.dfb9a949.js",
    "revision": "34fcc1783d657a2cd1feb5165bcfa742"
  },
  {
    "url": "assets/js/51.271e0327.js",
    "revision": "06e192f79e8231527d33f96042a9343d"
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
    "url": "assets/js/56.aeda3b82.js",
    "revision": "776821ce10a74165977f883170d193ff"
  },
  {
    "url": "assets/js/57.572c4f6d.js",
    "revision": "6c829d18c4c2ad08335f9816a11ac56c"
  },
  {
    "url": "assets/js/58.22c12bfb.js",
    "revision": "bffc8f3804164da162740745fb0594c5"
  },
  {
    "url": "assets/js/59.45710796.js",
    "revision": "f9b10e9a1d2eca7fa7d0f479283c385f"
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
    "url": "assets/js/61.fd38898e.js",
    "revision": "e2a1e52e4b11cd9e65cbe3aed1ac8aaf"
  },
  {
    "url": "assets/js/62.1009c487.js",
    "revision": "073555dea15a8a025daedc31c11d0274"
  },
  {
    "url": "assets/js/63.60d6aff6.js",
    "revision": "e34a27df8125b391b1d49c64e91c8a80"
  },
  {
    "url": "assets/js/64.6aa5e4d5.js",
    "revision": "c6b168637a7c5148a7bec0f857b1e1f5"
  },
  {
    "url": "assets/js/65.bb9ec211.js",
    "revision": "d55a74aa595bd4cb693eac3f66b0b515"
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
    "url": "assets/js/app.668cb62e.js",
    "revision": "4fcd798f8790aed7f089c120e5f01297"
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
    "revision": "9711e5b58e27445e7314c641e7e0da05"
  },
  {
    "url": "lecture/index.html",
    "revision": "6247cea0dbe6dbb9889065a206e0267d"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "3677fe217cec66c9f4542b770e6a657a"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "3c9b365b06d5d6c58a6c0f55f810a0fb"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "f7609d9e9daa8774b915a457b6fae8e6"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "c09658833457852658ef38f3f0a42890"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "af08edc92ec0a8bd7524fdc48da3348e"
  },
  {
    "url": "lecture/r-pay-a11y.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "03113eebcde5696fef7e2fb9c6549aba"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "1c536ca03d2a44af2edffc14637d65c3"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "95a36f8fa467320e211c9017f999e0fa"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "f6ea0e0a490345f39e619f8a176bef28"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "bfe76435969692f264273a7bc9adab95"
  },
  {
    "url": "payment-information.html",
    "revision": "c7113a4769d28e1efa0622ee22253958"
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
