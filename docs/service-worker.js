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
    "revision": "1a0acf9d8e533acc7aed887d4bc0ab48"
  },
  {
    "url": "account/signin.html",
    "revision": "fb044b92b854a6182b3aa9ffdcc98f3e"
  },
  {
    "url": "account/user.html",
    "revision": "c23482db6c41e5bd0067a5707f6c1f75"
  },
  {
    "url": "admin/index.html",
    "revision": "98194cabcc36092e1033aabf9e0934bf"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.72c46759.css",
    "revision": "326f55ee656ef7c41b3eeed47e59bc56"
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
    "url": "assets/js/10.873a894f.js",
    "revision": "b403cefc0f8e66a44de1cef482b2206f"
  },
  {
    "url": "assets/js/100.74de18be.js",
    "revision": "098087fe84e6e4074524a5264c38dbe3"
  },
  {
    "url": "assets/js/101.0b1500ad.js",
    "revision": "a616f53e78d20f75c8fa7759dff38b85"
  },
  {
    "url": "assets/js/102.e8bf5bb2.js",
    "revision": "d0ebab4683fe4a87d42e9658d0c77b6d"
  },
  {
    "url": "assets/js/103.06efb960.js",
    "revision": "1ff4a27c3b9ac84f70a96ff7d9dd827a"
  },
  {
    "url": "assets/js/104.f920d919.js",
    "revision": "da3f72cd2788a00c08e5ac88cee03366"
  },
  {
    "url": "assets/js/105.eb6cd590.js",
    "revision": "3bf75eead861107a1bf056cf9e70ea24"
  },
  {
    "url": "assets/js/106.b08c8bfe.js",
    "revision": "3ac2817513263ccbe0b735060489f834"
  },
  {
    "url": "assets/js/107.865ec3d0.js",
    "revision": "34eeeb46b8827672a134e333c384be77"
  },
  {
    "url": "assets/js/108.dfd810a2.js",
    "revision": "58c206c446ed93c08bc4c10272b7055c"
  },
  {
    "url": "assets/js/109.8912888f.js",
    "revision": "f6ca658bc87138b02fbe9f267c1cc53a"
  },
  {
    "url": "assets/js/11.226cec32.js",
    "revision": "ec98b109cff54bba1686fcdee9703d74"
  },
  {
    "url": "assets/js/110.859d61b6.js",
    "revision": "6e7532626b8dbabbc163cd0ebfc479cb"
  },
  {
    "url": "assets/js/12.ff44830b.js",
    "revision": "dc9ca22420d2849e3c1a6afc5b6b000e"
  },
  {
    "url": "assets/js/13.db802385.js",
    "revision": "27060bcea3793733cb8a0b0a772ed19c"
  },
  {
    "url": "assets/js/14.4da098e6.js",
    "revision": "c72f26157cc1f733b136db8d04d7f01b"
  },
  {
    "url": "assets/js/15.1d80cfdd.js",
    "revision": "871b1a01a0836f2f808cbda4ccd30abf"
  },
  {
    "url": "assets/js/16.bbdae015.js",
    "revision": "d91b76355bfe6e04c065eec3e5016caa"
  },
  {
    "url": "assets/js/17.0b325f51.js",
    "revision": "cdaf06a458a5f5551ccda61b6c570c7a"
  },
  {
    "url": "assets/js/18.ba60daa5.js",
    "revision": "26501bfee31cdebde64093ed2b3d7189"
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
    "url": "assets/js/20.6bf5f18d.js",
    "revision": "ec8b5f670bdeb2be4319f34a88f3ad3e"
  },
  {
    "url": "assets/js/21.e589190c.js",
    "revision": "e8a89375258eadcc7fc4280cf6ac8c55"
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
    "url": "assets/js/30.be0ddcee.js",
    "revision": "91ea816f64b678ddca19ee55416e5c94"
  },
  {
    "url": "assets/js/31.0e780e72.js",
    "revision": "1692f35b934fb9bebcdef0e821885651"
  },
  {
    "url": "assets/js/32.f2d29b9b.js",
    "revision": "bff832ccacb2f31a7a58eedb2610e6c6"
  },
  {
    "url": "assets/js/33.4fb698e8.js",
    "revision": "2bd8066dbacf1f9426f018d4b5706be7"
  },
  {
    "url": "assets/js/34.9ea09c34.js",
    "revision": "e4457c3a3bd620d0a04d0b5b393d3393"
  },
  {
    "url": "assets/js/35.874debed.js",
    "revision": "6fb1a379aa38d043edcc109d3b65ffe0"
  },
  {
    "url": "assets/js/36.268826bf.js",
    "revision": "c7397e7f9df31fde977b04195d092061"
  },
  {
    "url": "assets/js/37.d6eec946.js",
    "revision": "fdfeb876bd91bbdf9acf00c888a5e123"
  },
  {
    "url": "assets/js/38.1c906f6e.js",
    "revision": "75acaeabf8356bc5ac375f218b92ff13"
  },
  {
    "url": "assets/js/39.a4d49f3c.js",
    "revision": "2d5dc834302b880d2a26832b64380bb4"
  },
  {
    "url": "assets/js/4.ebe6fa8d.js",
    "revision": "2df54fd7e436a3475025e20bed87c59e"
  },
  {
    "url": "assets/js/40.6dcd138b.js",
    "revision": "65756a6dbfca7fb4233301663434000d"
  },
  {
    "url": "assets/js/41.df0db936.js",
    "revision": "19b49cbf0aea4012d686e46d06ab3fd4"
  },
  {
    "url": "assets/js/42.233ceb8a.js",
    "revision": "5cd9a72e66304d8e6396e5055839bc8d"
  },
  {
    "url": "assets/js/43.2abc57e2.js",
    "revision": "fa19fd929d2dcde1b7ed517211634797"
  },
  {
    "url": "assets/js/44.20fc662d.js",
    "revision": "31ff5608ea350df8a900e97f47602bd1"
  },
  {
    "url": "assets/js/45.a9ef7cf3.js",
    "revision": "c2b17f5cbd46da289386345c21925351"
  },
  {
    "url": "assets/js/46.5059750f.js",
    "revision": "f818dc591b246a447c81bdf880cca867"
  },
  {
    "url": "assets/js/47.78b2d69e.js",
    "revision": "d43dcd3ac971c29aea13ccccb1cc0969"
  },
  {
    "url": "assets/js/48.6438784d.js",
    "revision": "883ababf6488842b09eb59efbe043e59"
  },
  {
    "url": "assets/js/49.3818aebb.js",
    "revision": "c07b18e61bfad42dc86db73c07efe12b"
  },
  {
    "url": "assets/js/5.0d80fa79.js",
    "revision": "66142648709923073371c0cf8baeda1f"
  },
  {
    "url": "assets/js/50.01062864.js",
    "revision": "84e279262fc904662f6904a2316bf1f1"
  },
  {
    "url": "assets/js/51.8bbefaae.js",
    "revision": "8c5652bb2899c747a3d2a72a789fcc95"
  },
  {
    "url": "assets/js/52.0cdca870.js",
    "revision": "f4ff9a50ca8625924095ee04b23332a7"
  },
  {
    "url": "assets/js/53.ea908802.js",
    "revision": "b54058c5d344fac761ec419b84f93160"
  },
  {
    "url": "assets/js/54.f1a1c2d1.js",
    "revision": "5913dc255ddeca88061a409673711afc"
  },
  {
    "url": "assets/js/55.eb12f045.js",
    "revision": "70fdbd84299dce4b988c788536233e52"
  },
  {
    "url": "assets/js/56.4e44ced6.js",
    "revision": "7b44bed8d4df82e7a563dce7cd48b789"
  },
  {
    "url": "assets/js/57.6310803c.js",
    "revision": "22c223b6fea756b2b3b34b0302442615"
  },
  {
    "url": "assets/js/58.cb065544.js",
    "revision": "b830cf1c0c2c5687b19f48adcbb97061"
  },
  {
    "url": "assets/js/59.57bf8c4c.js",
    "revision": "e9b20f566ea8b97c3451609743c7a2b8"
  },
  {
    "url": "assets/js/6.c6033a36.js",
    "revision": "30803a5b8d13f1c9f0d86064e18b38a6"
  },
  {
    "url": "assets/js/60.2db5843c.js",
    "revision": "493a88f71ca924cb50f05388c16f7866"
  },
  {
    "url": "assets/js/61.d707eb24.js",
    "revision": "8ff1bb01ff2efb36e0ff0b8af8161013"
  },
  {
    "url": "assets/js/62.a0c7c2d7.js",
    "revision": "02ceab83aeee459c0808617d73e3675d"
  },
  {
    "url": "assets/js/63.a84d462e.js",
    "revision": "0e7686823936ec13a812d6beaca06cde"
  },
  {
    "url": "assets/js/64.350ec5c1.js",
    "revision": "185ad26c1815aef4afed5104a2c9c537"
  },
  {
    "url": "assets/js/65.1fbb4979.js",
    "revision": "ad91feb4d82f81262e44db7bea345d08"
  },
  {
    "url": "assets/js/66.762763a1.js",
    "revision": "fdab5c738d9b2340a89e28d43b805e1e"
  },
  {
    "url": "assets/js/67.5012cecf.js",
    "revision": "620bae57f0400209a822f447dd305375"
  },
  {
    "url": "assets/js/68.5d71465a.js",
    "revision": "a72c957b42146dd6314705373f6f4a7a"
  },
  {
    "url": "assets/js/69.594dbd87.js",
    "revision": "7cfd6334c9ebb98fbcc49ee1dc7c8907"
  },
  {
    "url": "assets/js/7.409fe50b.js",
    "revision": "17fcacb2a20cbef063ae903fa584bdb2"
  },
  {
    "url": "assets/js/70.35e03edc.js",
    "revision": "e176aab5c3a434c82197919a003efe42"
  },
  {
    "url": "assets/js/71.1c6897c4.js",
    "revision": "a722df97235b80d0298e2f9f4419a69b"
  },
  {
    "url": "assets/js/72.5f538d9a.js",
    "revision": "a7f813592a0b07b70d3841b8f6a208e1"
  },
  {
    "url": "assets/js/73.7c3cc6c7.js",
    "revision": "fa1ff3e65aa75535c43552a82d2871b8"
  },
  {
    "url": "assets/js/74.e67d561c.js",
    "revision": "ac8619bce96ee33ba7a0851b63ad2a5a"
  },
  {
    "url": "assets/js/75.24c4af6f.js",
    "revision": "8e1018605cea17e9721dd49148f1e911"
  },
  {
    "url": "assets/js/76.9fde6781.js",
    "revision": "a85001f7f7a0e971b0242ceac8265d86"
  },
  {
    "url": "assets/js/77.218f56be.js",
    "revision": "ac5ff03fdd7cd4c086711b9717a42d55"
  },
  {
    "url": "assets/js/78.8ceaad22.js",
    "revision": "4530883750de5d213ff4d7b7d328db2c"
  },
  {
    "url": "assets/js/79.9686a88f.js",
    "revision": "94eb1af306d033c36682e506106c191e"
  },
  {
    "url": "assets/js/8.7a694cdb.js",
    "revision": "c926065006b1aa81e527862a51b3e9ac"
  },
  {
    "url": "assets/js/80.9384cbf9.js",
    "revision": "2938283dda5645b6415574743ab07486"
  },
  {
    "url": "assets/js/81.8f30a81b.js",
    "revision": "c7471d265b5c06978d35f228a5660396"
  },
  {
    "url": "assets/js/82.bf41587c.js",
    "revision": "2bb7fbbd8ad03a50f03ec57f666acb87"
  },
  {
    "url": "assets/js/83.18b54158.js",
    "revision": "a50ceb1901c4f1e543116873965c2686"
  },
  {
    "url": "assets/js/84.11cf22a2.js",
    "revision": "509932006cda2d62a75907c0bc5ba747"
  },
  {
    "url": "assets/js/85.56122f56.js",
    "revision": "54426e51cad9ba8cff3a73a91baa4a02"
  },
  {
    "url": "assets/js/86.0050827d.js",
    "revision": "d7bfb3b941b6671d59ab8cf50a539345"
  },
  {
    "url": "assets/js/87.c9483e0e.js",
    "revision": "58fb8f81d74b215b4c263ff930de76fa"
  },
  {
    "url": "assets/js/88.1c8f42b2.js",
    "revision": "9626dbb2628a16ae20b83adfca48fdc4"
  },
  {
    "url": "assets/js/89.8aa38776.js",
    "revision": "5f100ac342937d0ff8152569c3a5f4d3"
  },
  {
    "url": "assets/js/9.f8aa7d23.js",
    "revision": "43fa01905e65ec4a73cc2b507a16296f"
  },
  {
    "url": "assets/js/90.ce658a27.js",
    "revision": "1da42f6d1f3dc53e909ac6e68640049d"
  },
  {
    "url": "assets/js/91.fb08ad06.js",
    "revision": "292eab12dbcc7b85c6f30032c4bce18f"
  },
  {
    "url": "assets/js/92.25c978f2.js",
    "revision": "5ea5a15817c6d828dcd804e4efac11d2"
  },
  {
    "url": "assets/js/93.4734bb21.js",
    "revision": "517377b7384a79ab81ff41bb594fa192"
  },
  {
    "url": "assets/js/94.d1268bfe.js",
    "revision": "bce02a1782ab4574c2881c549f8bcd92"
  },
  {
    "url": "assets/js/95.a602d404.js",
    "revision": "f4e294868507499f3699f93cad4d5e4e"
  },
  {
    "url": "assets/js/96.74dd6522.js",
    "revision": "6609559b752a5e6d129024d86d2bef6a"
  },
  {
    "url": "assets/js/97.82f648d7.js",
    "revision": "d0aa0d582dd751ba9f03854120304ba5"
  },
  {
    "url": "assets/js/98.944622db.js",
    "revision": "024a2f3fbe2692837eb32b5bd6bef789"
  },
  {
    "url": "assets/js/99.737127cb.js",
    "revision": "ee182685b8aab05453bcfc4f56be661d"
  },
  {
    "url": "assets/js/app.40d2329d.js",
    "revision": "83f710bafd443eaf6cb8cd36cab66620"
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
    "url": "images/expectedts-styled-plugin-error.png",
    "revision": "ea3ba5a50fd39bf7287a7acebdb93bec"
  },
  {
    "url": "images/firebase-app-nothing.png",
    "revision": "8bba76f507af70331b31b8e7a98cbe20"
  },
  {
    "url": "images/firebase-auth-register.jpg",
    "revision": "38c6043a68c80d7ed7e8b248cdfb51b6"
  },
  {
    "url": "images/firebase-auth-signin-method.png",
    "revision": "eb0bb18d509ea2abfce71e271dd08aa6"
  },
  {
    "url": "images/firebase-db-rules.png",
    "revision": "88ab0953fb26fd1fa94b2646c1cdc715"
  },
  {
    "url": "images/firebase-sdk-snippet.jpg",
    "revision": "ea8cf2ba2f3d2209db602b7c89884926"
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
    "revision": "69a165e2191a51fba5a8bfc3c28f2baa"
  },
  {
    "url": "lecture/fb-r-auth.html",
    "revision": "2beb9a5715a705d0f11acd6d92e5ff61"
  },
  {
    "url": "lecture/fb-r-introduction.html",
    "revision": "923b4d99e0552ec70a33739fc21a5b6e"
  },
  {
    "url": "lecture/index.html",
    "revision": "5484f2893d191e87426aa1e8f854db2f"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/mini-project-pay-config-directories.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/mini-project-pay-config-head.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/mini-project-pay-getting-started.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/mini-project2-context-beverageList.html",
    "revision": "a212f7e74e7a55739fd3c44f8dc5ff97"
  },
  {
    "url": "lecture/mini-project2-custom-hook.html",
    "revision": "8ee7b0751221c1eaa3211408e675571a"
  },
  {
    "url": "lecture/mini-project2-getting-started.html",
    "revision": "0ee76de6ee1cb868d31377ef4e70bd31"
  },
  {
    "url": "lecture/mini-project2-hooks-app.html",
    "revision": "2286c5b7a53668ec09a322c6d0eecf78"
  },
  {
    "url": "lecture/mini-project2-hooks-beverageItem.html",
    "revision": "f29b5993f471b5d34bd464d053795df3"
  },
  {
    "url": "lecture/mini-project2-hooks-gototop.html",
    "revision": "7af190f20baf5187c83ec4368b68142d"
  },
  {
    "url": "lecture/mini-project2-styled-appHeader.html",
    "revision": "c293b079008372ccb92ae7aa044a7286"
  },
  {
    "url": "lecture/mini-project2-styled-appHomeLink.html",
    "revision": "2e1327ac6c141ef60e40ee7b44f6a247"
  },
  {
    "url": "lecture/mini-project2-styled-appNavigation.html",
    "revision": "b7616654b98bf22bb6a8ae689399bfd3"
  },
  {
    "url": "lecture/mini-project2-styled-responsive.html",
    "revision": "4b12257d5f34da6b7a02cfb644e6ef8d"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "b60ba17751ad7e23c4fb7228d0f05fb7"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "5386500b06343f28e52fea5eee5b4aed"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "5758f7ce118fdca4e55d02d38c854c99"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "74f5d222d73371ccb8fe112c25ffda44"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "f0f8ee0f85665d85efa98401b104905f"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "65fcd0f57be35962346440a0d07d8dc0"
  },
  {
    "url": "lecture/r-fb-hooks-auth.html",
    "revision": "cda41bd19e4b5afa480fe11e2861b8a4"
  },
  {
    "url": "lecture/r-fb-hooks-getting-started.html",
    "revision": "038da4525fd216705e826673eb8646ff"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "2d97217cd2544488fb9af4671b13217c"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "489996fa3368c9f9b07acb1d7e2195a8"
  },
  {
    "url": "lecture/rd-like-redux-using-context-hooks.html",
    "revision": "927dda11f8d554753ed3e3c2d898f615"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "c06ed53e27eb08fed8b995e24923c042"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "3ef8f8e1b47dc91d2c1c9bee34d3a2f8"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "c2767889dd7429d00f7bd50c28260c6d"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "02d50006aabcd7fafa058ba0ad4b3bf6"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "fff36599bdd37c36497e4b3eefcb6ffd"
  },
  {
    "url": "lecture/sp-hook-api.html",
    "revision": "7c2d6946945c1feb1235f0ca39936b6a"
  },
  {
    "url": "lecture/sp-introduction.html",
    "revision": "053e687881b24b0189bcdbfec8d4eadc"
  },
  {
    "url": "lecture/su-getting-started.html",
    "revision": "e830d5aefbeece91dbecbb06bd76d94b"
  },
  {
    "url": "lecture/su-introduction.html",
    "revision": "609da39bbc4d8ab273ba7ff592b4593b"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
  },
  {
    "url": "payment-information.html",
    "revision": "a8e8fd2fd6356b642886b92b6094b0e0"
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
