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
    "revision": "59d5d976450b9b7779f12f8553da350b"
  },
  {
    "url": "account/register.html",
    "revision": "4b71b404092f3c3cfeadc45bdf8a5900"
  },
  {
    "url": "account/signin.html",
    "revision": "0354de44426e786e64befae1ea4d7e9a"
  },
  {
    "url": "account/user.html",
    "revision": "5b67caa42be0dc2adafb9d9543a51a17"
  },
  {
    "url": "admin/index.html",
    "revision": "96116ff6ac0430efed78dad5fd46439a"
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
    "url": "assets/js/10.f8d3e959.js",
    "revision": "91d463fe49245cd6ce017286a4bb941f"
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
    "url": "assets/js/14.e1705865.js",
    "revision": "47d6c6f9f848e6f5dd14d24d638bc7e8"
  },
  {
    "url": "assets/js/15.f014ac19.js",
    "revision": "ce36d78f02c96ad0baf3481a9eba630e"
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
    "url": "assets/js/19.c8ccae18.js",
    "revision": "49ac56f833cf62fb5820d2142474e1d2"
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
    "url": "assets/js/24.c884c132.js",
    "revision": "184846a9be4ba1ac1415e240a38f16e8"
  },
  {
    "url": "assets/js/25.d27ab43f.js",
    "revision": "99126334e3fc24a0918add0e77dd0bd4"
  },
  {
    "url": "assets/js/26.aeab1e1b.js",
    "revision": "a47be8f626e5f3cb2a1964deb5dbbdbf"
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
    "url": "assets/js/30.e510af83.js",
    "revision": "b7e562730a39f2578f2e670feff0e739"
  },
  {
    "url": "assets/js/31.3fa0dda1.js",
    "revision": "0ee5d29c7d41bd0beff884ca0c5ea5ac"
  },
  {
    "url": "assets/js/32.cd38fcc8.js",
    "revision": "d8248ca2928679d6fdff62404098a470"
  },
  {
    "url": "assets/js/33.c3d26933.js",
    "revision": "68fb44432a8376c625da4a54a648a9c4"
  },
  {
    "url": "assets/js/34.dcafdf40.js",
    "revision": "63cd71cd6148cd45c313b46eeb2031fc"
  },
  {
    "url": "assets/js/35.90c0ea96.js",
    "revision": "be4d5fadf2a56162b373f00d4c4a9cce"
  },
  {
    "url": "assets/js/36.07affc85.js",
    "revision": "8852a9cc31656409a9e37278acec727d"
  },
  {
    "url": "assets/js/37.fb4dd49d.js",
    "revision": "5120d3adbda3e77f32b6da7a68ee8031"
  },
  {
    "url": "assets/js/38.c85a0529.js",
    "revision": "05b21378bbea217c0ef4affbf142a00f"
  },
  {
    "url": "assets/js/39.fe8f2864.js",
    "revision": "2b9b812fadadcc067ee9389177b12da9"
  },
  {
    "url": "assets/js/4.f21fa4df.js",
    "revision": "bb8ed2d76436c57f91e94814bf24a6ca"
  },
  {
    "url": "assets/js/40.60630f80.js",
    "revision": "77f10d6f004e034f9485d6f3bad879ae"
  },
  {
    "url": "assets/js/41.711f55ca.js",
    "revision": "5ea63106e0aca9aca8b131fd8557fb40"
  },
  {
    "url": "assets/js/42.6d0b4a08.js",
    "revision": "5b62640ec65e29e2ac6080b65c46e290"
  },
  {
    "url": "assets/js/43.9a68a3b1.js",
    "revision": "e993de07126d74438f082e58ec6bbd3e"
  },
  {
    "url": "assets/js/44.9363b0c2.js",
    "revision": "9c43528faa677e796c006261ac57c950"
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
    "url": "assets/js/49.c12f5980.js",
    "revision": "05eaebfc5c56f3266e27c41b93cceb33"
  },
  {
    "url": "assets/js/5.82c4e66e.js",
    "revision": "427b78d84d2e874ac01f30db724b4519"
  },
  {
    "url": "assets/js/50.642c7267.js",
    "revision": "841839cf71574e682af0d0299a705d95"
  },
  {
    "url": "assets/js/51.271e0327.js",
    "revision": "06e192f79e8231527d33f96042a9343d"
  },
  {
    "url": "assets/js/52.3019dd45.js",
    "revision": "52a2fc4e839abca2e864f512d2e91243"
  },
  {
    "url": "assets/js/53.5ab6f969.js",
    "revision": "0eacc1f75d5f48744a6dac3291f3d496"
  },
  {
    "url": "assets/js/54.21d998ed.js",
    "revision": "9c18525b191c74047fbb45bafb40409a"
  },
  {
    "url": "assets/js/55.57073fb6.js",
    "revision": "ea9accf91c1e133cc6205338c3942f4c"
  },
  {
    "url": "assets/js/56.22a497c5.js",
    "revision": "5b3765f97670b415716df873abe677ec"
  },
  {
    "url": "assets/js/57.c5e7d5f9.js",
    "revision": "066c9f5d8a247f3dc8837a53b12ccdf1"
  },
  {
    "url": "assets/js/58.0dde8293.js",
    "revision": "e7450c84fffa254622ba830c6af07924"
  },
  {
    "url": "assets/js/59.45710796.js",
    "revision": "f9b10e9a1d2eca7fa7d0f479283c385f"
  },
  {
    "url": "assets/js/6.ffa76ffe.js",
    "revision": "3852506934cf7ad2d124c3763059d733"
  },
  {
    "url": "assets/js/60.4606f5db.js",
    "revision": "278be07be320d37b1df8e1fa2b2203ad"
  },
  {
    "url": "assets/js/61.92e562a0.js",
    "revision": "eb36afc195e1c91094b9a3a9d8cea454"
  },
  {
    "url": "assets/js/62.35f56627.js",
    "revision": "8ca536394b78d9588c7bc04ab4afeb0b"
  },
  {
    "url": "assets/js/63.badf9143.js",
    "revision": "357921a81115ea6bac70b1cfaed83aca"
  },
  {
    "url": "assets/js/64.214f2357.js",
    "revision": "0d99c762e38e4f35ef2c9264ba447177"
  },
  {
    "url": "assets/js/65.6cb5620c.js",
    "revision": "008b3680309eb122d76196ba0e6c4be7"
  },
  {
    "url": "assets/js/66.8493c0c3.js",
    "revision": "c8c8f41f534e52700ea7a95edc97cab4"
  },
  {
    "url": "assets/js/67.8e367249.js",
    "revision": "76b52f75721c0446c1e7689850ba6f59"
  },
  {
    "url": "assets/js/68.0e76f08e.js",
    "revision": "de791b5365f08e1c5f3cdd1859770b90"
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
    "url": "assets/js/8.e1c463e2.js",
    "revision": "d971df900838d26988266f68b8838779"
  },
  {
    "url": "assets/js/9.f3bf2cd6.js",
    "revision": "f2a207e65bd25aa86a9591f4e870df89"
  },
  {
    "url": "assets/js/app.01b46374.js",
    "revision": "61fe64ad4ae5a7c9e4d5b869a1269ebc"
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
    "revision": "0027d7aec5c78d90363d504c8f571d64"
  },
  {
    "url": "lecture/index.html",
    "revision": "17fdefceb02c7791a475cb362aa218ee"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "37537cdfc5dcdefeed565f564b328cf9"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "b7095a2b1d7dbd5960408f47de95a97d"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "7b43829e7aaba97adfb93e59a011d429"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "f0e83df24d257811eb314a89f94c1c5e"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "91d5a0054504c07f9a4d2bb3556265ca"
  },
  {
    "url": "lecture/r-pay-a11y.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "b1c4a963f1318bb3b310ccd1b853deb0"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "aec055f38480bd6f5a3abfbebec0a973"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "7dee6de86cfc5c79e41339d93486ae7f"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "4d2cb33377e7ff4b1911d7a06ed0b558"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "21da128077fa320691a4b1b19e946721"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "76bc74e0a15bbb987e75ff11e5eee3c3"
  },
  {
    "url": "payment-information.html",
    "revision": "21da128077fa320691a4b1b19e946721"
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
