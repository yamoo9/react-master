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
    "revision": "0300cf94fc59263a70c782dcc75f4f4e"
  },
  {
    "url": "account/signin.html",
    "revision": "1bc5727cb03857c46a435244ebfc45be"
  },
  {
    "url": "account/user.html",
    "revision": "241dfb02dfa8af7333692db038039e5c"
  },
  {
    "url": "admin/index.html",
    "revision": "519ed75f15a943ef8f20916ff9409d9b"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.1fadeae4.css",
    "revision": "b65b01355a5ce4a9dd22d930840164d5"
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
    "url": "assets/js/10.3c79bc07.js",
    "revision": "aa942dc956168296e09a534bb8f5b3b3"
  },
  {
    "url": "assets/js/100.324d91b9.js",
    "revision": "6187e257cfb59e053ddda617f8f91b22"
  },
  {
    "url": "assets/js/101.31d15a85.js",
    "revision": "718087d380db00e57ff81bc8ce923e7d"
  },
  {
    "url": "assets/js/102.d58f5a53.js",
    "revision": "236584789b269e61e9ee419d18090385"
  },
  {
    "url": "assets/js/103.cda58c07.js",
    "revision": "2fadb03f65c70bf4170ea985c42e1fa4"
  },
  {
    "url": "assets/js/104.fdb53df0.js",
    "revision": "39b21c74b256771335e29cbb00b828f9"
  },
  {
    "url": "assets/js/105.15cef4e4.js",
    "revision": "a7500e6718d434d073f7ae7f2068ac1f"
  },
  {
    "url": "assets/js/106.a3528fce.js",
    "revision": "0920cf68b701b7290a6f03c213e87bef"
  },
  {
    "url": "assets/js/107.1c2c6ba5.js",
    "revision": "ed3161fed3d737d73729e3e13124005b"
  },
  {
    "url": "assets/js/108.10978f91.js",
    "revision": "69b1d6465b9bbbbd2ac986a06864365c"
  },
  {
    "url": "assets/js/109.e182143d.js",
    "revision": "0e101eed902119ac45d8e08c677ebd64"
  },
  {
    "url": "assets/js/11.226cec32.js",
    "revision": "ec98b109cff54bba1686fcdee9703d74"
  },
  {
    "url": "assets/js/110.250cb6cd.js",
    "revision": "2eb50aa2b76b4cf60dbf3629583911af"
  },
  {
    "url": "assets/js/111.f0971e6c.js",
    "revision": "3c6a27aab51cbd2d015d27aa1d1a4105"
  },
  {
    "url": "assets/js/112.76aee8b8.js",
    "revision": "c24feaacd85efbd91648f183481b0fb4"
  },
  {
    "url": "assets/js/113.15301675.js",
    "revision": "cea26afa19c86cbf0ff39e07ffdc5fb7"
  },
  {
    "url": "assets/js/114.4d5d53ca.js",
    "revision": "6bb68401b4f13053ca0ff4e05c5dc1ed"
  },
  {
    "url": "assets/js/115.b0949066.js",
    "revision": "45a1bdd7b630b4fffef12e0fc28f8a4c"
  },
  {
    "url": "assets/js/116.12ace0b7.js",
    "revision": "110ff1ef8b72bbdddd4bd88197ed986b"
  },
  {
    "url": "assets/js/117.fdb69a88.js",
    "revision": "77c59e88ae659f7e6195c410c7ff2c92"
  },
  {
    "url": "assets/js/118.96e2c736.js",
    "revision": "9d366b984b4c5d96d1599dede46736b2"
  },
  {
    "url": "assets/js/119.001e4ef4.js",
    "revision": "e3a89f17009752847f273c49f2c98474"
  },
  {
    "url": "assets/js/12.83387bc8.js",
    "revision": "6e112788273859b28ae966298842362c"
  },
  {
    "url": "assets/js/13.8bca5680.js",
    "revision": "ae929f8974444ae4e35c71c04602671c"
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
    "url": "assets/js/16.f9ac702f.js",
    "revision": "b4d94f571cc76473507f77ce0c4ccfa8"
  },
  {
    "url": "assets/js/17.f5c25f40.js",
    "revision": "4895cdea5b981322d0fc043308481fc0"
  },
  {
    "url": "assets/js/18.17175adf.js",
    "revision": "d6cca5a816ea6d1fb28ec9a909fd39b7"
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
    "url": "assets/js/29.68254c98.js",
    "revision": "0ffed06539810bf4a05c5639705ae46b"
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
    "url": "assets/js/34.2ed6c540.js",
    "revision": "9c2643d029d785561d96ecfa1f5ad877"
  },
  {
    "url": "assets/js/35.45cd73c1.js",
    "revision": "823d1337afca48921bc595c9dad5e25c"
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
    "url": "assets/js/39.9a49f883.js",
    "revision": "4f140606a33c8e102990deb328f3a842"
  },
  {
    "url": "assets/js/4.ebe6fa8d.js",
    "revision": "2df54fd7e436a3475025e20bed87c59e"
  },
  {
    "url": "assets/js/40.ec54ac9c.js",
    "revision": "dd94622a5faa962bfe136478cea87bd2"
  },
  {
    "url": "assets/js/41.75de8cf5.js",
    "revision": "a758e38e2080269c6d947e88f3f37270"
  },
  {
    "url": "assets/js/42.e532ba1b.js",
    "revision": "2a3970c67f46eae4cd41027232268d14"
  },
  {
    "url": "assets/js/43.851e67fe.js",
    "revision": "7d7ca890ae274f2fe32853dc6c0bd9dc"
  },
  {
    "url": "assets/js/44.ebd5dcbf.js",
    "revision": "3f91a66d81ff5ba5fd3bf43fd0e0688a"
  },
  {
    "url": "assets/js/45.f092d9f1.js",
    "revision": "698be0a95568944a54723d62739f48a8"
  },
  {
    "url": "assets/js/46.d5f24270.js",
    "revision": "f1b9b3f539b92dc577dbf8ba59231799"
  },
  {
    "url": "assets/js/47.eb6d1bc5.js",
    "revision": "9bf1ed8e70aa4bbca666ca1ec1b9126d"
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
    "url": "assets/js/5.143f686f.js",
    "revision": "cc8e1b50831e20e96b8b71d354f2c660"
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
    "url": "assets/js/52.de47669e.js",
    "revision": "e7a270737e41774f3d406d8d66b23cf4"
  },
  {
    "url": "assets/js/53.ea908802.js",
    "revision": "b54058c5d344fac761ec419b84f93160"
  },
  {
    "url": "assets/js/54.5c5e82bc.js",
    "revision": "e78951e2d3b205796bde7d60817ab9ba"
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
    "url": "assets/js/59.168d504b.js",
    "revision": "1b0ecdb77a9d74c9fd7224cbfc17a824"
  },
  {
    "url": "assets/js/6.c6033a36.js",
    "revision": "30803a5b8d13f1c9f0d86064e18b38a6"
  },
  {
    "url": "assets/js/60.a4797ee5.js",
    "revision": "ea06295bc6f399c83e805a7965e6d745"
  },
  {
    "url": "assets/js/61.53d836f6.js",
    "revision": "4bf6d9f1adece50fdde3e998eb64306b"
  },
  {
    "url": "assets/js/62.766d3c18.js",
    "revision": "1be83290d3b935ce0718d57113199355"
  },
  {
    "url": "assets/js/63.3945be12.js",
    "revision": "564b0ee536022d4337f6ef7de1247223"
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
    "url": "assets/js/69.f25825b8.js",
    "revision": "cdbe0317c1f9304f59f1aa6e84f5b2b4"
  },
  {
    "url": "assets/js/7.409fe50b.js",
    "revision": "17fcacb2a20cbef063ae903fa584bdb2"
  },
  {
    "url": "assets/js/70.4e1b022f.js",
    "revision": "17a60e1de32e9dd378eed75a2bef630a"
  },
  {
    "url": "assets/js/71.f0e78e38.js",
    "revision": "f75f9b93d2e34eaaefd29088a2aa8b90"
  },
  {
    "url": "assets/js/72.e23bf26e.js",
    "revision": "b05d5aea1b6f629b359b06aa80edde33"
  },
  {
    "url": "assets/js/73.c43768a9.js",
    "revision": "4cf1fa718eb1f5ff35e24072f7af5d9b"
  },
  {
    "url": "assets/js/74.f344bac1.js",
    "revision": "4e81483ca9cfc6c70b3e473f1eca71ad"
  },
  {
    "url": "assets/js/75.6432f160.js",
    "revision": "5d93a2909c033f461be4e5040e2617df"
  },
  {
    "url": "assets/js/76.2ba892e0.js",
    "revision": "ca34d63b7f548fa3525424f067d905d3"
  },
  {
    "url": "assets/js/77.528a6dec.js",
    "revision": "0e2a666616bf654f9cf0800f56a14e31"
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
    "url": "assets/js/80.d576a006.js",
    "revision": "22499ccb0e25a882393c2c765cbc3fbf"
  },
  {
    "url": "assets/js/81.e8d819eb.js",
    "revision": "806eea5aaf7b79a06a6ead9e0b612a69"
  },
  {
    "url": "assets/js/82.21379a7d.js",
    "revision": "202a181584c593a4db7955ff47be39df"
  },
  {
    "url": "assets/js/83.61dffee5.js",
    "revision": "e6464ee6bcf0406b46af98f12b78a1b3"
  },
  {
    "url": "assets/js/84.89a2f925.js",
    "revision": "44505b42f5f42b5a269a78ee227e8af7"
  },
  {
    "url": "assets/js/85.02bf1d4c.js",
    "revision": "fb4fbb4659dc884e4a155f3aeba9ae51"
  },
  {
    "url": "assets/js/86.5d0cac73.js",
    "revision": "71ca89de14f81c1a7f830194cf106290"
  },
  {
    "url": "assets/js/87.9ac5895d.js",
    "revision": "4aa709e9b654484838e910e89724ba79"
  },
  {
    "url": "assets/js/88.e2624d3f.js",
    "revision": "3b72df52980209d248e5a5d54bdb0708"
  },
  {
    "url": "assets/js/89.9d4d184c.js",
    "revision": "2ed3d0e97394244fcc90d8610c3820b7"
  },
  {
    "url": "assets/js/9.70de9587.js",
    "revision": "d1e6e512c92272d0e17aa827eba04751"
  },
  {
    "url": "assets/js/90.f5562d32.js",
    "revision": "f62214067201019bafb6848fac5b31d4"
  },
  {
    "url": "assets/js/91.39255ab5.js",
    "revision": "8b85b39c70f5ea8b9f0bf9e11080d22a"
  },
  {
    "url": "assets/js/92.bd0bc277.js",
    "revision": "db9dab7eda6a15d8079884c7d4f4f00b"
  },
  {
    "url": "assets/js/93.2b336fa5.js",
    "revision": "42fac81e778ed717cfdaa206e667a735"
  },
  {
    "url": "assets/js/94.eab6ecd4.js",
    "revision": "ea4ea1dc66ba237be2fdeecc0e992259"
  },
  {
    "url": "assets/js/95.7369cff0.js",
    "revision": "864757b4579b380d3817a7d4d86f5bb5"
  },
  {
    "url": "assets/js/96.b088f774.js",
    "revision": "7c30c64c0f2ea0f14edd660153208c80"
  },
  {
    "url": "assets/js/97.0a1be5d9.js",
    "revision": "6d231d578c33e1ad31815a3d78ad6802"
  },
  {
    "url": "assets/js/98.ecb6e4b3.js",
    "revision": "ea44442e87d666ac228c5f8b51484681"
  },
  {
    "url": "assets/js/99.4af18360.js",
    "revision": "af4b058176d2e66c6ba6439360c8431e"
  },
  {
    "url": "assets/js/app.17d27e0c.js",
    "revision": "8d07088a7f2dd42486f88af976344fe4"
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
    "url": "images/redux-form-diagram.jpg",
    "revision": "a5e8f7c50c4e2dd58f28421e45c38c1c"
  },
  {
    "url": "images/redux-form.png",
    "revision": "5ec343a2091266b6dafca998007fb11f"
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
    "revision": "a4d3d0d73d9cedf59459ffd43c592c41"
  },
  {
    "url": "lecture/fb-r-auth.html",
    "revision": "e55bdc84f7e4dae46738a4c7bd482eb2"
  },
  {
    "url": "lecture/fb-r-introduction.html",
    "revision": "ce85854d220feebb67bb703fd5f2c9c2"
  },
  {
    "url": "lecture/index.html",
    "revision": "9884244f5b86fa856a2005da64565b0b"
  },
  {
    "url": "lecture/mini-project-config-directories.html",
    "revision": "619604e220880a966edc8bb8f627403f"
  },
  {
    "url": "lecture/mini-project-config-head.html",
    "revision": "6bc70f3501544b8c81c63ab9d6453a9e"
  },
  {
    "url": "lecture/mini-project-getting-started.html",
    "revision": "ac8f06591b92ee9dd738fc57987627d9"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project2-getting-started.html",
    "revision": "9956d2e0ce4e1904934164121bb07e14"
  },
  {
    "url": "lecture/mini-project2-pay-context-beverageList.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project2-pay-custom-hook.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-app.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-beverageItem.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-gototop.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHeader.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHomeLink.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appNavigation.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/mini-project2-pay-styled-responsive.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "fcd7614eae37a1e68f2a717595fb61ad"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "5b6437f3172bef6297cf762d38036477"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "55fe01ebbf17b03ab77baeb13c886f78"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "c5cbab5f30666877206f1f5938c4a54c"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "6af0733614393240c488d854b5062ff0"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "da5a2e1b2d20cfe788b6a24de9f2d0a3"
  },
  {
    "url": "lecture/r-fb-hooks-getting-started.html",
    "revision": "af2a908d361155e74fb0e0ba8538d2c8"
  },
  {
    "url": "lecture/r-fb-pay-hooks-auth.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-advanced-patterns.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-immutable-managing-list.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-like-redux-using-context-hooks.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "27f8f37b31dd10f500c8a433351c1b85"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "028986679840698f1034c11b717b3885"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rd-pay-react-redux-hooks.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rd-pay-redux-thunk.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rd-pay-redux-toolkit.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "dc2e87c25a3f5ffe1b0ffde8a83eead1"
  },
  {
    "url": "lecture/rf-getting-started.html",
    "revision": "02f1fe927ac56f66cd92d23b0725c885"
  },
  {
    "url": "lecture/rf-pay-basic-usage.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rf-pay-initialze-from-state.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rf-pay-submit-validation.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rf-pay-sync-validation.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "0bd7fa4db2d7e6839b3f395b3cb68f6c"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "826f425a56123e7eae8c91763f2543cc"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "b6a4cf792d31ad120c7302c70a2ec422"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "bbad41978134d8e3a35d5c48bf8067b1"
  },
  {
    "url": "lecture/sp-hook-api.html",
    "revision": "239ea160fb033dd6098973bf14d5a701"
  },
  {
    "url": "lecture/sp-introduction.html",
    "revision": "ce7470ef5ab33eb27038a7dbe372ec7c"
  },
  {
    "url": "lecture/su-getting-started.html",
    "revision": "a56d2cd80a804ad1e5059b96767060ac"
  },
  {
    "url": "lecture/su-introduction.html",
    "revision": "d57c1b93ec856982a1772b75b7c72716"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
  },
  {
    "url": "payment-information.html",
    "revision": "f1885139ac423fc2dd312eab7ed01fe2"
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
