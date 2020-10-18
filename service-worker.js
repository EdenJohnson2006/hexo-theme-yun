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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "18a065e4bf60cf692c58369f93c41a41"
  },
  {
    "url": "about.html",
    "revision": "bd6e296a614c42dc48beb0f8e8bb484c"
  },
  {
    "url": "assets/css/0.styles.9bcbb34f.css",
    "revision": "5b75ab49cb3eab9dd89dd14ed1e13adf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2946f7c8.js",
    "revision": "0c0ec91d9ef05f97dd0e89e6e7570d1a"
  },
  {
    "url": "assets/js/11.7caa4962.js",
    "revision": "3e4fb6755f893ce3c4cf05f4f56052f4"
  },
  {
    "url": "assets/js/12.3b7ecce5.js",
    "revision": "5ff3ca3a0eeb3d2f5d2fe4e571d10654"
  },
  {
    "url": "assets/js/13.08a0e21b.js",
    "revision": "c568c2893225d540f4547f56507433bf"
  },
  {
    "url": "assets/js/14.082ea59a.js",
    "revision": "ff3c85143f7014f3a8a39f445260b638"
  },
  {
    "url": "assets/js/15.3e058d3b.js",
    "revision": "6202c93b7d285308c7fb24254945ae64"
  },
  {
    "url": "assets/js/16.aafa8fe9.js",
    "revision": "4486e68c7f9bc6ad445b7ae8ae13a613"
  },
  {
    "url": "assets/js/17.f4dae5d9.js",
    "revision": "68c87b9d9cecdb61e0c43f710c610b1a"
  },
  {
    "url": "assets/js/18.ac041c9a.js",
    "revision": "2464dea344647d12b9805f4ad9035939"
  },
  {
    "url": "assets/js/19.00eca21c.js",
    "revision": "a6d5595a8c0b4febd620173113e49678"
  },
  {
    "url": "assets/js/2.8ad47e39.js",
    "revision": "bd09fb8cc27e0892b8bddfa89eca5abc"
  },
  {
    "url": "assets/js/20.7a2b2802.js",
    "revision": "14fefecc3f085cb7ab05e55cdc5e18f4"
  },
  {
    "url": "assets/js/21.6c7f7adc.js",
    "revision": "69f212f6bbe39027b675cbeac4952c4a"
  },
  {
    "url": "assets/js/22.55a8dc04.js",
    "revision": "02a3f8dd025374dbf8c3351b23a878c9"
  },
  {
    "url": "assets/js/23.e4824434.js",
    "revision": "3e81e17665009944215fd7f337141a82"
  },
  {
    "url": "assets/js/24.387ed9a2.js",
    "revision": "df7fb9336b1c2efa750ee20c033ad584"
  },
  {
    "url": "assets/js/25.c87ddaf7.js",
    "revision": "09ca76068916f0d17b558517de7792e2"
  },
  {
    "url": "assets/js/26.4ffb1e6a.js",
    "revision": "a993721ccfc8a4772584743fa848ea7e"
  },
  {
    "url": "assets/js/27.2fb2be27.js",
    "revision": "0802ede0fbfd20d9fff14738fb0f9ae9"
  },
  {
    "url": "assets/js/28.0b71ccda.js",
    "revision": "518ba74fca76187c78ca3a2c5d978feb"
  },
  {
    "url": "assets/js/29.0b5ef079.js",
    "revision": "109ab6b4574d46fa04a0a73d5ab5dbaa"
  },
  {
    "url": "assets/js/3.b92606d9.js",
    "revision": "8c8fc81b03407f28d51f9ce50cf42410"
  },
  {
    "url": "assets/js/4.61b13deb.js",
    "revision": "0efcdab7e915c782ac56190ba20e6ec6"
  },
  {
    "url": "assets/js/5.1f2a68a9.js",
    "revision": "84bd85d0b09eb484a3eb9b194b0d6a6d"
  },
  {
    "url": "assets/js/6.a1e7e53e.js",
    "revision": "bd051b6e9dd746ed4981869c4a1d6cef"
  },
  {
    "url": "assets/js/7.5386fb47.js",
    "revision": "7d0375d861fcc6bacb3e4814ad42d0ee"
  },
  {
    "url": "assets/js/8.c4c1bae1.js",
    "revision": "d4567ae28170881bde5a9bf40b6881fa"
  },
  {
    "url": "assets/js/9.90dc7a65.js",
    "revision": "a5d5cd00127866075fbb81007825e617"
  },
  {
    "url": "assets/js/app.f544b77f.js",
    "revision": "d55bc125b22612f919066c69aab6b679"
  },
  {
    "url": "demo.html",
    "revision": "3f2004f5a9067e4cf3143f8ac5770335"
  },
  {
    "url": "en/about.html",
    "revision": "15d7968ab6547226561a6b579686f483"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "ff2c447c21c9c8ed175e06e33988c65e"
  },
  {
    "url": "en/guide/config.html",
    "revision": "cd01618f7cd5dc4b7056aba44a65aa19"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "ec61d03a12d6897e3cf855f458c13ba8"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "f57ec87d7a13704a35a180cdaeb64be3"
  },
  {
    "url": "en/guide/index.html",
    "revision": "c8dad04e7a8df6e6a58a03f43afb037c"
  },
  {
    "url": "en/guide/page.html",
    "revision": "2d24037a219b7b0250d64fcd2ae71ee8"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "2a52a1dba37aa03202b2f8a0b319ba62"
  },
  {
    "url": "en/index.html",
    "revision": "e59d2b2ed1c53e2c7a4405e629cdbb2d"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "75e1eaaad0cae974bd4aca1b0dd88760"
  },
  {
    "url": "guide/config.html",
    "revision": "f97a990fa544ac64d4ea34e2858c1701"
  },
  {
    "url": "guide/faq.html",
    "revision": "af93f2223f0254ee9689ef3ef66788f7"
  },
  {
    "url": "guide/icon.html",
    "revision": "e901f9cdbcc40e9a3aef5179bcfaab26"
  },
  {
    "url": "guide/index.html",
    "revision": "7946716ca7296c0ec014d4fbd1e25aaf"
  },
  {
    "url": "guide/migrate.html",
    "revision": "234deae434ebcf271b6134d32037050d"
  },
  {
    "url": "guide/page.html",
    "revision": "c50d51aa3fb527c080b413494bb03b3c"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "a8ba3c55250bc10a08790850131d33f9"
  },
  {
    "url": "index.html",
    "revision": "6dff2447a3aafc797efd6b7ad94d7098"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
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
