self.__precacheManifest = [
  {
    "url": "/_next/static/A7R1JesSEJY05njLBgBkc/pages/_app.js",
    "revision": "fdc56a857995cd6edb91"
  },
  {
    "url": "/_next/static/A7R1JesSEJY05njLBgBkc/pages/_error.js",
    "revision": "59b4b1aa5aee6dab3e8c"
  },
  {
    "url": "/_next/static/A7R1JesSEJY05njLBgBkc/pages/about.js",
    "revision": "1c54c19217b642634d1b"
  },
  {
    "url": "/_next/static/A7R1JesSEJY05njLBgBkc/pages/index.js",
    "revision": "f8fdaae841c464077e0b"
  },
  {
    "url": "/_next/static/A7R1JesSEJY05njLBgBkc/pages/speakers.js",
    "revision": "522842a4ceb7bff76c7d"
  },
  {
    "url": "/_next/static/chunks/commons.49f1e5d71c1602fcbf48.js",
    "revision": "d313a5904349ac0c8d03"
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
