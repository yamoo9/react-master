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
    "revision": "f275cd9a34cd8e0a79a6d06b1f0ae43a"
  },
  {
    "url": "account/register.html",
    "revision": "5362150606501c280b69b6a1c27ef9b8"
  },
  {
    "url": "account/signin.html",
    "revision": "1497c51a04f9ed9d6d01fa4a6b4da8d6"
  },
  {
    "url": "account/user.html",
    "revision": "a23a2de9469acebbcf4e84bd4977099c"
  },
  {
    "url": "admin/index.html",
    "revision": "d8300a5e76c4e111ba77e6dc861416cb"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.3b51d532.css",
    "revision": "54a4765b044d01662cc0c57cc10b1e04"
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
    "url": "assets/js/10.9dd6f5c9.js",
    "revision": "2f329d45d0e3a43138bdb946de169faa"
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
    "url": "assets/js/14.7baf9998.js",
    "revision": "50bf3cbf09be05a2193ee5a15d630140"
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
    "url": "assets/js/18.2613b63f.js",
    "revision": "681b5994feea3a58db40c584aa164a5e"
  },
  {
    "url": "assets/js/19.c8c41a55.js",
    "revision": "0c3243dac4931bf3673b164af9a27479"
  },
  {
    "url": "assets/js/2.3ea2e440.js",
    "revision": "014aad08d7d2c9657adeaac00a900cf4"
  },
  {
    "url": "assets/js/20.9210d63a.js",
    "revision": "e12916eb9a5a88e26daee75ee713a36f"
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
    "url": "assets/js/27.51d917f3.js",
    "revision": "d7e9f129d355ba68bca96774d0fc90fa"
  },
  {
    "url": "assets/js/28.c119da4f.js",
    "revision": "577ae8b258942013987e5b6779bf6046"
  },
  {
    "url": "assets/js/29.ee18bf21.js",
    "revision": "01c1d306bff4df60f82495901ad766e3"
  },
  {
    "url": "assets/js/3.36d06f41.js",
    "revision": "827836f9dea78564e270c2e7480f7c46"
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
    "url": "assets/js/33.96e96a10.js",
    "revision": "d6e7f3aafdb38ec315e647498cc94dc7"
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
    "url": "assets/js/4.e260ab62.js",
    "revision": "1272d2ff7328cb3215fb2cab8d1e39c7"
  },
  {
    "url": "assets/js/40.f0b0c704.js",
    "revision": "6a2bdf9bb74004b9273dd459ef665763"
  },
  {
    "url": "assets/js/41.3fe9d1cb.js",
    "revision": "0893129c630ae08b40e3a41a3bd945ab"
  },
  {
    "url": "assets/js/42.7740c659.js",
    "revision": "c0be14be3819ee2ee2847fa62976d43f"
  },
  {
    "url": "assets/js/43.77bc0f83.js",
    "revision": "a9679b12a5cdf981e5010aab5f309964"
  },
  {
    "url": "assets/js/44.3038f662.js",
    "revision": "b191a8db7bac5615cc28700b4b829f8a"
  },
  {
    "url": "assets/js/45.d2629b7f.js",
    "revision": "3640477c1b90dc0dc984079ffcc6c360"
  },
  {
    "url": "assets/js/46.b9d450af.js",
    "revision": "4eece7c25924299021165f36304621c2"
  },
  {
    "url": "assets/js/47.5efce3e7.js",
    "revision": "c8dc15c7ad7e434d50ce6398475b03c8"
  },
  {
    "url": "assets/js/48.bc258af0.js",
    "revision": "196200e320956aaae3d531ea2c80b3b2"
  },
  {
    "url": "assets/js/49.45bf7097.js",
    "revision": "0d51544a53b4b9d538dbb045d718afe6"
  },
  {
    "url": "assets/js/5.b901be9d.js",
    "revision": "9d7b7191408eb4a57219a3d62fa0e47d"
  },
  {
    "url": "assets/js/50.7a82b773.js",
    "revision": "1861678613e0d34046b24ef2aa5f26b3"
  },
  {
    "url": "assets/js/51.b00285f1.js",
    "revision": "5989aa28187e09bbc204c58fcf4df074"
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
    "url": "assets/js/56.2e425351.js",
    "revision": "4a7a8160763705fde63caffc043cc564"
  },
  {
    "url": "assets/js/57.7fd60fff.js",
    "revision": "38428e2ca1473610b1bfd24e3170ac6c"
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
    "url": "assets/js/6.7dd9a72f.js",
    "revision": "e1a99f6e9218ffc5585d4434981c7436"
  },
  {
    "url": "assets/js/60.b0c6d9af.js",
    "revision": "81a0f75e73800deffc46848014723719"
  },
  {
    "url": "assets/js/61.72766357.js",
    "revision": "72a0c7ff4bb5db48104ee06af317e4fa"
  },
  {
    "url": "assets/js/62.50d6b2f3.js",
    "revision": "497b705d482ecca6096cb000c34a40e4"
  },
  {
    "url": "assets/js/63.2fc9fea1.js",
    "revision": "da8caf1581d6996eea6c1fef91341296"
  },
  {
    "url": "assets/js/64.1ef8f412.js",
    "revision": "f046ef1e16f46410eced8c29b43ae669"
  },
  {
    "url": "assets/js/65.9358b526.js",
    "revision": "11ab20a1c30ca523296bc84c10b3e2be"
  },
  {
    "url": "assets/js/66.ef3be21a.js",
    "revision": "893e7cb14a477c30b1cce202913e39d7"
  },
  {
    "url": "assets/js/67.813021a2.js",
    "revision": "1fb43ac842cff1ad7722656bd5b5fc66"
  },
  {
    "url": "assets/js/68.007282a1.js",
    "revision": "d8ec6570677e249339e5babc96632b21"
  },
  {
    "url": "assets/js/69.1e1bd923.js",
    "revision": "5ca008de36c5daa3aedb20cde94d460b"
  },
  {
    "url": "assets/js/7.384be6b1.js",
    "revision": "906a09a5a479d1747dbf01d67337efab"
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
    "url": "assets/js/9.6b525b1a.js",
    "revision": "28c2f162da59cfba492c47593ebcbe99"
  },
  {
    "url": "assets/js/app.75d1fe99.js",
    "revision": "5f5d185fd4a886a3b43ce63cf0757b3f"
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
    "revision": "7d9ca3a42f31ccdfee7c8046bbed86f6"
  },
  {
    "url": "lecture/index.html",
    "revision": "3140e207ad4588b2fa6199cc7f23c31d"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "81843eabcf9b89027dd17a76c74dd790"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "d926515137b3e903d38e1aacadca7ff5"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "6c04f4d3909df24dc993bd94862cfbeb"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "230e1a9ea78a3735fa27dd881669c75c"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "fc311e0a0197405a93e371dc15aff07e"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "cc4c504740b48fc934adb3edcbeeb829"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "a52531617a3b6c7d641d12988fb0a6d9"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "797d5026075b20cfd11e02af71465c5b"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "d4876a016467dd00b0432e88a341e938"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "a3e85b4d1229f959a6be3d4c3a7a28aa"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "fecf621de23ab0f7e0bc9a1beed0101d"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "57b5006d63b1add8b9295430411fcc0c"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "0aae3b0418824bcdb92a463be502e06f"
  },
  {
    "url": "payment-information.html",
    "revision": "26be7b4b161a7dfd66da384531f5cb0e"
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
