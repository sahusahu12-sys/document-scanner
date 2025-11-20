self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('scanner-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});