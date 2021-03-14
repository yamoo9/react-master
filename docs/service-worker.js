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
    "revision": "7c7f33080585cddffeac650580bdadee"
  },
  {
    "url": "account/register.html",
    "revision": "5cbdce895484cd75ec10b85a78efa11d"
  },
  {
    "url": "account/signin.html",
    "revision": "ddd1af40dc448fee881540dc9583d8f2"
  },
  {
    "url": "account/user.html",
    "revision": "53cfe7cadaefef91be33b410258f3f13"
  },
  {
    "url": "admin/index.html",
    "revision": "75ba317d4850bb2c4213ae3f0aa2b5f0"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.c19cc652.css",
    "revision": "2edb5ad22c790df7a7c994afe20ef10c"
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
    "url": "assets/js/108.2bfdd3c0.js",
    "revision": "8033785b66346f2f5e5a769ca93600ae"
  },
  {
    "url": "assets/js/109.538693a6.js",
    "revision": "ef71285c1b4ae439fdbe225fde9b6749"
  },
  {
    "url": "assets/js/11.195c816b.js",
    "revision": "0567e6dee1f2e42e3cc815098f2f98e0"
  },
  {
    "url": "assets/js/110.52f75eef.js",
    "revision": "4f8fa021a2507d22dc48b65f0b5bb3e4"
  },
  {
    "url": "assets/js/111.e5b97340.js",
    "revision": "e131dd8402fd5cb95a6ca2e0e3dbfe7f"
  },
  {
    "url": "assets/js/112.d9cb81cb.js",
    "revision": "8fbbbe612915f8b0fc905df508753fb9"
  },
  {
    "url": "assets/js/113.b4d67b23.js",
    "revision": "cf261fef83ee8f7b7d05071793f5792a"
  },
  {
    "url": "assets/js/114.f80d7263.js",
    "revision": "2b06bed4a771e05b10a2a9d1009edc29"
  },
  {
    "url": "assets/js/115.fb068881.js",
    "revision": "cf42b74534d1284de763ac4b56aec483"
  },
  {
    "url": "assets/js/116.cdf81697.js",
    "revision": "229ad8b41cfb78b37cd3633ccf3b3da2"
  },
  {
    "url": "assets/js/117.4b3938e0.js",
    "revision": "ac5cf06951cc04365631105289a5c9a1"
  },
  {
    "url": "assets/js/118.42db4aa1.js",
    "revision": "10a9e7c61eb32266a0d003259a024c8d"
  },
  {
    "url": "assets/js/119.2d25f3cd.js",
    "revision": "c5323b959fc4d38490cac99d6e920bc9"
  },
  {
    "url": "assets/js/12.093e1e69.js",
    "revision": "24f209dacdbedd477e50463e16933c2f"
  },
  {
    "url": "assets/js/120.34b57e68.js",
    "revision": "1054c525c235e5acce79de5c00fc8edb"
  },
  {
    "url": "assets/js/121.5306c365.js",
    "revision": "8f5f6ddccd639ba7e8d9f50470b1986f"
  },
  {
    "url": "assets/js/122.46e68b30.js",
    "revision": "89fb0bb9c29d98efd083b694442afae4"
  },
  {
    "url": "assets/js/123.7777f8ce.js",
    "revision": "cb0e12018e75ba68cabed91af8b33af5"
  },
  {
    "url": "assets/js/124.e3ab6b95.js",
    "revision": "8ae57393c2651f6893d0b842cae2024c"
  },
  {
    "url": "assets/js/125.813324f0.js",
    "revision": "b7ab7e5196c756d8c4196396e43c451e"
  },
  {
    "url": "assets/js/126.96738493.js",
    "revision": "5d3282235900066cc33919a973c566a6"
  },
  {
    "url": "assets/js/127.42c2af74.js",
    "revision": "28c7655f3b42ce512cf924d09d431a56"
  },
  {
    "url": "assets/js/128.25346887.js",
    "revision": "4c4d9a149db27a19f2deb74055cab08e"
  },
  {
    "url": "assets/js/129.9ccde4b2.js",
    "revision": "dfdd14538498cbe1a781609c420be061"
  },
  {
    "url": "assets/js/13.1f44d021.js",
    "revision": "1a8e3db3a9a9fdb8f9fe262b1806f7c0"
  },
  {
    "url": "assets/js/130.5c18f69e.js",
    "revision": "dd922d8af63d7ec28b073d77dc38e82b"
  },
  {
    "url": "assets/js/131.22a61c9b.js",
    "revision": "554c06f37444b3d9a954fb414e70de61"
  },
  {
    "url": "assets/js/132.ceec19c9.js",
    "revision": "604b34bd6c22266c3dde45ac2646deb5"
  },
  {
    "url": "assets/js/133.b01ea4dd.js",
    "revision": "d2e7fea429fd198c314965ea2bc40b12"
  },
  {
    "url": "assets/js/14.f48e9298.js",
    "revision": "8639b3b657e4c35171ac33eddbd3b8ee"
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
    "url": "assets/js/17.e9bd083e.js",
    "revision": "8155d049e25b0729db1fb36c450fc2f1"
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
    "url": "assets/js/28.d07102ab.js",
    "revision": "dfb8d4df7054e9931b650c5548e7b30a"
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
    "url": "assets/js/34.7d7a9916.js",
    "revision": "a4fc62def62ec385ddd6f2724e488318"
  },
  {
    "url": "assets/js/35.e2d2b3a5.js",
    "revision": "ba2799e7d940e436f54356ff857efd62"
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
    "url": "assets/js/4.be7e7050.js",
    "revision": "b2cf9abb904b91da936a53f8cb235ba6"
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
    "url": "assets/js/46.fbfca463.js",
    "revision": "8e73b360fa6fbbbbb36355ec19bd650b"
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
    "url": "assets/js/63.6f06f304.js",
    "revision": "16e8519cc4802d64bd29df896027aa47"
  },
  {
    "url": "assets/js/64.3f405583.js",
    "revision": "fac8650308dabf515cfe91d0877a9ad4"
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
    "url": "assets/js/73.ab0f4540.js",
    "revision": "cb4b027fbb0df7863572cd542c138f1d"
  },
  {
    "url": "assets/js/74.94ef32f4.js",
    "revision": "68dd6fb3ffdcb9eccb4e206472bccf20"
  },
  {
    "url": "assets/js/75.7320a164.js",
    "revision": "d60fd4270e3dfdba90f4a1415d01d65d"
  },
  {
    "url": "assets/js/76.4b7fcda9.js",
    "revision": "39f604a1ce0da06572e766232ef42ac7"
  },
  {
    "url": "assets/js/77.d701b8d9.js",
    "revision": "9de4b82f0ee44d2c0683b4266a681994"
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
    "url": "assets/js/8.e69d0701.js",
    "revision": "9e0a7c470b2195c37418d646c0fb6da0"
  },
  {
    "url": "assets/js/80.d0faf731.js",
    "revision": "92418886688723d00b0e2f9aee6f0528"
  },
  {
    "url": "assets/js/81.febe645b.js",
    "revision": "3ae59e46d4950dfc1af86a4c7614ef6f"
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
    "url": "assets/js/87.80bafe19.js",
    "revision": "3c08730fc8efb18678d32cac55ee6f2e"
  },
  {
    "url": "assets/js/88.70899049.js",
    "revision": "8e9fa497f6396c9e5000d5e017fe771d"
  },
  {
    "url": "assets/js/89.90211d67.js",
    "revision": "f2b3706a468a73bd0addab98173f0a89"
  },
  {
    "url": "assets/js/9.918ebaf3.js",
    "revision": "f43193c9043d1eaab0eb264da2dc5063"
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
    "url": "assets/js/app.d5ce5ad9.js",
    "revision": "8827fbaa09a805b06e8e51c1d14c622c"
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
    "revision": "637c4ec1c6546368ac7d54d859e65126"
  },
  {
    "url": "lecture/es-array-methods.html",
    "revision": "7eeada9312c9e26e4ca8868fdae5ef6d"
  },
  {
    "url": "lecture/es-arrow-function.html",
    "revision": "b5b86acfb1fb22fbb75387f1a9f2e0ee"
  },
  {
    "url": "lecture/es-default-parameters.html",
    "revision": "9ef558f213eb747002a759ac881456c9"
  },
  {
    "url": "lecture/es-destructuring-assignment.html",
    "revision": "0ad19f311d4dad27d8aaa23da01b7d67"
  },
  {
    "url": "lecture/es-modules.html",
    "revision": "a07dc339eefc4c35fca80046d2d85200"
  },
  {
    "url": "lecture/es-nullish-coalescing-operator.html",
    "revision": "19851aff640929138032776b1bedac33"
  },
  {
    "url": "lecture/es-optional-chaning.html",
    "revision": "4b0edbaa0c5292a3e16dcc57e9a9d8bf"
  },
  {
    "url": "lecture/es-promises-and-async-function.html",
    "revision": "e001872cdb725b23525bcb23de366b53"
  },
  {
    "url": "lecture/es-rest-paramenters.html",
    "revision": "af99ec96357f387c14647cbea8d621e2"
  },
  {
    "url": "lecture/es-shorthand-property-names.html",
    "revision": "b61dcc3a7a19f8a0d1aee3c8ffe57304"
  },
  {
    "url": "lecture/es-template-literal.html",
    "revision": "e21c8678abd72ea45d18f8e6279d504b"
  },
  {
    "url": "lecture/es-ternaries.html",
    "revision": "358be2a548309b225eaac8dc2e93881f"
  },
  {
    "url": "lecture/es.html",
    "revision": "7a62c5a6cb9c2a612e552d03e0857616"
  },
  {
    "url": "lecture/fb-r-auth.html",
    "revision": "0cebca2e92977846fb8783bac3389c5e"
  },
  {
    "url": "lecture/fb-r-introduction.html",
    "revision": "0e5c524bf76cbadaf914d43a42be28ea"
  },
  {
    "url": "lecture/index.html",
    "revision": "819e4a4499a4addcdfd2a3d96290d111"
  },
  {
    "url": "lecture/mini-project-config-directories.html",
    "revision": "3f7935d7683b3e4e9d1416444334ffbd"
  },
  {
    "url": "lecture/mini-project-config-head.html",
    "revision": "3c41561957e0af0d644aafa5e1c8fd7e"
  },
  {
    "url": "lecture/mini-project-getting-started.html",
    "revision": "3ea337eda5a7190a32bb38685b32ffd1"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project2-getting-started.html",
    "revision": "8ccdae494686b6cf2b3bd670edf99e98"
  },
  {
    "url": "lecture/mini-project2-pay-context-beverageList.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project2-pay-custom-hook.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-app.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-beverageItem.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-gototop.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHeader.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHomeLink.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appNavigation.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/mini-project2-pay-styled-responsive.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "f88498cc09cac12711ffb4ef0fb5f005"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "25a12e9cbf879645e15cc17c1396a84a"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "108ee2e232a06821d7e50e0f20077344"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "712f7ad1348f9dfdf76554873abf080d"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "c57a6c8989b576bad782d38d115f0605"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "9f1a24cbc4d2387dd272bd7ac17e4f28"
  },
  {
    "url": "lecture/r-fb-hooks-getting-started.html",
    "revision": "49d946d60bdf60f44e6b8e027abad74b"
  },
  {
    "url": "lecture/r-fb-pay-hooks-auth.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-immutable-managing-list.html",
    "revision": "27c88e49b82b7104430af4a2e394f8b6"
  },
  {
    "url": "lecture/r-pay-advanced-patterns.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-like-redux-using-context-hooks.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-testing-library.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-pay-virtual-dom.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "2351222d8dd422808ce3733235873acd"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "a2e9c131520129d0acaf2c38aff30528"
  },
  {
    "url": "lecture/r-version-17.html",
    "revision": "f56bffd0639c13f7044d32b6c44a2f19"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rd-pay-react-redux-hooks.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rd-pay-redux-thunk.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rd-pay-redux-toolkit.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "06028c8bc57d31dd5d0c39c73ba1acd6"
  },
  {
    "url": "lecture/rf-getting-started.html",
    "revision": "596157c8ffd7aff29bef9af8424019c3"
  },
  {
    "url": "lecture/rf-pay-basic-usage.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rf-pay-initialze-from-state.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rf-pay-submit-validation.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rf-pay-sync-validation.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "013811781a5ea34e634a8c076c5a5345"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "9c19c1c247c11854feb6ebb0cf031817"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "9d9c1169ac9c7d7b13812bde3e5e1942"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "085763191450276fadefc26980636918"
  },
  {
    "url": "lecture/sp-introduction.html",
    "revision": "8a88e0705fd224bf824ec2627c049b21"
  },
  {
    "url": "lecture/sp-pay-hook-api.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/su-getting-started.html",
    "revision": "54ff25a01dd9db33f0fbe4418c98a4a2"
  },
  {
    "url": "lecture/su-introduction.html",
    "revision": "709cdb5fa5498fed1f80c63921dffba9"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
  },
  {
    "url": "payment-information.html",
    "revision": "639d427dfc3f2d4278324fd277b418da"
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
