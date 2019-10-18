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
    "revision": "42e97f8d30ab9a42c31d2170f7f2ef1b"
  },
  {
    "url": "account/register.html",
    "revision": "41f214c9697a08b038f9c63f9f28cd14"
  },
  {
    "url": "account/signin.html",
    "revision": "f00e03c4a6fc3c8a6ca69a210046bb50"
  },
  {
    "url": "account/user.html",
    "revision": "a728c0ff5ba3a23c1c978aada8ca6856"
  },
  {
    "url": "admin/index.html",
    "revision": "60e768c9edec04a1433802c0422f6342"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.ab217e55.css",
    "revision": "e8b3ff55d8a755d0670355924435ce88"
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
    "url": "assets/js/15.9076b1f9.js",
    "revision": "e9fc996fde99875fdc7c03bb8dd254d7"
  },
  {
    "url": "assets/js/16.019f339e.js",
    "revision": "8d8ae42a83d9e0baac892b40c169e5ee"
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
    "url": "assets/js/24.85808a26.js",
    "revision": "0644dd268a0d6cbc71b7f3e0d2e24ed3"
  },
  {
    "url": "assets/js/25.879f65d1.js",
    "revision": "4c6ecaa8e7f353b870429475c5142f6d"
  },
  {
    "url": "assets/js/26.9fd722a4.js",
    "revision": "d3edbc754d340ae173ae9c7bd8bc1920"
  },
  {
    "url": "assets/js/27.d9abda25.js",
    "revision": "061e437e14e7b8670274bb800c63b0ff"
  },
  {
    "url": "assets/js/28.c119da4f.js",
    "revision": "577ae8b258942013987e5b6779bf6046"
  },
  {
    "url": "assets/js/29.0018d817.js",
    "revision": "ca2b7e3e80c5e7a18621fadc5115198a"
  },
  {
    "url": "assets/js/3.898738d6.js",
    "revision": "7dfc3946ca20dda255eb376c32640819"
  },
  {
    "url": "assets/js/30.38af865d.js",
    "revision": "d8f661921096f3b48550c7c760714fcb"
  },
  {
    "url": "assets/js/31.53d4d531.js",
    "revision": "42d9d0c20ac7cef2778415f9600b5126"
  },
  {
    "url": "assets/js/32.3ace0df3.js",
    "revision": "507586114e940cbbaa29630205dfae32"
  },
  {
    "url": "assets/js/33.4e4868e5.js",
    "revision": "253e7cc003be43ec18465b180029f769"
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
    "url": "assets/js/37.2bedccf0.js",
    "revision": "03c5c4ebb64ac87a6ef7bc98fa945b89"
  },
  {
    "url": "assets/js/38.ba728659.js",
    "revision": "21d04a6009e0cd2f78897a4a5c5d4020"
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
    "url": "assets/js/41.5c663768.js",
    "revision": "2a4dac474bc7227f5362fef3e572af8b"
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
    "url": "assets/js/44.2c393e81.js",
    "revision": "1e37d3fb32dbde29b9265f4bb63b8e2a"
  },
  {
    "url": "assets/js/45.6714037c.js",
    "revision": "74deeadd9277e79dacfb51cdea069d3b"
  },
  {
    "url": "assets/js/46.a37977fb.js",
    "revision": "bd8941daafaabc2bcc42c13528dbc272"
  },
  {
    "url": "assets/js/47.25857be3.js",
    "revision": "fa1783fe0cfdb4018c126541187d9c0e"
  },
  {
    "url": "assets/js/48.3ccc1925.js",
    "revision": "8d418e0a56abbaee9d875da5d2e7336b"
  },
  {
    "url": "assets/js/49.a6a9bc8a.js",
    "revision": "05388af853e5c589c7dc7bed7d018adc"
  },
  {
    "url": "assets/js/5.b4cc036a.js",
    "revision": "198e3dad032f3ea56b4c15d091eef12c"
  },
  {
    "url": "assets/js/50.afc39b20.js",
    "revision": "fdae3a4ffcb9e8998aab4a37f4147500"
  },
  {
    "url": "assets/js/51.feb1951e.js",
    "revision": "6ede098fc15ca2dfa5f402510cf0400c"
  },
  {
    "url": "assets/js/52.6e54faa1.js",
    "revision": "92e7cea1e4560f3645e87bebd1f63fc4"
  },
  {
    "url": "assets/js/53.dd77583b.js",
    "revision": "c6b8c0c92f6fce320e94ea19705f820c"
  },
  {
    "url": "assets/js/54.43cddc2f.js",
    "revision": "f9fd4b2774e67f431395ff1ab644d466"
  },
  {
    "url": "assets/js/55.b2775f31.js",
    "revision": "51636beca31ffa376f4d64e4052f3510"
  },
  {
    "url": "assets/js/56.e359b0b9.js",
    "revision": "7ed8dd1668908f1ca90fa7ba8beb3b31"
  },
  {
    "url": "assets/js/57.2cde94ce.js",
    "revision": "a964d88583a7aa3c219f6ca4eaa71f5e"
  },
  {
    "url": "assets/js/58.d518deb3.js",
    "revision": "20d5e880a087a85f44d9374b8a46d094"
  },
  {
    "url": "assets/js/59.2db9b5d0.js",
    "revision": "0a334aaefd9e051bb1d1c15535173cac"
  },
  {
    "url": "assets/js/6.b9e5fa52.js",
    "revision": "c746ad715ce58bd8971922319154b11e"
  },
  {
    "url": "assets/js/60.7663aea1.js",
    "revision": "f252fd852d909bf58232abb28bfac1c6"
  },
  {
    "url": "assets/js/61.a79d227c.js",
    "revision": "789f66e6fb4d2b2b550ef1c5dcde6d63"
  },
  {
    "url": "assets/js/62.3310322b.js",
    "revision": "3476083e48fe1495eeb714356ff94521"
  },
  {
    "url": "assets/js/63.4cc9cf57.js",
    "revision": "f4d88667132cb832bd895abb28f95501"
  },
  {
    "url": "assets/js/64.32b1c66c.js",
    "revision": "52f3d2324dd682009c8ab45d5180eb15"
  },
  {
    "url": "assets/js/65.4e37f35c.js",
    "revision": "b654631b22590550b7c1c354ec9bc54c"
  },
  {
    "url": "assets/js/66.5f77d8d2.js",
    "revision": "59dc8d3d201a8ca97a6610c45b06cd16"
  },
  {
    "url": "assets/js/67.56c7eb5b.js",
    "revision": "93f5a4ca17d286af78f733f62c28dd85"
  },
  {
    "url": "assets/js/68.af653628.js",
    "revision": "dca1eaff722bd53ba32c7a5f92591167"
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
    "url": "assets/js/app.62d758d7.js",
    "revision": "88dc8bee9968f7f53c22b9757e73408e"
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
    "revision": "d8e5b51cc93a20c6b3788ef644d46d69"
  },
  {
    "url": "lecture/index.html",
    "revision": "9ea5fd140737c75f76162264382ff5d6"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "88864661e17acea514d6e3093c6e5fb3"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "4b4ba4ea1a922f5b8f64053d797eca1f"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "6ce4ed718a2ed1b476c8a469d325ce2a"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "883c5222a8be1b54998446833fd3a1ec"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "2c2d22af8e767fb9143cecefea4bb965"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "aaf379c02ffb4c4378f5e09b3c009d9d"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "961e4e9307846f29f45c5336396715c2"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "a40a68ebb6578c88607429d21fb5f0e2"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "e6f4ce29bc3995f872056266c4c95f0f"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "fb3b774ee941c540f499a7a1588fbb17"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "b5c713693db54807064d12f6d47a7ade"
  },
  {
    "url": "payment-information.html",
    "revision": "86f6448ad7803b6ac57cc0cf8f21892f"
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
