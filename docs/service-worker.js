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
    "revision": "a0723be7e2aa23b4e78c88089334fa2a"
  },
  {
    "url": "account/register.html",
    "revision": "1312066c4e7ae19f01a143b090431956"
  },
  {
    "url": "account/signin.html",
    "revision": "e9f712b20cb228e957ce4254d64e72c6"
  },
  {
    "url": "account/user.html",
    "revision": "59d5d599718f214a122b60fb5bc52d6d"
  },
  {
    "url": "admin/index.html",
    "revision": "427952b7f0aea3bf084b2c5098c8c32d"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.578a219f.css",
    "revision": "39a312eee5bccd50313b078ee8f13779"
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
    "url": "assets/js/10.8b52c177.js",
    "revision": "a3da22d88c8952ece3409fe3a08c085e"
  },
  {
    "url": "assets/js/11.78a12abc.js",
    "revision": "9aa070224531e00ecab8a9974aef0a02"
  },
  {
    "url": "assets/js/12.88b445c5.js",
    "revision": "a8ace0cd2d997bb7d92df9eeb99cdde8"
  },
  {
    "url": "assets/js/13.c607ac3a.js",
    "revision": "6860bf773bdfd932aa254243d8a9689c"
  },
  {
    "url": "assets/js/14.c082ddb0.js",
    "revision": "8d078d93314be7daad71132d46974b5d"
  },
  {
    "url": "assets/js/15.486d8657.js",
    "revision": "ac5bd1c0824f32ebdd210d2f761b2a11"
  },
  {
    "url": "assets/js/16.97d10851.js",
    "revision": "ae598bb2266c3b447b7a5aef0fbf8349"
  },
  {
    "url": "assets/js/17.5a9deaed.js",
    "revision": "5aafd678d17e6e0eb200b6bd5e897307"
  },
  {
    "url": "assets/js/18.911e6512.js",
    "revision": "99727cc04bb79ca5cc34aae75e237a7c"
  },
  {
    "url": "assets/js/19.68f80f08.js",
    "revision": "a2b753ba0c7556e216b5b7881874452e"
  },
  {
    "url": "assets/js/2.ea6b91c0.js",
    "revision": "dfea1c4274cdc31baeda74ccba98b386"
  },
  {
    "url": "assets/js/20.ff0c202a.js",
    "revision": "7c4148a20adb714cfbfd4d63d93cb73c"
  },
  {
    "url": "assets/js/21.e76dd759.js",
    "revision": "c48a68f490714fe54a875389cdcf37d6"
  },
  {
    "url": "assets/js/22.4b85eea6.js",
    "revision": "33efb06d1063cf27a0441de5f418cd75"
  },
  {
    "url": "assets/js/23.16319488.js",
    "revision": "0a3358a2d121ea6cfcb671d3d594bc45"
  },
  {
    "url": "assets/js/24.ba0936cb.js",
    "revision": "abe194b0fafc309266af4bd043e65d25"
  },
  {
    "url": "assets/js/25.837feae7.js",
    "revision": "38c17b354b7b5012cb324d40963e1b1e"
  },
  {
    "url": "assets/js/26.dcf6f497.js",
    "revision": "abc6e8023563e8c448d527bdb8198623"
  },
  {
    "url": "assets/js/27.1204fa16.js",
    "revision": "1cc2938aada16d82f792429247870347"
  },
  {
    "url": "assets/js/28.3176e9fa.js",
    "revision": "378e5862d587791391888c3df7ebaba0"
  },
  {
    "url": "assets/js/29.97e8e5c6.js",
    "revision": "08888c48e8e95a6fe0584f353641bf96"
  },
  {
    "url": "assets/js/3.09a2ea57.js",
    "revision": "53f73570d21347ac0c9ab62433a48668"
  },
  {
    "url": "assets/js/30.f679bd3e.js",
    "revision": "15735b591a79accacb5c37326e49fc3d"
  },
  {
    "url": "assets/js/31.0faf4ab8.js",
    "revision": "3977bd20ba6a18d5bd17207a03268c77"
  },
  {
    "url": "assets/js/32.e0b3ab65.js",
    "revision": "5385648e34759a97733da8e3194aedab"
  },
  {
    "url": "assets/js/33.c3d26933.js",
    "revision": "68fb44432a8376c625da4a54a648a9c4"
  },
  {
    "url": "assets/js/34.523f7813.js",
    "revision": "fa1bcbdbf6f749e15a0016451dada1b7"
  },
  {
    "url": "assets/js/35.727719f1.js",
    "revision": "9ebca40cb0d5ecafda5974170450ea2b"
  },
  {
    "url": "assets/js/36.45ad2bbf.js",
    "revision": "0d560618950a87e7ebbe81767abcf8e6"
  },
  {
    "url": "assets/js/37.fb4dd49d.js",
    "revision": "5120d3adbda3e77f32b6da7a68ee8031"
  },
  {
    "url": "assets/js/38.5fb7e9a8.js",
    "revision": "248522ac03d49c385bd38e4c71fd0bf6"
  },
  {
    "url": "assets/js/39.fe8f2864.js",
    "revision": "2b9b812fadadcc067ee9389177b12da9"
  },
  {
    "url": "assets/js/4.6b70b17f.js",
    "revision": "c3fb57ed2258b98db558adb9c63b22fe"
  },
  {
    "url": "assets/js/40.3042167c.js",
    "revision": "99d094600b1bb12f4abcf6ae4be5fe01"
  },
  {
    "url": "assets/js/41.298d226a.js",
    "revision": "205dd68bc768b68fb205987af7f928e8"
  },
  {
    "url": "assets/js/42.6d0b4a08.js",
    "revision": "5b62640ec65e29e2ac6080b65c46e290"
  },
  {
    "url": "assets/js/43.31274f2c.js",
    "revision": "be05ce7b937e1836690e000002aee48a"
  },
  {
    "url": "assets/js/44.6fdbdb32.js",
    "revision": "ee10d0c903db816f75015374e70c2215"
  },
  {
    "url": "assets/js/45.ba0f5114.js",
    "revision": "1e6b40edcda44e76d96f209ff51007fb"
  },
  {
    "url": "assets/js/46.fdd0caf0.js",
    "revision": "7894586b65684fd0b4b6b5b6799a223a"
  },
  {
    "url": "assets/js/47.1c6bed88.js",
    "revision": "0a5beca9e2681b689385bd02b8b9a963"
  },
  {
    "url": "assets/js/48.219d0105.js",
    "revision": "1c669c2a4c1d1e70489b23501fe3a93a"
  },
  {
    "url": "assets/js/49.e7ef2303.js",
    "revision": "6b980796f9071fe7990be7966fef4b63"
  },
  {
    "url": "assets/js/5.82c4e66e.js",
    "revision": "427b78d84d2e874ac01f30db724b4519"
  },
  {
    "url": "assets/js/50.a5e68286.js",
    "revision": "d716d0841a53602fd9dbb1f692c87da6"
  },
  {
    "url": "assets/js/51.028a2e18.js",
    "revision": "ade9b4daa19b6e3615e44e21d01817cc"
  },
  {
    "url": "assets/js/52.3d2bdfc9.js",
    "revision": "d31e76b91edde7c3cdfdddf74f68c8d6"
  },
  {
    "url": "assets/js/53.5ab6f969.js",
    "revision": "0eacc1f75d5f48744a6dac3291f3d496"
  },
  {
    "url": "assets/js/54.8243f647.js",
    "revision": "9b6b324b1e6d466da310528441f4e225"
  },
  {
    "url": "assets/js/55.12734767.js",
    "revision": "baea22197379f7426141bd856b6f427d"
  },
  {
    "url": "assets/js/56.e359b0b9.js",
    "revision": "7ed8dd1668908f1ca90fa7ba8beb3b31"
  },
  {
    "url": "assets/js/57.bc1a8016.js",
    "revision": "44ab77fd0eff8ec9f4bbf9b4b67f0976"
  },
  {
    "url": "assets/js/58.4a6485fd.js",
    "revision": "c97d447f457518e29f102eabf44e2625"
  },
  {
    "url": "assets/js/59.c941cd8f.js",
    "revision": "ca3e3b8f33f3744fed3e27226686454e"
  },
  {
    "url": "assets/js/6.ffa76ffe.js",
    "revision": "3852506934cf7ad2d124c3763059d733"
  },
  {
    "url": "assets/js/60.03086f40.js",
    "revision": "92f05a62cc468709204c9083928aaea7"
  },
  {
    "url": "assets/js/61.5ab11249.js",
    "revision": "f3557eacd0ba462b745bc650f142dd22"
  },
  {
    "url": "assets/js/62.35f56627.js",
    "revision": "8ca536394b78d9588c7bc04ab4afeb0b"
  },
  {
    "url": "assets/js/63.60d6aff6.js",
    "revision": "e34a27df8125b391b1d49c64e91c8a80"
  },
  {
    "url": "assets/js/64.2a74aeaa.js",
    "revision": "ed5ec7457b1aea0d8775ea9fc2e761c7"
  },
  {
    "url": "assets/js/65.6cb5620c.js",
    "revision": "008b3680309eb122d76196ba0e6c4be7"
  },
  {
    "url": "assets/js/66.57fb80b1.js",
    "revision": "84f7fbafcaa4b9728c75e7c75c0ffa93"
  },
  {
    "url": "assets/js/67.884d9295.js",
    "revision": "94d30324a47c37c4a088eeae83491793"
  },
  {
    "url": "assets/js/68.77873043.js",
    "revision": "c7cb12e92f7cc3f78beead785a358c65"
  },
  {
    "url": "assets/js/69.1e1bd923.js",
    "revision": "5ca008de36c5daa3aedb20cde94d460b"
  },
  {
    "url": "assets/js/7.aafd7346.js",
    "revision": "b5a0f28d43a75f1077512d33dfff4ed4"
  },
  {
    "url": "assets/js/70.c18d4d39.js",
    "revision": "35ba871255b0b54541387e4da24031dd"
  },
  {
    "url": "assets/js/8.2ec037be.js",
    "revision": "d0404ea95c8bcb577e576efa893a8598"
  },
  {
    "url": "assets/js/9.c41418ed.js",
    "revision": "ee6d81b642d531856540f5b67e7439ee"
  },
  {
    "url": "assets/js/app.751ec679.js",
    "revision": "dfd0a8c6122b3b6c73e33cd8614ea24e"
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
    "revision": "38815aabecffbff38e64e1eb82c4462c"
  },
  {
    "url": "lecture/index.html",
    "revision": "2751286d2b1b00ddcbf71a15aacb2c0b"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "58745f8bc6e1845416a9073b80ba0d38"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "eddf0ac097b5e692c3b233ab9c11c5ba"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "0d2cf6065ab6adc4cb7c951b6b5c0b39"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "87240e6e1578f4876c6925abf8577809"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "d04cea9886fe65f7d6aef4bcb6f049ae"
  },
  {
    "url": "lecture/r-pay-a11y.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "685288766d588204a828417fb23f47e2"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "a6d693db35f6d19a08e36209eeaecef1"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "394c5a6590e732d18f6e9001134706fc"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "2055ec9cbf52102f44826f70c4929ddb"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "ce03926001cc7f8521886692585b9459"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "16b218355160af0415fa8bd69d80d23f"
  },
  {
    "url": "payment-information.html",
    "revision": "ce03926001cc7f8521886692585b9459"
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
