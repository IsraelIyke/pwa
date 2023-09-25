// public/service-worker.js
// Customize this service worker to meet your specific needs
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("my-pwa-cache").then(function (cache) {
      return cache.addAll(["/"]); // Add the URLs you want to cache
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
