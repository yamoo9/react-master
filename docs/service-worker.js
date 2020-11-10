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
    "revision": "4bc2aaf0c99eebad29586393babaeaae"
  },
  {
    "url": "account/register.html",
    "revision": "c101261c9583ca8d6e4de3f073c27e6b"
  },
  {
    "url": "account/signin.html",
    "revision": "34d62b7638dc0a23e34244b7ce3a33d3"
  },
  {
    "url": "account/user.html",
    "revision": "310b54aa21fb1624c862979c79e7223e"
  },
  {
    "url": "admin/index.html",
    "revision": "aee3738654b6f5043ed789dbbf929df7"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.90931b91.css",
    "revision": "12937bce52bd0b44289dca44f315f798"
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
    "url": "assets/js/100.4c126370.js",
    "revision": "912fdd963cfff331a0cc739c016065c3"
  },
  {
    "url": "assets/js/101.8b529557.js",
    "revision": "bce13932861643d86a5fdf08cb42a0e5"
  },
  {
    "url": "assets/js/102.80a6ea52.js",
    "revision": "d08183f22420b44fca71bfb4e00add26"
  },
  {
    "url": "assets/js/103.43a6694d.js",
    "revision": "a6f2350e5fb7272ad47762dc5817c141"
  },
  {
    "url": "assets/js/104.77fe5f43.js",
    "revision": "e1895cc145fd12e4528a8d4d6dcb4347"
  },
  {
    "url": "assets/js/105.80f4dc04.js",
    "revision": "8e0cf131e103d59a55f4220579520125"
  },
  {
    "url": "assets/js/106.f61d6da4.js",
    "revision": "7919010515c6c1a6f388380b84be2389"
  },
  {
    "url": "assets/js/107.73d9012a.js",
    "revision": "220136a91c30622036a2ebddb05af25f"
  },
  {
    "url": "assets/js/108.c59c3c72.js",
    "revision": "762267ecab6f496e76ee9bd11aced9d3"
  },
  {
    "url": "assets/js/109.02771380.js",
    "revision": "acb286914dedee7ed7666792b56bc1c0"
  },
  {
    "url": "assets/js/11.8d4ee7e1.js",
    "revision": "b5549dbf0d567272c38b61402c749b07"
  },
  {
    "url": "assets/js/110.0176c3bc.js",
    "revision": "16833a012ee9ae99d9e29762ca3c70b1"
  },
  {
    "url": "assets/js/111.f24f52c4.js",
    "revision": "9175764cc80d42ee5728bf3215a5ca9c"
  },
  {
    "url": "assets/js/112.627e0add.js",
    "revision": "4d0c91168703f7a56deb862d7482a6cc"
  },
  {
    "url": "assets/js/113.2fd6d481.js",
    "revision": "d74206b550a65ca6e91292b88f2bd4fb"
  },
  {
    "url": "assets/js/114.65785372.js",
    "revision": "963947f497dc646e8b46d8a6d6554515"
  },
  {
    "url": "assets/js/115.c51fe97e.js",
    "revision": "00346dc83e7f7ec2dd8fd49062e0e965"
  },
  {
    "url": "assets/js/116.166b00f5.js",
    "revision": "850178159d838f746f78416088f69d36"
  },
  {
    "url": "assets/js/117.c4fdc5b9.js",
    "revision": "131912b054105752cc5d261776b95154"
  },
  {
    "url": "assets/js/118.acac5217.js",
    "revision": "18431f5cb7f5bda2c2a6e1709a8d70f1"
  },
  {
    "url": "assets/js/119.5f89d1c8.js",
    "revision": "ac07f4737c906c52f96cf89889a2b57c"
  },
  {
    "url": "assets/js/12.6cdcaaf7.js",
    "revision": "a943c247bc4e309681bd0673aae67e03"
  },
  {
    "url": "assets/js/13.1f44d021.js",
    "revision": "1a8e3db3a9a9fdb8f9fe262b1806f7c0"
  },
  {
    "url": "assets/js/14.381ebc29.js",
    "revision": "74e1ec55ecdf1b76b9bcdce3c82f2fe9"
  },
  {
    "url": "assets/js/15.bae77ceb.js",
    "revision": "b793ad506cdadcf2d3b10486cbb4432f"
  },
  {
    "url": "assets/js/16.57d903ff.js",
    "revision": "f23e858e4a37a76e87a5539ddb0b723e"
  },
  {
    "url": "assets/js/17.47daeee5.js",
    "revision": "50004e3660bbde15df4069c87c68542d"
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
    "url": "assets/js/2.e243715e.js",
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
    "url": "assets/js/25.852e480e.js",
    "revision": "fb469d68c818bc603b8afe1b09f332ca"
  },
  {
    "url": "assets/js/26.0aab860a.js",
    "revision": "f873d1123edefc092b2d9be0a6d856d4"
  },
  {
    "url": "assets/js/27.1db211d1.js",
    "revision": "34152927a3563baafcb5a03996371617"
  },
  {
    "url": "assets/js/28.d07102ab.js",
    "revision": "dfb8d4df7054e9931b650c5548e7b30a"
  },
  {
    "url": "assets/js/29.1eb1ca46.js",
    "revision": "1bfa97ae9eb41c5b9b21f83fe7f28e7f"
  },
  {
    "url": "assets/js/3.4446905b.js",
    "revision": "a44131738d154df40ef706bde0082c67"
  },
  {
    "url": "assets/js/30.fde7df7d.js",
    "revision": "a306340ce786ac6be4ec7d3efdef1861"
  },
  {
    "url": "assets/js/31.e4f264dc.js",
    "revision": "a52ae9127f32b882f4b5bc99f02abf73"
  },
  {
    "url": "assets/js/32.fa5b7846.js",
    "revision": "5a1fcd320497b0c84f7c2ab0857f86af"
  },
  {
    "url": "assets/js/33.650146c2.js",
    "revision": "7fe14b86e1480cd56ca2fd07257faa09"
  },
  {
    "url": "assets/js/34.551f25f2.js",
    "revision": "13aeb58db2c2a4621f71ecbce177a667"
  },
  {
    "url": "assets/js/35.17e02152.js",
    "revision": "61a3720792adaa76dd47145dac606a19"
  },
  {
    "url": "assets/js/36.15cbe6af.js",
    "revision": "0b9481cb50730a4381d91cccc0779a2b"
  },
  {
    "url": "assets/js/37.d16e38b7.js",
    "revision": "1c8324defed2b9c9623d5b4bf6357d07"
  },
  {
    "url": "assets/js/38.d4334f9e.js",
    "revision": "53a413bcda13ee979cead21644320e1f"
  },
  {
    "url": "assets/js/39.4072f078.js",
    "revision": "8f621fec074de81e993b3484faf56f7e"
  },
  {
    "url": "assets/js/4.011bf276.js",
    "revision": "4304a349c3841868b94f1e4eaf348e97"
  },
  {
    "url": "assets/js/40.ed4c9f24.js",
    "revision": "160cb0d6d0360ac65be5afdf1ae8b5a8"
  },
  {
    "url": "assets/js/41.e8063486.js",
    "revision": "1ef2ec6ebc39cca2819fb4b30d6f2b7e"
  },
  {
    "url": "assets/js/42.8174600d.js",
    "revision": "9fa284e7b028fd0aa243de4779173949"
  },
  {
    "url": "assets/js/43.ee54e6b9.js",
    "revision": "13ce9691e534cecf7945730e1de7be24"
  },
  {
    "url": "assets/js/44.2c89db06.js",
    "revision": "9b41e68a96a241491f081cda83daafc5"
  },
  {
    "url": "assets/js/45.a6ca7360.js",
    "revision": "78412f8d21d9d0efa0f971380ff3a0c1"
  },
  {
    "url": "assets/js/46.ef4756b2.js",
    "revision": "334e1ca8208f40dc1a651306bd08527f"
  },
  {
    "url": "assets/js/47.039a3d98.js",
    "revision": "30e62dac861a0715db07a71974c88576"
  },
  {
    "url": "assets/js/48.3a213b11.js",
    "revision": "c1ed8eeba66870b4990c691ca550316b"
  },
  {
    "url": "assets/js/49.e9b86687.js",
    "revision": "38b562b5a9444e0d4879aead01e45322"
  },
  {
    "url": "assets/js/5.7c412b27.js",
    "revision": "b381fb63ab051e1142ccb5f813caefec"
  },
  {
    "url": "assets/js/50.b95543fc.js",
    "revision": "d42668696eec0b91422655eac4fb7859"
  },
  {
    "url": "assets/js/51.e9c5516e.js",
    "revision": "65a71b308e09466ee811075467d0606a"
  },
  {
    "url": "assets/js/52.a7a459d6.js",
    "revision": "edb9f02798fb9a4ec86378e1e4c7b3c2"
  },
  {
    "url": "assets/js/53.b28087b1.js",
    "revision": "3fd54ac7ac7dc5646739f589c6f0f903"
  },
  {
    "url": "assets/js/54.cd7f9eb6.js",
    "revision": "e3a2369d7ccf3385783865af1e8b15c9"
  },
  {
    "url": "assets/js/55.9bf0fe36.js",
    "revision": "35bd8b4b244f7f13485670776ab51d7d"
  },
  {
    "url": "assets/js/56.9a45a7c8.js",
    "revision": "f4157f6f86422a574363271e6200702a"
  },
  {
    "url": "assets/js/57.a094e34e.js",
    "revision": "40dcb7a355b9c04faad97059d8176250"
  },
  {
    "url": "assets/js/58.e7a2608c.js",
    "revision": "dc5918a0d72c386aa0ae69e06a8ed4e8"
  },
  {
    "url": "assets/js/59.2e0c8c77.js",
    "revision": "e540552b60431992d1eef0f99f6376e4"
  },
  {
    "url": "assets/js/6.967dc075.js",
    "revision": "551519c1af87e5f0d3fc969fc9270e5c"
  },
  {
    "url": "assets/js/60.633ceabb.js",
    "revision": "9807278c61b694502b09d149fdf6ac9f"
  },
  {
    "url": "assets/js/61.07b31acf.js",
    "revision": "e994a3aecc8ccd95fad0f4e910e1216f"
  },
  {
    "url": "assets/js/62.26c3e802.js",
    "revision": "23542d41d1d5664a8be8f180d528c957"
  },
  {
    "url": "assets/js/63.db4d7d47.js",
    "revision": "cb39157304394a7a4470b741ac6500d0"
  },
  {
    "url": "assets/js/64.b37f518e.js",
    "revision": "5ed84c4a56869534c87fb56f94ecc630"
  },
  {
    "url": "assets/js/65.9d2ccdbe.js",
    "revision": "4b2f0e33d5d3fab55a8b4ad6893070d8"
  },
  {
    "url": "assets/js/66.d791c3ec.js",
    "revision": "d05b4063a43560c83cbc45a5e95bc433"
  },
  {
    "url": "assets/js/67.e7602e69.js",
    "revision": "430c7e215e1e2ea0af03bc2d3ffc4730"
  },
  {
    "url": "assets/js/68.a8878f26.js",
    "revision": "31894694f35d92e5666df459fb452297"
  },
  {
    "url": "assets/js/69.5ff85579.js",
    "revision": "71e36fffbe2f12fd57d2fb7809d6c10a"
  },
  {
    "url": "assets/js/7.09255537.js",
    "revision": "99c53570e2c90978e2762b7d864b00b7"
  },
  {
    "url": "assets/js/70.0fa3766b.js",
    "revision": "808f9601e108f948228072decfc383b6"
  },
  {
    "url": "assets/js/71.1cb83746.js",
    "revision": "6b2052fa2974837e73f6c2b93cfe6bb4"
  },
  {
    "url": "assets/js/72.39f14c4e.js",
    "revision": "abf3af90f90258853095516c47959869"
  },
  {
    "url": "assets/js/73.6a97221c.js",
    "revision": "4e1e4aeb98885dd3449b0fd4c167507e"
  },
  {
    "url": "assets/js/74.27e979b5.js",
    "revision": "4923881181f2c862e87c728379d429e5"
  },
  {
    "url": "assets/js/75.9297b8f7.js",
    "revision": "9df42f39143bb2bcc9efce99db41e520"
  },
  {
    "url": "assets/js/76.0b5b0699.js",
    "revision": "ed77b393afab891ef797d994accd41c0"
  },
  {
    "url": "assets/js/77.42b676e8.js",
    "revision": "35c1ca7be4e17d196e746aba7e60d4b3"
  },
  {
    "url": "assets/js/78.ed5f99df.js",
    "revision": "d95153313777e010f71841718c8715f2"
  },
  {
    "url": "assets/js/79.5bdca159.js",
    "revision": "582033cbd590681068c61efbd912a8be"
  },
  {
    "url": "assets/js/8.a561cad7.js",
    "revision": "45f647952ff6bfbf19fe21133ef88ce9"
  },
  {
    "url": "assets/js/80.b0bf49b9.js",
    "revision": "15492e729ecced62ae96e35e576311bf"
  },
  {
    "url": "assets/js/81.9163166e.js",
    "revision": "bba84637d43d5b4e0c0311a3911f5b61"
  },
  {
    "url": "assets/js/82.e5bbe585.js",
    "revision": "625410d22122e0528486c2d3e86b65aa"
  },
  {
    "url": "assets/js/83.d00a5a6e.js",
    "revision": "bc272bcdd6eda754767046578d44c679"
  },
  {
    "url": "assets/js/84.c90c4a33.js",
    "revision": "293c4afd07233f65a67fb61fc70ed796"
  },
  {
    "url": "assets/js/85.5ca53b54.js",
    "revision": "c5fd5e48462f5f8676d2581c2bf279d3"
  },
  {
    "url": "assets/js/86.aa3e4abd.js",
    "revision": "5644db7446f1ce7d87b1a67e21c4e17d"
  },
  {
    "url": "assets/js/87.c30cef1f.js",
    "revision": "f250b4078435739175c2bfd99c0d84e1"
  },
  {
    "url": "assets/js/88.5d2a07ee.js",
    "revision": "eff47a0b54403a324d38d3b8af7cf676"
  },
  {
    "url": "assets/js/89.6e784185.js",
    "revision": "a90c90f5d99934e972845df640862944"
  },
  {
    "url": "assets/js/9.05d06254.js",
    "revision": "a404206378f50aa558d581f73f62c2c2"
  },
  {
    "url": "assets/js/90.d55bb21e.js",
    "revision": "a699c7b66d4dd2050bb503281f99ec6a"
  },
  {
    "url": "assets/js/91.13253386.js",
    "revision": "60e543b4544fea71ca920b381ae97a8e"
  },
  {
    "url": "assets/js/92.366494e2.js",
    "revision": "ba3470d1bf9c98616621c4564216fff4"
  },
  {
    "url": "assets/js/93.824e8aaa.js",
    "revision": "07c8ad5c175d85d38148c7718dc0be3c"
  },
  {
    "url": "assets/js/94.31166507.js",
    "revision": "be76d6d0ae9fc2db7dcf8643e3eec6de"
  },
  {
    "url": "assets/js/95.94bfeda8.js",
    "revision": "371f40d79479eedd65065d81e0e07b10"
  },
  {
    "url": "assets/js/96.182e5a96.js",
    "revision": "b809e8b599b736e64dbe26cf47ebab7b"
  },
  {
    "url": "assets/js/97.ae8f3772.js",
    "revision": "bbeca4926a4287d31d8491902b462d81"
  },
  {
    "url": "assets/js/98.91d60d93.js",
    "revision": "843de3394806cf479bdc6e19436dc9ec"
  },
  {
    "url": "assets/js/99.e0ffc41b.js",
    "revision": "69a34c744fc2633aeedd492b6689b835"
  },
  {
    "url": "assets/js/app.1c0d83f9.js",
    "revision": "71da22b3b70345b830a5573ebfbbc9ad"
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
    "revision": "73727a5e31e3e9a161ca0aee56a9cabc"
  },
  {
    "url": "lecture/fb-r-auth.html",
    "revision": "5d6b89ec3feb52ef533a23e8770f4a8a"
  },
  {
    "url": "lecture/fb-r-introduction.html",
    "revision": "8d226e80de8d34881742fc7fed113d38"
  },
  {
    "url": "lecture/index.html",
    "revision": "f6c24cfb15b5da3d73559fb3aab0a843"
  },
  {
    "url": "lecture/mini-project-config-directories.html",
    "revision": "903fcd137e0e1dcecf1c753290ab9b7c"
  },
  {
    "url": "lecture/mini-project-config-head.html",
    "revision": "3baf705493d7d1c749b8c41adad9ca97"
  },
  {
    "url": "lecture/mini-project-getting-started.html",
    "revision": "12c15c0fa0f7761899aa1f6bdc9513ae"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project2-getting-started.html",
    "revision": "aec80a72fd6a00c7639ffdeb84bf87ee"
  },
  {
    "url": "lecture/mini-project2-pay-context-beverageList.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project2-pay-custom-hook.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-app.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-beverageItem.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-gototop.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHeader.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHomeLink.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appNavigation.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/mini-project2-pay-styled-responsive.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "c3c089ddba2bf70ccc769c50d884f4fa"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "b15bc9c66d0174071dde32ebcbcc0d09"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "409fd90727a67c8148e9bf88723e55d5"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "c0d0dd61434ba393e3740d13bffb5689"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "ac86ffaa73935692429db3cf6f5b5c80"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "ef4fe52ce48b5056cdcf07c084c4c621"
  },
  {
    "url": "lecture/r-fb-hooks-getting-started.html",
    "revision": "2543aadf7c0875dd35458edaf6799817"
  },
  {
    "url": "lecture/r-fb-pay-hooks-auth.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-immutable-managing-list.html",
    "revision": "f74f0432cfed70c26357c27ee27d7822"
  },
  {
    "url": "lecture/r-pay-advanced-patterns.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-like-redux-using-context-hooks.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-testing-library.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "6cf2a48d5b868a7663ae0134de61459f"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "7ca4b584d2e767a8c63849cade4f2969"
  },
  {
    "url": "lecture/r-version-17.html",
    "revision": "1172ac5c4f58a91a104a78a04ba830aa"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rd-pay-react-redux-hooks.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rd-pay-redux-thunk.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rd-pay-redux-toolkit.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "9af9f8611f42f3b80556203f9ea9c466"
  },
  {
    "url": "lecture/rf-getting-started.html",
    "revision": "0970819c316d995f85fb0014ba021e7b"
  },
  {
    "url": "lecture/rf-pay-basic-usage.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rf-pay-initialze-from-state.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rf-pay-submit-validation.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rf-pay-sync-validation.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "4d304d6d9f1a9adf8747704023ca6799"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "2b0065fbd4d6c794cc126e4197a5e75e"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "01c14365ba966e3899c8b2a952dc6005"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "e23f3f696edc54c23124d5ce5baa22ce"
  },
  {
    "url": "lecture/sp-introduction.html",
    "revision": "7d763e8561672b9e3abffdc7545fdf2e"
  },
  {
    "url": "lecture/sp-pay-hook-api.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/su-getting-started.html",
    "revision": "461fb1a4b6825eda7227dab7ff317183"
  },
  {
    "url": "lecture/su-introduction.html",
    "revision": "c7c29c80d39f17d19b5009112736dce5"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
  },
  {
    "url": "payment-information.html",
    "revision": "9b99e3eec79496ac6c6f575b5a183386"
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
