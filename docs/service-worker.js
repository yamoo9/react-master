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
    "revision": "9379d95515e9058b724d71edbba63281"
  },
  {
    "url": "account/register.html",
    "revision": "88082ba0277a30e6db31dc2e181750de"
  },
  {
    "url": "account/signin.html",
    "revision": "c64379f93c7adbf8270d826a642f574c"
  },
  {
    "url": "account/user.html",
    "revision": "fa9812dd6e3800737be85585543ba2f4"
  },
  {
    "url": "admin/index.html",
    "revision": "5b40af9e208bcfd1a26ed6f9c6e8bf47"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.07691b3c.css",
    "revision": "55fd81d45c1310c06dafed18802f055c"
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
    "url": "assets/js/10.87be925b.js",
    "revision": "70d723106b2fab4d428f64a8189a0ccb"
  },
  {
    "url": "assets/js/11.1263f1ef.js",
    "revision": "b8a8b89898ab92cc3255704dd43e9b23"
  },
  {
    "url": "assets/js/12.bae695ee.js",
    "revision": "32b1c16ea06935b15d3820063a6e5d5f"
  },
  {
    "url": "assets/js/13.343eb0d5.js",
    "revision": "a71e2becdfa7933c60f397fbeab0b5d6"
  },
  {
    "url": "assets/js/14.c84a7e48.js",
    "revision": "a6b6837cd67de9318c45382a1de7ef8d"
  },
  {
    "url": "assets/js/15.c701c66e.js",
    "revision": "7724298fa3da0041a9967240e9d61145"
  },
  {
    "url": "assets/js/16.573afc66.js",
    "revision": "4fc469f672f46a28bec933a5efe17230"
  },
  {
    "url": "assets/js/17.190a2472.js",
    "revision": "ce9dc48642a032e31ab96f94a72ff2c5"
  },
  {
    "url": "assets/js/18.f3f170fc.js",
    "revision": "7e6bd56c7e6bbdd327d14ab3848f5ec4"
  },
  {
    "url": "assets/js/19.a3ff248c.js",
    "revision": "ff3773fd44615015c0a080fc01b4cf75"
  },
  {
    "url": "assets/js/2.35879bcd.js",
    "revision": "e99adf6b8cc4b4aef558a9a50ec7b66d"
  },
  {
    "url": "assets/js/20.7a297077.js",
    "revision": "0b1d1b13f65a2a3329b1bc5ef7df0955"
  },
  {
    "url": "assets/js/21.c5a7a151.js",
    "revision": "c17422f839809c02f65e952a8404ddc7"
  },
  {
    "url": "assets/js/22.a5cf3d6f.js",
    "revision": "48ae6d5e3b4a98cb3e0f016dfa86f1d8"
  },
  {
    "url": "assets/js/23.6bf7ca3e.js",
    "revision": "a0276b707dfeaf7aba0945f332aca480"
  },
  {
    "url": "assets/js/24.d02f7ff3.js",
    "revision": "71c2bdddf04e3a5c802623df78a559d4"
  },
  {
    "url": "assets/js/25.879f65d1.js",
    "revision": "4c6ecaa8e7f353b870429475c5142f6d"
  },
  {
    "url": "assets/js/26.3b64e531.js",
    "revision": "9337513ec46bae0377ec9cebf2a809d1"
  },
  {
    "url": "assets/js/27.494c8908.js",
    "revision": "91b55129dc81ee0bc710107abddaffcd"
  },
  {
    "url": "assets/js/28.2af9b76b.js",
    "revision": "345c05d153b541c2cd8b943a531782d6"
  },
  {
    "url": "assets/js/29.6c6a75e2.js",
    "revision": "6d8790ac3f2cfc7ce00250a559deff48"
  },
  {
    "url": "assets/js/3.898738d6.js",
    "revision": "7dfc3946ca20dda255eb376c32640819"
  },
  {
    "url": "assets/js/30.660f8610.js",
    "revision": "964de1c0b77447e5b35545110a313c15"
  },
  {
    "url": "assets/js/31.8e424ba4.js",
    "revision": "f618f95dedaef07d0cab956ac44e383c"
  },
  {
    "url": "assets/js/32.717b75dd.js",
    "revision": "473c54ef6d540cad845397e47da6515c"
  },
  {
    "url": "assets/js/33.6574b177.js",
    "revision": "b4fb920b4d7336bbc8d7ec6b4e2ecfd1"
  },
  {
    "url": "assets/js/34.556e29cc.js",
    "revision": "28df4f98a2eea3f1a011942f22879347"
  },
  {
    "url": "assets/js/35.f1c53a46.js",
    "revision": "332cf32e56dc7da78e540a152a1a5240"
  },
  {
    "url": "assets/js/36.d86468d7.js",
    "revision": "9c70b0a661abb619189ecbd2ca09cb28"
  },
  {
    "url": "assets/js/37.8c4e09f7.js",
    "revision": "464f9eb1cc4a5806556cbc79b7bcb431"
  },
  {
    "url": "assets/js/38.15d2849e.js",
    "revision": "73684c63b987e3ab790558ccfa124114"
  },
  {
    "url": "assets/js/39.cd65c3fb.js",
    "revision": "7fbfe3c8f88060100a189174bc92783d"
  },
  {
    "url": "assets/js/4.245d2180.js",
    "revision": "96df8442be4e64351ad09c86d52842d5"
  },
  {
    "url": "assets/js/40.d8c01bc7.js",
    "revision": "846cb658392b50fe7827ef694a376c86"
  },
  {
    "url": "assets/js/41.3fe9d1cb.js",
    "revision": "0893129c630ae08b40e3a41a3bd945ab"
  },
  {
    "url": "assets/js/42.f7dbf6ad.js",
    "revision": "1e682656dfcb66df9b8f555bb7996e45"
  },
  {
    "url": "assets/js/43.77bc0f83.js",
    "revision": "a9679b12a5cdf981e5010aab5f309964"
  },
  {
    "url": "assets/js/44.b946b4ad.js",
    "revision": "cd114083fbb8f5b4021fd2cbd2eda9c0"
  },
  {
    "url": "assets/js/45.34ba98b8.js",
    "revision": "629701aaae9922a57868af4acfddf107"
  },
  {
    "url": "assets/js/46.b9d450af.js",
    "revision": "4eece7c25924299021165f36304621c2"
  },
  {
    "url": "assets/js/47.164e2c70.js",
    "revision": "08eee7bc8e7f8b30eac1ca152989aefd"
  },
  {
    "url": "assets/js/48.14470c4b.js",
    "revision": "a1a04f80f531a759d0aa8c3da4df5887"
  },
  {
    "url": "assets/js/49.67127b20.js",
    "revision": "67098cf651fd3870fd9ed66ed82fa01c"
  },
  {
    "url": "assets/js/5.f84296c1.js",
    "revision": "c2e7a386fa466aa02c01eb54e7ae5a72"
  },
  {
    "url": "assets/js/50.1cad07c5.js",
    "revision": "5f509f30c7f06428bd593a25b8088c34"
  },
  {
    "url": "assets/js/51.71b4ba0e.js",
    "revision": "2ffc794a692bddc81f44efe908354739"
  },
  {
    "url": "assets/js/52.15c83fcd.js",
    "revision": "6320fbd24b4c1f8bc78ea7cb4cbe7b08"
  },
  {
    "url": "assets/js/53.5a23d90b.js",
    "revision": "f7084369a5d8fdae39d5f10f6bb46ac0"
  },
  {
    "url": "assets/js/54.43cddc2f.js",
    "revision": "f9fd4b2774e67f431395ff1ab644d466"
  },
  {
    "url": "assets/js/55.d807df35.js",
    "revision": "299dcbf6f982d3e2bf585ec126dbec27"
  },
  {
    "url": "assets/js/56.69d7be2f.js",
    "revision": "9ce7c9785541164c895024ba6443e269"
  },
  {
    "url": "assets/js/57.24e41452.js",
    "revision": "7a69c45efa3177d92f904c41f36c2721"
  },
  {
    "url": "assets/js/58.eebbd4fe.js",
    "revision": "e8e370fe7c046b1dc3c60ed127906f17"
  },
  {
    "url": "assets/js/59.560ed01a.js",
    "revision": "1d833845db7d5d6f438cc031695b94a5"
  },
  {
    "url": "assets/js/6.be56131e.js",
    "revision": "131907af59f5f7faedb0cc7fd0cd5fc6"
  },
  {
    "url": "assets/js/60.b0c6d9af.js",
    "revision": "81a0f75e73800deffc46848014723719"
  },
  {
    "url": "assets/js/61.f187db2b.js",
    "revision": "89cca293391f057c957472be60815299"
  },
  {
    "url": "assets/js/62.1b6e8a42.js",
    "revision": "044bf4149718c8b3b68d5548d17baeaf"
  },
  {
    "url": "assets/js/63.bded3b94.js",
    "revision": "25023edd778acee0aea04d45df378609"
  },
  {
    "url": "assets/js/64.b50d2e24.js",
    "revision": "8900c28dcc9875dfd6973a7a17b2e886"
  },
  {
    "url": "assets/js/65.4e37f35c.js",
    "revision": "b654631b22590550b7c1c354ec9bc54c"
  },
  {
    "url": "assets/js/66.ef3be21a.js",
    "revision": "893e7cb14a477c30b1cce202913e39d7"
  },
  {
    "url": "assets/js/67.0e3d66b0.js",
    "revision": "21c2b95e349966e2c8a90016febad20c"
  },
  {
    "url": "assets/js/68.4ddf7d18.js",
    "revision": "610e218d6d58029be316945b3bb8070b"
  },
  {
    "url": "assets/js/69.1e1bd923.js",
    "revision": "5ca008de36c5daa3aedb20cde94d460b"
  },
  {
    "url": "assets/js/7.2bf5a176.js",
    "revision": "66b43b799543734438ddd14004f95354"
  },
  {
    "url": "assets/js/70.15102949.js",
    "revision": "59ab832dc509860e5e8e5454bbcbd3c7"
  },
  {
    "url": "assets/js/8.582ef692.js",
    "revision": "2d232a41f6fcb45e524b110df747d8d5"
  },
  {
    "url": "assets/js/9.44b54471.js",
    "revision": "89aeb242f0e5f7ef0cc02ce3ff99755c"
  },
  {
    "url": "assets/js/app.c2bc95d9.js",
    "revision": "27e23009c1168693aa23a33d29653620"
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
    "revision": "87e5e9bd89fc03706d480858c83915a2"
  },
  {
    "url": "lecture/index.html",
    "revision": "1af2d8a4b596023a8272bcf224194835"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "a307683982b31c5f22c764bec658698f"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "bb01c3974ab26d1406fb27e8c6931107"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "25f3f49d000a5a155fdde19488927cc3"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "d15106cfe91ab55e3139dc90de4f0256"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "398c612fec7cc88451ac76efc31b048e"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "c18e997b8e12277c952e7d4793daa5b1"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "9ed053bdc1e317951de287b541a2a8b4"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "eea3f3761befb915260737a52ba72406"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "3c29f8f5e8e9bb9d777b9005d5b4de20"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "d6957f1644b5b163a30dc6ffa79ff32f"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "85e49fce403727ca20b82a773d909302"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "31431ffc6572e2704c36098b4c29cbeb"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "9f8b762fd6ff27ccf9ecef8483a7d060"
  },
  {
    "url": "payment-information.html",
    "revision": "6f1f560362a8c22ed56d4d1d1c14fa7f"
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
