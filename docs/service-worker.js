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
    "revision": "7cbdfc500c7aca8ec0c21daf3d53c7e4"
  },
  {
    "url": "account/register.html",
    "revision": "457ddcc2e63676da8bebd36a9d17d67c"
  },
  {
    "url": "account/signin.html",
    "revision": "c813005d5ca0e1fffbfbc242280b80f9"
  },
  {
    "url": "account/user.html",
    "revision": "893caaa8863b19db35427a2ad29359aa"
  },
  {
    "url": "admin/index.html",
    "revision": "be0ff895bbac4745adfda328ef0e38a5"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.ba7a3155.css",
    "revision": "b95886c44d1bf943bc98e8703b2931a9"
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
    "url": "assets/js/10.ee26707e.js",
    "revision": "c92cf4b2213509b453d589e70a39bc60"
  },
  {
    "url": "assets/js/11.b62409a6.js",
    "revision": "fef7cc02f9ba4b662fad0a4a8a4eabeb"
  },
  {
    "url": "assets/js/12.2c79ff18.js",
    "revision": "af9078a50ff98fad792543cd23e1bfdc"
  },
  {
    "url": "assets/js/13.a07d796b.js",
    "revision": "a71e2becdfa7933c60f397fbeab0b5d6"
  },
  {
    "url": "assets/js/14.574c6346.js",
    "revision": "ea022a38104f12ef9bc2a34b246a08df"
  },
  {
    "url": "assets/js/15.a1fa4bd5.js",
    "revision": "89693a0b687c706441b59574ff864fe0"
  },
  {
    "url": "assets/js/16.11be21e3.js",
    "revision": "68ff3667974f1cef9cee1c4be8ba6a79"
  },
  {
    "url": "assets/js/17.1a199937.js",
    "revision": "93b29eea7d9b43567dd6c94c7918d500"
  },
  {
    "url": "assets/js/18.14d08ac3.js",
    "revision": "299132601fd51ba9da5d84bd26562b77"
  },
  {
    "url": "assets/js/19.981ebd09.js",
    "revision": "21acdb12390f6a0c0fd8e84ac8a9de2e"
  },
  {
    "url": "assets/js/2.98c3e686.js",
    "revision": "014aad08d7d2c9657adeaac00a900cf4"
  },
  {
    "url": "assets/js/20.05974c62.js",
    "revision": "e12916eb9a5a88e26daee75ee713a36f"
  },
  {
    "url": "assets/js/21.f9d29780.js",
    "revision": "dd0509567b7dae2b837d37ef1a4d6f60"
  },
  {
    "url": "assets/js/22.cf0e41e6.js",
    "revision": "ca975fe913b8bbcc43bfe5503dac8027"
  },
  {
    "url": "assets/js/23.3d4ad608.js",
    "revision": "55891ab2b41294cc3b0a6f1d1b913f6b"
  },
  {
    "url": "assets/js/24.49db25e0.js",
    "revision": "c46557b206e4b49e866749d2463cdbf0"
  },
  {
    "url": "assets/js/25.370c87bc.js",
    "revision": "b771c3e83e7c79c8899eb3db8316f2de"
  },
  {
    "url": "assets/js/26.c61ee684.js",
    "revision": "e44a41e89576e744db426c4f28f98a9b"
  },
  {
    "url": "assets/js/27.6b0e0f1c.js",
    "revision": "cbf44bbb0984c6b88193eb3d3636bae3"
  },
  {
    "url": "assets/js/28.ca4e156b.js",
    "revision": "9b68b0016f33f7a514fee1192add6d2d"
  },
  {
    "url": "assets/js/29.9b0310bb.js",
    "revision": "67f433ebe1da23d6f64cdfc421653bdb"
  },
  {
    "url": "assets/js/3.fd176750.js",
    "revision": "35c61599e0464b456803a9d2c33b54d4"
  },
  {
    "url": "assets/js/30.418f13ca.js",
    "revision": "6a334d4a376aab5419f1970f90374c44"
  },
  {
    "url": "assets/js/31.f84b0aab.js",
    "revision": "29cf3589949e723ce43fd96fd2472d3f"
  },
  {
    "url": "assets/js/32.fc06c836.js",
    "revision": "89061ef063a34364d6894b5c0908a65e"
  },
  {
    "url": "assets/js/33.5ed07f6a.js",
    "revision": "7a2f22a3c8d0b7fc3a86bd2ba9ae2918"
  },
  {
    "url": "assets/js/34.b2546fd8.js",
    "revision": "cb08c4184915d94aec6b7fe1f8e9b7a3"
  },
  {
    "url": "assets/js/35.f63f2d78.js",
    "revision": "8d20d2e1c68e262263ba530c0db2d0b9"
  },
  {
    "url": "assets/js/36.840e356f.js",
    "revision": "f7d46a739329b00145530e2bfc17d212"
  },
  {
    "url": "assets/js/37.4321a388.js",
    "revision": "7821d62af2f4f76fe77e5b26994ffbdd"
  },
  {
    "url": "assets/js/38.75b21010.js",
    "revision": "a68a8e409776cc780ce67645a74bbbbd"
  },
  {
    "url": "assets/js/39.2f6e3ecf.js",
    "revision": "9d5fed4b790ea62ba5b6de55d85cf3ba"
  },
  {
    "url": "assets/js/4.047e40f9.js",
    "revision": "57c645db1fe1995c606f10a28975c4db"
  },
  {
    "url": "assets/js/40.ecd5382e.js",
    "revision": "d6ed78a880cdab2de8374cc6d0d341c8"
  },
  {
    "url": "assets/js/41.3cd09b5d.js",
    "revision": "2f5f62177ff7c4b0a3049fcb4b968ec3"
  },
  {
    "url": "assets/js/42.ce176b6b.js",
    "revision": "9eca0dde9e108d7e6bb4a0c48dae8167"
  },
  {
    "url": "assets/js/43.5eacc838.js",
    "revision": "44f07b26bc67cf3b2cbe03d68ee7c16a"
  },
  {
    "url": "assets/js/44.ad21bbe9.js",
    "revision": "63a5e253eddd43a5db9032c9dbcf3d0f"
  },
  {
    "url": "assets/js/45.789f1aa9.js",
    "revision": "dd64cb622484efe0b39da9d1e59518a7"
  },
  {
    "url": "assets/js/46.41c74ad6.js",
    "revision": "c66f9683de20c32c20bd8e0043511957"
  },
  {
    "url": "assets/js/47.db8969c1.js",
    "revision": "fbab00a177bb95e97b495d6540553fba"
  },
  {
    "url": "assets/js/48.da1ad6a5.js",
    "revision": "a0f93877858cb31f35c436cb7632bbb1"
  },
  {
    "url": "assets/js/49.c5eaeed5.js",
    "revision": "69d4bd3d4f4ae03020c8cf199d267dc0"
  },
  {
    "url": "assets/js/5.87e5b4d9.js",
    "revision": "c95a8fd4c88e92eb27e597f84d7d35d7"
  },
  {
    "url": "assets/js/50.0d3a883f.js",
    "revision": "f411aa407f7b1f806a979f8467dcc18f"
  },
  {
    "url": "assets/js/51.761fb1e3.js",
    "revision": "ba0c9a1ee27ea7b618df7b8192289234"
  },
  {
    "url": "assets/js/52.43937d55.js",
    "revision": "cd1f0bfc33b4945d51fd8ce4d01ca44d"
  },
  {
    "url": "assets/js/53.842ab404.js",
    "revision": "9f85efdc84399ddc5fb20b3288ce2bcf"
  },
  {
    "url": "assets/js/54.06eb37ac.js",
    "revision": "4df1eb77f30041afd49e33bfedfeea32"
  },
  {
    "url": "assets/js/55.2bd11db2.js",
    "revision": "2f5841fc2eef4b0ac8add8802a81fbe4"
  },
  {
    "url": "assets/js/56.7cb08385.js",
    "revision": "fb111f5511acb4591003d785fc7c6c33"
  },
  {
    "url": "assets/js/57.d216bda1.js",
    "revision": "da2294e627817089104a4a86d7983ece"
  },
  {
    "url": "assets/js/58.24ac63cc.js",
    "revision": "7bb136c71e75376f2d7896d583799538"
  },
  {
    "url": "assets/js/59.67d3d580.js",
    "revision": "57d019a2dcc35e024915095172e17a45"
  },
  {
    "url": "assets/js/6.0ec54d88.js",
    "revision": "3740cb33d6fd2b202b98f3340e2b028d"
  },
  {
    "url": "assets/js/60.3bdd21cd.js",
    "revision": "160eadbf8787455f6e35db64bde46bb6"
  },
  {
    "url": "assets/js/61.57f4afc5.js",
    "revision": "0953b32986fea93059d4e185585a19f8"
  },
  {
    "url": "assets/js/62.5a08b303.js",
    "revision": "180db0371a3ef6a4e80adb91026f49e1"
  },
  {
    "url": "assets/js/63.898c47ba.js",
    "revision": "dfa9ca095361476235f8c802881485c2"
  },
  {
    "url": "assets/js/64.38b61728.js",
    "revision": "6fb1fe32a8d09dbd361cbb35d1291c54"
  },
  {
    "url": "assets/js/65.aa182f16.js",
    "revision": "48cb45d4be3c10ba9b9b16cdfc12dd24"
  },
  {
    "url": "assets/js/66.d2ac197d.js",
    "revision": "b87a2394b9d0ebd7077100ee7176d688"
  },
  {
    "url": "assets/js/67.c2731cec.js",
    "revision": "581213b27999960e2ccd05433c952bc2"
  },
  {
    "url": "assets/js/68.02efcd61.js",
    "revision": "7a06b6c054279f6298002dca906bf0b1"
  },
  {
    "url": "assets/js/69.0ab3c28e.js",
    "revision": "8b9cb8ddf2a7cb885460d6806719e875"
  },
  {
    "url": "assets/js/7.ffb68a39.js",
    "revision": "e3dccf4f146006f02930cc88bcbf92d9"
  },
  {
    "url": "assets/js/70.edfd619e.js",
    "revision": "b04e86dbd5653f5a2826fc49bd14e472"
  },
  {
    "url": "assets/js/71.81319877.js",
    "revision": "32ad2d9bdc5e358eeecc3cd0c9734f4a"
  },
  {
    "url": "assets/js/8.4d5d91cb.js",
    "revision": "503c0b3899ab64689dcc536306388c6b"
  },
  {
    "url": "assets/js/9.ca3029b9.js",
    "revision": "e4e0a789e8f6c12f6d50c39afa1ee250"
  },
  {
    "url": "assets/js/app.b49b5f5a.js",
    "revision": "440c1fe4ef702321cae95212e5fb921b"
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
    "revision": "cdb8ab5ba1b011275a41191554acfffc"
  },
  {
    "url": "lecture/index.html",
    "revision": "d733b8e685bba891cc0969186bbadd31"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "2700714e5c4693d3652b9d3a3ab2a3cc"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "d6b9d39ff17b6335a328d8796eb3bc46"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "081759c5da27b203f5ad692bc439f5c9"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "089e9023fc377df8b7a563deaca66961"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "b5e69c58711251c479184537d7b73cdf"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "8734f59b0b3e9138da6b3afee6acb482"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "f41b846c8143881b68be19273cc5cd41"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "0884b47065d19415320f1275129571de"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "06192daacbdaf77ca195c54fa98c195f"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "9723ad55847dfc5253fe78f973a6c5d8"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "715ee86c1a346e6ec21f1e49911fd5c0"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "f4eeadd80d06b9ceed3a36e0d9c38772"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "489087e39bce4b9fa285c2c66f779abf"
  },
  {
    "url": "payment-information.html",
    "revision": "fbe05319ef3e39b84938a4ad7cdec202"
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
