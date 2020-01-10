self.__precacheManifest = [
  {
    "url": "/_next/static/Elh1ln_8NLwNuAgTKNXUQ/pages/_app.js",
    "revision": "fd299ec71adef214a39b"
  },
  {
    "url": "/_next/static/Elh1ln_8NLwNuAgTKNXUQ/pages/_error.js",
    "revision": "1ac42aea727c3982901e"
  },
  {
    "url": "/_next/static/Elh1ln_8NLwNuAgTKNXUQ/pages/about.js",
    "revision": "f55b1961a5ea06a4b57f"
  },
  {
    "url": "/_next/static/Elh1ln_8NLwNuAgTKNXUQ/pages/index.js",
    "revision": "b3c43cd381f275bf8b81"
  },
  {
    "url": "/_next/static/Elh1ln_8NLwNuAgTKNXUQ/pages/speakers.js",
    "revision": "af44ee34ab44bb43b808"
  },
  {
    "url": "/_next/static/chunks/commons.e05dc51ce3b615e1d048.js",
    "revision": "9a30e4fb8906cb6beb5f"
  },
  {
    "url": "/_next/static/runtime/main-962c924ba20192369e3c.js",
    "revision": "9691117e7b0e10fd4bf1"
  },
  {
    "url": "/_next/static/runtime/polyfills-9433c270ab87f235f594.js",
    "revision": "ff825f8a83a858e84897"
  },
  {
    "url": "/_next/static/runtime/webpack-08f7b238829422e3b9b2.js",
    "revision": "fc489b339eb65f8713fe"
  }
];

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

importScripts(
  
);

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
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
