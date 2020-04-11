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
    "revision": "0cdab991d1a810c73d2ee4dcaf54e35a"
  },
  {
    "url": "account/signin.html",
    "revision": "f7f4d9bff66b7d5d36586c378bf9c5e0"
  },
  {
    "url": "account/user.html",
    "revision": "1284a57301c48f9dd79577ece31b6868"
  },
  {
    "url": "admin/index.html",
    "revision": "a42128e9eade9e6d01be3727539d9c4a"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.2af48252.css",
    "revision": "cb779e20aab461435a93c26c3d6d8406"
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
    "url": "assets/js/10.566bb288.js",
    "revision": "0241088917951a9bd0036c600b8bd7a1"
  },
  {
    "url": "assets/js/11.226cec32.js",
    "revision": "ec98b109cff54bba1686fcdee9703d74"
  },
  {
    "url": "assets/js/12.13acd3ca.js",
    "revision": "ac216eb1e1c401a504b6a09d759ba22a"
  },
  {
    "url": "assets/js/13.129f9f7d.js",
    "revision": "60348316707598a8420833c7448ac42f"
  },
  {
    "url": "assets/js/14.4da098e6.js",
    "revision": "c72f26157cc1f733b136db8d04d7f01b"
  },
  {
    "url": "assets/js/15.202a5c28.js",
    "revision": "2609de3ee61a65f6fd9c648d74ab3ec2"
  },
  {
    "url": "assets/js/16.ff31def5.js",
    "revision": "c6393c7e0a00197004b60070c6312f4f"
  },
  {
    "url": "assets/js/17.63a0ba27.js",
    "revision": "3d61a129225cccea05c5e0bc1efeaaf2"
  },
  {
    "url": "assets/js/18.a1d1bf4c.js",
    "revision": "b1c9d88c49d9adab3e502a7ff93bea38"
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
    "url": "assets/js/20.323d15a1.js",
    "revision": "326e10239d9b8fa09a6c091e337009e9"
  },
  {
    "url": "assets/js/21.2374b962.js",
    "revision": "79cfdba4246a26ea5c1c575e0a38e2a6"
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
    "url": "assets/js/30.402709d6.js",
    "revision": "52d73b21b98a0d4678c6c12002bbc85f"
  },
  {
    "url": "assets/js/31.1b40bfda.js",
    "revision": "ed0e22451e356a5bbe052ce8fe385832"
  },
  {
    "url": "assets/js/32.74b20c46.js",
    "revision": "5bf4c064feb500d5f549be02aacd16b1"
  },
  {
    "url": "assets/js/33.4170176e.js",
    "revision": "bdffba18ffc5010b8fe3ff04ea2fdce8"
  },
  {
    "url": "assets/js/34.b008f355.js",
    "revision": "5b61e3542c3e94b48f28ed293989af6b"
  },
  {
    "url": "assets/js/35.ec7f32fb.js",
    "revision": "076d73451d674c862d39c2f80ab10320"
  },
  {
    "url": "assets/js/36.4ecfd819.js",
    "revision": "10671e7f9ec1e31dc043c91cd90c133d"
  },
  {
    "url": "assets/js/37.78926000.js",
    "revision": "e3cbd2b4d75a674730884155f3e79d94"
  },
  {
    "url": "assets/js/38.9c5aaa77.js",
    "revision": "63571e052edb9bd4cacbaaecde6b480e"
  },
  {
    "url": "assets/js/39.396d40e9.js",
    "revision": "fd9e9be8420722bcd76f4fdead9b6774"
  },
  {
    "url": "assets/js/4.ebe6fa8d.js",
    "revision": "2df54fd7e436a3475025e20bed87c59e"
  },
  {
    "url": "assets/js/40.8fe02bec.js",
    "revision": "439c0455298434ceb7bab82844652aa1"
  },
  {
    "url": "assets/js/41.24050ec2.js",
    "revision": "2558862c195f4705a800ae985bc40de3"
  },
  {
    "url": "assets/js/42.0124b163.js",
    "revision": "181e82e5d7d648d24303260ba0618818"
  },
  {
    "url": "assets/js/43.f1fad40b.js",
    "revision": "90e5531d9d89e1b87c16139b329c846d"
  },
  {
    "url": "assets/js/44.67736143.js",
    "revision": "2eef5bed73c527cd80065823c82b4c07"
  },
  {
    "url": "assets/js/45.8d268b74.js",
    "revision": "adebd013fc226de32eee33a9fff968e2"
  },
  {
    "url": "assets/js/46.f5cefbd8.js",
    "revision": "bad900c75ba5ac1c3ed782af611f6bad"
  },
  {
    "url": "assets/js/47.77ab7306.js",
    "revision": "6432ac6771e5c86bb45e37ab0e23528a"
  },
  {
    "url": "assets/js/48.1b76be82.js",
    "revision": "facf7f799d72cf791aa9eeb4d912d3a1"
  },
  {
    "url": "assets/js/49.7f705fde.js",
    "revision": "8b4da0ddf7303199920d1af524cb0864"
  },
  {
    "url": "assets/js/5.143f686f.js",
    "revision": "cc8e1b50831e20e96b8b71d354f2c660"
  },
  {
    "url": "assets/js/50.401de1b4.js",
    "revision": "8979a2ab4c1c5028d7038ba74582027f"
  },
  {
    "url": "assets/js/51.bdd1f43b.js",
    "revision": "0205e407fbf758284ade9d4164b9909f"
  },
  {
    "url": "assets/js/52.dedbc4bc.js",
    "revision": "cd4784538079cbb36791386235577c72"
  },
  {
    "url": "assets/js/53.589d1f54.js",
    "revision": "6732fed5da7d1fc1dcae8003b8a0c2e4"
  },
  {
    "url": "assets/js/54.571b36dd.js",
    "revision": "3cd8170355f76ccfe02e68be4ed2a541"
  },
  {
    "url": "assets/js/55.7a2caf65.js",
    "revision": "061158119619fac2194a74819a560fa1"
  },
  {
    "url": "assets/js/56.c89f312b.js",
    "revision": "adbe882eda463fa3a9e8f9afc3c287d2"
  },
  {
    "url": "assets/js/57.6d6995ae.js",
    "revision": "431a0fac4f5f67e848794f4e1e96c628"
  },
  {
    "url": "assets/js/58.916fd83a.js",
    "revision": "caec0ee571180aaa0ca293c76f2f8fb9"
  },
  {
    "url": "assets/js/59.64fd5859.js",
    "revision": "a8954627a760d6d6b9763a1bcbcb73b9"
  },
  {
    "url": "assets/js/6.c6033a36.js",
    "revision": "30803a5b8d13f1c9f0d86064e18b38a6"
  },
  {
    "url": "assets/js/60.3315fdc6.js",
    "revision": "9de970f9278232a0de804fc47165c928"
  },
  {
    "url": "assets/js/61.9f796f17.js",
    "revision": "157ab901d82f56cbe2c6595af00d87d4"
  },
  {
    "url": "assets/js/62.ac74b9d4.js",
    "revision": "f88f85cc528909c7c32d19d76a9ff555"
  },
  {
    "url": "assets/js/63.c34231d6.js",
    "revision": "8880532eff251f40074032f331c953bc"
  },
  {
    "url": "assets/js/64.c6df23c9.js",
    "revision": "c3072a9f4729dc7b93ff856fe183d827"
  },
  {
    "url": "assets/js/65.757d6e2c.js",
    "revision": "dc5b607e3e569d370102a077440d7b8e"
  },
  {
    "url": "assets/js/66.f3f1e640.js",
    "revision": "f2e88747eb2f9f61e0f5dcc6738940af"
  },
  {
    "url": "assets/js/67.051e1700.js",
    "revision": "ed72e55eb1eac877e180d479d7b54132"
  },
  {
    "url": "assets/js/68.1ea750df.js",
    "revision": "e89a668bdbb2ff5c46a155c526115057"
  },
  {
    "url": "assets/js/69.eb62b74d.js",
    "revision": "4c41f7cc3ca2f40bf6943276552c3c66"
  },
  {
    "url": "assets/js/7.86204438.js",
    "revision": "d12df8c6a8306041c7607a49ad7a0d50"
  },
  {
    "url": "assets/js/70.952f78dc.js",
    "revision": "3217c81d7fa4897cb4d35f9b9e5f8a40"
  },
  {
    "url": "assets/js/71.ebfb2216.js",
    "revision": "1ac883d7f83b7bcacba33400bf08b0d6"
  },
  {
    "url": "assets/js/72.7cf03539.js",
    "revision": "14fc393c37c176208ca84d5750a05ce0"
  },
  {
    "url": "assets/js/73.b2034156.js",
    "revision": "e84eb4c3e433896247fa0b72bf3aa011"
  },
  {
    "url": "assets/js/74.06952597.js",
    "revision": "f6ca3a6b1bb809db2f52f0c4424557db"
  },
  {
    "url": "assets/js/75.7d94a2a7.js",
    "revision": "b0dc7e526fdeaba36f2e10653dafbb0b"
  },
  {
    "url": "assets/js/76.eaa4c0dd.js",
    "revision": "b316de276ed647fd611b40d9a636f439"
  },
  {
    "url": "assets/js/77.cc768512.js",
    "revision": "4a8524303b704a42bfad67a86c996d41"
  },
  {
    "url": "assets/js/78.ca9cee2d.js",
    "revision": "b17aa30462977043ca3027f64feb071d"
  },
  {
    "url": "assets/js/79.be14d037.js",
    "revision": "269ce0e8f3fb26a36019c3160ffba7b6"
  },
  {
    "url": "assets/js/8.2296f4cb.js",
    "revision": "484dd18b1ce4f9805bee81002e6d1c58"
  },
  {
    "url": "assets/js/80.854ccee2.js",
    "revision": "17f9bc8c6d22ff0df4eb8f9157e295fa"
  },
  {
    "url": "assets/js/81.60a289be.js",
    "revision": "f6a23e10be85acd7af0401e5d11cac2a"
  },
  {
    "url": "assets/js/82.d89b3b93.js",
    "revision": "ebfe0f967a757d582d36ebe624b10b5a"
  },
  {
    "url": "assets/js/83.897968f3.js",
    "revision": "55729ce0f56bc18e3a0efe26e6a2c927"
  },
  {
    "url": "assets/js/84.098bc68e.js",
    "revision": "e92cb2c8cc1094f5b85e29c42c74ed36"
  },
  {
    "url": "assets/js/85.6fc4ad99.js",
    "revision": "fab5ef199346eaa9064bd0d1e3434082"
  },
  {
    "url": "assets/js/86.f010dfcc.js",
    "revision": "2a168bb981b7521658a66e09335eb891"
  },
  {
    "url": "assets/js/87.02432339.js",
    "revision": "36190a5a353e2a383e5f4d304b21afcb"
  },
  {
    "url": "assets/js/88.fd6e166b.js",
    "revision": "96f61318600bc6ee3d0f3c6344a0ba0d"
  },
  {
    "url": "assets/js/89.d3833215.js",
    "revision": "58d2c2170b051326e308987016325ecd"
  },
  {
    "url": "assets/js/9.a7c5229d.js",
    "revision": "e50b9efe69875f2d9c8466695d5c727d"
  },
  {
    "url": "assets/js/90.4595972f.js",
    "revision": "98394cea2c5f2efa0667be7af9ee88f8"
  },
  {
    "url": "assets/js/91.32474493.js",
    "revision": "3c7eab8a432ec1672a1e262c0e21ef27"
  },
  {
    "url": "assets/js/92.f0cffb09.js",
    "revision": "70b48edfd7f5b8a6a26e70f1015a9457"
  },
  {
    "url": "assets/js/93.d2d13d47.js",
    "revision": "12dc714f2a79cc0a21c3225ccc48d4a9"
  },
  {
    "url": "assets/js/app.3249a353.js",
    "revision": "a2dd54bce20bcc58bc963ea05f6f4b48"
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
    "revision": "ca236dc22c7cffbcd2851a2ae25fd4a3"
  },
  {
    "url": "lecture/index.html",
    "revision": "63392555609cf1461b5a1c14feae2cbb"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/mini-project-pay-config-directories.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/mini-project-pay-config-head.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/mini-project-pay-getting-started.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "521c0faec89dc0e69cfe7ecb67bf9478"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "9ddaf094b35d68c253f220e3c4b50a34"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "09f82000baa29e26894d9ea722cfb9a6"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "87c74c0896198832f23cf637d5a1c05e"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "acc165ab2f41bce970db1db646075d76"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "94d742c147f761bb98f49a5077ad77de"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "f4722dfa857d0dfd2d686a9686133ce8"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "cde357cd97731c0439971bd2395f8d7b"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "0bde87aad203d8826a37834cfa046841"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "cc82a95e1245575d1fa0deaa604bdd89"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "569f37755a622d31cba2e01f9cd51b81"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "ad5d6338de3f2244e1cafc8e19283179"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "d3bd5cbb84484b53f998330cce8f4deb"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/su-pay-getting-started.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/su-pay-introduction.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
  },
  {
    "url": "payment-information.html",
    "revision": "b0aaba373c5cf7ad21640b18dc222e02"
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
