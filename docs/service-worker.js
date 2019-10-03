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
    "revision": "f53ab493ac9eb1028c5d519bc5906708"
  },
  {
    "url": "account/register.html",
    "revision": "0fc70d8b52f1498814e4983b755e88e7"
  },
  {
    "url": "account/signin.html",
    "revision": "1a8e167f70dae7bce2746c364c3f3ce0"
  },
  {
    "url": "account/user.html",
    "revision": "d74b8f6cac8e685f54891680958944ed"
  },
  {
    "url": "admin/index.html",
    "revision": "86f94d7996999ee00f4d85d75e41f4d8"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.6070c86a.css",
    "revision": "4a007d01dc70ace715111f74d2ff1f0c"
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
    "url": "assets/js/10.df1b0fe4.js",
    "revision": "89e3ed4e660a725f86c1fb7afedb9eb7"
  },
  {
    "url": "assets/js/11.cd7d3089.js",
    "revision": "9aa070224531e00ecab8a9974aef0a02"
  },
  {
    "url": "assets/js/12.d71abbad.js",
    "revision": "e5fd5991e15175308aa3c5faa2df470d"
  },
  {
    "url": "assets/js/13.7687f865.js",
    "revision": "88557f2912e7785234f20818739b9b03"
  },
  {
    "url": "assets/js/14.86d195b3.js",
    "revision": "cc5075aa2dc67583c42cbf062bc383dd"
  },
  {
    "url": "assets/js/15.e5ad8ccd.js",
    "revision": "ce1461fbee23df2e6b4ab6d7f2d7bf6c"
  },
  {
    "url": "assets/js/16.d5dec408.js",
    "revision": "d082aae9ecba958db1e0693f9691c6b1"
  },
  {
    "url": "assets/js/17.8d03cb03.js",
    "revision": "7494164a38eabb09d0b4272ca11a8fb8"
  },
  {
    "url": "assets/js/18.310aa561.js",
    "revision": "8a9d01954f56a073bd99562c14bdd52c"
  },
  {
    "url": "assets/js/19.081bea04.js",
    "revision": "6d5cbbbff6fab12923963b3104ae2393"
  },
  {
    "url": "assets/js/2.9cad2fd5.js",
    "revision": "80b008f3a884762187187ad0b25aac66"
  },
  {
    "url": "assets/js/20.6df3b747.js",
    "revision": "15accb798b645febc7b893f8f6a3c180"
  },
  {
    "url": "assets/js/21.2c234845.js",
    "revision": "602a592f2b8d95299c1125bbb5bb6d9f"
  },
  {
    "url": "assets/js/22.818e2ce6.js",
    "revision": "7f53b2054ba7d906a9d788b492a992f8"
  },
  {
    "url": "assets/js/23.efd193f5.js",
    "revision": "ca1fd8721e32492de0b09814740f4bf4"
  },
  {
    "url": "assets/js/24.336a1958.js",
    "revision": "d082262be01441f3fd10350395c9ab11"
  },
  {
    "url": "assets/js/25.e73dd611.js",
    "revision": "06b156632cf4a6c4167ad7b3d8d5043f"
  },
  {
    "url": "assets/js/26.675b763d.js",
    "revision": "3a6b7398bfd7e3e77494a1451d952f05"
  },
  {
    "url": "assets/js/27.17d39006.js",
    "revision": "d4767d3c6621206aa9f654d8329738f8"
  },
  {
    "url": "assets/js/28.d64d5d35.js",
    "revision": "e6bd118e2948789f2540d12701cd6afb"
  },
  {
    "url": "assets/js/29.fcb5af87.js",
    "revision": "af3e034ad7434f625a3eda88d7a798f3"
  },
  {
    "url": "assets/js/3.b39976ba.js",
    "revision": "82f302e9265fe63624494a3f40fdccaa"
  },
  {
    "url": "assets/js/30.3e36b94c.js",
    "revision": "2c5996391066383f9124799b7110ee5a"
  },
  {
    "url": "assets/js/31.14937da1.js",
    "revision": "91bc6f5a4621d70b6009104352d71251"
  },
  {
    "url": "assets/js/32.0fdd4890.js",
    "revision": "0ba86a00c333913729a5f766d63a1b18"
  },
  {
    "url": "assets/js/33.117b5e9d.js",
    "revision": "a5993383454819430aeaf5f5f911c369"
  },
  {
    "url": "assets/js/34.5768bdfc.js",
    "revision": "ecb3f430bd26c4f3d53c2d226aaaad6e"
  },
  {
    "url": "assets/js/35.e056fdfe.js",
    "revision": "2ab87f553ad2aa22c2219fa8d8414e63"
  },
  {
    "url": "assets/js/36.429ff3a3.js",
    "revision": "afe45a6d58ff93e34642139b0928e747"
  },
  {
    "url": "assets/js/37.deb48367.js",
    "revision": "8a5fc9953e4d31e77b8ebc6c47539c54"
  },
  {
    "url": "assets/js/38.d390178f.js",
    "revision": "ff4d82b930ea8979647c1f94d04c2940"
  },
  {
    "url": "assets/js/39.019d68fe.js",
    "revision": "62ee23e26d4de50096280f4f5c3629b0"
  },
  {
    "url": "assets/js/4.09a41de6.js",
    "revision": "21163cdb3eb2782bd759c7f5b345f9d4"
  },
  {
    "url": "assets/js/40.5db42b66.js",
    "revision": "f53a65420233b8a42a3ef1f9ef8572c6"
  },
  {
    "url": "assets/js/41.ba80dfdd.js",
    "revision": "00cbcc26260a1bde92ea197c880f42ef"
  },
  {
    "url": "assets/js/42.c2af7efc.js",
    "revision": "41e30e05e815b8883f0ca37931290ee9"
  },
  {
    "url": "assets/js/43.cc4e3a34.js",
    "revision": "2036516f9b014eb63e1e9639ba1e9d9c"
  },
  {
    "url": "assets/js/44.c82d6223.js",
    "revision": "fd18f9d8d7a181489a5b38441ce93658"
  },
  {
    "url": "assets/js/45.df3fb3f0.js",
    "revision": "4477ce00741ca3c8085c39aa536fc28b"
  },
  {
    "url": "assets/js/46.715823de.js",
    "revision": "fffe6a3d85ca3ada7799eac33dae87ff"
  },
  {
    "url": "assets/js/47.ea92b6ab.js",
    "revision": "22f1532cc3186ea4e9ca7745ad202ba2"
  },
  {
    "url": "assets/js/48.43b353a8.js",
    "revision": "6513d02c7cf924aeb3cf9da3c3bf9873"
  },
  {
    "url": "assets/js/49.972308b7.js",
    "revision": "82a02f9984aad87ddb3c1a6181fe5db5"
  },
  {
    "url": "assets/js/5.548b3411.js",
    "revision": "7c949f97427f92ac8b8fe1670377756d"
  },
  {
    "url": "assets/js/50.34e0af44.js",
    "revision": "a1e333354f942a0d15f893991c5edb86"
  },
  {
    "url": "assets/js/51.c3750576.js",
    "revision": "b84661179fa78184333ec3b64f29fe5c"
  },
  {
    "url": "assets/js/52.d7bda3f4.js",
    "revision": "551e4b02d75f10445fe01f63067c8a6b"
  },
  {
    "url": "assets/js/53.877c1301.js",
    "revision": "224bfbfde822e5ca08dc8fec82b6408a"
  },
  {
    "url": "assets/js/54.33e20b41.js",
    "revision": "3d62bd050383c02c7c0d778683c68648"
  },
  {
    "url": "assets/js/55.ff3baef9.js",
    "revision": "2eb30c180a2dbd8ac7f94ef4b2cf48b6"
  },
  {
    "url": "assets/js/56.97bac870.js",
    "revision": "0488f1fdfb3a6963621d5d61854396c4"
  },
  {
    "url": "assets/js/57.71dbe7ae.js",
    "revision": "aa57f364cf57354390724a5683c0fac3"
  },
  {
    "url": "assets/js/58.66d48381.js",
    "revision": "dabc7cd5d88f13a7e25de5f75f673e20"
  },
  {
    "url": "assets/js/59.21a3e57e.js",
    "revision": "29d0c330fc7e93b8fd05437812baf2a4"
  },
  {
    "url": "assets/js/6.bf0aad75.js",
    "revision": "0b9273dc5611248eaa62354671764b07"
  },
  {
    "url": "assets/js/60.9361515f.js",
    "revision": "2dfdefe7163b078a22cae6573256ce73"
  },
  {
    "url": "assets/js/61.159f1dac.js",
    "revision": "09e0fa642a5fb7389b5c939305c6a346"
  },
  {
    "url": "assets/js/62.4a619a23.js",
    "revision": "1a46a45353a9e53ce329a1ea6bd083bd"
  },
  {
    "url": "assets/js/63.5ba76ef5.js",
    "revision": "a219bde189872a77707ea577b6f7e8fc"
  },
  {
    "url": "assets/js/64.6b852d22.js",
    "revision": "b9610ac90c4f55852d2a83d9114c6434"
  },
  {
    "url": "assets/js/65.eecd7db8.js",
    "revision": "7ad4884d166f161e9c6496905ec8e1cd"
  },
  {
    "url": "assets/js/66.d80c4ac5.js",
    "revision": "5dbfbfab0fac8d97f7b1cf60fb30b8da"
  },
  {
    "url": "assets/js/67.601dc6db.js",
    "revision": "7d9102fbf32d2207fd30045317759b13"
  },
  {
    "url": "assets/js/68.24a371b6.js",
    "revision": "695afa0b626b0668e2132199007fcd6b"
  },
  {
    "url": "assets/js/69.5ed78fc6.js",
    "revision": "5ca008de36c5daa3aedb20cde94d460b"
  },
  {
    "url": "assets/js/7.09ee44ab.js",
    "revision": "a02b4a4eea7aabe54a042501ec075a53"
  },
  {
    "url": "assets/js/70.0e33340b.js",
    "revision": "ac0171ce1905bb60365867c67c36d1ff"
  },
  {
    "url": "assets/js/8.9f16a7df.js",
    "revision": "ed5a008328a5bd6d86bea2f8fe4810f1"
  },
  {
    "url": "assets/js/9.2891c98b.js",
    "revision": "b52d2e844b71883c6deafa0c4c807fbc"
  },
  {
    "url": "assets/js/app.01329112.js",
    "revision": "876f6c5bb019a9f3dc2fd0d6db4fe6b7"
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
    "revision": "c4888c82e4d26e7fc42eb00af32b85d9"
  },
  {
    "url": "lecture/index.html",
    "revision": "bc10303b4002a98d3dc3a7e1b02bbdf1"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "5a02105256736bafb85a1963603d649f"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "4329ba2b02bc5366fec28bcb779a20bc"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "feb48499b8802cae10c2217caf9725c8"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "4cea65bd74d9198f2b5cdef454164c71"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "e01bc37136b9edb46839aec8ce19bf4c"
  },
  {
    "url": "lecture/r-pay-a11y.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-setting-up.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "ac4c0707b56e18cad8777930673ff7a8"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "7c7fd30f82cb06fb7cc0dd22898e2fd1"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "23adf542693cdb1d41975366b447c689"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "50a631f1b1953935a5631fa30c8be33d"
  },
  {
    "url": "payment-information.html",
    "revision": "1cc5f9b36ea17298e8f84f291e9bca1f"
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
