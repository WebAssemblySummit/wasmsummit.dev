self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.d6d5b3002218857bd837.js",
    "revision": "9ebac78f4712413d06b3"
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
    "url": "/_next/static/tF0MxcAfsN8QU9x5cI9_f/pages/_app.js",
    "revision": "3fab363e0d408728394c"
  },
  {
    "url": "/_next/static/tF0MxcAfsN8QU9x5cI9_f/pages/_error.js",
    "revision": "b6aa8eac1f1539f9417f"
  },
  {
    "url": "/_next/static/tF0MxcAfsN8QU9x5cI9_f/pages/about.js",
    "revision": "0a9fc4f657ef9294722e"
  },
  {
    "url": "/_next/static/tF0MxcAfsN8QU9x5cI9_f/pages/index.js",
    "revision": "36bfb966706fcfd9dbff"
  },
  {
    "url": "/_next/static/tF0MxcAfsN8QU9x5cI9_f/pages/speakers.js",
    "revision": "52fca3586568bc2c39ed"
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
