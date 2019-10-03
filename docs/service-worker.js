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
    "revision": "b813728b477ba8bcf1b714f3e202f143"
  },
  {
    "url": "account/register.html",
    "revision": "1d7710b2bb8c7f044174fada9af6b013"
  },
  {
    "url": "account/signin.html",
    "revision": "f33b9c2435f4ce93f8e6b1f43bd26283"
  },
  {
    "url": "account/user.html",
    "revision": "0e75dc2c2a38f60a562af64d705d0ba9"
  },
  {
    "url": "admin/index.html",
    "revision": "13ceb1fa3c0e42fd50e073bdaa000293"
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
    "url": "assets/js/14.0a462fb0.js",
    "revision": "b121ef6a45758f1169c66f3a6ea676fd"
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
    "url": "assets/js/32.7684da99.js",
    "revision": "c2b7df9a705c0873f4bb03ca0671c199"
  },
  {
    "url": "assets/js/33.c80929f4.js",
    "revision": "841e6e837b606f7c6cfe3cbf998285ac"
  },
  {
    "url": "assets/js/34.e78c566b.js",
    "revision": "d2d7bafcc3f3718fdc6961f05877066c"
  },
  {
    "url": "assets/js/35.e056fdfe.js",
    "revision": "2ab87f553ad2aa22c2219fa8d8414e63"
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
    "url": "assets/js/38.d390178f.js",
    "revision": "ff4d82b930ea8979647c1f94d04c2940"
  },
  {
    "url": "assets/js/39.e7909a91.js",
    "revision": "5c31bdad32d3019619a889eb92bf6c7a"
  },
  {
    "url": "assets/js/4.09a41de6.js",
    "revision": "21163cdb3eb2782bd759c7f5b345f9d4"
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
    "url": "assets/js/45.9daffec6.js",
    "revision": "a25ba6a7dbaf452493d4fccbb7d18339"
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
    "url": "assets/js/49.bf6a2b14.js",
    "revision": "9059a428cc6ef3060f7b1d9b359441eb"
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
    "url": "assets/js/53.6ee23640.js",
    "revision": "7f3f082c30c7e0f07a02849874254596"
  },
  {
    "url": "assets/js/54.d5b74187.js",
    "revision": "01b6d75326e18511e9edcf534c785ba7"
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
    "url": "assets/js/58.2db33cb7.js",
    "revision": "2d4aa8ee38daa01f804c94141fdac158"
  },
  {
    "url": "assets/js/59.5488e94b.js",
    "revision": "596e152702c7a34686438ba3ff3c6d71"
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
    "url": "assets/js/62.10c1382b.js",
    "revision": "6709876edc57e29708c0464e2134d19c"
  },
  {
    "url": "assets/js/63.1dde73ae.js",
    "revision": "66e54ce8a8fc51dfd0263c9415fd70f2"
  },
  {
    "url": "assets/js/64.570de555.js",
    "revision": "216e4e9b4ec60d38f9da2ffd6634fd7a"
  },
  {
    "url": "assets/js/65.fee03d24.js",
    "revision": "fd017396b0e526b361d89f7172412c1a"
  },
  {
    "url": "assets/js/66.a6fd2b94.js",
    "revision": "1169d829ce202b7403a75e3f85a307c6"
  },
  {
    "url": "assets/js/67.404491ae.js",
    "revision": "71703c18c3070f464ec126f5081c49cc"
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
    "url": "assets/js/app.e8ada876.js",
    "revision": "6a75b6365ae6f38811d58f8dc1d1d525"
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
    "revision": "e646d3b5fb969f8514c61d8667fff767"
  },
  {
    "url": "lecture/index.html",
    "revision": "3c39908abfc7d122e1857def27b0b545"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "20c5cafdcd8edd31d53d72a0826fa541"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "bb343cfb2629ee4347e1ca697aed8e51"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "20c2b0c80b782623249627c4e08fce1f"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "ed51fc800e1d509a95f33adc17a9b4b6"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "47f2da3e8eef8955abef0634dc9e8843"
  },
  {
    "url": "lecture/r-pay-a11y.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-setting-up.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "f793d09789847fe847a0a39d72422f96"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "4d99501ac2be34e17c321f1c6b5a0e3f"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "965037698eeaaa7a2d2e0835f12cdb4f"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "7ce82c0fe7ec94acdcb3a5805983ab5d"
  },
  {
    "url": "payment-information.html",
    "revision": "d67940ab166e57ff829cb33eb97bed4d"
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
