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
    "revision": "a35ba7cfddfb12e72a59205f7ba44c6f"
  },
  {
    "url": "account/register.html",
    "revision": "bdb0ae51933d301f153e8320af9fb1f6"
  },
  {
    "url": "account/signin.html",
    "revision": "94fac3e698a526245462a55d35676699"
  },
  {
    "url": "account/user.html",
    "revision": "a68c4c09872c522a7235dbe788c88e9a"
  },
  {
    "url": "admin/index.html",
    "revision": "13b2cff0abc1b7a7567916507d6ed6df"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.8fd59ad2.css",
    "revision": "a19b7818adf3bfc3265db548529f2866"
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
    "url": "assets/js/15.e00c50a2.js",
    "revision": "c8cfb913847134633b6fe7d09c946beb"
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
    "url": "assets/js/20.179a05eb.js",
    "revision": "284008e60d493e50da0e36ce73bb4b3a"
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
    "url": "assets/js/24.763aa8ad.js",
    "revision": "4efbbd8ff02d18afc07023664869c257"
  },
  {
    "url": "assets/js/25.015cc94f.js",
    "revision": "44826b1eefa80df91937d820168504ec"
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
    "url": "assets/js/29.6c6a75e2.js",
    "revision": "6d8790ac3f2cfc7ce00250a559deff48"
  },
  {
    "url": "assets/js/3.2cdf0ec3.js",
    "revision": "659807b17738ea2a9a9920e05af49f80"
  },
  {
    "url": "assets/js/30.660f8610.js",
    "revision": "964de1c0b77447e5b35545110a313c15"
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
    "url": "assets/js/33.9945c410.js",
    "revision": "c831717cb5c48e29d30eed13a0205372"
  },
  {
    "url": "assets/js/34.624fb9fe.js",
    "revision": "cb08c4184915d94aec6b7fe1f8e9b7a3"
  },
  {
    "url": "assets/js/35.cd83f0f4.js",
    "revision": "bbba852b155c78b2f5383794f64bc013"
  },
  {
    "url": "assets/js/36.775a1328.js",
    "revision": "1df530935dfd44eaa9a7b9e672691b22"
  },
  {
    "url": "assets/js/37.b3f3ad50.js",
    "revision": "c180e5abd85420bf3a04ab42a16ee441"
  },
  {
    "url": "assets/js/38.43b0a72e.js",
    "revision": "2659a5887ec2cd4dda926a2684f500ff"
  },
  {
    "url": "assets/js/39.cd65c3fb.js",
    "revision": "7fbfe3c8f88060100a189174bc92783d"
  },
  {
    "url": "assets/js/4.b78d4707.js",
    "revision": "1dbb0b321f75aadf97076a7abe729ba9"
  },
  {
    "url": "assets/js/40.b3fdb315.js",
    "revision": "5ce1214b367f74f05c42494d930df54e"
  },
  {
    "url": "assets/js/41.16f3f36f.js",
    "revision": "1c1b1cd981f1792c2d9b388265de5cd4"
  },
  {
    "url": "assets/js/42.ef569f94.js",
    "revision": "1d7574beeb8dacd857274ba83161d725"
  },
  {
    "url": "assets/js/43.77bc0f83.js",
    "revision": "a9679b12a5cdf981e5010aab5f309964"
  },
  {
    "url": "assets/js/44.2d1080ef.js",
    "revision": "13f9bb0e0ec7ba87518f485d96a8a80b"
  },
  {
    "url": "assets/js/45.8bc90cd4.js",
    "revision": "c8cf7e78f8eb58333b90509f8eb7ee23"
  },
  {
    "url": "assets/js/46.b9d450af.js",
    "revision": "4eece7c25924299021165f36304621c2"
  },
  {
    "url": "assets/js/47.25857be3.js",
    "revision": "fa1783fe0cfdb4018c126541187d9c0e"
  },
  {
    "url": "assets/js/48.dffd0d34.js",
    "revision": "23d9de6c5e835f86bd067f0bfc5eea95"
  },
  {
    "url": "assets/js/49.67127b20.js",
    "revision": "67098cf651fd3870fd9ed66ed82fa01c"
  },
  {
    "url": "assets/js/5.abdb76cb.js",
    "revision": "313894c57ad1ab41ece5cb54f38dd9b2"
  },
  {
    "url": "assets/js/50.c151bbc2.js",
    "revision": "a018ff31936b1aa6b1e5f9ad26d908fc"
  },
  {
    "url": "assets/js/51.3eefd8a2.js",
    "revision": "ee5f8f96472215b4d24aa801d42b1772"
  },
  {
    "url": "assets/js/52.15c83fcd.js",
    "revision": "6320fbd24b4c1f8bc78ea7cb4cbe7b08"
  },
  {
    "url": "assets/js/53.fd6e624c.js",
    "revision": "465246fe874ef5615d828ab1b0fdc9ea"
  },
  {
    "url": "assets/js/54.c3cc8d25.js",
    "revision": "d87eb8f2e831fd13ff3f167932612464"
  },
  {
    "url": "assets/js/55.d807df35.js",
    "revision": "299dcbf6f982d3e2bf585ec126dbec27"
  },
  {
    "url": "assets/js/56.a7473708.js",
    "revision": "6bf5f51d94227688eda961bf3b16b7c9"
  },
  {
    "url": "assets/js/57.ae0af7b1.js",
    "revision": "0826d136152978e4642bb78e95091758"
  },
  {
    "url": "assets/js/58.5e069ef5.js",
    "revision": "dbdde06421e74c8b9565ae353e2ae0eb"
  },
  {
    "url": "assets/js/59.3d7f12bb.js",
    "revision": "aa5c47a66a681fac8a434a515a2640e2"
  },
  {
    "url": "assets/js/6.c7ff291c.js",
    "revision": "2f655aea818a31cddf0fc20b62b9548d"
  },
  {
    "url": "assets/js/60.48bda955.js",
    "revision": "eee6e5540110aa51f83c761661ffa5d7"
  },
  {
    "url": "assets/js/61.468e6b51.js",
    "revision": "ca706dd6f68297d5d66b7079ef997ca3"
  },
  {
    "url": "assets/js/62.5a7e192a.js",
    "revision": "ccf33582fe1f59ae87dd8585746c00d6"
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
    "url": "assets/js/65.9943bb1d.js",
    "revision": "3e7fb9474d8b2b3a5703f98cedf0cc2d"
  },
  {
    "url": "assets/js/66.4e6bbafb.js",
    "revision": "4968fbdcfca8b1d3ae2011e16cdea28d"
  },
  {
    "url": "assets/js/67.56c7eb5b.js",
    "revision": "93f5a4ca17d286af78f733f62c28dd85"
  },
  {
    "url": "assets/js/68.77e1347e.js",
    "revision": "9d00bfea6485a7d81fe4ff3275df81b7"
  },
  {
    "url": "assets/js/69.1e1bd923.js",
    "revision": "5ca008de36c5daa3aedb20cde94d460b"
  },
  {
    "url": "assets/js/7.f1ea0204.js",
    "revision": "bdf4c99d112b7891a71d97276357ebca"
  },
  {
    "url": "assets/js/70.30162d38.js",
    "revision": "98fd41d5cbf964e3f09b10993ca947d2"
  },
  {
    "url": "assets/js/8.7c0dc760.js",
    "revision": "04434abc4de8b5563a7cbc79616605a0"
  },
  {
    "url": "assets/js/9.fa6c80b3.js",
    "revision": "60b38b6a454abd196c2759206bdce430"
  },
  {
    "url": "assets/js/app.fbc3ee48.js",
    "revision": "2751862da4bf4686fd7973f6bae42628"
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
    "revision": "3c6e14e598e163a660ce077149a2c731"
  },
  {
    "url": "lecture/index.html",
    "revision": "e81e5b1bdce6183c2e5dc2fc711bc680"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "209b4f18e57fb4208cdc72754bec9085"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "9466e9dd2d00e426d55ff60d405c3eae"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "52fe882249b9a49f462052b5b2995f60"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "153525d52aeb54a01e5ff732c9dcb51a"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "056e04c46bfb917cd258a05eb5be618a"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "5445da68c7a5ec9e83080356b03b9acd"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "5079dbd945b8aa132c1716b9f8b66846"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "4224639183cbcd72fc03782d3af790ee"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "737ba9f1dd4e06b5bbb22e442920e535"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "aa9b68de8855021b13084d38bb7d2bfa"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "cd3041b1ba66a62ac1a7483ef4e074f5"
  },
  {
    "url": "payment-information.html",
    "revision": "e20fdd6ce3b00fa5e6efe77ef4e0d5f4"
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
