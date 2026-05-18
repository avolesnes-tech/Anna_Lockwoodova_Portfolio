const CACHE = 'anna-portfolio-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/main.min.css',
  '/css/components.min.css',
  '/css/animations.min.css',
  '/css/responsive.min.css',
  '/js/main.js',
  '/js/i18n.js',
  '/images/projects/mapa-spomienok.webp',
  '/images/projects/mapa-spomienok-full.webp',
  '/images/projects/lumenglass.webp',
  '/images/projects/lumenglass-full.webp',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (!resp || resp.status !== 200 || resp.type === 'opaque') return resp;
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return resp;
      });
    })
  );
});
