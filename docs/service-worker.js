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
    "revision": "fa1810ba903ed8330dc616d48eca4a94"
  },
  {
    "url": "account/signin.html",
    "revision": "2ed3a93439b6e79114c499c35a604615"
  },
  {
    "url": "account/user.html",
    "revision": "3140e3a2e11b66781e7394cd0b212b94"
  },
  {
    "url": "admin/index.html",
    "revision": "bd3f19fce5140539531dec6264b6e1fd"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.554afeac.css",
    "revision": "4e888fd1d1e127d1c715ea5bd5b5b4b8"
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
    "url": "assets/js/10.03dd3674.js",
    "revision": "5d9f0727e4524a5e6d1136c5801a8bfa"
  },
  {
    "url": "assets/js/100.147230da.js",
    "revision": "395ccefec166f72b852cf9d4bb33d042"
  },
  {
    "url": "assets/js/101.f1622ab4.js",
    "revision": "1f5aae4af459aaa8c3b8a2eb2df796d4"
  },
  {
    "url": "assets/js/102.01fc5f94.js",
    "revision": "dc8a7dbca2250c427a017b4c3346a205"
  },
  {
    "url": "assets/js/103.e9e16e0b.js",
    "revision": "1ff4ae72ac94e6d11dfb820e176456e5"
  },
  {
    "url": "assets/js/104.203fac7b.js",
    "revision": "6187adece8800d9cf64bab674a3a5f60"
  },
  {
    "url": "assets/js/105.adc73379.js",
    "revision": "07df6e1badb77030e226762ddef08392"
  },
  {
    "url": "assets/js/106.386d1e99.js",
    "revision": "5b0e24915a3dc6ad30bf2bef41c501a0"
  },
  {
    "url": "assets/js/107.c836ffdd.js",
    "revision": "4b82ad8008c4c201a81be2db499033e8"
  },
  {
    "url": "assets/js/108.05be44b3.js",
    "revision": "d9cd47a35f957deb5581aecdcb97501b"
  },
  {
    "url": "assets/js/109.f716c827.js",
    "revision": "23a590b7b8e67407fbf600612eaf4575"
  },
  {
    "url": "assets/js/11.8ffc1a08.js",
    "revision": "db423c64ff0bf8bbf563002903632b15"
  },
  {
    "url": "assets/js/12.87bd3f70.js",
    "revision": "a922fbb39c625154e0c679ac8e41fab1"
  },
  {
    "url": "assets/js/13.49e6cc3b.js",
    "revision": "ddedb524596157cc1d1ca425ff824dbf"
  },
  {
    "url": "assets/js/14.4da098e6.js",
    "revision": "c72f26157cc1f733b136db8d04d7f01b"
  },
  {
    "url": "assets/js/15.fa9b474a.js",
    "revision": "c255f868c506379751834b60c99bd996"
  },
  {
    "url": "assets/js/16.8eac812a.js",
    "revision": "4cf45ec4899af6f028dbd5884f72956c"
  },
  {
    "url": "assets/js/17.f4b24b07.js",
    "revision": "24f013cb8ce168f8ef6ed3f285a4a25d"
  },
  {
    "url": "assets/js/18.8950a82c.js",
    "revision": "ee0ce67eeacd0e6b520cac8673a9379a"
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
    "url": "assets/js/21.a39a7747.js",
    "revision": "4f189038279e1bcaf621e50517f29767"
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
    "url": "assets/js/30.e5ce22d2.js",
    "revision": "3f572c97befc074a8a3370602ae94a74"
  },
  {
    "url": "assets/js/31.db36a169.js",
    "revision": "2250a6f2eaffd10417ed37ab25df6fbb"
  },
  {
    "url": "assets/js/32.8e02e971.js",
    "revision": "33bed00ff1a4868ec76453ad1be399a8"
  },
  {
    "url": "assets/js/33.52500f21.js",
    "revision": "f68817d1e1ca4e8f04f0635118d0f32c"
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
    "url": "assets/js/36.8652aeb0.js",
    "revision": "2fe5cb8caed88e7c0688338bfe3c34ad"
  },
  {
    "url": "assets/js/37.5dc59852.js",
    "revision": "d165bc36bb6a28c6df58b9fabef373d9"
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
    "url": "assets/js/44.66586188.js",
    "revision": "58cb6e225543ed71ffd28893d3ac5d51"
  },
  {
    "url": "assets/js/45.a9ef7cf3.js",
    "revision": "c2b17f5cbd46da289386345c21925351"
  },
  {
    "url": "assets/js/46.5600a980.js",
    "revision": "a1acf87262c75c379dc8a88069cb5ae8"
  },
  {
    "url": "assets/js/47.78b2d69e.js",
    "revision": "d43dcd3ac971c29aea13ccccb1cc0969"
  },
  {
    "url": "assets/js/48.94d28c50.js",
    "revision": "44299f7d393d370bb6eb72c05ec511a7"
  },
  {
    "url": "assets/js/49.359b1428.js",
    "revision": "5a09e60fe49410a1437887ce884bcc55"
  },
  {
    "url": "assets/js/5.143f686f.js",
    "revision": "cc8e1b50831e20e96b8b71d354f2c660"
  },
  {
    "url": "assets/js/50.10f32f4b.js",
    "revision": "1564c09ba8ea4717f0165ba015b4cdb1"
  },
  {
    "url": "assets/js/51.df1634b6.js",
    "revision": "ecae84941837d3df292face6b31659d2"
  },
  {
    "url": "assets/js/52.1fbfae34.js",
    "revision": "83a25046fc0f9a2789befb22c9c82167"
  },
  {
    "url": "assets/js/53.1463974e.js",
    "revision": "c2aa0e66a2f2e13243d3b4705c351c57"
  },
  {
    "url": "assets/js/54.d56a2d8f.js",
    "revision": "cdafc93f6a7220981f5486a7ff1a3d4f"
  },
  {
    "url": "assets/js/55.f361f4fd.js",
    "revision": "5660a4b21c0719de8891440234bf2079"
  },
  {
    "url": "assets/js/56.2985fa5d.js",
    "revision": "ad59741ac12d215cb6c06f28e8be4403"
  },
  {
    "url": "assets/js/57.7a9d20d6.js",
    "revision": "b16bc25e3e14c54e8e7e85a04a941a36"
  },
  {
    "url": "assets/js/58.14f99a10.js",
    "revision": "bd4b984c5f4c524aac6d9623146c1e50"
  },
  {
    "url": "assets/js/59.05fb755e.js",
    "revision": "1acdd25bfa71e584d3104f599c3fc372"
  },
  {
    "url": "assets/js/6.c6033a36.js",
    "revision": "30803a5b8d13f1c9f0d86064e18b38a6"
  },
  {
    "url": "assets/js/60.ddbe4eae.js",
    "revision": "29e44b88092cbb9c4a59b281264d124f"
  },
  {
    "url": "assets/js/61.c23aefd8.js",
    "revision": "f01361609cc709de2c0523160f09d896"
  },
  {
    "url": "assets/js/62.b79f827b.js",
    "revision": "1c05b3cf46880f95ec6af3ef20ad120c"
  },
  {
    "url": "assets/js/63.73828ebd.js",
    "revision": "59ccebbe7e365871a8c9629f31299eb9"
  },
  {
    "url": "assets/js/64.487c0d4a.js",
    "revision": "d60dae5ca2111bc8222e202984bd7ef1"
  },
  {
    "url": "assets/js/65.c21d79e5.js",
    "revision": "2febc68b9580513a2cd331eda9f1f11f"
  },
  {
    "url": "assets/js/66.71ee1b4a.js",
    "revision": "6235c7763dbcfae86111363efa550049"
  },
  {
    "url": "assets/js/67.ad5a3138.js",
    "revision": "185ae5c33be643ac8172efd6088273ef"
  },
  {
    "url": "assets/js/68.869edb33.js",
    "revision": "383b3ba85d5ad7a9597e0f02186c8ba1"
  },
  {
    "url": "assets/js/69.932ed6ff.js",
    "revision": "17398112cd604013956e777a16c639a1"
  },
  {
    "url": "assets/js/7.409fe50b.js",
    "revision": "17fcacb2a20cbef063ae903fa584bdb2"
  },
  {
    "url": "assets/js/70.7d23c3d3.js",
    "revision": "399e09230552960a1f4f280e382c5ecc"
  },
  {
    "url": "assets/js/71.0bd9fa09.js",
    "revision": "0ac051ce5ad9a84b37536d8bc7acbf88"
  },
  {
    "url": "assets/js/72.f161e186.js",
    "revision": "b51e11a7d7e49939115f0ff801a6b321"
  },
  {
    "url": "assets/js/73.2d2392a7.js",
    "revision": "1040757cbd644c0a2cd32205d50e49f7"
  },
  {
    "url": "assets/js/74.c424caa8.js",
    "revision": "1b7ed25a4d9cd591070af02a7c6e49a1"
  },
  {
    "url": "assets/js/75.5b11df15.js",
    "revision": "cb811a26a47b9e1602c19d117e60c3fe"
  },
  {
    "url": "assets/js/76.93c72dbe.js",
    "revision": "c9cd939e4bde1e6e22419252b346dd13"
  },
  {
    "url": "assets/js/77.5e0d901a.js",
    "revision": "6ca520aeb0106bd74a3dadaa8216816e"
  },
  {
    "url": "assets/js/78.d95c22ce.js",
    "revision": "2335437ba4398f42bf7522b9c5f22a19"
  },
  {
    "url": "assets/js/79.8955395d.js",
    "revision": "13eb79b69e4ccbc78e053a0e8849cc39"
  },
  {
    "url": "assets/js/8.5c771d1c.js",
    "revision": "d2163cdc4ffa977e01ad60b1c57bab47"
  },
  {
    "url": "assets/js/80.e1bdc11e.js",
    "revision": "e710e0ecaa1140c8fbf446191c389814"
  },
  {
    "url": "assets/js/81.34789291.js",
    "revision": "a3d24862dbd134394aeb8f3aa7966676"
  },
  {
    "url": "assets/js/82.fccef075.js",
    "revision": "9417907cbb38c095d258c6257cd27a12"
  },
  {
    "url": "assets/js/83.065b5b66.js",
    "revision": "ecbaf19ef72a381a564b0ab6fd4b1d4b"
  },
  {
    "url": "assets/js/84.fa91b207.js",
    "revision": "7bd3e1432d974d7d130f5715a71f77af"
  },
  {
    "url": "assets/js/85.685a5830.js",
    "revision": "26963fa8708b0d0e530ebec07d1143ab"
  },
  {
    "url": "assets/js/86.113da1c9.js",
    "revision": "72533f294319100072708a041f476b26"
  },
  {
    "url": "assets/js/87.cdfa5197.js",
    "revision": "5973a0ed0207b27e2db4b61409ced458"
  },
  {
    "url": "assets/js/88.8975f51b.js",
    "revision": "19babbb5abdf93318e068a7491862bb1"
  },
  {
    "url": "assets/js/89.61c1c69d.js",
    "revision": "74f48375ce8f3bf51a08ae135ba7614c"
  },
  {
    "url": "assets/js/9.07f8c8bd.js",
    "revision": "85cc81619f93838069e3e01c529ab831"
  },
  {
    "url": "assets/js/90.90598214.js",
    "revision": "12f92cc6386c07fc34d8f3689129cfd7"
  },
  {
    "url": "assets/js/91.b24a04d7.js",
    "revision": "58b5e2305da4703a92b80e9454c07784"
  },
  {
    "url": "assets/js/92.3604e4e3.js",
    "revision": "68b89885113f2a04ab64eab3d8b0d554"
  },
  {
    "url": "assets/js/93.5600deef.js",
    "revision": "a3b78930c47639a0de94089e85a128f1"
  },
  {
    "url": "assets/js/94.f9a014d0.js",
    "revision": "0aa0d223451a2207cfd358035b538f9f"
  },
  {
    "url": "assets/js/95.e6d4ec5f.js",
    "revision": "b59ce7aa72a65ddd8e969a4a2860fa66"
  },
  {
    "url": "assets/js/96.380e1b61.js",
    "revision": "58844cfe4bf10c44fd92d9906de4ffa9"
  },
  {
    "url": "assets/js/97.87d4904c.js",
    "revision": "36a7013e67e5238d4c3fc9a96ba2c70e"
  },
  {
    "url": "assets/js/98.daf643a3.js",
    "revision": "22fe5cb57b93b040a3210bfa12fcd7c5"
  },
  {
    "url": "assets/js/99.ae2ea528.js",
    "revision": "d8a59c50d60d20b1ad8e9b81a19f7f06"
  },
  {
    "url": "assets/js/app.5195bd2e.js",
    "revision": "1165b23151a1858d4cd8c81d0a1a55ab"
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
    "revision": "f47d876a03ae12321a3ba856c1193147"
  },
  {
    "url": "lecture/fb-r-auth.html",
    "revision": "309522c8949ac4603ff7e47f0a913fac"
  },
  {
    "url": "lecture/fb-r-introduction.html",
    "revision": "c516c96cb871fd3edb3e786500f5be35"
  },
  {
    "url": "lecture/index.html",
    "revision": "381ebcc607a447d153bf350d2c3484e0"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/mini-project-pay-config-directories.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/mini-project-pay-config-head.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/mini-project-pay-getting-started.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/mini-project2-context-beverageList.html",
    "revision": "03895b7f14e88d6d4f935481e6a4e1dc"
  },
  {
    "url": "lecture/mini-project2-custom-hook.html",
    "revision": "8762eb0102af75f69ef4e4870e28d6ca"
  },
  {
    "url": "lecture/mini-project2-getting-started.html",
    "revision": "b4a26fa16fbe4c33dcb0c83eb5734eb6"
  },
  {
    "url": "lecture/mini-project2-hooks-app.html",
    "revision": "b09480d1b4ad6405c9be1e1dc39c5d87"
  },
  {
    "url": "lecture/mini-project2-hooks-beverageItem.html",
    "revision": "a34ea08bb41108f2225e15b63567b432"
  },
  {
    "url": "lecture/mini-project2-styled-appHeader.html",
    "revision": "1f030782e7cd8022ca69710a220919a5"
  },
  {
    "url": "lecture/mini-project2-styled-appHomeLink.html",
    "revision": "94c8fb7415af954c9720a7991319231b"
  },
  {
    "url": "lecture/mini-project2-styled-appNavigation.html",
    "revision": "a949a4a665a9dfdd1d54a5fa20ece171"
  },
  {
    "url": "lecture/mini-project2-styled-responsive.html",
    "revision": "4e7178cc3d8e22f26ecb1e2729f97267"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "36a63883f9c9788d763163def90f16ef"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "fdeb2862c383bedd27d08c615a72a267"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "d61d6564bac1f907c6e5576804a7f91d"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "4717e9855aa860175dbfe907e302e89d"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "87beeb0ed693f3be8847b419dea07404"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "91f563f7678022db4d38b4b4f9afb5f1"
  },
  {
    "url": "lecture/r-fb-hooks-auth.html",
    "revision": "fd03201f3792910078abd44d75774097"
  },
  {
    "url": "lecture/r-fb-hooks-getting-started.html",
    "revision": "3dad910c7e9b3f7a037bf53737f10a78"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "3f7078768a92a7dc8558f6acb80a417f"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "dd1edec4f5132cecc83a7ab003765a62"
  },
  {
    "url": "lecture/rd-like-redux-using-context-hooks.html",
    "revision": "6feb5b2ed0f976d288aa970b4ceaa5ca"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "831e924b4bd0c5e9e5e793d51731ce5b"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "f4e495643e04e709044b82c2e778ac94"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "c21d8df5588325d7b4f8afe6d554bbd7"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "92d927d669ed8b60d26c82b1e8a60529"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "078882fa9d35cfd4f1b797eff41b31fb"
  },
  {
    "url": "lecture/sp-hook-api.html",
    "revision": "e8afcc123c6b1c9e77a40a90fdf7ecc6"
  },
  {
    "url": "lecture/sp-introduction.html",
    "revision": "52d26f14bab3dc7c55d69bfbeccd46c2"
  },
  {
    "url": "lecture/su-getting-started.html",
    "revision": "ea1adad30324d9c4442e0246e7bfa48d"
  },
  {
    "url": "lecture/su-introduction.html",
    "revision": "f24d78c2500f9ad9956ad2349491aef2"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
  },
  {
    "url": "payment-information.html",
    "revision": "b795ba0a89729a582cb4215a4b315c85"
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
