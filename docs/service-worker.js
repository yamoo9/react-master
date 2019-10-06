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
    "revision": "c0cb594b2cc96a81411541e1ca424de7"
  },
  {
    "url": "account/register.html",
    "revision": "a01e1bf8380669091c3cd870edbbf701"
  },
  {
    "url": "account/signin.html",
    "revision": "28b51d93aeece73dc0114de4caa0b14e"
  },
  {
    "url": "account/user.html",
    "revision": "d9bb43190c39222bce71e6b7ce566b24"
  },
  {
    "url": "admin/index.html",
    "revision": "057039db0e0cbf69d38b594cfaa75069"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.93d86bc1.css",
    "revision": "9f915f105fc8f060e7e37e33044bd3b2"
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
    "url": "assets/js/10.0dd5f6f5.js",
    "revision": "0ad5267a01a539e4d1101d1ff269cedb"
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
    "url": "assets/js/14.daf334d0.js",
    "revision": "393dab1b4b74ea19b36c0b1449ea842f"
  },
  {
    "url": "assets/js/15.4e3f4eee.js",
    "revision": "d65d863f3eb2dd018cf71eaad8f0ca69"
  },
  {
    "url": "assets/js/16.3d3711d9.js",
    "revision": "1b15c0063cb3fd7be7006343e54fd8d5"
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
    "url": "assets/js/19.55b7a7c3.js",
    "revision": "bf7865cf2982f0977e411ed6c75e17bd"
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
    "url": "assets/js/31.b80e1abc.js",
    "revision": "6147b5e636704ca2142441b1a569d1f7"
  },
  {
    "url": "assets/js/32.0a5e132d.js",
    "revision": "0c83c28c76c99849c4543844fee1f91f"
  },
  {
    "url": "assets/js/33.8f18078a.js",
    "revision": "281cac1d0663423a9c9928eef182f261"
  },
  {
    "url": "assets/js/34.5768bdfc.js",
    "revision": "ecb3f430bd26c4f3d53c2d226aaaad6e"
  },
  {
    "url": "assets/js/35.bc8eca1e.js",
    "revision": "0e0b19e9fbd85730fb1e6c1e1e12d023"
  },
  {
    "url": "assets/js/36.3a288303.js",
    "revision": "2bc4cb04fb3cf873918a4acebf211401"
  },
  {
    "url": "assets/js/37.575a30d2.js",
    "revision": "6be2f2625a7c5c31fb250d7d5f463780"
  },
  {
    "url": "assets/js/38.9f69e34f.js",
    "revision": "6fa254a6ead58981cd1223d7f355e4a3"
  },
  {
    "url": "assets/js/39.e7909a91.js",
    "revision": "5c31bdad32d3019619a889eb92bf6c7a"
  },
  {
    "url": "assets/js/4.26d1dd53.js",
    "revision": "489fb0b8e5be2402f6d3ae947b426189"
  },
  {
    "url": "assets/js/40.ac6a938f.js",
    "revision": "1e89a85dd4fe51fd6c7e878e15fd3ecb"
  },
  {
    "url": "assets/js/41.b28a2cbb.js",
    "revision": "7deb653e5a6a9207d1b279be735ca1e5"
  },
  {
    "url": "assets/js/42.816e613c.js",
    "revision": "8d08befcde1bdfe18e0e637238b6772b"
  },
  {
    "url": "assets/js/43.f7c77223.js",
    "revision": "1da2782378d01d24d32ca459eb98e293"
  },
  {
    "url": "assets/js/44.d06189d5.js",
    "revision": "2af87388e49459cedabaf712f479c179"
  },
  {
    "url": "assets/js/45.d9a31066.js",
    "revision": "6ab708a01acee1039676fe709f271bac"
  },
  {
    "url": "assets/js/46.6be61a13.js",
    "revision": "0ed501fa5fe4ec91eadbaac574270380"
  },
  {
    "url": "assets/js/47.1d1bf3a0.js",
    "revision": "ec5559068764e0b8837c83065aaab026"
  },
  {
    "url": "assets/js/48.2ac60fa7.js",
    "revision": "c78c14d23e4a3b17eb97bf6d9a3fc883"
  },
  {
    "url": "assets/js/49.719a0199.js",
    "revision": "208a1b6958e8b5eb8a8b92df940994ad"
  },
  {
    "url": "assets/js/5.548b3411.js",
    "revision": "7c949f97427f92ac8b8fe1670377756d"
  },
  {
    "url": "assets/js/50.0de18f85.js",
    "revision": "7533614f5fe0cb50c20b6741fc13c158"
  },
  {
    "url": "assets/js/51.596660a5.js",
    "revision": "606515681e5d92337e59f83ae36b01c5"
  },
  {
    "url": "assets/js/52.c32d754d.js",
    "revision": "be60839c053b9c7b96ebce6dc3144e3c"
  },
  {
    "url": "assets/js/53.16b22fab.js",
    "revision": "df1f0307a108bc6a4db4e2246f63d866"
  },
  {
    "url": "assets/js/54.33e20b41.js",
    "revision": "3d62bd050383c02c7c0d778683c68648"
  },
  {
    "url": "assets/js/55.fbb3558f.js",
    "revision": "cf58cb1d1d59e33ca5a96f7064fc1dce"
  },
  {
    "url": "assets/js/56.6cff0ee8.js",
    "revision": "96f79fa2bd128e12620d8f90d17639d1"
  },
  {
    "url": "assets/js/57.ce1cfe9e.js",
    "revision": "2e7c250f7d4829904657a95a0d0b24f0"
  },
  {
    "url": "assets/js/58.d377e1f4.js",
    "revision": "0161c28c028f61213202d7bfbc0c17b7"
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
    "url": "assets/js/60.75c34333.js",
    "revision": "c701e7ec0aa312979279c32069cd349c"
  },
  {
    "url": "assets/js/61.c13bf8dd.js",
    "revision": "527b9d4503c3df55fb22fa34a14bf938"
  },
  {
    "url": "assets/js/62.27e6dbab.js",
    "revision": "e3d4acf50944ae0bdee1c78210a61d5d"
  },
  {
    "url": "assets/js/63.5ba76ef5.js",
    "revision": "a219bde189872a77707ea577b6f7e8fc"
  },
  {
    "url": "assets/js/64.2ab24c79.js",
    "revision": "4fc0e0339f5838a6fbee4639aa85d30c"
  },
  {
    "url": "assets/js/65.eecd7db8.js",
    "revision": "7ad4884d166f161e9c6496905ec8e1cd"
  },
  {
    "url": "assets/js/66.92100272.js",
    "revision": "7de5d09731a9999e5bb3e224fb14a2b1"
  },
  {
    "url": "assets/js/67.601dc6db.js",
    "revision": "7d9102fbf32d2207fd30045317759b13"
  },
  {
    "url": "assets/js/68.50545392.js",
    "revision": "3cb83f2daaa428449561d10b53754a60"
  },
  {
    "url": "assets/js/69.5ed78fc6.js",
    "revision": "5ca008de36c5daa3aedb20cde94d460b"
  },
  {
    "url": "assets/js/7.9e431704.js",
    "revision": "0c12979589681356a61864405f0cf92c"
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
    "url": "assets/js/app.20e3b36f.js",
    "revision": "05ec99eb57d05a831655db4e94b0d9f9"
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
    "revision": "6b5627ef621a4974fc55d7e00cab57bf"
  },
  {
    "url": "lecture/index.html",
    "revision": "6d93d17da40282e22386933aae9f3851"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "682313208d36a12bed4ae018990b58a9"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "573e7628b7edb7f6fe211e09d1cd3c11"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "505c8aad8639dfe9d6a2a2ee87729d0d"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "ab5217a3e73d3498fbcbc076011d27d7"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "ecdda344d50606b4d65cc76b53de867f"
  },
  {
    "url": "lecture/r-pay-a11y.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "4fcccfcd16ed1a13dd673800458e86ab"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "7cccccae28838c6f13d97917544c418d"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "0c0e9d5b01bbdd004be58443d368526f"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "2c2c135f1aefbd7f289b8dc12ff7aa2f"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "6a4cca641f26dc74b4c26224ad22c2f4"
  },
  {
    "url": "payment-information.html",
    "revision": "3b3d6a98e61fa173d8e87e633698de56"
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
