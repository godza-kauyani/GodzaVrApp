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
    "url": "assets/models/anim/scene.bin",
    "revision": "56fca0e71430709cfa15bebc0a19e8ae"
  },
  {
    "url": "assets/models/anim/scene.gltf",
    "revision": "b8e84e77173cae4e9fd82a8afcef099e"
  },
  {
    "url": "assets/models/anim/textures/Bodymat_baseColor.png",
    "revision": "f4c5bc3779e75ba89e8b1bb3154d9abb"
  },
  {
    "url": "assets/models/anim/textures/Bodymat_metallicRoughness.png",
    "revision": "b4d5f96bca3b6e9c93d8839caef493d0"
  },
  {
    "url": "assets/models/anim/textures/Bodymat_normal.png",
    "revision": "51d7183043aef8aa0856ec877c2c7c43"
  },
  {
    "url": "assets/models/anim/textures/Bottommat_baseColor.png",
    "revision": "8751c0c2cb706a8b2c51f89ac16c0d09"
  },
  {
    "url": "assets/models/anim/textures/Bottommat_metallicRoughness.png",
    "revision": "9368b22c195db3bcb71f3111c09dc72f"
  },
  {
    "url": "assets/models/anim/textures/Hairmat_baseColor.png",
    "revision": "83cf4134564447a3552327acb98c17b1"
  },
  {
    "url": "assets/models/anim/textures/Hairmat_metallicRoughness.png",
    "revision": "6a7a60dbfc345ff919c4c2a2783cd4bc"
  },
  {
    "url": "assets/models/anim/textures/Shoesmat_baseColor.png",
    "revision": "0cdee684c34ea859523b5685216c9091"
  },
  {
    "url": "assets/models/anim/textures/Shoesmat_metallicRoughness.png",
    "revision": "1d048bc09524f4cc141ad8485ef72564"
  },
  {
    "url": "assets/models/anim/textures/Topmat_baseColor.png",
    "revision": "fef8cc49440583f0663e8a4c0ac4a71e"
  },
  {
    "url": "assets/models/anim/textures/Topmat_metallicRoughness.png",
    "revision": "41bd32099cc6ff8f54aaa74a0f5b3ce1"
  },
  {
    "url": "assets/models/anim/textures/Topmat_normal.png",
    "revision": "d09475784c678da7a379f27da137e321"
  },
  {
    "url": "assets/models/hulk/scene.bin",
    "revision": "dd057e8f1b39f267219260bea214cabf"
  },
  {
    "url": "assets/models/hulk/scene.gltf",
    "revision": "dcb6edb74e2e60d59d42504b3e5c2fc3"
  },
  {
    "url": "assets/models/hulk/textures/Material__25_baseColor.jpeg",
    "revision": "b6c03e3866f2e1b3543d3e986d2c41a8"
  },
  {
    "url": "assets/models/hulk/textures/Material__25_emissive.jpeg",
    "revision": "b6c03e3866f2e1b3543d3e986d2c41a8"
  },
  {
    "url": "assets/models/hulk/textures/Material__26_baseColor.jpeg",
    "revision": "c9c63c5db638c2c5044694d04df270ba"
  },
  {
    "url": "assets/models/hulk/textures/Material__26_emissive.jpeg",
    "revision": "c9c63c5db638c2c5044694d04df270ba"
  },
  {
    "url": "assets/models/ikaruga/scene.bin",
    "revision": "599ab24ed1aaa9f26a5c8f982c8f1f25"
  },
  {
    "url": "assets/models/ikaruga/scene.gltf",
    "revision": "bfeab5031b0730fee3743badaa00a1a8"
  },
  {
    "url": "assets/models/ikaruga/textures/body_mat_baseColor.png",
    "revision": "c5b3ee71ef7a5c4d81cfde2678a0847b"
  },
  {
    "url": "assets/models/ikaruga/textures/body_mat_emissive.png",
    "revision": "c5b3ee71ef7a5c4d81cfde2678a0847b"
  },
  {
    "url": "assets/models/ikaruga/textures/cloth00_mat_baseColor.png",
    "revision": "02b1920fbb67dcdf248053fe8f401578"
  },
  {
    "url": "assets/models/ikaruga/textures/cloth00_mat_emissive.png",
    "revision": "02b1920fbb67dcdf248053fe8f401578"
  },
  {
    "url": "assets/models/ikaruga/textures/face_mat_baseColor.png",
    "revision": "77a909afcc16a5d9fab1b3f090e4e518"
  },
  {
    "url": "assets/models/ikaruga/textures/face_mat_emissive.png",
    "revision": "77a909afcc16a5d9fab1b3f090e4e518"
  },
  {
    "url": "assets/models/ikaruga/textures/hair_mat_baseColor.png",
    "revision": "1a6abab1b592b27f90c6aa604a4125b4"
  },
  {
    "url": "assets/models/ikaruga/textures/hair_mat_emissive.png",
    "revision": "1a6abab1b592b27f90c6aa604a4125b4"
  },
  {
    "url": "assets/models/ikaruga/textures/skirt0_mat_baseColor.png",
    "revision": "9359ba668b4150b917337745151e45be"
  },
  {
    "url": "assets/models/ikaruga/textures/skirt0_mat_emissive.png",
    "revision": "9359ba668b4150b917337745151e45be"
  },
  {
    "url": "assets/models/ikaruga/textures/swimsuit_mat_baseColor.png",
    "revision": "7815b544cc1bce25793b4bf129395b09"
  },
  {
    "url": "assets/models/ikaruga/textures/swimsuit_mat_emissive.png",
    "revision": "7815b544cc1bce25793b4bf129395b09"
  },
  {
    "url": "assets/models/sword/scene.bin",
    "revision": "7b61d34563ba687b883c068161cfd2e1"
  },
  {
    "url": "assets/models/sword/scene.gltf",
    "revision": "495b2add46bd7d4e5b2e1381e4a62fd1"
  },
  {
    "url": "css/styles.css",
    "revision": "3f897a1be3c00a748f70de4acc5e4412"
  },
  {
    "url": "index.html",
    "revision": "cce4d14c5956765399a77816dd50f663"
  },
  {
    "url": "js/aframe-always-fullscreen-component.min.js",
    "revision": "66746c6675d4e42252fc2871979bf58f"
  },
  {
    "url": "js/aframe-environment-component.min.js",
    "revision": "a928900466e88c3f059bb8c27b030a88"
  },
  {
    "url": "js/aframe-physics-extras.min.js",
    "revision": "8ea4d682de9f76125a6ab326d9dac861"
  },
  {
    "url": "js/aframe.min.js",
    "revision": "50610178305c4ae36dce20d74d7dd06c"
  },
  {
    "url": "js/nude/scene.gltf",
    "revision": "8fdd5cd0abf5e2e1942d5bf04bd3426d"
  },
  {
    "url": "js/platform.js",
    "revision": "6f207d045eeaeb5aaf3d3eb9dfdf226f"
  },
  {
    "url": "js/scripts.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
