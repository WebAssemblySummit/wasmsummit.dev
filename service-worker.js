self.__precacheManifest = [
  {
    "url": "/_next/static/M8NT-G3Elp18APZUoKYUj/pages/_app.js",
    "revision": "9c82f6dc0d3a8d89a6fa"
  },
  {
    "url": "/_next/static/M8NT-G3Elp18APZUoKYUj/pages/_error.js",
    "revision": "2e877b3a4ea55b5c0bbb"
  },
  {
    "url": "/_next/static/M8NT-G3Elp18APZUoKYUj/pages/about.js",
    "revision": "f78f65b33b0c886ee7bb"
  },
  {
    "url": "/_next/static/M8NT-G3Elp18APZUoKYUj/pages/index.js",
    "revision": "0a7c34407b0ec934cb78"
  },
  {
    "url": "/_next/static/M8NT-G3Elp18APZUoKYUj/pages/speakers.js",
    "revision": "42547b8267633b5033ff"
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
