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
    "revision": "b21458160845a9e0a179373b766ac4be"
  },
  {
    "url": "account/register.html",
    "revision": "516a0f567ca3039436a8862e141c9c35"
  },
  {
    "url": "account/signin.html",
    "revision": "55fcdaa98bbbfbc1a129e4869c93eecd"
  },
  {
    "url": "account/user.html",
    "revision": "2168fb302f1617cf688fd5647fba6877"
  },
  {
    "url": "admin/index.html",
    "revision": "45b1a837d6eee93400ccb019fba67ca6"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b2bca5235fcaf70e232271bf63a1243d"
  },
  {
    "url": "assets/css/0.styles.009b3a6d.css",
    "revision": "882fafcee0a4aaea20e54fc7f2f56f9a"
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
    "url": "assets/fonts/ionicons.37939349.ttf",
    "revision": "379393493c3672e03017f8c4078afcd4"
  },
  {
    "url": "assets/fonts/ionicons.3f2acd40.eot",
    "revision": "3f2acd40149b3704f3a97364d0fed0d3"
  },
  {
    "url": "assets/fonts/ionicons.96f1c901.woff2",
    "revision": "96f1c901c087fb64019f7665f7f8aca6"
  },
  {
    "url": "assets/fonts/ionicons.e74f7161.woff",
    "revision": "e74f7161730ced5656582f9faf231661"
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
    "url": "assets/img/ionicons.326445b5.svg",
    "revision": "326445b510380aedd5b7c9711d8ca9d2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.df1b0fe4.js",
    "revision": "89e3ed4e660a725f86c1fb7afedb9eb7"
  },
  {
    "url": "assets/js/11.cd7d3089.js",
    "revision": "9aa070224531e00ecab8a9974aef0a02"
  },
  {
    "url": "assets/js/12.d71abbad.js",
    "revision": "e5fd5991e15175308aa3c5faa2df470d"
  },
  {
    "url": "assets/js/13.7687f865.js",
    "revision": "88557f2912e7785234f20818739b9b03"
  },
  {
    "url": "assets/js/14.63ebaf4a.js",
    "revision": "0f97f250dca254308a94ec05baf7ad38"
  },
  {
    "url": "assets/js/15.9c747ad6.js",
    "revision": "43d30afa270eb2dfbe44c1dcad3b5363"
  },
  {
    "url": "assets/js/16.3d3711d9.js",
    "revision": "1b15c0063cb3fd7be7006343e54fd8d5"
  },
  {
    "url": "assets/js/17.8d03cb03.js",
    "revision": "7494164a38eabb09d0b4272ca11a8fb8"
  },
  {
    "url": "assets/js/18.310aa561.js",
    "revision": "8a9d01954f56a073bd99562c14bdd52c"
  },
  {
    "url": "assets/js/19.55b7a7c3.js",
    "revision": "bf7865cf2982f0977e411ed6c75e17bd"
  },
  {
    "url": "assets/js/2.9cad2fd5.js",
    "revision": "80b008f3a884762187187ad0b25aac66"
  },
  {
    "url": "assets/js/20.6df3b747.js",
    "revision": "15accb798b645febc7b893f8f6a3c180"
  },
  {
    "url": "assets/js/21.2c234845.js",
    "revision": "602a592f2b8d95299c1125bbb5bb6d9f"
  },
  {
    "url": "assets/js/22.818e2ce6.js",
    "revision": "7f53b2054ba7d906a9d788b492a992f8"
  },
  {
    "url": "assets/js/23.43f90e7a.js",
    "revision": "06f9b6cee479ead4881a06f35a2ad48a"
  },
  {
    "url": "assets/js/24.5684937a.js",
    "revision": "a3484fd0a04455074e3bfaa84ac87a81"
  },
  {
    "url": "assets/js/25.1f7b8fa1.js",
    "revision": "bcae4291ff0df54116f8e1c60a514b73"
  },
  {
    "url": "assets/js/26.d7d80772.js",
    "revision": "5ce9aa57cffdfb3a0e8a900c1895d71e"
  },
  {
    "url": "assets/js/27.8360ca66.js",
    "revision": "62ac06ba73fc05f059a1f97c21116d0c"
  },
  {
    "url": "assets/js/28.38ac1c5c.js",
    "revision": "f30ee4aec369f22e9fcc474b5490f7ca"
  },
  {
    "url": "assets/js/29.a44b9520.js",
    "revision": "0edaeab9dcce8cf696a59254fa6c4b53"
  },
  {
    "url": "assets/js/3.b39976ba.js",
    "revision": "82f302e9265fe63624494a3f40fdccaa"
  },
  {
    "url": "assets/js/30.18a366e9.js",
    "revision": "36c2d3018e1adff5101a6a7383afd09d"
  },
  {
    "url": "assets/js/31.81cbc25d.js",
    "revision": "16bfbe3aaf51383c18eb3705d5876807"
  },
  {
    "url": "assets/js/32.f2e0e9c8.js",
    "revision": "6ca12cb56bc8a50eef827aad6ecf86e6"
  },
  {
    "url": "assets/js/33.dd90ae2f.js",
    "revision": "95d9a799b15e922a14437ae4a9075633"
  },
  {
    "url": "assets/js/34.e78c566b.js",
    "revision": "d2d7bafcc3f3718fdc6961f05877066c"
  },
  {
    "url": "assets/js/35.da44e737.js",
    "revision": "0e33234d1be0b2ef99f54fc6708de00c"
  },
  {
    "url": "assets/js/36.df99513e.js",
    "revision": "44648cebc47c65bd9f04260c2eed052b"
  },
  {
    "url": "assets/js/37.2d2bd5e1.js",
    "revision": "46bc6a75ba5260308478b8af72aee17e"
  },
  {
    "url": "assets/js/38.9f69e34f.js",
    "revision": "6fa254a6ead58981cd1223d7f355e4a3"
  },
  {
    "url": "assets/js/39.6d751900.js",
    "revision": "575cdde142a866e1099aabd2cfe1d4a1"
  },
  {
    "url": "assets/js/4.09a41de6.js",
    "revision": "21163cdb3eb2782bd759c7f5b345f9d4"
  },
  {
    "url": "assets/js/40.17f78c68.js",
    "revision": "d2c192ade84f05cec8fa7b40011bb141"
  },
  {
    "url": "assets/js/41.985216a7.js",
    "revision": "67864242d0e3a06fd3c44fa29c7dd059"
  },
  {
    "url": "assets/js/42.816e613c.js",
    "revision": "8d08befcde1bdfe18e0e637238b6772b"
  },
  {
    "url": "assets/js/43.f7c77223.js",
    "revision": "1da2782378d01d24d32ca459eb98e293"
  },
  {
    "url": "assets/js/44.d06189d5.js",
    "revision": "2af87388e49459cedabaf712f479c179"
  },
  {
    "url": "assets/js/45.cc3223c7.js",
    "revision": "f16f0568d541cbbbb150874c64265425"
  },
  {
    "url": "assets/js/46.6be61a13.js",
    "revision": "0ed501fa5fe4ec91eadbaac574270380"
  },
  {
    "url": "assets/js/47.1d1bf3a0.js",
    "revision": "ec5559068764e0b8837c83065aaab026"
  },
  {
    "url": "assets/js/48.2ac60fa7.js",
    "revision": "c78c14d23e4a3b17eb97bf6d9a3fc883"
  },
  {
    "url": "assets/js/49.4a2f1138.js",
    "revision": "95db6d921c216046c2da3c5153c71ef8"
  },
  {
    "url": "assets/js/5.548b3411.js",
    "revision": "7c949f97427f92ac8b8fe1670377756d"
  },
  {
    "url": "assets/js/50.0de18f85.js",
    "revision": "7533614f5fe0cb50c20b6741fc13c158"
  },
  {
    "url": "assets/js/51.596660a5.js",
    "revision": "606515681e5d92337e59f83ae36b01c5"
  },
  {
    "url": "assets/js/52.c32d754d.js",
    "revision": "be60839c053b9c7b96ebce6dc3144e3c"
  },
  {
    "url": "assets/js/53.6ee23640.js",
    "revision": "7f3f082c30c7e0f07a02849874254596"
  },
  {
    "url": "assets/js/54.b1daac6e.js",
    "revision": "bc59dd65e390ecbd7cb2377159b5f9e1"
  },
  {
    "url": "assets/js/55.a2097d07.js",
    "revision": "be22b47ac821b0c526c4e909a1bec819"
  },
  {
    "url": "assets/js/56.8a6152d0.js",
    "revision": "92e92ce6d3d164e00d9e79fde9e50d30"
  },
  {
    "url": "assets/js/57.4865391b.js",
    "revision": "07ab9f382b00f3427d532c344bf4bab7"
  },
  {
    "url": "assets/js/58.e82fc28f.js",
    "revision": "8490fba3f83f2e1dcd409fab0790bb58"
  },
  {
    "url": "assets/js/59.21a3e57e.js",
    "revision": "29d0c330fc7e93b8fd05437812baf2a4"
  },
  {
    "url": "assets/js/6.bf0aad75.js",
    "revision": "0b9273dc5611248eaa62354671764b07"
  },
  {
    "url": "assets/js/60.75c34333.js",
    "revision": "c701e7ec0aa312979279c32069cd349c"
  },
  {
    "url": "assets/js/61.c13bf8dd.js",
    "revision": "527b9d4503c3df55fb22fa34a14bf938"
  },
  {
    "url": "assets/js/62.27e6dbab.js",
    "revision": "e3d4acf50944ae0bdee1c78210a61d5d"
  },
  {
    "url": "assets/js/63.5ba76ef5.js",
    "revision": "a219bde189872a77707ea577b6f7e8fc"
  },
  {
    "url": "assets/js/64.6b852d22.js",
    "revision": "b9610ac90c4f55852d2a83d9114c6434"
  },
  {
    "url": "assets/js/65.5c08fe78.js",
    "revision": "1df19a3282bec4146ec873bc56f48390"
  },
  {
    "url": "assets/js/66.7647ff15.js",
    "revision": "2cc52176973554cd39a60c1f956769cc"
  },
  {
    "url": "assets/js/67.404491ae.js",
    "revision": "71703c18c3070f464ec126f5081c49cc"
  },
  {
    "url": "assets/js/68.e78a58de.js",
    "revision": "d5c44f2d6a307e9a01b34d7317f52d54"
  },
  {
    "url": "assets/js/69.5ed78fc6.js",
    "revision": "5ca008de36c5daa3aedb20cde94d460b"
  },
  {
    "url": "assets/js/7.9e431704.js",
    "revision": "0c12979589681356a61864405f0cf92c"
  },
  {
    "url": "assets/js/70.0e33340b.js",
    "revision": "ac0171ce1905bb60365867c67c36d1ff"
  },
  {
    "url": "assets/js/8.9f16a7df.js",
    "revision": "ed5a008328a5bd6d86bea2f8fe4810f1"
  },
  {
    "url": "assets/js/9.2891c98b.js",
    "revision": "b52d2e844b71883c6deafa0c4c807fbc"
  },
  {
    "url": "assets/js/app.88215799.js",
    "revision": "4947f33fdb12711defa47c9b65b2af6c"
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
    "revision": "07bc9eb275b8005878fa5a914f7d0cf3"
  },
  {
    "url": "lecture/index.html",
    "revision": "58cf6aecc81450c8913f41aeebbcbc17"
  },
  {
    "url": "lecture/pre-for-class.html",
    "revision": "42f53804d67220f533e750876162e050"
  },
  {
    "url": "lecture/pre-js-env.html",
    "revision": "2e28a26cfb6ce9c0f0ccb21520bcbbc7"
  },
  {
    "url": "lecture/pre-learning.html",
    "revision": "c468641b7ddf406701fc3278f4b414c5"
  },
  {
    "url": "lecture/pre-why-using-framework.html",
    "revision": "8f5689b5fa02ee4f513081ea32dc86e6"
  },
  {
    "url": "lecture/r-create-react-app.html",
    "revision": "50d2c06f5f9cf031de18134d000a6f3f"
  },
  {
    "url": "lecture/r-pay-a11y.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-component-communication.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-component-event-handling.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-component-state.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-component.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-context.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-form.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-HOC.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-hooks.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-jsx-expression.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-jsx.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-propTypes.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-pay-tip.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/r-react.html",
    "revision": "e1f8ee5f4f0332b823ab61eb7f674227"
  },
  {
    "url": "lecture/r-setting-up.html",
    "revision": "911596d3189d8501463bdcd301a7b11d"
  },
  {
    "url": "lecture/rd-pay-counter-redux.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/rd-pay-counter.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/rd-pay-create-store.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/rd-pay-immutable-managing-list.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/rd-pay-react-redux.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/rd-pay-redux.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/rr-pay-basic-routing.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/rr-pay-connected-redux.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/rr-pay-nested-routing.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/rr-pay-react-router.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/rr-spa.html",
    "revision": "9ffed0a185d896a013755cbdf4dad298"
  },
  {
    "url": "lecture/sc-gettring-started.html",
    "revision": "954f1a65f8bea94cd2eafe1e80df0ecd"
  },
  {
    "url": "lecture/sc-pay-adapting-props.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/sc-pay-animation.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/sc-pay-dynamic-props.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/sc-pay-extends-component.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/sc-pay-extends-style.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/sc-pay-global-style.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/sc-pay-mixins.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/sc-pay-pseudo-nested.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/sc-pay-resources.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/sc-pay-theme.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/sc-pay-wrapper-component.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
  },
  {
    "url": "lecture/sc-tagged-template-literal.html",
    "revision": "bf8aecb6e4df9906a4bc1b5d946511f2"
  },
  {
    "url": "payment-information.html",
    "revision": "1c4eca66e185cd854a81d59199da6861"
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
