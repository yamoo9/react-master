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
    "revision": "d75ad7162c1a3f74f775fe853aff70a1"
  },
  {
    "url": "account/signin.html",
    "revision": "41e1195e3917c4419a461db311d5fa14"
  },
  {
    "url": "account/user.html",
    "revision": "786c63d64fba70e108e87189bb4071ec"
  },
  {
    "url": "admin/index.html",
    "revision": "fe67a4a098201b7640292829ff2946c0"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.0dba450d.css",
    "revision": "6774a3bf0f92acbc3c72a86d1ae41f38"
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
    "url": "assets/js/10.a9f42322.js",
    "revision": "989271b122b547c1de84b2d6ea631057"
  },
  {
    "url": "assets/js/100.285b5dcb.js",
    "revision": "d9050ddf806801cda2d5abdb9a453bf9"
  },
  {
    "url": "assets/js/101.e4573cd3.js",
    "revision": "8c401200a2e0fd869648a0dfa6490c0c"
  },
  {
    "url": "assets/js/102.ddbc9421.js",
    "revision": "f7611e88a17ad1695d3796b3f3a3082f"
  },
  {
    "url": "assets/js/103.1e158770.js",
    "revision": "b5ae1cc09f653e8cd9ee7b10d8dd7997"
  },
  {
    "url": "assets/js/104.55dbb5c7.js",
    "revision": "7cae6786485e5ee72d85a0aabf8472b0"
  },
  {
    "url": "assets/js/105.a065a529.js",
    "revision": "9e7d356892967e4c65ea0e1f97bdf5b4"
  },
  {
    "url": "assets/js/106.e6f40f57.js",
    "revision": "a0ec275075565f56c3741099f5dbb53a"
  },
  {
    "url": "assets/js/107.96536556.js",
    "revision": "9c09228caaf0110c6063ddfe308ee753"
  },
  {
    "url": "assets/js/108.076e9bb4.js",
    "revision": "83db4b77f6232085ca734f550a599a28"
  },
  {
    "url": "assets/js/109.d9743a19.js",
    "revision": "00b511815969096fa598409d99f0b493"
  },
  {
    "url": "assets/js/11.8ffc1a08.js",
    "revision": "db423c64ff0bf8bbf563002903632b15"
  },
  {
    "url": "assets/js/110.f4c85fe8.js",
    "revision": "ad60d3319441d12275325d0194ae0fdb"
  },
  {
    "url": "assets/js/111.b7bf1c02.js",
    "revision": "dab4f9c7ee8de6ede27e91e189b65ac0"
  },
  {
    "url": "assets/js/112.0bd30946.js",
    "revision": "0500cf3b10bcf83d12cf464d278bf51c"
  },
  {
    "url": "assets/js/12.07b53eb0.js",
    "revision": "9be486168cef3c7103b0fbac484e9b16"
  },
  {
    "url": "assets/js/13.189c41fe.js",
    "revision": "b45504fc2df6d6256728558af1eda040"
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
    "url": "assets/js/16.47e84542.js",
    "revision": "9aa4d4c29ab068df1c622acacc96ac79"
  },
  {
    "url": "assets/js/17.d28188ee.js",
    "revision": "4f234f295f1abb161acad90a0b2ec7a7"
  },
  {
    "url": "assets/js/18.86a95c07.js",
    "revision": "f34a56bd3d4735812675ded69b8ad5e9"
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
    "url": "assets/js/20.d1d3ac01.js",
    "revision": "55d650df2579398d75e63daf6d04f4f6"
  },
  {
    "url": "assets/js/21.0d55e190.js",
    "revision": "484aefc50111149af96b185c3e124996"
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
    "url": "assets/js/25.704d26dd.js",
    "revision": "cf4d143441ca23d4e591b5b281866079"
  },
  {
    "url": "assets/js/26.7c07fd17.js",
    "revision": "9cb6ae4a3344fcd2a3ddc5b6eb1265b1"
  },
  {
    "url": "assets/js/27.649454a1.js",
    "revision": "6b067ccc2ccf6402285d1c1c0521a432"
  },
  {
    "url": "assets/js/28.1016eac9.js",
    "revision": "dad4849000d50fad230cf38c59660732"
  },
  {
    "url": "assets/js/29.295ca2c1.js",
    "revision": "12d63de985f34b6123a1fdff0bf61000"
  },
  {
    "url": "assets/js/3.e66f7827.js",
    "revision": "e2f4b256bf7ed46be4e49dbf3f7dc4ee"
  },
  {
    "url": "assets/js/30.a12f0e7d.js",
    "revision": "cced178e1517425b4a4f5ef8df7c11bf"
  },
  {
    "url": "assets/js/31.0e780e72.js",
    "revision": "1692f35b934fb9bebcdef0e821885651"
  },
  {
    "url": "assets/js/32.a0cfdd59.js",
    "revision": "5bf4c064feb500d5f549be02aacd16b1"
  },
  {
    "url": "assets/js/33.cae69c27.js",
    "revision": "bdffba18ffc5010b8fe3ff04ea2fdce8"
  },
  {
    "url": "assets/js/34.09689c92.js",
    "revision": "25088b3a008745fcbd526bed4726cbaf"
  },
  {
    "url": "assets/js/35.6ad4e057.js",
    "revision": "94e04a2363bad4b2ff88a79e73c7117f"
  },
  {
    "url": "assets/js/36.19ab557e.js",
    "revision": "92f2b1d1c038aca8b26ebde95dc2aab5"
  },
  {
    "url": "assets/js/37.a59c7bd6.js",
    "revision": "261196dc8622b25aa6cfd692aba0645e"
  },
  {
    "url": "assets/js/38.ebc3bf51.js",
    "revision": "d5437696690f22a3445092eb85cae59a"
  },
  {
    "url": "assets/js/39.f20a62a0.js",
    "revision": "6c5c6e3d29b1ae00e9621b0cb4e35c6f"
  },
  {
    "url": "assets/js/4.ebe6fa8d.js",
    "revision": "2df54fd7e436a3475025e20bed87c59e"
  },
  {
    "url": "assets/js/40.bb958804.js",
    "revision": "813d283c92be49a98c92e84849e724b6"
  },
  {
    "url": "assets/js/41.18838c27.js",
    "revision": "234a0fe9c85dd33bf95b66295973fcd8"
  },
  {
    "url": "assets/js/42.e532ba1b.js",
    "revision": "2a3970c67f46eae4cd41027232268d14"
  },
  {
    "url": "assets/js/43.f9945a0a.js",
    "revision": "1291b6f000fad7717f47f779141daa4b"
  },
  {
    "url": "assets/js/44.c9e64d52.js",
    "revision": "1d9d8846a75b139ad169d827e8260187"
  },
  {
    "url": "assets/js/45.f092d9f1.js",
    "revision": "698be0a95568944a54723d62739f48a8"
  },
  {
    "url": "assets/js/46.8d91c9ca.js",
    "revision": "53ebb7ae55a250bfccd9e2b08740a487"
  },
  {
    "url": "assets/js/47.97d2825a.js",
    "revision": "afcb8993b8b918b28749b4d270247b99"
  },
  {
    "url": "assets/js/48.3b8ea70b.js",
    "revision": "fe667bd178d9db09604860a41498a222"
  },
  {
    "url": "assets/js/49.6a1afe85.js",
    "revision": "c63f4286cb7482b54449b7c697a0445e"
  },
  {
    "url": "assets/js/5.e54c5da1.js",
    "revision": "a7c0f1893a28d6fd25a28df1fc4acc85"
  },
  {
    "url": "assets/js/50.7340c6e8.js",
    "revision": "848c9c4a512c89a59ee8e2952dc86227"
  },
  {
    "url": "assets/js/51.fd00bb0a.js",
    "revision": "5322f5d1a506c69a1b8699bbe8b079f4"
  },
  {
    "url": "assets/js/52.7099a128.js",
    "revision": "d0bef36184a966694eec8391b1b1e69e"
  },
  {
    "url": "assets/js/53.e108f972.js",
    "revision": "ab163c4f20a32963f7d998db37ba5465"
  },
  {
    "url": "assets/js/54.399473f2.js",
    "revision": "be4a2eb7313b69bd964285c265df6e4e"
  },
  {
    "url": "assets/js/55.a664b3cf.js",
    "revision": "7855cc12936010ad1a9599a7cf411953"
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
    "url": "assets/js/59.05fb755e.js",
    "revision": "1acdd25bfa71e584d3104f599c3fc372"
  },
  {
    "url": "assets/js/6.c6033a36.js",
    "revision": "30803a5b8d13f1c9f0d86064e18b38a6"
  },
  {
    "url": "assets/js/60.a9883e58.js",
    "revision": "4afa27067fef51bb3d4d3811a1071dd9"
  },
  {
    "url": "assets/js/61.28d8257d.js",
    "revision": "b1f126263847257a8f3e2729c08e28d7"
  },
  {
    "url": "assets/js/62.97e47cd2.js",
    "revision": "93dd74766ba1d12a0783b8acc3684554"
  },
  {
    "url": "assets/js/63.3055ffe1.js",
    "revision": "0322183236af3c39ce81c3d2c78da492"
  },
  {
    "url": "assets/js/64.3a2b7eee.js",
    "revision": "09e3963eb83ff421f97dac9fdd3b304b"
  },
  {
    "url": "assets/js/65.cea3f439.js",
    "revision": "d22ec9eddc81dd1ea318903e807c1b09"
  },
  {
    "url": "assets/js/66.aa366eb6.js",
    "revision": "b42f5c6ff24e2365b06da8ddee46e8a1"
  },
  {
    "url": "assets/js/67.35c1452d.js",
    "revision": "5c9f73cf8c40dc591ce89621313b0a81"
  },
  {
    "url": "assets/js/68.0fa8bbe4.js",
    "revision": "2daf9ebd7fa8b1b862f2e7f0d23ef501"
  },
  {
    "url": "assets/js/69.efa66607.js",
    "revision": "725be3134519581eb67d7b95abfb3a22"
  },
  {
    "url": "assets/js/7.409fe50b.js",
    "revision": "17fcacb2a20cbef063ae903fa584bdb2"
  },
  {
    "url": "assets/js/70.d5bd21d7.js",
    "revision": "1bc9b9f99063de347fa3697b3483a55a"
  },
  {
    "url": "assets/js/71.3b4b2f51.js",
    "revision": "1878cc4b5cc01bd49d75810a871c3aab"
  },
  {
    "url": "assets/js/72.d7a51998.js",
    "revision": "7e3e926e428fe607dca250da86b1eab2"
  },
  {
    "url": "assets/js/73.1305926e.js",
    "revision": "b423c57a97acea59f2128b0cb4d49905"
  },
  {
    "url": "assets/js/74.d08d99c3.js",
    "revision": "06ce8f2b2d77c23f2925503d26200b00"
  },
  {
    "url": "assets/js/75.1972a6c5.js",
    "revision": "d494de70b8f8a29c5ea71f23bba34612"
  },
  {
    "url": "assets/js/76.87eabd70.js",
    "revision": "b28a2337843fbd9db3e2bdf076bb4eab"
  },
  {
    "url": "assets/js/77.2b4fc9b1.js",
    "revision": "d0f39eb1f240902b554a1511e82901ae"
  },
  {
    "url": "assets/js/78.c340626b.js",
    "revision": "b6fea45b4299a46b8b0ab7d77d0ac519"
  },
  {
    "url": "assets/js/79.9719e7eb.js",
    "revision": "8d300276b1a62d900743f5829a86b16c"
  },
  {
    "url": "assets/js/8.0464a97e.js",
    "revision": "9d1e52ec5317ebfa5cd9ae4e08126abd"
  },
  {
    "url": "assets/js/80.d08ca405.js",
    "revision": "c17e497d68cfe2b305adc68808bba387"
  },
  {
    "url": "assets/js/81.6b6c3fa6.js",
    "revision": "698333d3b620c716f56380905ce5bef6"
  },
  {
    "url": "assets/js/82.ea9d8cb4.js",
    "revision": "c558eacbd631822a70e25c4655214bcd"
  },
  {
    "url": "assets/js/83.910736a2.js",
    "revision": "0b9980083ab88ee489e36a1af38e3aa8"
  },
  {
    "url": "assets/js/84.ad3fe076.js",
    "revision": "074a77d459f2f308f82376136e93348b"
  },
  {
    "url": "assets/js/85.96871c59.js",
    "revision": "94f48fc0d7aa493eafc55369438425e5"
  },
  {
    "url": "assets/js/86.dd9add54.js",
    "revision": "bf8d64c5c76ee994e4e98d951aee6e8e"
  },
  {
    "url": "assets/js/87.149c4887.js",
    "revision": "9cd735f996cedb7015976733cc77f90c"
  },
  {
    "url": "assets/js/88.70ebe6a9.js",
    "revision": "b0674553cf7b9638779764badad1ff57"
  },
  {
    "url": "assets/js/89.be6a52d3.js",
    "revision": "9b579c19d7ec442be0f0fedcc7f118a1"
  },
  {
    "url": "assets/js/9.70de9587.js",
    "revision": "d1e6e512c92272d0e17aa827eba04751"
  },
  {
    "url": "assets/js/90.1db1f16d.js",
    "revision": "dd35b9b72eb523d4e61dcdd7e6a223cc"
  },
  {
    "url": "assets/js/91.d185177a.js",
    "revision": "0f0aef5d40bf3d63c03b48881e8abbc0"
  },
  {
    "url": "assets/js/92.9338ae84.js",
    "revision": "026dd53b3163a90bbe153a9dec99931e"
  },
  {
    "url": "assets/js/93.19b8f022.js",
    "revision": "61e617a16146839e5d0a9489c7522b3a"
  },
  {
    "url": "assets/js/94.a139dd1a.js",
    "revision": "79f0964d2cecb5367b9cc1202847090d"
  },
  {
    "url": "assets/js/95.82fa4a41.js",
    "revision": "3e9ab2754a3c899157fa7ada854e21c1"
  },
  {
    "url": "assets/js/96.006ba599.js",
    "revision": "8ce3f8a2f712872ee34b6a563c27c2cf"
  },
  {
    "url": "assets/js/97.795a99ac.js",
    "revision": "0cadee73b95a4e0a7517a8f769565032"
  },
  {
    "url": "assets/js/98.721a605a.js",
    "revision": "cf05e0afa42c955c86fe574d67b766fb"
  },
  {
    "url": "assets/js/99.5f839a30.js",
    "revision": "a9e0f128e68bfcbf6805bf3a65c6b76a"
  },
  {
    "url": "assets/js/app.50587386.js",
    "revision": "3986266ef7fd26adabe463cbf2b5aaf3"
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
    "revision": "10bc6678fcba91dc3d7d4f0ae913f8fc"
  },
  {
    "url": "lecture/fb-r-auth.html",
    "revision": "bacf9d6ceac1ead8b57786ef87772f37"
  },
  {
    "url": "lecture/fb-r-introduction.html",
    "revision": "dcf0f4a660d441fac4004e78f29ee062"
  },
  {
    "url": "lecture/index.html",
    "revision": "647caf44c6eb0988f0e7ddd73bf02f70"
  },
  {
    "url": "lecture/mini-project-config-directories.html",
    "revision": "82922682192399cda2a18686984dfec0"
  },
  {
    "url": "lecture/mini-project-config-head.html",
    "revision": "c7d9e8f151874bf00e01227dfa42972c"
  },
  {
    "url": "lecture/mini-project-getting-started.html",
    "revision": "eff21170690d408991b70d50f40635ca"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project2-getting-started.html",
    "revision": "3295bdb01ec07b1d9c32783c3ba504a7"
  },
  {
    "url": "lecture/mini-project2-pay-context-beverageList.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project2-pay-custom-hook.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-app.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-beverageItem.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-gototop.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHeader.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHomeLink.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appNavigation.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/mini-project2-pay-styled-responsive.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "4ef5f33eebfd30dfe4d6deb7330af5e8"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "7e7f95e2bd9dfd2690eced9210ceff73"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "6ef9cf95556ea64e8a45c90ed4b80a9d"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "62b45ae085002de624c2a128c9c54747"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "72d86e54237fa02f06557690736c206e"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "7df5221e81438675a4abf24f8ec3d905"
  },
  {
    "url": "lecture/r-fb-hooks-getting-started.html",
    "revision": "33d0e6bdcacfd9229ea43668740bde98"
  },
  {
    "url": "lecture/r-fb-pay-hooks-auth.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-advanced-patterns.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-like-redux-using-context-hooks.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "91c9c9eb0d7930839ad114f59eb07539"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "a92a854108bba5c105ceb860ef205985"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/rd-pay-react-redux-hooks.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "066b8c2244517d9d316204a5a67f4a26"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "a4fbce5b128ccee39dfd5dcf5e617fdf"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "9bfa6d6402f72d8520330a02525b3d60"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "6b7fc235f794ba03dd2f437777d811b0"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "2c8cc54b14c6fcaabc42645662f877ed"
  },
  {
    "url": "lecture/sp-hook-api.html",
    "revision": "564197eca10bdfcc7a14e78f6f04112c"
  },
  {
    "url": "lecture/sp-introduction.html",
    "revision": "ce36208abcb0ed3626f25f12b528749c"
  },
  {
    "url": "lecture/su-getting-started.html",
    "revision": "641d10f024c7f46b88095fe84c2741d1"
  },
  {
    "url": "lecture/su-introduction.html",
    "revision": "529b48afdf79e9ac410821f33c8e0532"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
  },
  {
    "url": "payment-information.html",
    "revision": "f85c5d0f04eb178d45e5021514ea4662"
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
