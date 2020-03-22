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
    "url": "account/register.html",
    "revision": "2f11a1816b46b0b7114a3fc5884afb98"
  },
  {
    "url": "account/signin.html",
    "revision": "fc468de92ead6711585d0dbd61403de7"
  },
  {
    "url": "account/user.html",
    "revision": "4d2364a51f832cd87d32f65f47c8748e"
  },
  {
    "url": "admin/index.html",
    "revision": "28ea5df61195ba900fb72dc4d3c210ae"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.04cce5ed.css",
    "revision": "80305d83f80b6900fcb951b69bc762b5"
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
    "url": "assets/fonts/ionicons.96f1c901.woff2",
    "revision": "96f1c901c087fb64019f7665f7f8aca6"
  },
  {
    "url": "assets/fonts/ionicons.99b86349.woff",
    "revision": "99b863497156d4478ec3489fefb3815c"
  },
  {
    "url": "assets/fonts/ionicons.a558ac78.eot",
    "revision": "a558ac78b554eefa181737749366a91c"
  },
  {
    "url": "assets/fonts/ionicons.ef4a9f28.ttf",
    "revision": "ef4a9f280b0e411ddf6c930a0a37c2b0"
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
    "url": "assets/img/ionicons.d6592091.svg",
    "revision": "d659209138fc7c28c23a48496bdd1c8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a9f42322.js",
    "revision": "989271b122b547c1de84b2d6ea631057"
  },
  {
    "url": "assets/js/11.29f69b12.js",
    "revision": "0c8cb800c80248719465a5ff96071d05"
  },
  {
    "url": "assets/js/12.533d3de7.js",
    "revision": "051e05a1a1c68189b6db9e91ed27b416"
  },
  {
    "url": "assets/js/13.4f20b8f1.js",
    "revision": "2c87963a12beb01f0eff888238fad892"
  },
  {
    "url": "assets/js/14.4da098e6.js",
    "revision": "c72f26157cc1f733b136db8d04d7f01b"
  },
  {
    "url": "assets/js/15.fe769e76.js",
    "revision": "7f6d335f4f08a6ed47fc91fe5c28051e"
  },
  {
    "url": "assets/js/16.9809b900.js",
    "revision": "7c657ee3cc5fbb118509b1405490ace8"
  },
  {
    "url": "assets/js/17.0194f635.js",
    "revision": "1256396a27f6496ea35fe7ad8bff3d85"
  },
  {
    "url": "assets/js/18.c7f160de.js",
    "revision": "dc2a2db4c16e08028000dbefeccfe3fd"
  },
  {
    "url": "assets/js/19.84fd1c51.js",
    "revision": "d40dfef3d4a6570eabc96c56a7c6f5dd"
  },
  {
    "url": "assets/js/2.cc4fdd7c.js",
    "revision": "98de40a7504a19f601dfc8cb5a51e1ea"
  },
  {
    "url": "assets/js/20.d1d3ac01.js",
    "revision": "55d650df2579398d75e63daf6d04f4f6"
  },
  {
    "url": "assets/js/21.0d55e190.js",
    "revision": "484aefc50111149af96b185c3e124996"
  },
  {
    "url": "assets/js/22.9127c935.js",
    "revision": "da5133b9aeab736416648aa3c7495270"
  },
  {
    "url": "assets/js/23.f3c49e21.js",
    "revision": "af05827512a7cd635ae369a49cf8bd09"
  },
  {
    "url": "assets/js/24.b31c4005.js",
    "revision": "0f134812ecaa4b2b6786ac42aa2f3cdc"
  },
  {
    "url": "assets/js/25.6233a6ed.js",
    "revision": "12a916052ced07fb84d053229666e393"
  },
  {
    "url": "assets/js/26.c4bf6014.js",
    "revision": "9a0008c133e74e004d13c185d5e538db"
  },
  {
    "url": "assets/js/27.3aee76e8.js",
    "revision": "319397de7117057771828e80af050132"
  },
  {
    "url": "assets/js/28.5bdbcc84.js",
    "revision": "98d0006b8c61d0f1559997de7bc823cf"
  },
  {
    "url": "assets/js/29.3ec267fa.js",
    "revision": "5fd6958f63d0ea9230d488d0cebd66ac"
  },
  {
    "url": "assets/js/3.e66f7827.js",
    "revision": "e2f4b256bf7ed46be4e49dbf3f7dc4ee"
  },
  {
    "url": "assets/js/30.f72d1844.js",
    "revision": "90619e15b23d43cd0c2b5581c1a8842c"
  },
  {
    "url": "assets/js/31.48950d3e.js",
    "revision": "569400049ba6ff6538007f91939ae351"
  },
  {
    "url": "assets/js/32.15976511.js",
    "revision": "6bf3cd6e8fa2ab0444066ea05847d99d"
  },
  {
    "url": "assets/js/33.02cbdcd7.js",
    "revision": "8c8fbc6ce0516cbc1cca529285cc8b4e"
  },
  {
    "url": "assets/js/34.b28ee6c1.js",
    "revision": "a27f91251de3634f7b82b626d250b0cf"
  },
  {
    "url": "assets/js/35.657243bc.js",
    "revision": "60ae607f4a751971d82170e5fa1b7e88"
  },
  {
    "url": "assets/js/36.7d97a43c.js",
    "revision": "8f49f88dc930f2f15b410ce6b160689a"
  },
  {
    "url": "assets/js/37.f2f95edb.js",
    "revision": "a5fc4f6b87508e23e12dce83e190f730"
  },
  {
    "url": "assets/js/38.f8ac7168.js",
    "revision": "5caf2a5b7b6f5f68b76c786993093db9"
  },
  {
    "url": "assets/js/39.91ef395f.js",
    "revision": "d4c5c0ae0e20c3c22eb19a15bbabb061"
  },
  {
    "url": "assets/js/4.ebe6fa8d.js",
    "revision": "2df54fd7e436a3475025e20bed87c59e"
  },
  {
    "url": "assets/js/40.67d86f24.js",
    "revision": "35bad5ff1841f3fb62467c44755438f4"
  },
  {
    "url": "assets/js/41.20a1ff79.js",
    "revision": "91ed1c7f0b97c70fe28a70b0cdf4f78d"
  },
  {
    "url": "assets/js/42.c22e0afd.js",
    "revision": "e8c55ffd99535675ef6bc7c49793ff28"
  },
  {
    "url": "assets/js/43.7034b69c.js",
    "revision": "d2465878c8799e87e2c8fd5aa2af2472"
  },
  {
    "url": "assets/js/44.f9a30620.js",
    "revision": "d37536b5fb8b8fd1094bc64b81cefd8e"
  },
  {
    "url": "assets/js/45.f1980671.js",
    "revision": "e7de8e09ff690b97ca5b6abc271027b0"
  },
  {
    "url": "assets/js/46.d54f4885.js",
    "revision": "a0091c95a5b182622fae67455a85a1f2"
  },
  {
    "url": "assets/js/47.eb81e17c.js",
    "revision": "2e804c37c79375ba2f9426f25dcab1e9"
  },
  {
    "url": "assets/js/48.9b2e08d0.js",
    "revision": "bd4f49fa1ada7845e00690b01d71d715"
  },
  {
    "url": "assets/js/49.e2a369a4.js",
    "revision": "507fa48a12c1feac10e66362a6609980"
  },
  {
    "url": "assets/js/5.0d80fa79.js",
    "revision": "66142648709923073371c0cf8baeda1f"
  },
  {
    "url": "assets/js/50.9158962e.js",
    "revision": "2a35e2d7bd612f0e1f9e887054239165"
  },
  {
    "url": "assets/js/51.9b9d61bc.js",
    "revision": "74b1e8cfa2cbb7949d415a1935cf2e41"
  },
  {
    "url": "assets/js/52.3a201edf.js",
    "revision": "5a02163e4c882188c6461488fb8ee525"
  },
  {
    "url": "assets/js/53.fe051a98.js",
    "revision": "431655950c0b83a269e63f08c073b6eb"
  },
  {
    "url": "assets/js/54.a326dbbe.js",
    "revision": "036372e22d3d290c26a5836236e80d4a"
  },
  {
    "url": "assets/js/55.3fabadc6.js",
    "revision": "ea609e8be6123cfaa7d8a2334d0ea741"
  },
  {
    "url": "assets/js/56.a6654234.js",
    "revision": "be46e807bc4ebc382c60ec721c92f5d0"
  },
  {
    "url": "assets/js/57.7cd487d3.js",
    "revision": "ed4a6dde967ec81f3b0d761346f72d47"
  },
  {
    "url": "assets/js/58.89a72799.js",
    "revision": "0488dc1181a9af7553aff087991447a1"
  },
  {
    "url": "assets/js/59.3a885218.js",
    "revision": "86ee2b0bbc7934ad6939c0f8b4d98811"
  },
  {
    "url": "assets/js/6.c6033a36.js",
    "revision": "30803a5b8d13f1c9f0d86064e18b38a6"
  },
  {
    "url": "assets/js/60.19749f2d.js",
    "revision": "9ecb91fd38dff54bbc0db583b93461f9"
  },
  {
    "url": "assets/js/61.01f414cb.js",
    "revision": "959dc81d912a981f9ae222d0e454097d"
  },
  {
    "url": "assets/js/62.ba77f810.js",
    "revision": "42c9480706a1a6b04a0514e81fdae373"
  },
  {
    "url": "assets/js/63.c5e60499.js",
    "revision": "15fa5b121b2653874c0fd435640ed3c4"
  },
  {
    "url": "assets/js/64.a873a0b4.js",
    "revision": "7a354b52449805e3ae352dd25fe89ed4"
  },
  {
    "url": "assets/js/65.d1ce4b6e.js",
    "revision": "a37250f9d95dc7a770511a76f4ba2ba8"
  },
  {
    "url": "assets/js/66.f0dabe1e.js",
    "revision": "aa1f6e971eacd90caf551de91f0662a0"
  },
  {
    "url": "assets/js/67.74cc6ff7.js",
    "revision": "9527942d14ae7c9ce2933901374076ac"
  },
  {
    "url": "assets/js/68.94411fa1.js",
    "revision": "2f7333e09abce6dec878a48492867701"
  },
  {
    "url": "assets/js/69.216e73ad.js",
    "revision": "5c82a3ec50b31cab4f71a26976aefa12"
  },
  {
    "url": "assets/js/7.c6a575df.js",
    "revision": "f2e224e6db527092e59f2913ae782022"
  },
  {
    "url": "assets/js/70.1a696d4c.js",
    "revision": "226f1292aedac0b7a002769682fa1aa3"
  },
  {
    "url": "assets/js/71.e5e5e757.js",
    "revision": "54e7571b3c77edd07de1817ed57cb1a3"
  },
  {
    "url": "assets/js/72.098ab81a.js",
    "revision": "e35a5665e3afab9b6bf93f16e885242b"
  },
  {
    "url": "assets/js/8.0464a97e.js",
    "revision": "9d1e52ec5317ebfa5cd9ae4e08126abd"
  },
  {
    "url": "assets/js/9.a7c5229d.js",
    "revision": "e50b9efe69875f2d9c8466695d5c727d"
  },
  {
    "url": "assets/js/app.3d30ee1b.js",
    "revision": "18bc56716a917008e727742b7155446c"
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
    "url": "images/axe-core-contribution.png",
    "revision": "d1c4bd27027b0a42da69842b67a3d2dd"
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
    "url": "images/react-router.png",
    "revision": "08faff46852311b5744b5719b4617ee3"
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
    "url": "images/routes.jpg",
    "revision": "0ee06b25be76fa61f0098f1c68f2afb6"
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
    "url": "images/theme.png",
    "revision": "96b3081943c322d36e5876c9b08e7d50"
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
    "url": "images/vscode-debug-config.png",
    "revision": "915f436a9b914785960f343eb837af5e"
  },
  {
    "url": "images/vscode-debug-green-button.png",
    "revision": "fec3099cd844bd2f20e469657f9cabb6"
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
    "revision": "8c5473f01388d76530ee90952a00ea29"
  },
  {
    "url": "lecture/index.html",
    "revision": "d0477bca68da3628763195bf8161fe15"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "87db28507def17b9899b8a6849aecd10"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "02b0b6fdecbcae6c323904b42a938ae1"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "4e4541c820d7555ddf25db8b816d9def"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "7835a3e567ca6473e3da0879f7d7820e"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "5a3da1db4121986bde682dd35c558b1f"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "b6207d7c1a88010fb2178bf5ef9d1859"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "ef5c1b1d4fabb7a4afd0f2eddd823728"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "219600b63de2cc938e793e6b97cb81a9"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "e781f8a263fd5aabfeb1be0b952d469d"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "f9cd8d92138bfc59a7fecf58298e9aba"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "28dd69f33a5b2f77ca640faf37051f41"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "24f9ff2c61183a3f0cdd369e42a654eb"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "9952eaa356e7414bc04f9bf37e9072ed"
  },
  {
    "url": "payment-information.html",
    "revision": "4463ff127e2ec38341edd48e8836898e"
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
