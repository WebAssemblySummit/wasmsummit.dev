self.__precacheManifest = [
  {
    "url": "/_next/static/2XEv6niERLxqM2h3BExAQ/pages/_app.js",
    "revision": "922ab9c918983a137b7a"
  },
  {
    "url": "/_next/static/2XEv6niERLxqM2h3BExAQ/pages/_error.js",
    "revision": "8c724e9b9b62af02b5cd"
  },
  {
    "url": "/_next/static/2XEv6niERLxqM2h3BExAQ/pages/about.js",
    "revision": "db66b40d7b4c5c92cc02"
  },
  {
    "url": "/_next/static/2XEv6niERLxqM2h3BExAQ/pages/index.js",
    "revision": "49ab47661f78357655a1"
  },
  {
    "url": "/_next/static/2XEv6niERLxqM2h3BExAQ/pages/speakers.js",
    "revision": "02b6f4148541e3180e73"
  },
  {
    "url": "/_next/static/chunks/commons.f72eb1725cbeba359930.js",
    "revision": "35c463ca3feb00ab5979"
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
