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
    "revision": "6f176e5acbb173cd3230924ffe0d5460"
  },
  {
    "url": "account/signin.html",
    "revision": "8ff05cfd2b1cddf28c5d6de28bdbc38a"
  },
  {
    "url": "account/user.html",
    "revision": "f97faab94f1412171119e2c2aacdc6a3"
  },
  {
    "url": "admin/index.html",
    "revision": "d1ddf147c485d6565066936443c2d032"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.01b648c9.css",
    "revision": "1f50dc382454f8789122bf3364856284"
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
    "url": "assets/js/10.de7b4128.js",
    "revision": "4c0cff9ab256b834c2d43cf828eeab52"
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
    "url": "assets/js/103.d7fa0a14.js",
    "revision": "06e1c61d72c02f2451d77c52168e094b"
  },
  {
    "url": "assets/js/104.e95c2225.js",
    "revision": "33de0f85b09a217817f06e75d131b523"
  },
  {
    "url": "assets/js/105.15cef4e4.js",
    "revision": "a7500e6718d434d073f7ae7f2068ac1f"
  },
  {
    "url": "assets/js/106.0b19cf31.js",
    "revision": "e960a831b47066bce0763ed9b4c97268"
  },
  {
    "url": "assets/js/107.036897d1.js",
    "revision": "a4c428f08c67f8e7516e0e4cedd22a9f"
  },
  {
    "url": "assets/js/108.00ab1326.js",
    "revision": "80a66fe97fe3935cafb6db77595271f0"
  },
  {
    "url": "assets/js/109.32c71cf2.js",
    "revision": "698a8c2233ecfa2ddffd970b8165180d"
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
    "url": "assets/js/113.9193a53f.js",
    "revision": "1fa6a9219a770961dd2cbee028849aa0"
  },
  {
    "url": "assets/js/114.9406bf4c.js",
    "revision": "2d3b494b4ef1b39b3b59eabc339b7bc1"
  },
  {
    "url": "assets/js/115.b0949066.js",
    "revision": "45a1bdd7b630b4fffef12e0fc28f8a4c"
  },
  {
    "url": "assets/js/116.25177532.js",
    "revision": "9e38d73935842db9dbb64fe57189c144"
  },
  {
    "url": "assets/js/117.a04dcfd5.js",
    "revision": "567fd4158a6ef1e4c8eba65f274e4337"
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
    "url": "assets/js/5.0d80fa79.js",
    "revision": "66142648709923073371c0cf8baeda1f"
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
    "url": "assets/js/57.5bd429c0.js",
    "revision": "4ab17fceaa5c6bde71ce116c945d0135"
  },
  {
    "url": "assets/js/58.6e2dc2c1.js",
    "revision": "e839b60164d4d29be65534dae608c72e"
  },
  {
    "url": "assets/js/59.168d504b.js",
    "revision": "1b0ecdb77a9d74c9fd7224cbfc17a824"
  },
  {
    "url": "assets/js/6.c43f6d40.js",
    "revision": "eb80d2a1afb9a00e07ab3f0e1ec87ff3"
  },
  {
    "url": "assets/js/60.a4797ee5.js",
    "revision": "ea06295bc6f399c83e805a7965e6d745"
  },
  {
    "url": "assets/js/61.faea1649.js",
    "revision": "9710681f60489d3a01c49a36c39dfaf9"
  },
  {
    "url": "assets/js/62.3e06d556.js",
    "revision": "92b35c63cd776d64925c974152162501"
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
    "url": "assets/js/69.f25825b8.js",
    "revision": "cdbe0317c1f9304f59f1aa6e84f5b2b4"
  },
  {
    "url": "assets/js/7.14b49382.js",
    "revision": "e2877c0e886471eabdcd155cb0df741d"
  },
  {
    "url": "assets/js/70.4e1b022f.js",
    "revision": "17a60e1de32e9dd378eed75a2bef630a"
  },
  {
    "url": "assets/js/71.16e61d4e.js",
    "revision": "7a9f9c3c7b116207e0f8d20786ec3547"
  },
  {
    "url": "assets/js/72.f4090495.js",
    "revision": "0584d503c724b8aa620239d8992298af"
  },
  {
    "url": "assets/js/73.c43768a9.js",
    "revision": "4cf1fa718eb1f5ff35e24072f7af5d9b"
  },
  {
    "url": "assets/js/74.fb538f23.js",
    "revision": "50016eefa8e7b97c98947e42b1645d8f"
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
    "url": "assets/js/80.6938d871.js",
    "revision": "a7c887a20273711426bafe71811265ef"
  },
  {
    "url": "assets/js/81.87056a6c.js",
    "revision": "9bbcb638a7378ab3e70631080ca61aba"
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
    "url": "assets/js/84.7e29c36a.js",
    "revision": "4ad92ede84544606bf8d38063c1d695e"
  },
  {
    "url": "assets/js/85.20046ca6.js",
    "revision": "3a3db8840cb462d7ae86994342340db0"
  },
  {
    "url": "assets/js/86.5d0cac73.js",
    "revision": "71ca89de14f81c1a7f830194cf106290"
  },
  {
    "url": "assets/js/87.dd4a7646.js",
    "revision": "8f79baaf58cb19a5cfb2595cbf859c26"
  },
  {
    "url": "assets/js/88.df5a3ccd.js",
    "revision": "1becbeeffb7bdcfb332306d100a50e40"
  },
  {
    "url": "assets/js/89.9d4d184c.js",
    "revision": "2ed3d0e97394244fcc90d8610c3820b7"
  },
  {
    "url": "assets/js/9.559368c8.js",
    "revision": "82b7a8e43c451a66468519a2acae3633"
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
    "url": "assets/js/93.e7f4e84f.js",
    "revision": "138241dfd933a09fb7ec345c1e4dc327"
  },
  {
    "url": "assets/js/94.d2a99cfc.js",
    "revision": "fb57c0be1780841b2641afe59d69d131"
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
    "url": "assets/js/98.1ac1ec69.js",
    "revision": "bf1fae23cd4f6b28331dcc8054573797"
  },
  {
    "url": "assets/js/99.bf94398e.js",
    "revision": "fb6c9e78a6a32f66b76142ec13f60f2a"
  },
  {
    "url": "assets/js/app.18a7b168.js",
    "revision": "f29fa1fb1a9ace48bbe8bdb60bfecb6c"
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
    "revision": "6aecde754251e0d923c2a7acbe24af73"
  },
  {
    "url": "lecture/fb-r-auth.html",
    "revision": "97040f4e5c3601a62d2a0d90bf98fb17"
  },
  {
    "url": "lecture/fb-r-introduction.html",
    "revision": "f78f22c189805078a77665e2aa4214eb"
  },
  {
    "url": "lecture/index.html",
    "revision": "0008b3f5aa8891eda583afd78319a305"
  },
  {
    "url": "lecture/mini-project-config-directories.html",
    "revision": "2290d7dd186fb8e98c51f513e47eb9ac"
  },
  {
    "url": "lecture/mini-project-config-head.html",
    "revision": "acb634e7ad305027e64a87cfc51bd677"
  },
  {
    "url": "lecture/mini-project-getting-started.html",
    "revision": "5161c2071471200d69fd365a72cf6aa5"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project2-getting-started.html",
    "revision": "32dd937ef6fb5b7d2d33b4b545963b8d"
  },
  {
    "url": "lecture/mini-project2-pay-context-beverageList.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project2-pay-custom-hook.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-app.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-beverageItem.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-gototop.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHeader.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHomeLink.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appNavigation.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/mini-project2-pay-styled-responsive.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "30fa89d3961dad428c07130fa567b7de"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "679f4cb87bc015499c5e5558366393f4"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "cc07069314fe2e20dca9305cd018d311"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "0976225d4d01cb7c27f4cdeb5dce19de"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "9127f7adab979ee474cf4c9619dcfb2b"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "e0e8e1b29dab2b2b5ccb3c0745fd10e4"
  },
  {
    "url": "lecture/r-fb-hooks-getting-started.html",
    "revision": "f6ad0f5628a267e5d4d8b7691b243dac"
  },
  {
    "url": "lecture/r-fb-pay-hooks-auth.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-advanced-patterns.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-immutable-managing-list.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-like-redux-using-context-hooks.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "9832a446ffe59b20a0f22163513e448a"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "5f6765811773073da57d0945706346b7"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rd-pay-react-redux-hooks.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rd-pay-redux-thunk.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rd-pay-redux-toolkit.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "557d2b2d5b6d4668997ce273db20894a"
  },
  {
    "url": "lecture/rf-getting-started.html",
    "revision": "f7b73f78f29f1029fdb99be7c19403bf"
  },
  {
    "url": "lecture/rf-pay-basic-usage.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rf-pay-initialze-from-state.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rf-pay-submit-validation.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rf-pay-sync-validation.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "df67a8d6c34548766cb15fd51aa8d803"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "26ae3772cb60526bf0e9463699c3eb45"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "aef6679ecc23fa5c27ffa4788f2d30eb"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "0c8601e9df07314c85119b6151d0f91d"
  },
  {
    "url": "lecture/sp-hook-api.html",
    "revision": "c69f93b23153af18a7eb2bba215ebd12"
  },
  {
    "url": "lecture/sp-introduction.html",
    "revision": "c76eac5dd895bd271feedf9078f5c153"
  },
  {
    "url": "lecture/su-getting-started.html",
    "revision": "57834110698714667bfc963f1619f421"
  },
  {
    "url": "lecture/su-introduction.html",
    "revision": "3e35990a82aa9b10f55c8f4613c7f0b9"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
  },
  {
    "url": "payment-information.html",
    "revision": "3735e64ee5638a134d0b76c845903a87"
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
