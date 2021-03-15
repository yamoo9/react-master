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
    "revision": "c05b63e1fe9d6c9225ac11b8ce9a32d8"
  },
  {
    "url": "account/register.html",
    "revision": "02683f217829cd45f80660e2d2ed0309"
  },
  {
    "url": "account/signin.html",
    "revision": "6c9ea57919699db89300bf7a08af92db"
  },
  {
    "url": "account/user.html",
    "revision": "b7173691745240096c6229eebd674c3f"
  },
  {
    "url": "admin/index.html",
    "revision": "ce80a9fbbbc0b9f4ece406cc8ce07b26"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.18479520.css",
    "revision": "6f83fb2a8590625f2e949ca9445da79d"
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
    "url": "assets/js/100.1c95a637.js",
    "revision": "ceb4fc08138150f3c2344988806e8839"
  },
  {
    "url": "assets/js/101.23477a65.js",
    "revision": "c9072fa54ab78748bdd6be131f6d6cfe"
  },
  {
    "url": "assets/js/102.f1b4931e.js",
    "revision": "8fcc931cdb817226af4124710a0c1dee"
  },
  {
    "url": "assets/js/103.dc6e09a2.js",
    "revision": "c978584ccec8be98237b1d29d3c26bee"
  },
  {
    "url": "assets/js/104.bc2124cc.js",
    "revision": "59f804a09242524570c27c4def8f280b"
  },
  {
    "url": "assets/js/105.309da48b.js",
    "revision": "32cb37c747f5b3829d8d5eda353a9a7f"
  },
  {
    "url": "assets/js/106.02683993.js",
    "revision": "a951c41117895b65f237a168cee5fdb6"
  },
  {
    "url": "assets/js/107.9b9e0230.js",
    "revision": "7ba23be45d7d398cd2f68b43855686ac"
  },
  {
    "url": "assets/js/108.e4e8d277.js",
    "revision": "6bc6b67c545c5a5ed6f3afd5932a2632"
  },
  {
    "url": "assets/js/109.f5649805.js",
    "revision": "3323e55c66c2d2e998b5bcceda19448b"
  },
  {
    "url": "assets/js/11.30e2a3ac.js",
    "revision": "ede176b3a389d223688fc9b52a70fb8c"
  },
  {
    "url": "assets/js/110.bec1122b.js",
    "revision": "803d3a9cf5ea5b1fce9106c983f2010e"
  },
  {
    "url": "assets/js/111.c6ce7e0e.js",
    "revision": "4adb5677d2b145aaa7d8c48b848c92e5"
  },
  {
    "url": "assets/js/112.96d774e1.js",
    "revision": "b6163625d9ed1b01541c491efa1d4726"
  },
  {
    "url": "assets/js/113.fe816c09.js",
    "revision": "2157c562e7db2a1d11f93cca1399f31a"
  },
  {
    "url": "assets/js/114.6eb99f97.js",
    "revision": "f680cff9fc7dd2c2e6561cd0b83cb8cb"
  },
  {
    "url": "assets/js/115.4cf1709d.js",
    "revision": "b80f97930bbe2e68f0159fae8ab7e702"
  },
  {
    "url": "assets/js/116.ed838cc8.js",
    "revision": "964c057835aec7b019502dbbd76dceaf"
  },
  {
    "url": "assets/js/117.97e0f754.js",
    "revision": "1d55bcf665fb26172ee7e949476d28b7"
  },
  {
    "url": "assets/js/118.bd962f9d.js",
    "revision": "b535843b1cf3a502c4adf0093a7edb20"
  },
  {
    "url": "assets/js/119.170bbc5c.js",
    "revision": "8d7898c5733c1e8854047a1bab721c7a"
  },
  {
    "url": "assets/js/12.40c5fb71.js",
    "revision": "a5e5f42224c8ccc3db6173f888b5da43"
  },
  {
    "url": "assets/js/120.8e983706.js",
    "revision": "04dcec15170b061abfea2a08f20d5b9c"
  },
  {
    "url": "assets/js/121.28141c9d.js",
    "revision": "082c4729c2ca89863a11048fe5bfeca0"
  },
  {
    "url": "assets/js/122.f7779593.js",
    "revision": "ac196d660c1ba7125e5bdb05c516a5b3"
  },
  {
    "url": "assets/js/123.1c2077b8.js",
    "revision": "ccdd0a7141a02e031658ef652b97dbe0"
  },
  {
    "url": "assets/js/124.70d891d4.js",
    "revision": "5b33e5f6ed4ff9ac9ad9dafc47489346"
  },
  {
    "url": "assets/js/125.4767fcc5.js",
    "revision": "2fcd2f31ae44e022a3fcfbe64607f4ec"
  },
  {
    "url": "assets/js/126.dcb4f3b7.js",
    "revision": "4617ef3aad1a1b6e5b6fa96a98950264"
  },
  {
    "url": "assets/js/127.6743d225.js",
    "revision": "a1d20224f92ce66c90413bd38eefce4b"
  },
  {
    "url": "assets/js/128.0f64bca2.js",
    "revision": "f2e367f2bc590a50f0c42a084c6c5e79"
  },
  {
    "url": "assets/js/129.44db4e26.js",
    "revision": "cc7d003458b53436fe552c968addb957"
  },
  {
    "url": "assets/js/13.1f44d021.js",
    "revision": "1a8e3db3a9a9fdb8f9fe262b1806f7c0"
  },
  {
    "url": "assets/js/130.c314e6a9.js",
    "revision": "93d6a667050bbd482c898375f9753e56"
  },
  {
    "url": "assets/js/131.300fbf9b.js",
    "revision": "57f6c0dd41988c3792e80c5385f05594"
  },
  {
    "url": "assets/js/132.1dfbb517.js",
    "revision": "9d4c6bd95d7eae8ff20e34cec0c1295d"
  },
  {
    "url": "assets/js/133.8de739f6.js",
    "revision": "be0d0919c64e9296dd77c0b65f8121b4"
  },
  {
    "url": "assets/js/134.e1a0397b.js",
    "revision": "4fda8e29aee23c2f69e6482de719a395"
  },
  {
    "url": "assets/js/135.73501e2e.js",
    "revision": "6d72403a5fde4e8e56411d84a071e1d9"
  },
  {
    "url": "assets/js/136.a3e5a622.js",
    "revision": "b9467322ef57b2dfcbc063fdeced29d6"
  },
  {
    "url": "assets/js/137.252b364c.js",
    "revision": "986f29315b58e3a2ed37c99d0bfea43c"
  },
  {
    "url": "assets/js/138.08242675.js",
    "revision": "7cb48fa4c4fe623a61630badc48d126d"
  },
  {
    "url": "assets/js/139.e36dbc43.js",
    "revision": "056d6b5bc25b3fbba9f7a832222390a4"
  },
  {
    "url": "assets/js/14.f48e9298.js",
    "revision": "8639b3b657e4c35171ac33eddbd3b8ee"
  },
  {
    "url": "assets/js/140.2eddcfdf.js",
    "revision": "eeaaea2cf111963762067dbfdab4cd95"
  },
  {
    "url": "assets/js/141.b1a67cc8.js",
    "revision": "7e6e32c66f2d473e9ae1166df1ba99ed"
  },
  {
    "url": "assets/js/142.26c9bb98.js",
    "revision": "d94a0383d092204825ca9cf7e7665bc4"
  },
  {
    "url": "assets/js/143.6ac7907f.js",
    "revision": "f0734152191405dc54c3f6e4829b6a13"
  },
  {
    "url": "assets/js/144.ef7d9e57.js",
    "revision": "2b5b2a0559cd403ca3f10e985b6d5ade"
  },
  {
    "url": "assets/js/145.0a74dc54.js",
    "revision": "c5b24aef052aba07e00f5b2fbd4bae72"
  },
  {
    "url": "assets/js/146.e9004a3a.js",
    "revision": "c83aadcd87943797f85e25a764d15a93"
  },
  {
    "url": "assets/js/147.a29e8319.js",
    "revision": "de40ee21d2077c1f7293f2549d8c4c03"
  },
  {
    "url": "assets/js/148.d70fdf7d.js",
    "revision": "ce16b593d078bbcce4269584d90d56fa"
  },
  {
    "url": "assets/js/149.9919e46a.js",
    "revision": "d72abe6b6a4e2f8d2c62f0066a994eb9"
  },
  {
    "url": "assets/js/15.c6b6eb70.js",
    "revision": "1cbcdbc150a9cf875c2a4a3f5c4f8ba2"
  },
  {
    "url": "assets/js/150.0acd51f5.js",
    "revision": "ca4b6d7020c43fb544af8bbfac7ea198"
  },
  {
    "url": "assets/js/151.7422b815.js",
    "revision": "e2c2d3da86ce32b7415841bccfd2079d"
  },
  {
    "url": "assets/js/152.a393d9da.js",
    "revision": "9772ea06042b03f6fe0babc55908a67f"
  },
  {
    "url": "assets/js/16.ee830940.js",
    "revision": "b06caea91c74e41cc6663b25a1761104"
  },
  {
    "url": "assets/js/17.2d3cdb81.js",
    "revision": "39ad22d99a14f3b3522005b1ea087f8f"
  },
  {
    "url": "assets/js/18.5e62d92a.js",
    "revision": "6dd0a8cb7991a409c366a807406131d4"
  },
  {
    "url": "assets/js/19.5f7dd5c9.js",
    "revision": "acad6b0847e50d7b1a12f3ed116cc766"
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
    "url": "assets/js/4.be7e7050.js",
    "revision": "b2cf9abb904b91da936a53f8cb235ba6"
  },
  {
    "url": "assets/js/40.c242fe17.js",
    "revision": "f4d2785779423cc0449d448026b35827"
  },
  {
    "url": "assets/js/41.c78f6e9e.js",
    "revision": "33e8da95088a99bb6a211cee6890506a"
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
    "url": "assets/js/7.09255537.js",
    "revision": "99c53570e2c90978e2762b7d864b00b7"
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
    "url": "assets/js/9.a21a175f.js",
    "revision": "86b0e7c3221fe3588522a21db70d4953"
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
    "url": "assets/js/96.2fb3b983.js",
    "revision": "311a5b84b6057d5f452533efd9033b4f"
  },
  {
    "url": "assets/js/97.0fd8fe74.js",
    "revision": "26a8211cf8cb8804ef79a534af31abd5"
  },
  {
    "url": "assets/js/98.5003950c.js",
    "revision": "32614e99ee514fb1a280712265802e9a"
  },
  {
    "url": "assets/js/99.ab3077a0.js",
    "revision": "c39fd5f10c515abb8a3567b9d53eec31"
  },
  {
    "url": "assets/js/app.5e8cf47b.js",
    "revision": "614d829e3763a5b945c8136ab462d1a1"
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
    "url": "images/pokemon.png",
    "revision": "54b47cf1bfb4903e354f4dace16e01d8"
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
    "url": "images/tic-tac-toe.png",
    "revision": "2e5bf5c8826936467be30c4c380057b6"
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
    "url": "images/vanilla-tilt.gif",
    "revision": "7da3adee41617882d73c854377cbae32"
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
    "revision": "3eb7265e2e51462c795ba28fa91b313d"
  },
  {
    "url": "lecture/es-array-methods.html",
    "revision": "2713ba3f8fe31fe44ae3143c8ade476b"
  },
  {
    "url": "lecture/es-arrow-function.html",
    "revision": "908cb714b429a8e58ac4574ed06b2e96"
  },
  {
    "url": "lecture/es-default-parameters.html",
    "revision": "9d6769f2cea95eedc1cf2570721ccd39"
  },
  {
    "url": "lecture/es-destructuring-assignment.html",
    "revision": "99a514b1f1a05ac697b052439f043808"
  },
  {
    "url": "lecture/es-modules.html",
    "revision": "6190a11d2d523ba6d7edbcaf7adbe5a9"
  },
  {
    "url": "lecture/es-nullish-coalescing-operator.html",
    "revision": "ef08378c1f9f20537aa609bf51c53fd9"
  },
  {
    "url": "lecture/es-optional-chaning.html",
    "revision": "8f01b3b267863cc26df33a951e35edc2"
  },
  {
    "url": "lecture/es-promises-and-async-function.html",
    "revision": "ee94f65c3da0182a7be57d219dd21d08"
  },
  {
    "url": "lecture/es-rest-paramenters.html",
    "revision": "e02a6d0ca39ff72a0e0a01325f5996c4"
  },
  {
    "url": "lecture/es-shorthand-property-names.html",
    "revision": "5bfc50347b9e18c58a87cb97626eaa44"
  },
  {
    "url": "lecture/es-template-literal.html",
    "revision": "15b0930569f7b3f96f494c096c0aa68f"
  },
  {
    "url": "lecture/es-ternaries.html",
    "revision": "c5af72f28e982dfd992851f3006c763e"
  },
  {
    "url": "lecture/es.html",
    "revision": "6195306bed3fd3f01b916a7a2483f464"
  },
  {
    "url": "lecture/fb-r-auth.html",
    "revision": "b5c3e884b3b7adc53d9accffb594d159"
  },
  {
    "url": "lecture/fb-r-introduction.html",
    "revision": "58fd57485365c073ea27a544a53c5737"
  },
  {
    "url": "lecture/index.html",
    "revision": "d60e2d833e184afbc57fb0fb37dc4315"
  },
  {
    "url": "lecture/mini-project-config-directories.html",
    "revision": "0d3710d66ca078d619033aaaf3a20d31"
  },
  {
    "url": "lecture/mini-project-config-head.html",
    "revision": "ab16b6314e8481ebcf5d670a20ed5e05"
  },
  {
    "url": "lecture/mini-project-getting-started.html",
    "revision": "b54c1a167f64c3a3b02e13bfab5d32e8"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project2-getting-started.html",
    "revision": "5a29f559f68d3ad468614f41d7aafdce"
  },
  {
    "url": "lecture/mini-project2-pay-context-beverageList.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project2-pay-custom-hook.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-app.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-beverageItem.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-gototop.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHeader.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHomeLink.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appNavigation.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/mini-project2-pay-styled-responsive.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "64e94fa383eb52e4945c427c9cf12d4c"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "7f0b15a95dc20a9b5551d486964b31e4"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "7239a3fcd1b2690b336832ca76b5d751"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "728333ee17dd0202eefd269603a8447f"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "5c09953f2b702f09bb3385befe0859dd"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "46db9d32d7fc066825aa6e77feb2bc8a"
  },
  {
    "url": "lecture/r-fb-hooks-getting-started.html",
    "revision": "088a9ef94863bb6a29032f6406890e3c"
  },
  {
    "url": "lecture/r-fb-pay-hooks-auth.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-immutable-managing-list.html",
    "revision": "e607ad10356c1f0bcba890be84b44f8c"
  },
  {
    "url": "lecture/r-pay-advanced-patterns.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-like-redux-using-context-hooks.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-testing-library.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-pay-virtual-dom.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "3f3cf2c1a8065c996ec1878983181d8e"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "63cbcb87df3bfb07ed6e086af30172c8"
  },
  {
    "url": "lecture/r-version-17.html",
    "revision": "110e752776845c0ad393dd8eb3841f20"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rd-pay-react-redux-hooks.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rd-pay-redux-thunk.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rd-pay-redux-toolkit.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "a95d3fb42de660bcd78bc864448e9c46"
  },
  {
    "url": "lecture/rf-getting-started.html",
    "revision": "49578d6d26d39545b32881cc05d831b7"
  },
  {
    "url": "lecture/rf-pay-basic-usage.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rf-pay-initialze-from-state.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rf-pay-submit-validation.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rf-pay-sync-validation.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rh-birth-of-react-hooks.html",
    "revision": "2cca31355eca7c39059a6b5a04240295"
  },
  {
    "url": "lecture/rh-pay-component-state.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rh-pay-lifting-state-up.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rh-pay-network-request-response.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rh-pay-side-effect.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rh-pay-tic-tac-toe-manage-state.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rh-pay-use-ref.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rh-react-is-difficult.html",
    "revision": "8797c3d8277afd73b59dd93c19cd9cf7"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "2cf294e55f55f9e8d9db14199c529547"
  },
  {
    "url": "lecture/sb-addons-official.html",
    "revision": "da4676f0c2c972adc65e7c2ef21db215"
  },
  {
    "url": "lecture/sb-addons-third-party.html",
    "revision": "7e07801f245e6181900fa6781cc719df"
  },
  {
    "url": "lecture/sb-cdd.html",
    "revision": "7cb8319be120f81888f745b6444c1f53"
  },
  {
    "url": "lecture/sb-doc-block.html",
    "revision": "1217fd1f026e49b5fa421931c5d80ee1"
  },
  {
    "url": "lecture/sb-install.html",
    "revision": "7669501283769338e19a6009650c33f2"
  },
  {
    "url": "lecture/sb-intro.html",
    "revision": "c135d4b4e326bfc3e2e7b4d1d3d5181b"
  },
  {
    "url": "lecture/sb-layout.html",
    "revision": "e7ab02116c8f3ba70ff205ee67216f14"
  },
  {
    "url": "lecture/sb-manual-install.html",
    "revision": "2a3157f748715c8a0fbef2b45dc8186f"
  },
  {
    "url": "lecture/sb-story-action.html",
    "revision": "45e42587ca03db553528bb897284dc69"
  },
  {
    "url": "lecture/sb-story-control.html",
    "revision": "dbcc4123242b603f018cee181f9e38c6"
  },
  {
    "url": "lecture/sb-write-story.html",
    "revision": "aa15a02b332dbaa5527a7f8c63b4a59a"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "15faa1e1ca67f8161efd0182a6b17763"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "57c2c0bd0c4cc8decbc7b53dd42eba07"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "04819ad51e76a4057476047966403f87"
  },
  {
    "url": "lecture/sp-introduction.html",
    "revision": "a834c0d9ff0617a68fe6c5620ae47283"
  },
  {
    "url": "lecture/sp-pay-hook-api.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/su-getting-started.html",
    "revision": "aca83dddc70e14b7b5696e86b5cedc21"
  },
  {
    "url": "lecture/su-introduction.html",
    "revision": "4ef30995ff3eb4c3f7f081136902fd25"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
  },
  {
    "url": "payment-information.html",
    "revision": "5d4b2461f0c3b9c7e0742afabe03bb30"
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
