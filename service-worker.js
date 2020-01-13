self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.49f1e5d71c1602fcbf48.js",
    "revision": "d313a5904349ac0c8d03"
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
    "url": "/_next/static/wAuHROQVql9OgBQwbH3M6/pages/_app.js",
    "revision": "c3bdad214b86188d3bbb"
  },
  {
    "url": "/_next/static/wAuHROQVql9OgBQwbH3M6/pages/_error.js",
    "revision": "8c20efeb90b8acb132ab"
  },
  {
    "url": "/_next/static/wAuHROQVql9OgBQwbH3M6/pages/about.js",
    "revision": "d1c6b7e43ebcd3fd5c45"
  },
  {
    "url": "/_next/static/wAuHROQVql9OgBQwbH3M6/pages/index.js",
    "revision": "416e229fc3e4749cb2d6"
  },
  {
    "url": "/_next/static/wAuHROQVql9OgBQwbH3M6/pages/speakers.js",
    "revision": "fc4cf8a30f2cfaab4378"
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
