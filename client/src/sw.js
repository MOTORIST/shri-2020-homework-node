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
  /\.(?:png|gif|jpg|svg|ico)$/,
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
  /(http|https):\/\/yastatic.net\/*/,
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

self.addEventListener('push', function (event) {
  let notificationData = {};

  try {
    notificationData = event.data.json();
  } catch (error) {
    notificationData = {
      title: 'CI Service',
      body: 'Test message',
      icon: '/logo192.png',
    };
  }

  event.waitUntil(
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: '/logo192.png',
    }),
  );
});

self.addEventListener('notificationclick', function (event) {
  // close the notification
  event.notification.close();

  // see if the current is open and if it is focus it
  // otherwise open new tab
  event.waitUntil(
    self.clients.matchAll().then(function (clientList) {
      if (clientList.length > 0) {
        return clientList[0].focus();
      }

      return self.clients.openWindow('/');
    }),
  );
});
