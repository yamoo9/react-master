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
    "revision": "a4d219664797143f0747ad850ff0a775"
  },
  {
    "url": "account/register.html",
    "revision": "97a52bb7f93cd3b8440e11b3d8b4ecfa"
  },
  {
    "url": "account/signin.html",
    "revision": "86488b8ad464d024fdee61b48ea77ef3"
  },
  {
    "url": "account/user.html",
    "revision": "2b6af6fda2eeec5dfdee68f3e3db4360"
  },
  {
    "url": "admin/index.html",
    "revision": "dfe76c506f1a8c12d5589988e40bbdfd"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.2fcd3ea0.css",
    "revision": "9f506299ab8d4a0be6b3841652253953"
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
    "url": "assets/js/103.f068f5e8.js",
    "revision": "8ad338bdf5afd9ca0e8fc36d3e211400"
  },
  {
    "url": "assets/js/104.754978ef.js",
    "revision": "3e4668c6bea9135d1182e5750b9f5558"
  },
  {
    "url": "assets/js/105.63c1efcf.js",
    "revision": "b44c41ff6b093330d606403ff2111dc9"
  },
  {
    "url": "assets/js/106.ac6cd930.js",
    "revision": "961c2cd21e33f6f014967534b83ce22c"
  },
  {
    "url": "assets/js/107.d04b4321.js",
    "revision": "940717dd3db71f5e874b7a0ddd4746dc"
  },
  {
    "url": "assets/js/108.1f7a1e41.js",
    "revision": "df96d814e7ae69cdebc36be33b636f81"
  },
  {
    "url": "assets/js/109.aa1f2d97.js",
    "revision": "7104ed1d6b61f661732e3db397058073"
  },
  {
    "url": "assets/js/11.2473452c.js",
    "revision": "2be11e93dc8c10586afcd6579e74771b"
  },
  {
    "url": "assets/js/110.541ffa0e.js",
    "revision": "73256aa8cae8c47963986f0f6050a75d"
  },
  {
    "url": "assets/js/111.c41bf6c5.js",
    "revision": "e04d026e33dc9de67611040de76a79be"
  },
  {
    "url": "assets/js/112.cfde482f.js",
    "revision": "4b748188118f319b23cfbb11a6389683"
  },
  {
    "url": "assets/js/113.3e93b6b8.js",
    "revision": "373c2da0d2df6661d1fa26b2a4de182e"
  },
  {
    "url": "assets/js/114.c69715bd.js",
    "revision": "d3197bdc95c6318825cdec2c7ef141d0"
  },
  {
    "url": "assets/js/115.ed749b13.js",
    "revision": "7283f005d713fbfaa6f14ee7672cdd05"
  },
  {
    "url": "assets/js/116.67fea570.js",
    "revision": "24fac0604df1dffa40a871376fe46f1e"
  },
  {
    "url": "assets/js/117.414338b8.js",
    "revision": "1cbf1be307fc61512c858bf251d6c298"
  },
  {
    "url": "assets/js/118.df02f16a.js",
    "revision": "f44855d5225f123b9fd312f75d5ae4b7"
  },
  {
    "url": "assets/js/119.0dc43988.js",
    "revision": "ef2729b2df1710ffc89ae69e4f4218a0"
  },
  {
    "url": "assets/js/12.61cc7ba5.js",
    "revision": "6e2c4078dedca7764b13be55372e07ce"
  },
  {
    "url": "assets/js/120.894b8a3c.js",
    "revision": "b7bf69642414c937b10bd68c1d33fb28"
  },
  {
    "url": "assets/js/121.75f0fe80.js",
    "revision": "099db6a050598be6278290a8cc1d73a5"
  },
  {
    "url": "assets/js/122.5b5a175e.js",
    "revision": "8cd7f9369f0aa7749c481b37cb0ce507"
  },
  {
    "url": "assets/js/123.a8ceb924.js",
    "revision": "2971d97bdc9fd47248c453f823b0e6a0"
  },
  {
    "url": "assets/js/124.1f8c2a86.js",
    "revision": "8ddbcc441e913901f6ae516d7a4af43e"
  },
  {
    "url": "assets/js/125.067195d1.js",
    "revision": "2958190918a78b0f6d7fda1be4e725c4"
  },
  {
    "url": "assets/js/126.21be27ae.js",
    "revision": "ea5ecca1d54c1eaa3d3ecb4442ed1bff"
  },
  {
    "url": "assets/js/127.4bdea4db.js",
    "revision": "eeaaa74515762311d1bee95039ab2a0f"
  },
  {
    "url": "assets/js/128.173f4dfe.js",
    "revision": "39bb2b6ed0084569d04d49de5918a7ec"
  },
  {
    "url": "assets/js/129.8e0c6ccc.js",
    "revision": "ad058ef905975763ac09f2656250ea83"
  },
  {
    "url": "assets/js/13.1f44d021.js",
    "revision": "1a8e3db3a9a9fdb8f9fe262b1806f7c0"
  },
  {
    "url": "assets/js/130.6a579c41.js",
    "revision": "9adde3ad3ff01cc5307bf72286113a3e"
  },
  {
    "url": "assets/js/131.a2346c26.js",
    "revision": "06c132f775f23d7a6ea11d39b6ad2f1a"
  },
  {
    "url": "assets/js/132.b4fcb9e0.js",
    "revision": "3acc652219e2225be02dbfae089104e7"
  },
  {
    "url": "assets/js/133.7296af12.js",
    "revision": "1ddbc92b76cb4fcd79cbef33d8074230"
  },
  {
    "url": "assets/js/134.4b3a120a.js",
    "revision": "a6347f6a2380b60841b352780a90dbeb"
  },
  {
    "url": "assets/js/135.238267eb.js",
    "revision": "47b74a437314a2d5ce512e7827cdae40"
  },
  {
    "url": "assets/js/136.30895422.js",
    "revision": "1d697260e11cebc2e46f8010ed281257"
  },
  {
    "url": "assets/js/137.5af8b3f5.js",
    "revision": "f28297eb98cc744a9533d0631a3b24cc"
  },
  {
    "url": "assets/js/138.ccde997d.js",
    "revision": "ff9ce79fe8fb28835b4d854aca12c8fc"
  },
  {
    "url": "assets/js/139.004f22e1.js",
    "revision": "8a4af2fdfea86ed5509307b1ca8e1803"
  },
  {
    "url": "assets/js/14.e33cfe3d.js",
    "revision": "c7e799c688dd94f66eb495ef15555446"
  },
  {
    "url": "assets/js/140.9df278fa.js",
    "revision": "b4a279b4c55771ae17ca8211a1113ced"
  },
  {
    "url": "assets/js/141.1a8fc93a.js",
    "revision": "b5f740e508fa1a68e94a9318afe74d81"
  },
  {
    "url": "assets/js/142.e06019ac.js",
    "revision": "e8cf988fc6359895726f1ac4bf97fd42"
  },
  {
    "url": "assets/js/143.e3e0f813.js",
    "revision": "3580c76ee59da894d035d472134fbd96"
  },
  {
    "url": "assets/js/144.dc6a66a5.js",
    "revision": "33e1b5d2459fa683c1fa4e0260902cff"
  },
  {
    "url": "assets/js/15.401c5dea.js",
    "revision": "f9490522ff6381e22c3372fc36df4724"
  },
  {
    "url": "assets/js/16.41b2c9cc.js",
    "revision": "18ede1e632b887f563ef5e5017935f3a"
  },
  {
    "url": "assets/js/17.e9bd083e.js",
    "revision": "8155d049e25b0729db1fb36c450fc2f1"
  },
  {
    "url": "assets/js/18.5e62d92a.js",
    "revision": "6dd0a8cb7991a409c366a807406131d4"
  },
  {
    "url": "assets/js/19.1611c9d6.js",
    "revision": "c0f3036c9bbffac136b4ff7ec0155944"
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
    "url": "assets/js/28.0ffa6d05.js",
    "revision": "d2b24f2c3da94db6974bfc963cb30368"
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
    "url": "assets/js/50.fd5ac761.js",
    "revision": "8de0e90a788578e3ffb3576ad5690255"
  },
  {
    "url": "assets/js/51.3b5ffdb4.js",
    "revision": "cd00a60e037b5f45a03149c9c5aa1cc8"
  },
  {
    "url": "assets/js/52.05e52e9e.js",
    "revision": "7a080dc8ec0bf47163e4396f7bfb78fa"
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
    "url": "assets/js/59.3c7eb778.js",
    "revision": "129db78995459fd1150e988545d6efb7"
  },
  {
    "url": "assets/js/6.f4dc4759.js",
    "revision": "3a1055e18fab9176a2f61128a127a27f"
  },
  {
    "url": "assets/js/60.7aef3202.js",
    "revision": "11d16969ab2022f3773bef53e4d20f69"
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
    "url": "assets/js/64.1fd4dd65.js",
    "revision": "79a4c07a52532149e08b76a9f6ff984f"
  },
  {
    "url": "assets/js/65.b64baf7c.js",
    "revision": "dcae69996faa8eccac9d206e87f18b3b"
  },
  {
    "url": "assets/js/66.0b1aaf6b.js",
    "revision": "cf9c2047a59d9f02e3a1e4c367cfa637"
  },
  {
    "url": "assets/js/67.a79bd7a5.js",
    "revision": "6c7ec4dc39863458b3e53c4383dafb67"
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
    "url": "assets/js/73.50e7adbd.js",
    "revision": "3dced2ce677125aa09363db1a905223b"
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
    "url": "assets/js/81.d489c9bf.js",
    "revision": "be1f31eb47b9857fdd89fddb4b71567d"
  },
  {
    "url": "assets/js/82.de1acd5f.js",
    "revision": "c60565447556ae43352535432b165324"
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
    "url": "assets/js/87.80bafe19.js",
    "revision": "3c08730fc8efb18678d32cac55ee6f2e"
  },
  {
    "url": "assets/js/88.70899049.js",
    "revision": "8e9fa497f6396c9e5000d5e017fe771d"
  },
  {
    "url": "assets/js/89.ee9b936a.js",
    "revision": "4e00ad62e10845bef08c0704f30b254c"
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
    "url": "assets/js/app.cee99df1.js",
    "revision": "b1ac314dfed8bcc19acf4a5a5259bc68"
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
    "revision": "63f20d29260a21b86031adec90654fd5"
  },
  {
    "url": "lecture/es-array-methods.html",
    "revision": "91580ff8a77d2fe18749d6c914e4cb06"
  },
  {
    "url": "lecture/es-arrow-function.html",
    "revision": "06e712b9938785ef7b72c069c7d520d5"
  },
  {
    "url": "lecture/es-default-parameters.html",
    "revision": "69c589c1dcfad59c5d5d8d02a7b5d7a3"
  },
  {
    "url": "lecture/es-destructuring-assignment.html",
    "revision": "00d8b4f5b18ef5490f03517170978b95"
  },
  {
    "url": "lecture/es-modules.html",
    "revision": "dcfeddeedb57126a3635fa8bd4bc3e3e"
  },
  {
    "url": "lecture/es-nullish-coalescing-operator.html",
    "revision": "08e533c0463b0a8f911b17e5528f913a"
  },
  {
    "url": "lecture/es-optional-chaning.html",
    "revision": "75fa3d060b7cc1f9ea344a9583071efe"
  },
  {
    "url": "lecture/es-promises-and-async-function.html",
    "revision": "c8598bddf1561e2f9431a0d387113dc1"
  },
  {
    "url": "lecture/es-rest-paramenters.html",
    "revision": "d1d98489ce8e1afec81f1f77a7481a6b"
  },
  {
    "url": "lecture/es-shorthand-property-names.html",
    "revision": "56c45316bbc16742691117a8423c19ae"
  },
  {
    "url": "lecture/es-template-literal.html",
    "revision": "cea9965f4531acdc15291e9c90652aaa"
  },
  {
    "url": "lecture/es-ternaries.html",
    "revision": "08875152b06a2b1266bd7270933daea6"
  },
  {
    "url": "lecture/es.html",
    "revision": "b952c4120062c9fee91ef50834e3ee93"
  },
  {
    "url": "lecture/fb-r-auth.html",
    "revision": "993c31ae12c13a0cf61f902e833dc465"
  },
  {
    "url": "lecture/fb-r-introduction.html",
    "revision": "177d4217abf9cd81c9cacbfe2db827f9"
  },
  {
    "url": "lecture/index.html",
    "revision": "24b5530956ccbe21b65e42ff979a7af8"
  },
  {
    "url": "lecture/mini-project-config-directories.html",
    "revision": "3f8a366755c84063cda97469dfa36364"
  },
  {
    "url": "lecture/mini-project-config-head.html",
    "revision": "d27c01672d944312bf5cfe42b3cfed97"
  },
  {
    "url": "lecture/mini-project-getting-started.html",
    "revision": "21483903d48ff17247be623af66a0230"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project2-getting-started.html",
    "revision": "333c8509897bf546454b0e07edd7f277"
  },
  {
    "url": "lecture/mini-project2-pay-context-beverageList.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project2-pay-custom-hook.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-app.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-beverageItem.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-gototop.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHeader.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHomeLink.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appNavigation.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/mini-project2-pay-styled-responsive.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "6f1acb2a1b18ec2a130b1fa0622df2ec"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "25aa118eab9e62169676f93cccf1da72"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "fea830c7d59e7ea3f30129df543e1906"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "2e301057d5b7e58adc4865e32a8be0cf"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "fb19e3ce488e06066fdfe018fb199c7a"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "8891e2c40c7c791b130da11a9f40841f"
  },
  {
    "url": "lecture/r-fb-hooks-getting-started.html",
    "revision": "cc491cdfd94b9ebaa93e9136632ee35a"
  },
  {
    "url": "lecture/r-fb-pay-hooks-auth.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-immutable-managing-list.html",
    "revision": "69e9a8a974f5a4d3577b548ba9936271"
  },
  {
    "url": "lecture/r-pay-advanced-patterns.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-like-redux-using-context-hooks.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-testing-library.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-pay-virtual-dom.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "dedfb718311d437a3c394a0ff5b4c013"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "d31494d1ae4c58766631de4bdff633bf"
  },
  {
    "url": "lecture/r-version-17.html",
    "revision": "e9717fee6259678db68d6c600234707d"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rd-pay-react-redux-hooks.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rd-pay-redux-thunk.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rd-pay-redux-toolkit.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "0f7d123b9c45485de262c8fee900069f"
  },
  {
    "url": "lecture/rf-getting-started.html",
    "revision": "d8205cfc2b08e0ad077fdb677f055649"
  },
  {
    "url": "lecture/rf-pay-basic-usage.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rf-pay-initialze-from-state.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rf-pay-submit-validation.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rf-pay-sync-validation.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "acde512b6748cead5ec9b6af7b96784e"
  },
  {
    "url": "lecture/sb-addons-official.html",
    "revision": "4ae4c5bb527504afad2888758cc3a3d9"
  },
  {
    "url": "lecture/sb-addons-third-party.html",
    "revision": "c61cd8d5b649df06f487474c5e1b18fd"
  },
  {
    "url": "lecture/sb-cdd.html",
    "revision": "7993441e54650626155ad199b056dad4"
  },
  {
    "url": "lecture/sb-doc-block.html",
    "revision": "28e59bd8c2c0d56ca67392f3c4841b36"
  },
  {
    "url": "lecture/sb-install.html",
    "revision": "2e432e5cc403db0d0dbf3175025acd4a"
  },
  {
    "url": "lecture/sb-intro.html",
    "revision": "641f956ef6b05de834e9ef76d949ce4d"
  },
  {
    "url": "lecture/sb-layout.html",
    "revision": "f6b7faec43127a06332c463b5bd944ce"
  },
  {
    "url": "lecture/sb-manual-install.html",
    "revision": "9ba5fb185cadb8e5b223ab2cfe1d6b5a"
  },
  {
    "url": "lecture/sb-story-action.html",
    "revision": "afd8ceb0e8b346e4bfeefc31beced9da"
  },
  {
    "url": "lecture/sb-story-control.html",
    "revision": "5680067c26e610695b577e57472ea614"
  },
  {
    "url": "lecture/sb-write-story.html",
    "revision": "b16e9189f1326b431cd637df54567d5d"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "aebb0ca9071de96544c0275bbd4f400b"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "e1fdb67d84d7391792196c12c09430d0"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "822a92037800ee2e0cad06ddebd188d3"
  },
  {
    "url": "lecture/sp-introduction.html",
    "revision": "537f4108e689fce88f2b8a1aa0269c96"
  },
  {
    "url": "lecture/sp-pay-hook-api.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/su-getting-started.html",
    "revision": "0fd3fa7a711f05ddaf8931602435bb37"
  },
  {
    "url": "lecture/su-introduction.html",
    "revision": "e3a3b08f493057b40d315a6a61823715"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "3053264fd0af68f5187113df048daa08"
  },
  {
    "url": "payment-information.html",
    "revision": "3053264fd0af68f5187113df048daa08"
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
