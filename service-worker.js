self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.d6d5b3002218857bd837.js",
    "revision": "9ebac78f4712413d06b3"
  },
  {
    "url": "/_next/static/dBkso7Z9RR70GhpCJXCSM/pages/_app.js",
    "revision": "7e1befb56bdc0315afea"
  },
  {
    "url": "/_next/static/dBkso7Z9RR70GhpCJXCSM/pages/_error.js",
    "revision": "a3b89726fca8dc2caf1a"
  },
  {
    "url": "/_next/static/dBkso7Z9RR70GhpCJXCSM/pages/about.js",
    "revision": "1bc9ae76572e6d72abb9"
  },
  {
    "url": "/_next/static/dBkso7Z9RR70GhpCJXCSM/pages/index.js",
    "revision": "3f900fdc5781ef41b95a"
  },
  {
    "url": "/_next/static/dBkso7Z9RR70GhpCJXCSM/pages/speakers.js",
    "revision": "79b5a24107e4379e1a2c"
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
