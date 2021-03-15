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
    "revision": "1b5f6227f280509905e3d23b65da9e7a"
  },
  {
    "url": "account/register.html",
    "revision": "04c1575ce2a12654eeeabd57a5d4c142"
  },
  {
    "url": "account/signin.html",
    "revision": "4c47b2bafa29f1a2d1d77d35f2121238"
  },
  {
    "url": "account/user.html",
    "revision": "b5c1a95a6c221270dbcf948c8ad43126"
  },
  {
    "url": "admin/index.html",
    "revision": "b4175661906b2ae67aa4eb3eaa461f05"
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
    "url": "assets/js/100.69a2de11.js",
    "revision": "2267276b4d6c0bd34ca70c6871836bae"
  },
  {
    "url": "assets/js/101.edd06938.js",
    "revision": "bb1501e3b7455ab3192070702b8685da"
  },
  {
    "url": "assets/js/102.0fabf5db.js",
    "revision": "df4bbc69eab15336b8390f245c7fbb16"
  },
  {
    "url": "assets/js/103.1a6448c7.js",
    "revision": "351b3a0d73cb5957b2239ee17ac9a135"
  },
  {
    "url": "assets/js/104.e5b1ceae.js",
    "revision": "c6e3aa73edbdd251bf8550a78ea8e4bd"
  },
  {
    "url": "assets/js/105.ee864a5e.js",
    "revision": "d8055143d30ae5e890d665b934e18f5c"
  },
  {
    "url": "assets/js/106.23f668ab.js",
    "revision": "c8161cd00ac482f326ad7f82cfa66393"
  },
  {
    "url": "assets/js/107.45afe0d0.js",
    "revision": "9b87e9f6f72a308ba0b88a03975394a6"
  },
  {
    "url": "assets/js/108.7ffe1b86.js",
    "revision": "6a34e74957e99b60c8d886aa9f717491"
  },
  {
    "url": "assets/js/109.b25428cc.js",
    "revision": "1ba09ea608e617ed4eaba5599bb4d309"
  },
  {
    "url": "assets/js/11.e377b8c5.js",
    "revision": "14814bc5498f8a8adb2e04a72e7f18dc"
  },
  {
    "url": "assets/js/110.e2daef53.js",
    "revision": "ab6a068cf0c9a8c895008e7aa70b5208"
  },
  {
    "url": "assets/js/111.e0fdbadb.js",
    "revision": "35f0d76e65e308a272022b008c439aea"
  },
  {
    "url": "assets/js/112.238a1fc2.js",
    "revision": "0587b29cdebf2e48673ab7dd2d4827a3"
  },
  {
    "url": "assets/js/113.dfc3e158.js",
    "revision": "371a8eacff941eb9403ed5f4cec7f9c4"
  },
  {
    "url": "assets/js/114.ae73ed5a.js",
    "revision": "973ab9d7fbb5532cafe3b8fbe3d56ca4"
  },
  {
    "url": "assets/js/115.73a3a6c9.js",
    "revision": "d9e0c8dbc7cd0bb5760867eb49126f56"
  },
  {
    "url": "assets/js/116.3c515a62.js",
    "revision": "c3b28075bcd5d6bfdd50b7c02e5b0021"
  },
  {
    "url": "assets/js/117.15a8a3dd.js",
    "revision": "636699cd9d8cac6c4afc1789d3aa86bc"
  },
  {
    "url": "assets/js/118.eac97d0c.js",
    "revision": "1bba48799bcf11ebf95fa829076bb3a8"
  },
  {
    "url": "assets/js/119.1d6eae51.js",
    "revision": "92eecd37869b29d9f13b98b7a4458273"
  },
  {
    "url": "assets/js/12.7b29cd0f.js",
    "revision": "8a7cbf8b0236dc26dad14a727d7cf4a9"
  },
  {
    "url": "assets/js/120.06227ccd.js",
    "revision": "3cfba5dc657d1698d2360e951acf0b69"
  },
  {
    "url": "assets/js/121.7db54805.js",
    "revision": "e45d8bc3709891e9659defd318a103b2"
  },
  {
    "url": "assets/js/122.40343fd7.js",
    "revision": "dc49354d461a6e2dd9807237007f30af"
  },
  {
    "url": "assets/js/123.6d1ca530.js",
    "revision": "733c390b7b17f0d56eb0da6f55dfa82c"
  },
  {
    "url": "assets/js/124.c76da351.js",
    "revision": "f7730ccc866ec33299e25b9bc7685623"
  },
  {
    "url": "assets/js/125.477d1847.js",
    "revision": "a128d032084877ba8016dd0638960e55"
  },
  {
    "url": "assets/js/126.377ecc42.js",
    "revision": "75d9847064290b22570e25e348e0128f"
  },
  {
    "url": "assets/js/127.aad7487d.js",
    "revision": "cbd648ebda8316345b5e66844c9ebf9d"
  },
  {
    "url": "assets/js/128.66715fe3.js",
    "revision": "b8dee0d14bf6849b24812e668693962d"
  },
  {
    "url": "assets/js/129.c60859c0.js",
    "revision": "c019b89d9207b5bf7c8f29bc4860c8c8"
  },
  {
    "url": "assets/js/13.1f44d021.js",
    "revision": "1a8e3db3a9a9fdb8f9fe262b1806f7c0"
  },
  {
    "url": "assets/js/130.1f54b3a1.js",
    "revision": "44e9965f8e10f58dc770433fb73b0eeb"
  },
  {
    "url": "assets/js/131.6995fa82.js",
    "revision": "16461d55be06199eee723572141371fc"
  },
  {
    "url": "assets/js/132.9e2dc25a.js",
    "revision": "80edb6fc1f08cc733f16fe227a96578f"
  },
  {
    "url": "assets/js/133.b94204a7.js",
    "revision": "c58aca2e60f259a3b82d7c3a1893f87e"
  },
  {
    "url": "assets/js/134.3bad7d7d.js",
    "revision": "938482cd1e7cf2035cab7823fa1de55c"
  },
  {
    "url": "assets/js/135.e92df780.js",
    "revision": "612a23329a4d129719e42d21ed9ef107"
  },
  {
    "url": "assets/js/136.538e9094.js",
    "revision": "c37d4a1e8778890cde54ed17c01b4183"
  },
  {
    "url": "assets/js/137.3482ab66.js",
    "revision": "1e81c3155c519498997a5c1deaefd313"
  },
  {
    "url": "assets/js/138.037039f7.js",
    "revision": "5f8449e5f1077507fe66c482c33a2fc4"
  },
  {
    "url": "assets/js/139.93fac72f.js",
    "revision": "0f57a894df89c8c80d16a4026a040961"
  },
  {
    "url": "assets/js/14.a5822177.js",
    "revision": "beeecdabb6af86fcc5bd36ca5b9739df"
  },
  {
    "url": "assets/js/140.9f0a4b7f.js",
    "revision": "035199fa175ca4a3b8a82c29bb4b3c37"
  },
  {
    "url": "assets/js/141.76b4e9b9.js",
    "revision": "859ea6176f248a082c7d458e19cc581e"
  },
  {
    "url": "assets/js/142.19257f3f.js",
    "revision": "1e7c875ddfb7a59d070bc7f0f67eb4ac"
  },
  {
    "url": "assets/js/143.61147c2e.js",
    "revision": "49547f03481f0e7c0f536d65e6a4e7a0"
  },
  {
    "url": "assets/js/144.ea4f0be9.js",
    "revision": "3f351ea718094d6addd24ed75be204f3"
  },
  {
    "url": "assets/js/145.d334ded3.js",
    "revision": "fbe5b9213bd51a674e4288221813efbf"
  },
  {
    "url": "assets/js/146.e62ce9cd.js",
    "revision": "c72ca4ccd38f5f7f038600ef159e1fdd"
  },
  {
    "url": "assets/js/147.528a55ff.js",
    "revision": "445d06c580909060b8b46d46aee0b890"
  },
  {
    "url": "assets/js/148.72726160.js",
    "revision": "79182ca56a31d128c156a1c144591a33"
  },
  {
    "url": "assets/js/149.a9442a1a.js",
    "revision": "7f6199daebafb8bb6420556ec264b6ca"
  },
  {
    "url": "assets/js/15.bd59f295.js",
    "revision": "6bf3c949d8a262d3c3baf903c0c73cdf"
  },
  {
    "url": "assets/js/150.8a8b4f86.js",
    "revision": "63fd9052f4592a75a86cf97ce0a76031"
  },
  {
    "url": "assets/js/151.f72ad43f.js",
    "revision": "9307a8c2204603febf9ae6cb3a37f161"
  },
  {
    "url": "assets/js/152.867a7c23.js",
    "revision": "2234551bba6ece82923d0f0c146ac349"
  },
  {
    "url": "assets/js/153.25dadc01.js",
    "revision": "41416ba5134c5d791d4d59ff727e4b0e"
  },
  {
    "url": "assets/js/154.28c560a8.js",
    "revision": "da7efd77b98e370e97713e112aa1eb88"
  },
  {
    "url": "assets/js/155.cdd37b07.js",
    "revision": "1d99c4dbac919205286d8feb27923f3b"
  },
  {
    "url": "assets/js/156.0d764cdf.js",
    "revision": "b105e15e284f19297468e94d4e0a64b9"
  },
  {
    "url": "assets/js/157.5d966688.js",
    "revision": "7f2e2764d4f58cac0c811c19e9714e38"
  },
  {
    "url": "assets/js/158.eb0c246b.js",
    "revision": "ae9496dbbcddb1ca0c921ab59bad1621"
  },
  {
    "url": "assets/js/16.1fcc539b.js",
    "revision": "d36aad6473688e66de03f3ffd4f04d96"
  },
  {
    "url": "assets/js/17.f9807652.js",
    "revision": "73ff6faee409d56922f2a2d5c060771b"
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
    "url": "assets/js/29.dc4e4192.js",
    "revision": "97f6e0ce88cb4f71af64e19e79735783"
  },
  {
    "url": "assets/js/3.4446905b.js",
    "revision": "a44131738d154df40ef706bde0082c67"
  },
  {
    "url": "assets/js/30.f6bf9d0f.js",
    "revision": "590835c5d937dad7e6a9c303e3b99bc1"
  },
  {
    "url": "assets/js/31.db85cea3.js",
    "revision": "28b9e9641dabe0c2815e3af1f1bc08de"
  },
  {
    "url": "assets/js/32.d9f9cca3.js",
    "revision": "5fa1120237a3e0027a94bf19657cd1ea"
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
    "url": "assets/js/42.f88e4d9c.js",
    "revision": "13aba9f124f1b28f861f656a70947296"
  },
  {
    "url": "assets/js/43.e50cc87e.js",
    "revision": "13123da33e04a9ce87886cfbaa35e845"
  },
  {
    "url": "assets/js/44.94d86ad7.js",
    "revision": "81ab48c9be87d1a286ee62fcf3968805"
  },
  {
    "url": "assets/js/45.1d573f71.js",
    "revision": "8fa1d29ac7db177d82150dd1561ef557"
  },
  {
    "url": "assets/js/46.9d3c639c.js",
    "revision": "a627af324ca9dae6e619b62fe5c4e8c6"
  },
  {
    "url": "assets/js/47.8f6415ac.js",
    "revision": "610b8fd2da72ee9d0eca3907c1912522"
  },
  {
    "url": "assets/js/48.0591b61c.js",
    "revision": "fc479db0821e8857fc32abfa672d4a35"
  },
  {
    "url": "assets/js/49.f1a4ffa5.js",
    "revision": "db7fdde18b5a8ca3f519946f4471d546"
  },
  {
    "url": "assets/js/5.7c412b27.js",
    "revision": "b381fb63ab051e1142ccb5f813caefec"
  },
  {
    "url": "assets/js/50.c877a567.js",
    "revision": "3246f6479171bb0675c696a668a4d415"
  },
  {
    "url": "assets/js/51.267c71f9.js",
    "revision": "d46288acae1a916e4d7a538bb24cb087"
  },
  {
    "url": "assets/js/52.0b3ebe67.js",
    "revision": "4d53125e64c8b5e9c2a7108e2561e8e9"
  },
  {
    "url": "assets/js/53.4f026c0b.js",
    "revision": "9c101addacb5669d3b55a5e484a9d93e"
  },
  {
    "url": "assets/js/54.7031cfbe.js",
    "revision": "8a26efb84defa7ea99a54f357f0bd877"
  },
  {
    "url": "assets/js/55.ebeb9522.js",
    "revision": "812a754dc562ceec3c685d7d0b4c34ee"
  },
  {
    "url": "assets/js/56.968c147c.js",
    "revision": "98a07b1971808e49fa1cfe4ab1d75775"
  },
  {
    "url": "assets/js/57.7c95ba2e.js",
    "revision": "35961779ca6103ed4b0403ad04664329"
  },
  {
    "url": "assets/js/58.ec6b8aa5.js",
    "revision": "3e16d9c4208e576311fa0ac633af6795"
  },
  {
    "url": "assets/js/59.db5ae891.js",
    "revision": "bc2df2371725e0d769f02f3e1e903c2c"
  },
  {
    "url": "assets/js/6.967dc075.js",
    "revision": "551519c1af87e5f0d3fc969fc9270e5c"
  },
  {
    "url": "assets/js/60.4004d707.js",
    "revision": "6c3cdced424c8ec246d18d4a3d9bb3a9"
  },
  {
    "url": "assets/js/61.a062ffef.js",
    "revision": "7ff84ed943a82d4916ef2af69b7c79ac"
  },
  {
    "url": "assets/js/62.7ef49097.js",
    "revision": "d4a05efccd6029a9d4dc5cd038717a5f"
  },
  {
    "url": "assets/js/63.b7f0d534.js",
    "revision": "5dba27baefd8377f17b6caed71075605"
  },
  {
    "url": "assets/js/64.9012c492.js",
    "revision": "c2ae60825a0a7d013c1466fb2d2f9105"
  },
  {
    "url": "assets/js/65.c54f5344.js",
    "revision": "e231f0c8576102fea3c0168074f2c893"
  },
  {
    "url": "assets/js/66.52327dff.js",
    "revision": "d6bd3a0f342514e208ec80ff0073c9c4"
  },
  {
    "url": "assets/js/67.4cf900b6.js",
    "revision": "d78ff18db4d920561491005b8f754c4b"
  },
  {
    "url": "assets/js/68.7d354287.js",
    "revision": "05483aae3dd6492a53dd30898750864d"
  },
  {
    "url": "assets/js/69.e402989f.js",
    "revision": "3dbb600462a4f9ff2011b7c4423d42b9"
  },
  {
    "url": "assets/js/7.09255537.js",
    "revision": "99c53570e2c90978e2762b7d864b00b7"
  },
  {
    "url": "assets/js/70.e9061157.js",
    "revision": "1489aa7a57dacf3387922255ac097f05"
  },
  {
    "url": "assets/js/71.e6c7700e.js",
    "revision": "29eea931aa054df54128241edc23f45e"
  },
  {
    "url": "assets/js/72.8db5db83.js",
    "revision": "f4f65733d1a804346ba7924c4e6e829c"
  },
  {
    "url": "assets/js/73.da69b1e2.js",
    "revision": "556986ff109e92f0c8d330a7de118ba7"
  },
  {
    "url": "assets/js/74.83d441e7.js",
    "revision": "f5cf3adc3a09a84426f7c45391685368"
  },
  {
    "url": "assets/js/75.1f0b45ef.js",
    "revision": "ab2c2d9be3ec01c9488602a13525f68c"
  },
  {
    "url": "assets/js/76.9e4b8245.js",
    "revision": "976fbea561884628311b73f7e1ae9403"
  },
  {
    "url": "assets/js/77.b156442f.js",
    "revision": "5d3bc880a5f667eb843fdd5161772654"
  },
  {
    "url": "assets/js/78.835a4bbd.js",
    "revision": "5c22fc37f32b2903c29f756a656035fd"
  },
  {
    "url": "assets/js/79.e8bd4475.js",
    "revision": "d2fb6caf855af0e6fe1a972a8710f8bc"
  },
  {
    "url": "assets/js/8.a561cad7.js",
    "revision": "45f647952ff6bfbf19fe21133ef88ce9"
  },
  {
    "url": "assets/js/80.2dcfdcd2.js",
    "revision": "26d7a5dab688acb29f54f5a61627a14b"
  },
  {
    "url": "assets/js/81.071927ed.js",
    "revision": "aa082b2b9c2bf5ad3bb0f3a8d32d4086"
  },
  {
    "url": "assets/js/82.a6e93dbd.js",
    "revision": "b8c9ec52e65443deb0428a1cc802cf76"
  },
  {
    "url": "assets/js/83.d38302a0.js",
    "revision": "9712981c1bd9cbab0d96bc71beb5ccfc"
  },
  {
    "url": "assets/js/84.2df0be73.js",
    "revision": "108dcd9b2653dc77e6797b092a178814"
  },
  {
    "url": "assets/js/85.610612bf.js",
    "revision": "0d62ef58bf3d293e37d8667ddf169d23"
  },
  {
    "url": "assets/js/86.965c0aff.js",
    "revision": "402602598caa4b62825e89192e3cddfb"
  },
  {
    "url": "assets/js/87.ab77c263.js",
    "revision": "2a35169d14b8c1f34f25c0127ec8fbac"
  },
  {
    "url": "assets/js/88.37501ef6.js",
    "revision": "28e71f63f040a69fd3df01c8fc63fa42"
  },
  {
    "url": "assets/js/89.32ce4515.js",
    "revision": "96a5658d3d116dd216ce6c25db4bb9ad"
  },
  {
    "url": "assets/js/9.05d06254.js",
    "revision": "a404206378f50aa558d581f73f62c2c2"
  },
  {
    "url": "assets/js/90.6c34c6ed.js",
    "revision": "bbff77c4bf1879b8bc4bb756793fab3e"
  },
  {
    "url": "assets/js/91.80edf5ed.js",
    "revision": "d07a2198e43addc13856aa4ead20a3db"
  },
  {
    "url": "assets/js/92.66814150.js",
    "revision": "e3434adb1d7f407d9140601f25a4503f"
  },
  {
    "url": "assets/js/93.2b0e5c1d.js",
    "revision": "02f41b405f1189a30f45f26ec87e7e7d"
  },
  {
    "url": "assets/js/94.8975719a.js",
    "revision": "ab1a9a92e3324e25614c535d701da066"
  },
  {
    "url": "assets/js/95.5acb138b.js",
    "revision": "bb7ec4a78fd66347ceee375d64331437"
  },
  {
    "url": "assets/js/96.ee1c653c.js",
    "revision": "3dd95a0e3459e225574aafd5f8e985ce"
  },
  {
    "url": "assets/js/97.dc3d7c6e.js",
    "revision": "34cc0bbe6744988a79109ddce58b95d6"
  },
  {
    "url": "assets/js/98.126d722e.js",
    "revision": "667adef95dd048edf9d87357f283cca1"
  },
  {
    "url": "assets/js/99.63aebb40.js",
    "revision": "7448edc2341f237d38c62941ef0dbe76"
  },
  {
    "url": "assets/js/app.d89bc1d4.js",
    "revision": "3880b2793c6120820add87d097c7e2e5"
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
    "url": "images/BaaS.jpg",
    "revision": "f88fb5d83563f9907ea33faab577b9c1"
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
    "url": "images/firebase-auth-email-password.jpg",
    "revision": "e0494830393d3f575bc70d48494943f0"
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
    "url": "images/firebase-cloud-firestore.jpg",
    "revision": "3dd5dbbba82e9008a7dc2080f0b99c9d"
  },
  {
    "url": "images/firebase-create-collection.png",
    "revision": "a404e97d6e511da25acb2e146330a2c4"
  },
  {
    "url": "images/firebase-create-document.png",
    "revision": "a710e5768ea981ba9cc0a8a6f464ee22"
  },
  {
    "url": "images/firebase-db-rules.png",
    "revision": "88ab0953fb26fd1fa94b2646c1cdc715"
  },
  {
    "url": "images/firebase-firestore-structure.png",
    "revision": "697ab8abcdaf6b5ab547c52663337c26"
  },
  {
    "url": "images/firebase-google-auth-signin-method.png",
    "revision": "be63f6122685539fa398e01d973baeee"
  },
  {
    "url": "images/firebase-sdk-snippet.jpg",
    "revision": "ea8cf2ba2f3d2209db602b7c89884926"
  },
  {
    "url": "images/firebase-user-uid.png",
    "revision": "9e22837889f27e8c98351aa4b434a40f"
  },
  {
    "url": "images/firebase-users-db-clean.png",
    "revision": "a594194a9d4fdaea5ad10b512dda7d46"
  },
  {
    "url": "images/front-vs-back-end.jpg",
    "revision": "ed41b5d99ec365703d9b1355161b02bc"
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
    "revision": "5bfb41c086a488a7dfc9ea904edd3595"
  },
  {
    "url": "lecture/es-array-methods.html",
    "revision": "70e04d13452432b533499187531e6e34"
  },
  {
    "url": "lecture/es-arrow-function.html",
    "revision": "51f23a3f8b6509820ecd5a915236dbb8"
  },
  {
    "url": "lecture/es-default-parameters.html",
    "revision": "42561558b83b6f00e592f9c684c618e6"
  },
  {
    "url": "lecture/es-destructuring-assignment.html",
    "revision": "ceaaa8814e81110c2699afd9f5add5aa"
  },
  {
    "url": "lecture/es-modules.html",
    "revision": "d33491087372965195036a2972a0a23c"
  },
  {
    "url": "lecture/es-nullish-coalescing-operator.html",
    "revision": "69ec231429962e1136924197ad5c0df3"
  },
  {
    "url": "lecture/es-optional-chaning.html",
    "revision": "2ebb8957865de5714334e5eaf55f28b8"
  },
  {
    "url": "lecture/es-promises-and-async-function.html",
    "revision": "8c9f180803eb9f84d9e870caf8c69b01"
  },
  {
    "url": "lecture/es-rest-paramenters.html",
    "revision": "4e793b73c083c8f648465ff2132cab1b"
  },
  {
    "url": "lecture/es-shorthand-property-names.html",
    "revision": "c9115c9587ea95013ff37f8d6a7d46ff"
  },
  {
    "url": "lecture/es-template-literal.html",
    "revision": "a252f763f12779a82e02b807c3042943"
  },
  {
    "url": "lecture/es-ternaries.html",
    "revision": "643485a38a972efb4779eda1489205cf"
  },
  {
    "url": "lecture/es.html",
    "revision": "6156c418f45767e81f6170a531e430ba"
  },
  {
    "url": "lecture/fb-auth-signin-out.html",
    "revision": "34a635892332b87bc650d99e2d8927c7"
  },
  {
    "url": "lecture/fb-auth-signup.html",
    "revision": "6b73b6ef943a3a529e5a1aac9ccfd9a8"
  },
  {
    "url": "lecture/fb-baas-is.html",
    "revision": "6960701ad98885e97490875a8a643278"
  },
  {
    "url": "lecture/fb-configure.html",
    "revision": "c6d0b7d75da15a7c79cad45e50aea80b"
  },
  {
    "url": "lecture/fb-firestore.html",
    "revision": "7c8e0e27aa3001ca13393592c87c3c57"
  },
  {
    "url": "lecture/fb-getting-started.html",
    "revision": "551edfd204b18c5493352dfe60c83187"
  },
  {
    "url": "lecture/fb-r-auth.html",
    "revision": "69b676713a6d042f9f7424911bc2610c"
  },
  {
    "url": "lecture/fb-r-introduction.html",
    "revision": "da040133b80de871c132993eb856fea5"
  },
  {
    "url": "lecture/index.html",
    "revision": "3a960c1e293143525f5a4f3ccc084d22"
  },
  {
    "url": "lecture/mini-project-config-directories.html",
    "revision": "06bd2526fe5d4dd477dfa27ef2c7b159"
  },
  {
    "url": "lecture/mini-project-config-head.html",
    "revision": "9115ad903aa6fd18f561de75cb45a8f7"
  },
  {
    "url": "lecture/mini-project-getting-started.html",
    "revision": "8c6b6cb7c68f35918973da0d585f6b94"
  },
  {
    "url": "lecture/mini-project-pay-a11y.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project-pay-component-props.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components-2.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project-pay-create-react-components.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project-pay-event-handling-time-controls.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project-pay-goto-top.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context-2.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project-pay-list-rendering-with-context.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project2-getting-started.html",
    "revision": "9ee0e6d5fdff53bb84d27a9d242f82d7"
  },
  {
    "url": "lecture/mini-project2-pay-context-beverageList.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project2-pay-custom-hook.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-app.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-beverageItem.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project2-pay-hooks-gototop.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHeader.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appHomeLink.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project2-pay-styled-appNavigation.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/mini-project2-pay-styled-responsive.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "ea9dea8591a96eae9e8d3aabf54c30bd"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "9e546a03e54114b2ebc1b6bf235d3db6"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "5884aaa19c5df23e826c810a9688dd98"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "3e589bd1e5f34fbbaa33bea404b16a66"
  },
  {
    "url": "lecture/r-a11y.html",
    "revision": "7b8dfe9ce7ecc7e1c9a9bb3b09ce8d3e"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "4111a74137950f8e91a3a937ad204255"
  },
  {
    "url": "lecture/r-fb-hooks-getting-started.html",
    "revision": "da5f1939640e361d600e9a270e5aba0c"
  },
  {
    "url": "lecture/r-fb-pay-hooks-auth.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-immutable-managing-list.html",
    "revision": "8a5baf5366cc18616e198ce53d2d8e02"
  },
  {
    "url": "lecture/r-pay-advanced-patterns.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-like-redux-using-context-hooks.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-testing-library.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-pay-virtual-dom.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "a7b7f0d49c9697b3bb848afe9cca7710"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "bdb4c594f7dcf3b4349fa332ab39a710"
  },
  {
    "url": "lecture/r-version-17.html",
    "revision": "c598af2d74a27a774de242f261b7e5b5"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rd-pay-react-redux-hooks.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rd-pay-redux-thunk.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rd-pay-redux-toolkit.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rd-redux.html",
    "revision": "b39ac685efabc66548405b4361303ef3"
  },
  {
    "url": "lecture/rf-getting-started.html",
    "revision": "557005211fd07f21122e21042b35304d"
  },
  {
    "url": "lecture/rf-pay-basic-usage.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rf-pay-initialze-from-state.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rf-pay-submit-validation.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rf-pay-sync-validation.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rh-birth-of-react-hooks.html",
    "revision": "3b883a11abd1f1a1f34c5fc87ed2fd6c"
  },
  {
    "url": "lecture/rh-pay-component-state.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rh-pay-lifting-state-up.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rh-pay-network-request-response.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rh-pay-side-effect.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rh-pay-tic-tac-toe-manage-state.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rh-pay-use-ref.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rh-react-is-difficult.html",
    "revision": "3e59affe0d286c627b7a9a0166890a2c"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rr-pay-protected-routing.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "840c75cedf24f6d981205536501f2809"
  },
  {
    "url": "lecture/sb-addons-official.html",
    "revision": "1c12b8b5c0f854795e4646b3ec01068c"
  },
  {
    "url": "lecture/sb-addons-third-party.html",
    "revision": "9b834c130364972cba0f0959c35d7b3c"
  },
  {
    "url": "lecture/sb-cdd.html",
    "revision": "c65b089f3b4ead7c221a23e8a1fcb538"
  },
  {
    "url": "lecture/sb-doc-block.html",
    "revision": "897f11dd49cbb4d552ab58bf425db236"
  },
  {
    "url": "lecture/sb-install.html",
    "revision": "458ad1e6b24ed91766288337fa5212c0"
  },
  {
    "url": "lecture/sb-intro.html",
    "revision": "065826a15374a03a220f404df315f223"
  },
  {
    "url": "lecture/sb-layout.html",
    "revision": "7b82446fd111bcc0518978777e39b620"
  },
  {
    "url": "lecture/sb-manual-install.html",
    "revision": "c489defc79b656abe7c42424d9dd91a5"
  },
  {
    "url": "lecture/sb-story-action.html",
    "revision": "cf2caf3e559ce89c13c858c37de77709"
  },
  {
    "url": "lecture/sb-story-control.html",
    "revision": "0eee37d2394eb98554698b6686c52c5e"
  },
  {
    "url": "lecture/sb-write-story.html",
    "revision": "85a2c8a642103578ae76ca59349e7002"
  },
  {
    "url": "lecture/sc-adapting-props.html",
    "revision": "5b70925e6c9bdd7c9faf1c09d614f5f7"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "af5f718b71f60db1aad56a2e2aa179cd"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "b0462dc0eaaeb7fe08a108836ea0808a"
  },
  {
    "url": "lecture/sp-introduction.html",
    "revision": "7a54300e138d9ce4ec5a3643ffff4490"
  },
  {
    "url": "lecture/sp-pay-hook-api.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/su-getting-started.html",
    "revision": "7999a8e6979545759f8d26a7c4f89f95"
  },
  {
    "url": "lecture/su-introduction.html",
    "revision": "36aaa248e3edff622ae07f93e20aa61a"
  },
  {
    "url": "lecture/su-pay-composition.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/su-pay-element-button.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/su-pay-element-divider.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/su-pay-element-flag.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/su-pay-layout-example.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/su-pay-prototypes.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/su-pay-shorthand-props.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "lecture/su-pay-theme.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
  },
  {
    "url": "payment-information.html",
    "revision": "ce0e694b3ab4f6bb77dead1e7dffcb18"
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
