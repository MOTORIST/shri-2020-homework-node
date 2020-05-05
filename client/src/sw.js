/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({
  debug: process.env.NODE_ENV !== 'production',
});

const { CacheFirst, StaleWhileRevalidate, NetworkFirst } = workbox.strategies;
const { routing } = workbox;

routing.registerRoute(
  '/',
  new CacheFirst({
    cacheName: 'main',
  }),
);

routing.registerRoute(
  /\.(?:png|gif|jpg|svg)$/,
  new CacheFirst({
    cacheName: 'images-cache',
  }),
);

routing.registerRoute(
  /\.(?:js|css)$/,
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  }),
);

routing.registerRoute(
  /http:\/\/yastatic.net\/*/,
  new CacheFirst({
    cacheName: 'yandex-fonts',
  }),
);

routing.registerRoute(
  `${process.env.REACT_APP_API_URL}settings`,
  new NetworkFirst({
    cacheName: 'api-settings',
    cacheableResponse: { statuses: [0, 200] },
  }),
);
