const CACHE_NAME = 'novadgt-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/exam',
  '/learn',
  '/mistakes',
  '/manifest.json'
];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Fallback for navigation requests if offline
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
      });
    })
  );
});

