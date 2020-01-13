self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.43171be2915a298a1ac7.js",
    "revision": "546453f9928c5e8eeabe"
  },
  {
    "url": "/_next/static/runtime/main-15caa9fe1828da364d0d.js",
    "revision": "5e9f6aadf6967495432d"
  },
  {
    "url": "/_next/static/runtime/polyfills-a591b2980a0968e30eae.js",
    "revision": "144cce4cb848103d568c"
  },
  {
    "url": "/_next/static/runtime/webpack-08f7b238829422e3b9b2.js",
    "revision": "fc489b339eb65f8713fe"
  },
  {
    "url": "/_next/static/wXMJzV_JnmWQNVu98m8GP/pages/_app.js",
    "revision": "4ee28a7104fc41947245"
  },
  {
    "url": "/_next/static/wXMJzV_JnmWQNVu98m8GP/pages/_error.js",
    "revision": "1edc849e7558e41520d3"
  },
  {
    "url": "/_next/static/wXMJzV_JnmWQNVu98m8GP/pages/about.js",
    "revision": "d57e15c9d96d37391bdd"
  },
  {
    "url": "/_next/static/wXMJzV_JnmWQNVu98m8GP/pages/index.js",
    "revision": "8c7cf7fa6f4b4f4ef025"
  },
  {
    "url": "/_next/static/wXMJzV_JnmWQNVu98m8GP/pages/speakers.js",
    "revision": "3908fbc9f33b0a6fd37f"
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
