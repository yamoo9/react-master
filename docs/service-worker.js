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
    "revision": "493cd4972d31b4e3bcd439a6deadfb2e"
  },
  {
    "url": "account/register.html",
    "revision": "17f98ac207d4b2b3c10c25db5dcd3d58"
  },
  {
    "url": "account/signin.html",
    "revision": "2914c8843c0b826cffee92ef8dd2b3b4"
  },
  {
    "url": "account/user.html",
    "revision": "451573e64b7fabaa812e5158ff59530e"
  },
  {
    "url": "admin/index.html",
    "revision": "067b52a5ebc536f1081f058194638420"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.59d378be.css",
    "revision": "e8ba4b669c72980286497b86fa987bc0"
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
    "url": "assets/js/10.4bd542be.js",
    "revision": "72adc0cd779ddbd127fbbf3fd5bc69fe"
  },
  {
    "url": "assets/js/100.4fa1c330.js",
    "revision": "92e83525a63176f7df3cb48ded91a166"
  },
  {
    "url": "assets/js/101.9b7b57fe.js",
    "revision": "d1b9ae470c9b0035356b4bd379daf550"
  },
  {
    "url": "assets/js/102.005756fc.js",
    "revision": "007bb9bfd1b7b1f5046884ceaed4ba0c"
  },
  {
    "url": "assets/js/103.95cc9baa.js",
    "revision": "9eaaf8d7ed1297d8c2ce2ce46cb8311f"
  },
  {
    "url": "assets/js/104.bc2124cc.js",
    "revision": "59f804a09242524570c27c4def8f280b"
  },
  {
    "url": "assets/js/105.d04f68ef.js",
    "revision": "10892cf1207b7aa1278d2ceaa1ea2dfb"
  },
  {
    "url": "assets/js/106.51d0144c.js",
    "revision": "0b174a28cfea4f6ca18349765cadef47"
  },
  {
    "url": "assets/js/107.b0e2bb85.js",
    "revision": "0980a54afd4353b57f3a4b4b0cc15aca"
  },
  {
    "url": "assets/js/108.f7d9b8ab.js",
    "revision": "660e2ceefed12511900920e364780abf"
  },
  {
    "url": "assets/js/109.f151b4bc.js",
    "revision": "16c50e3932adbea223984b63bcf3fc8c"
  },
  {
    "url": "assets/js/11.429804fc.js",
    "revision": "c2be23248b2e911132a760ea22b383a6"
  },
  {
    "url": "assets/js/110.b2906b99.js",
    "revision": "90ae27fccf57187bcdc8674a837c08eb"
  },
  {
    "url": "assets/js/111.8dfbd252.js",
    "revision": "6c57172d9da1dbc007ec72231d367bb6"
  },
  {
    "url": "assets/js/112.55eab966.js",
    "revision": "88f7c758184d0f4fe6b28cc4df10ec0a"
  },
  {
    "url": "assets/js/113.dd5a816e.js",
    "revision": "2d73d30e18380f96dd08b102ac1017dc"
  },
  {
    "url": "assets/js/114.13e3dbbf.js",
    "revision": "1f121b230cc790daab708b59837fc545"
  },
  {
    "url": "assets/js/115.1966d559.js",
    "revision": "0f468c377585b6a2a52edc014078f32e"
  },
  {
    "url": "assets/js/116.f0a1814e.js",
    "revision": "be72e591709be0d6c1bd0b6b9c5c9cbf"
  },
  {
    "url": "assets/js/117.7cd655a8.js",
    "revision": "825aa48c101eec1fa10486942bc680db"
  },
  {
    "url": "assets/js/118.ed5a82ae.js",
    "revision": "a1a5d903b55e918db2c66614ff92e8e3"
  },
  {
    "url": "assets/js/119.5681483e.js",
    "revision": "ede942e4c00619e9d6d4851bd48cb7e2"
  },
  {
    "url": "assets/js/12.ba9d5c1f.js",
    "revision": "efbeab21daffc99ed1b3773e4feb1912"
  },
  {
    "url": "assets/js/120.d3920484.js",
    "revision": "3606e24bd2eccde8fc976ce93831c1f0"
  },
  {
    "url": "assets/js/121.6b4a6c11.js",
    "revision": "9e995046f80fc76e80dcd63bfc2191b1"
  },
  {
    "url": "assets/js/122.ea3b0100.js",
    "revision": "22127d5c1e607897b398e0cb2441ac5e"
  },
  {
    "url": "assets/js/123.8f927ea3.js",
    "revision": "286fb13cf59271eacd31d8529f65d173"
  },
  {
    "url": "assets/js/124.7e9f7acd.js",
    "revision": "914baedd5cfc7efbd4cd3244472f261a"
  },
  {
    "url": "assets/js/125.1846c838.js",
    "revision": "2f2cb2e83d6916a4e0453cfd5a38c5ac"
  },
  {
    "url": "assets/js/126.b6c310d3.js",
    "revision": "c85103abc192d01387649df146814168"
  },
  {
    "url": "assets/js/127.77f732bc.js",
    "revision": "7b0d154c3bbf3bd476931ebef7fbdb1d"
  },
  {
    "url": "assets/js/128.144b9f91.js",
    "revision": "cf8e4d1cc2811874a84396724b5f85ca"
  },
  {
    "url": "assets/js/129.90627d56.js",
    "revision": "a36b1b0a96be4419da00b6c083e1ea33"
  },
  {
    "url": "assets/js/13.1f44d021.js",
    "revision": "1a8e3db3a9a9fdb8f9fe262b1806f7c0"
  },
  {
    "url": "assets/js/130.ed6c6cc5.js",
    "revision": "f4eb8621386fdba8cb634b281937f707"
  },
  {
    "url": "assets/js/131.f401d5b8.js",
    "revision": "49af7c89cb205822161e897a71a50f15"
  },
  {
    "url": "assets/js/132.c01797e0.js",
    "revision": "1a9f17f90532602b674f5244144c8739"
  },
  {
    "url": "assets/js/133.d7a11926.js",
    "revision": "701a5eb7c5e40b4ccefb11740a2433ea"
  },
  {
    "url": "assets/js/134.55ecb4c1.js",
    "revision": "9d2616d8c079dbad51f0d8eebff9b0a2"
  },
  {
    "url": "assets/js/135.fbdd99e9.js",
    "revision": "40eb3f616653b2c52823839f7b280fb2"
  },
  {
    "url": "assets/js/136.7971deb8.js",
    "revision": "bd5241362384a4e474c1768f6c164ebd"
  },
  {
    "url": "assets/js/137.8c9c80c8.js",
    "revision": "588cc51d8d4f80e5e62e7896e5573e20"
  },
  {
    "url": "assets/js/138.b4adb405.js",
    "revision": "c55550c6c3ee9c37734de4a1474203f7"
  },
  {
    "url": "assets/js/139.0e27b4aa.js",
    "revision": "18d892548cf29c17f6fcb7ee3d14010d"
  },
  {
    "url": "assets/js/14.f48e9298.js",
    "revision": "8639b3b657e4c35171ac33eddbd3b8ee"
  },
  {
    "url": "assets/js/140.43895e12.js",
    "revision": "b05afeb53c8d30963f973af6be39abcf"
  },
  {
    "url": "assets/js/141.9fa9cc50.js",
    "revision": "ce2605f7f67af692c37f4583e7fca5e4"
  },
  {
    "url": "assets/js/142.4602c175.js",
    "revision": "92493a04095b8bbb33abb2d68901b48d"
  },
  {
    "url": "assets/js/143.c0a7fdfd.js",
    "revision": "fa1b2b47df0d225b4f603a0c6d61d7cc"
  },
  {
    "url": "assets/js/144.e121996a.js",
    "revision": "3ab1d6641051221ff3818ad3263950e0"
  },
  {
    "url": "assets/js/145.7ffc2fb3.js",
    "revision": "a68b19a15ac3ff75d72b947d8fe9e365"
  },
  {
    "url": "assets/js/146.59f3cf28.js",
    "revision": "3674fe0a50ee8ab04cb0591fa5541992"
  },
  {
    "url": "assets/js/147.75bce258.js",
    "revision": "65388e02b924772bd2e8a987132341da"
  },
  {
    "url": "assets/js/148.e3fa42eb.js",
    "revision": "07169f5e5fe33407279201aa58f1c681"
  },
  {
    "url": "assets/js/15.c6b6eb70.js",
    "revision": "1cbcdbc150a9cf875c2a4a3f5c4f8ba2"
  },
  {
    "url": "assets/js/16.ee830940.js",
    "revision": "b06caea91c74e41cc6663b25a1761104"
  },
  {
    "url": "assets/js/17.7f91c797.js",
    "revision": "f949644274059e4a1ba2384485e2c8a0"
  },
  {
    "url": "assets/js/18.5e62d92a.js",
    "revision": "6dd0a8cb7991a409c366a807406131d4"
  },
  {
    "url": "assets/js/19.2196e46a.js",
    "revision": "42ed4bd85ddfa7383dcc2c170359973c"
  },
  {
    "url": "assets/js/2.a07a9afb.js",
    "revision": "48ce7e6adc171f4a05c71e21a39a3c2b"
  },
  {
    "url": "assets/js/20.2327bd41.js",
    "revision": "80013c760f26fd4ac10bbd3e72ec805f"
  },
  {
    "url": "assets/js/21.acf37db2.js",
    "revision": "ee5d9459d3fd70c1f3448a5f79c70bc7"
  },
  {
    "url": "assets/js/22.5c5f2d03.js",
    "revision": "75a10915d895af031b1ad3c99fe463b7"
  },
  {
    "url": "assets/js/23.03289312.js",
    "revision": "75dd6edc3cb68d75d7d6b2251a500105"
  },
  {
    "url": "assets/js/24.a298ccc9.js",
    "revision": "2930ae266e217a72ea5be768bc134eaa"
  },
  {
    "url": "assets/js/25.5d2261b6.js",
    "revision": "afcb5fa7c40289d936c026bedbd2e4ab"
  },
  {
    "url": "assets/js/26.fdb3f8f9.js",
    "revision": "20ac26de201d061eb5d7d615d0d2c748"
  },
  {
    "url": "assets/js/27.2baca354.js",
    "revision": "f91886a8a03ab833b02d01ca812c5ff3"
  },
  {
    "url": "assets/js/28.27138091.js",
    "revision": "17ed59f1ad5dfa1d16ffb37360760808"
  },
  {
    "url": "assets/js/29.0666a5e3.js",
    "revision": "15e20c35af8ce14cf2417adf7db5985e"
  },
  {
    "url": "assets/js/3.4446905b.js",
    "revision": "a44131738d154df40ef706bde0082c67"
  },
  {
    "url": "assets/js/30.a4504cb4.js",
    "revision": "b11cafcef78012a68560a67079121f86"
  },
  {
    "url": "assets/js/31.c0bbf2f8.js",
    "revision": "40b8a26ffd1a1019005878028aa37183"
  },
  {
    "url": "assets/js/32.ab46309b.js",
    "revision": "98ae0442e93f33a17d9ebd8d59ba0e9d"
  },
  {
    "url": "assets/js/33.5d36bdcb.js",
    "revision": "a7bd5e19c584f47f543aa48028c137f9"
  },
  {
    "url": "assets/js/34.6b566960.js",
    "revision": "f245e697040f660b3c0a292c7d131f57"
  },
  {
    "url": "assets/js/35.22a7761e.js",
    "revision": "ca86411a3ed9e5e290606a5e38e0f201"
  },
  {
    "url": "assets/js/36.06042ab2.js",
    "revision": "e8c4e24f8d8baf2340f4c2715ac8fa77"
  },
  {
    "url": "assets/js/37.60d15e72.js",
    "revision": "4b248e4ce5a86386f7d4e6e0c2747bdb"
  },
  {
    "url": "assets/js/38.40783fbe.js",
    "revision": "93d8b78c0584d49cb13612d5bfe950df"
  },
  {
    "url": "assets/js/39.ca21a3b1.js",
    "revision": "c89d0d457d14761d536bb32a0928e332"
  },
  {
    "url": "assets/js/4.011bf276.js",
    "revision": "4304a349c3841868b94f1e4eaf348e97"
  },
  {
    "url": "assets/js/40.32322c53.js",
    "revision": "f766072754265cba93a0e6799066d5cd"
  },
  {
    "url": "assets/js/41.f4a70ff8.js",
    "revision": "403e21382360d52d920c06cdad8185ad"
  },
  {
    "url": "assets/js/42.8e701dc0.js",
    "revision": "236caabe27b44c38d3383f550b55d172"
  },
  {
    "url": "assets/js/43.09aec00f.js",
    "revision": "ac2d7c9501270844e69f9059b05097bd"
  },
  {
    "url": "assets/js/44.542a3a18.js",
    "revision": "f59b47340fb0e3179b3eaab266f4fdf7"
  },
  {
    "url": "assets/js/45.6b194147.js",
    "revision": "c21d99ddfd3b19521a37a50a59ef2358"
  },
  {
    "url": "assets/js/46.e2b7b4d7.js",
    "revision": "4531297b6e36d294b0377334cc11b2a1"
  },
  {
    "url": "assets/js/47.cb094d67.js",
    "revision": "8731f7cb2ea61721b45c90123383047f"
  },
  {
    "url": "assets/js/48.8074265d.js",
    "revision": "bcff7066ab3950231c45678a8408215d"
  },
  {
    "url": "assets/js/49.c8e1479a.js",
    "revision": "a8c392180259f7c525399db0607c7c1b"
  },
  {
    "url": "assets/js/5.7c412b27.js",
    "revision": "b381fb63ab051e1142ccb5f813caefec"
  },
  {
    "url": "assets/js/50.7da169d2.js",
    "revision": "9478d61425ab7f9692a0ac602a057d24"
  },
  {
    "url": "assets/js/51.c2fa5ded.js",
    "revision": "4a871264f2edfdcc16143281d3e16897"
  },
  {
    "url": "assets/js/52.d7999550.js",
    "revision": "52731bfbac9931dc5619a0f2e0b7b8b6"
  },
  {
    "url": "assets/js/53.b06e750a.js",
    "revision": "5460a63a1c6954743af0e1c6d4d4e52d"
  },
  {
    "url": "assets/js/54.b2d8a400.js",
    "revision": "0e3b83186aafbe7ade9cab0eca6608df"
  },
  {
    "url": "assets/js/55.e693eeee.js",
    "revision": "5e92522e9425867329c4807ea9ade46d"
  },
  {
    "url": "assets/js/56.cb2f39c2.js",
    "revision": "8ba056785c943081536a48bd98ad555f"
  },
  {
    "url": "assets/js/57.965a84d2.js",
    "revision": "c4fa661244863f67bfe571f4a455d5e3"
  },
  {
    "url": "assets/js/58.c11d267d.js",
    "revision": "a3f34636c27b30cac67d2f35f76464f9"
  },
  {
    "url": "assets/js/59.c7c05775.js",
    "revision": "00cff26f1ee601ed47d0f1c4df181bea"
  },
  {
    "url": "assets/js/6.967dc075.js",
    "revision": "551519c1af87e5f0d3fc969fc9270e5c"
  },
  {
    "url": "assets/js/60.f2ef3f93.js",
    "revision": "d96fa50ba98a1512b38bd6417d17a546"
  },
  {
    "url": "assets/js/61.bc2c5753.js",
    "revision": "dfd038564de31a70aa5cdebb049115f2"
  },
  {
    "url": "assets/js/62.e8ed7791.js",
    "revision": "b8b0d18b9e1c3f6d88c22f32ba2c707b"
  },
  {
    "url": "assets/js/63.130ce3f2.js",
    "revision": "e8b46a6b2e74f12ebba8052b4eaa1c39"
  },
  {
    "url": "assets/js/64.4a01759c.js",
    "revision": "e7545cc58ef70677992882cde841a23b"
  },
  {
    "url": "assets/js/65.73a8a924.js",
    "revision": "a5e17da9eaf69f3455963c1a9fe4b3b4"
  },
  {
    "url": "assets/js/66.c1e07d6e.js",
    "revision": "eb6e00eafa9255c704573c3c862060c0"
  },
  {
    "url": "assets/js/67.9c4213a5.js",
    "revision": "b6193d841160a859873a63e44193ecab"
  },
  {
    "url": "assets/js/68.55a27243.js",
    "revision": "a3548984a1a9bdc41f8037b805f8709b"
  },
  {
    "url": "assets/js/69.e64c8c7c.js",
    "revision": "e34fdeb7b98b40139e8391a6be6cf9b6"
  },
  {
    "url": "assets/js/7.7b6b8570.js",
    "revision": "1590f8b5582c2238677415b30b86ceba"
  },
  {
    "url": "assets/js/70.c7592f5a.js",
    "revision": "10dffc920056105171fe2e8056618da2"
  },
  {
    "url": "assets/js/71.a4b0cb00.js",
    "revision": "b00a3a444480c280556af6bbf6b2cba8"
  },
  {
    "url": "assets/js/72.568de68e.js",
    "revision": "73decdb23b91b04028fbc94a9e03b9fc"
  },
  {
    "url": "assets/js/73.ab0f4540.js",
    "revision": "cb4b027fbb0df7863572cd542c138f1d"
  },
  {
    "url": "assets/js/74.1b8f9ab9.js",
    "revision": "fe4bb3d667c50a37f0e3161aa4ba8c27"
  },
  {
    "url": "assets/js/75.c61327c8.js",
    "revision": "4bbcdcf4773221126e2a8bf8e01d98bb"
  },
  {
    "url": "assets/js/76.fb86bcd6.js",
    "revision": "e415527ce6f16809fd463081bc19b24f"
  },
  {
    "url": "assets/js/77.38b79bcc.js",
    "revision": "beabcd47bc07e5e0e0b5532de8d96be0"
  },
  {
    "url": "assets/js/78.788ec8db.js",
    "revision": "4a75438a4887b19cf62f41c124aebb4f"
  },
  {
    "url": "assets/js/79.5ff8fb73.js",
    "revision": "f9f7cd5f144c73e9d7ae8474ac6a746e"
  },
  {
    "url": "assets/js/8.a561cad7.js",
    "revision": "45f647952ff6bfbf19fe21133ef88ce9"
  },
  {
    "url": "assets/js/80.d0faf731.js",
    "revision": "92418886688723d00b0e2f9aee6f0528"
  },
  {
    "url": "assets/js/81.c1147514.js",
    "revision": "e7c17bc8f604bf5b32b450e149fceb25"
  },
  {
    "url": "assets/js/82.4bc2da97.js",
    "revision": "ec994f95fc7d2173db04220416da5214"
  },
  {
    "url": "assets/js/83.58c9d453.js",
    "revision": "ca8ac40e8e2cb802032f82ad4a519eee"
  },
  {
    "url": "assets/js/84.05835d61.js",
    "revision": "a2e11e38d4a6eb10674bbc5afd732fbf"
  },
  {
    "url": "assets/js/85.a374147e.js",
    "revision": "fa182bf272cb4065f15f76568b06db24"
  },
  {
    "url": "assets/js/86.e0b980b8.js",
    "revision": "98fb2d3a951b9ab51a3c85cb0b2650e1"
  },
  {
    "url": "assets/js/87.4b2cc0e3.js",
    "revision": "505268363af66f772e965e62def59b5f"
  },
  {
    "url": "assets/js/88.3508b2d3.js",
    "revision": "ade2feb3a8671d9264c0ed19be2a16e1"
  },
  {
    "url": "assets/js/89.90211d67.js",
    "revision": "f2b3706a468a73bd0addab98173f0a89"
  },
  {
    "url": "assets/js/9.05d06254.js",
    "revision": "a404206378f50aa558d581f73f62c2c2"
  },
  {
    "url": "assets/js/90.7ff2625b.js",
    "revision": "2979e4c599065c79c87237e07f5fc748"
  },
  {
    "url": "assets/js/91.c4aae1e2.js",
    "revision": "a3cfe4cd0265e9e2c46a835b05dc30e7"
  },
  {
    "url": "assets/js/92.f4383d82.js",
    "revision": "150a5b8b75b581d00dc566a0dbe13d68"
  },
  {
    "url": "assets/js/93.a1821aac.js",
    "revision": "668a50d8b80b03d9d88124f8f7ef370e"
  },
  {
    "url": "assets/js/94.e9846816.js",
    "revision": "d7f5f7f3712dc02b5d2a1a7c56987524"
  },
  {
    "url": "assets/js/95.2c270d86.js",
    "revision": "a20cdb07a6613dde52f5f430f1eae655"
  },
  {
    "url": "assets/js/96.d11bf87b.js",
    "revision": "0c94e4d78dba7b22bd5df6542655d43b"
  },
  {
    "url": "assets/js/97.0ad200d5.js",
    "revision": "4c7b6938e32dc5bbb7f8f388fde3f203"
  },
  {
    "url": "assets/js/98.c6b5d7a8.js",
    "revision": "d24a86ef16dda39b7cbef7cb7878aeff"
  },
  {
    "url": "assets/js/99.816ec3be.js",
    "revision": "3682abe04efb5bfc83f6f456b1b69a50"
  },
  {
    "url": "assets/js/app.a4aad922.js",
    "revision": "198ed1a67c51cba724ab7e0fac3f1dbd"
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
    "url": "images/localstorage.png",
    "revision": "e642d281754b58856a93f616e496d01f"
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
    "url": "images/React Hooks - 컴포넌트 상태 (실습).gif",
    "revision": "cd20219a87ab6b8808d87f82c94dab55"
  },
  {
    "url": "images/React Hooks - 컴포넌트 상태 (실습2).gif",
    "revision": "02b53d2ad521d4df20c809336e32b3ac"
  },
  {
    "url": "images/react-diagram.jpg",
    "revision": "2cd35e009001046dc671364b67c564a6"
  },
  {
    "url": "images/react-hooks-flow.png",
    "revision": "4aa8436adb7941d88c29a1f63449c558"
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
    "url": "images/testing1.png",
    "revision": "43b063c928e48a3a3fd15221633318d5"
  },
  {
    "url": "images/testing2.png",
    "revision": "ca6ff0ef270fbc456fc763e149525dba"
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
    "revision": "8a235f655b0eae7d0c3da44783e2c14f"
  },
  {
    "url": "lecture/es-array-methods.html",
    "revision": "aa6eb141afba29af911b78ace18557ad"
  },
  {
    "url": "lecture/es-arrow-function.html",
    "revision": "16eea4e4c453fd47a3213e5e50a23119"
  },
  {
    "url": "lecture/es-default-parameters.html",
    "revision": "2f41c07bf0cc0e54f46004a2439c2413"
  },
  {
    "url": "lecture/es-destructuring-assignment.html",
    "revision": "fac49f7cb53021d253f4d6d6dd169429"
  },
  {
    "url": "lecture/es-modules.html",
    "revision": "471d3ae6b36b1238cc33de4d1690c7ca"
  },
  {
    "url": "lecture/es-nullish-coalescing-operator.html",
    "revision": "cb7cb2f003f0ebd0b34896cea48f3356"
  },
  {
    "url": "lecture/es-optional-chaning.html",
    "revision": "9aae2b92963753dc57d410c540b8f1ae"
  },
  {
    "url": "lecture/es-promises-and-async-function.html",
    "revision": "ea1ba4d5cb3715b9b7caa83e0e5ce0ac"
  },
  {
    "url": "lecture/es-rest-paramenters.html",
    "revision": "3ec6ebb5db4fb8556be75618f3e5124a"
  },
  {
    "url": "lecture/es-shorthand-property-names.html",
    "revision": "8979295b6347eca25d819ab391a32fc7"
  },
  {
    "url": "lecture/es-template-literal.html",
    "revision": "0f01b59a6bca8a3a4f0a69e83b3cf7e3"
  },
  {
    "url": "lecture/es-ternaries.html",
    "revision": "04a4fbd817041719c52b33dbd08c14f6"
  },
  {
    "url": "lecture/es.html",
    "revision": "e72d2036d13f0f1d79c6ff53e0ee99d3"
  },
  {
    "url": "lecture/fb-r-auth.html",
    "revision": "b1769105d622babeeb919c9cf45a6429"
  },
  {
    "url": "lecture/fb-r-introduction.html",
    "revision": "31dfc19d97e2a63c6333fdf4f6908617"
  },
  {
    "url": "lecture/index.html",
    "revision": "1adb15c978187f409009444cdb19c696"
  },
  {
    "url": "lecture/mini-project-config-directories.html",
    "revision": "a9a5c1ff69007d182f308e7f03206c5e"
  },
  {
    "url": "lecture/mini-project-config-head.html",
    "revision": "0fe40a0328fab353f84714c3e52131bf"
  },
  {
    "url": "lecture/mini-project-getting-started.html",
    "revision": "47ff181e0eb99fb4bbda964b493567e3"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project2-getting-started.html",
    "revision": "7d56df7ed90ff95dc1ac3229a45d8e3d"
  },
  {
    "url": "lecture/mini-project2-pay-context-beverageList.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project2-pay-custom-hook.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-app.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-beverageItem.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-gototop.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHeader.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHomeLink.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appNavigation.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/mini-project2-pay-styled-responsive.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "c0ae2ff838e72b35c2449788659f0f33"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "1467138b8c1f5d1229d6b4e6f7dd8d2b"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "20fec594c40cb8539ca7ebf6836a748a"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "38902b82378fb2cfa999ce3feae061e4"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "0eb08f787a2fd58af71a6527fda8d082"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "da726c572504e4e1e3784b7a240750ff"
  },
  {
    "url": "lecture/r-fb-hooks-getting-started.html",
    "revision": "580fc09cd8375919cc31cd8e81e94350"
  },
  {
    "url": "lecture/r-fb-pay-hooks-auth.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-immutable-managing-list.html",
    "revision": "c3ffa2511ce770549f13a945978be5fe"
  },
  {
    "url": "lecture/r-pay-advanced-patterns.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-like-redux-using-context-hooks.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-testing-library.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-pay-virtual-dom.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "619aa8142b43429abcf1291aeeb695ef"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "917d91be580e8c3f239b742702a0c773"
  },
  {
    "url": "lecture/r-version-17.html",
    "revision": "9bd6411c75e50b43b644ca33ff582d7f"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rd-pay-react-redux-hooks.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rd-pay-redux-thunk.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rd-pay-redux-toolkit.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "426a9f1ab25b383bc0d84f6ec3be4f71"
  },
  {
    "url": "lecture/rf-getting-started.html",
    "revision": "4e31f9502d174a0198f6808c12477345"
  },
  {
    "url": "lecture/rf-pay-basic-usage.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rf-pay-initialze-from-state.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rf-pay-submit-validation.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rf-pay-sync-validation.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rh-birth-of-react-hooks.html",
    "revision": "7fec037fc1d5be4ba0854d1115943c61"
  },
  {
    "url": "lecture/rh-pay-component-state.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rh-pay-side-effect.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rh-react-is-difficult.html",
    "revision": "f51c819d3a5149f02e37522177fccec4"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "dffc91fb46d279c586f0cd0e9a4e066f"
  },
  {
    "url": "lecture/sb-addons-official.html",
    "revision": "86806a84890a9b3d9c72f11ac1dd70c5"
  },
  {
    "url": "lecture/sb-addons-third-party.html",
    "revision": "6cad5f40bade3a5bcde14771c372a41c"
  },
  {
    "url": "lecture/sb-cdd.html",
    "revision": "3563c200a5c2a38a6457ff86dea32225"
  },
  {
    "url": "lecture/sb-doc-block.html",
    "revision": "68e6f1a111715edf4793b7d584de3cb5"
  },
  {
    "url": "lecture/sb-install.html",
    "revision": "019dbfec4c7a44e881bad43a79f10e8d"
  },
  {
    "url": "lecture/sb-intro.html",
    "revision": "c7e4edd1409e2e6ca374a0d05ac14ac0"
  },
  {
    "url": "lecture/sb-layout.html",
    "revision": "b11a34eddd3222afc1e6d5f52b4f0300"
  },
  {
    "url": "lecture/sb-manual-install.html",
    "revision": "da6ef85fc23500800da2b62cefb24f88"
  },
  {
    "url": "lecture/sb-story-action.html",
    "revision": "a51f7379b31be7b6421737c9ce9e9d12"
  },
  {
    "url": "lecture/sb-story-control.html",
    "revision": "8f6548e0b44dff8903c8afbcb4d11b26"
  },
  {
    "url": "lecture/sb-write-story.html",
    "revision": "3971d3fac525197beb59b12e3efb6b8d"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "0f2eb76ecbffffb43b5e8dd0f7f0ca99"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "0e56c609f1a6e1cb6b0d97dd22cb1f20"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "e0b6f197f2fcfec453b42e84122b1f85"
  },
  {
    "url": "lecture/sp-introduction.html",
    "revision": "e783cf2429994fac7af743415bf6b3ba"
  },
  {
    "url": "lecture/sp-pay-hook-api.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/su-getting-started.html",
    "revision": "3bc4cccc1673a077c472c7578c81088a"
  },
  {
    "url": "lecture/su-introduction.html",
    "revision": "d397c024ee6ab9aaaa92e93a176878a2"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
  },
  {
    "url": "payment-information.html",
    "revision": "607fe85e14d024ca86e4c633b1bf8034"
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
