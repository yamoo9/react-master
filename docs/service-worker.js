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
    "revision": "fc8d360999a872c59dc98d817f773dbb"
  },
  {
    "url": "account/register.html",
    "revision": "5629e31afd324e48d6dc64b956ae69df"
  },
  {
    "url": "account/signin.html",
    "revision": "c18d2e7efa287751d30390233cee9456"
  },
  {
    "url": "account/user.html",
    "revision": "d623266ee7413d424ce83414d98b5026"
  },
  {
    "url": "admin/index.html",
    "revision": "f1afefa772818e8b21003929bbbf693c"
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
    "url": "assets/js/14.7baf9998.js",
    "revision": "50bf3cbf09be05a2193ee5a15d630140"
  },
  {
    "url": "assets/js/15.5b520f20.js",
    "revision": "9884225fb988df5d86efb3865500a5de"
  },
  {
    "url": "assets/js/16.573afc66.js",
    "revision": "4fc469f672f46a28bec933a5efe17230"
  },
  {
    "url": "assets/js/17.ff741bb9.js",
    "revision": "0de32704239d00ecdbc4bf1321cc3ae8"
  },
  {
    "url": "assets/js/18.f3f170fc.js",
    "revision": "7e6bd56c7e6bbdd327d14ab3848f5ec4"
  },
  {
    "url": "assets/js/19.7ae8ce12.js",
    "revision": "21acdb12390f6a0c0fd8e84ac8a9de2e"
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
    "url": "assets/js/24.9fada7a0.js",
    "revision": "33dd11ac4ad1443419f4dcf5061fd294"
  },
  {
    "url": "assets/js/25.5cc1cd40.js",
    "revision": "7faee3963d724a0576e79374675779cc"
  },
  {
    "url": "assets/js/26.4799d5a6.js",
    "revision": "c7748168ee95901ef4e152bc1f660531"
  },
  {
    "url": "assets/js/27.3241c3e0.js",
    "revision": "c3d8b7ded324b56d110cfe6227c54303"
  },
  {
    "url": "assets/js/28.03c6cd26.js",
    "revision": "ef9da0b94eae6e7e23402e7b60d40eb8"
  },
  {
    "url": "assets/js/29.ee18bf21.js",
    "revision": "01c1d306bff4df60f82495901ad766e3"
  },
  {
    "url": "assets/js/3.898738d6.js",
    "revision": "7dfc3946ca20dda255eb376c32640819"
  },
  {
    "url": "assets/js/30.0542850f.js",
    "revision": "5f5156e7b66c703f517d6e7733670d0f"
  },
  {
    "url": "assets/js/31.0ac5782c.js",
    "revision": "827af37dd20ca120f751e5e86e87a428"
  },
  {
    "url": "assets/js/32.3c7161c6.js",
    "revision": "a72f2d6970c2df906d1822fee0062eca"
  },
  {
    "url": "assets/js/33.9945c410.js",
    "revision": "c831717cb5c48e29d30eed13a0205372"
  },
  {
    "url": "assets/js/34.13256a2f.js",
    "revision": "811e2eacadd5c2fbfd5fee2366237415"
  },
  {
    "url": "assets/js/35.bcd3dd35.js",
    "revision": "87fcd29f6520e5067c8559cbc2c8e57d"
  },
  {
    "url": "assets/js/36.775a1328.js",
    "revision": "1df530935dfd44eaa9a7b9e672691b22"
  },
  {
    "url": "assets/js/37.8c4e09f7.js",
    "revision": "464f9eb1cc4a5806556cbc79b7bcb431"
  },
  {
    "url": "assets/js/38.3fecbb5f.js",
    "revision": "f44e272c3eaa7b5f70e2d36c36178710"
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
    "url": "assets/js/41.16f3f36f.js",
    "revision": "1c1b1cd981f1792c2d9b388265de5cd4"
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
    "url": "assets/js/44.731364ac.js",
    "revision": "0e308e51a75e408c641e3dc98427a6d5"
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
    "url": "assets/js/47.5efce3e7.js",
    "revision": "c8dc15c7ad7e434d50ce6398475b03c8"
  },
  {
    "url": "assets/js/48.bc258af0.js",
    "revision": "196200e320956aaae3d531ea2c80b3b2"
  },
  {
    "url": "assets/js/49.474bf9fe.js",
    "revision": "b64f944513711a460158f2250b0d9eff"
  },
  {
    "url": "assets/js/5.f84296c1.js",
    "revision": "c2e7a386fa466aa02c01eb54e7ae5a72"
  },
  {
    "url": "assets/js/50.54cba60a.js",
    "revision": "cbe0c411e152014b9717803bb07be620"
  },
  {
    "url": "assets/js/51.5de2d552.js",
    "revision": "540ebd26659f45041dc2cadce69019b2"
  },
  {
    "url": "assets/js/52.6e54faa1.js",
    "revision": "92e7cea1e4560f3645e87bebd1f63fc4"
  },
  {
    "url": "assets/js/53.fd6e624c.js",
    "revision": "465246fe874ef5615d828ab1b0fdc9ea"
  },
  {
    "url": "assets/js/54.e73bc3c1.js",
    "revision": "b38ab4427278f1a55aa0d3df646ee09b"
  },
  {
    "url": "assets/js/55.ae95b983.js",
    "revision": "30a0c0aaca5c80891f7874d68ae4ab55"
  },
  {
    "url": "assets/js/56.efb77021.js",
    "revision": "68d0e723925531ca54b3893ab4fd0775"
  },
  {
    "url": "assets/js/57.7fd60fff.js",
    "revision": "38428e2ca1473610b1bfd24e3170ac6c"
  },
  {
    "url": "assets/js/58.f9d36f09.js",
    "revision": "6ad0ed31811d67caeb956d45178b9a87"
  },
  {
    "url": "assets/js/59.0a77ec29.js",
    "revision": "937e7504876ce741a644f773896a03b8"
  },
  {
    "url": "assets/js/6.be56131e.js",
    "revision": "131907af59f5f7faedb0cc7fd0cd5fc6"
  },
  {
    "url": "assets/js/60.d42c4119.js",
    "revision": "84b72a7bab1fdc25a7c98067f857fdf0"
  },
  {
    "url": "assets/js/61.32fe179c.js",
    "revision": "866523b336c76518047f7f1e2ed9a550"
  },
  {
    "url": "assets/js/62.154db388.js",
    "revision": "c0dd62cffd7ad3cbbddc0540331b4297"
  },
  {
    "url": "assets/js/63.2fc9fea1.js",
    "revision": "da8caf1581d6996eea6c1fef91341296"
  },
  {
    "url": "assets/js/64.b094ea10.js",
    "revision": "6405b0fcb642d53b5516b77944e6bfd8"
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
    "url": "assets/js/67.02a535be.js",
    "revision": "f65b70b3e53f0d3091995f2c5365ad16"
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
    "url": "assets/js/7.005454d6.js",
    "revision": "fc583002e7aaf44c40558c83fa297f61"
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
    "url": "assets/js/app.124bea0e.js",
    "revision": "190b9711fbfe63949331ba48641930bb"
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
    "revision": "5117d9f20210f998fae5dcb3b927b390"
  },
  {
    "url": "lecture/index.html",
    "revision": "cfcb4a1808e5654a88072740a7565624"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "9e784e06b3cc033ff53a20f2084f67d4"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "941db4acb14b757326b536b11dd576bd"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "b0733b7e9e649080100da6a79df110a0"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "a942819021a4ddd69c6ba17a2f30f5c2"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "9806cd18fad4d6bcb2da4188ef7a4a38"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "b6d0c1fa66038b2362b0211da6cec76b"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "875844e06d7a3c054df7e2dd545efdb2"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "ac842ff6775785faaace5c55dc992eaf"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "ddcc468e8aea735a0c7b66f51fd9d2c0"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "515547a2fad84afe183c72309a1513e2"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "a817c49b609b45f5cb922448a2985268"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "d9094b84f0f224c2c5d5b4c9df997128"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "cc9fc9ced0e8aa5634749985b328721e"
  },
  {
    "url": "payment-information.html",
    "revision": "32512fcf830268dbfbfcb82907be02f6"
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
