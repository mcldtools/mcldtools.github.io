cacheName='mcld-v2.5';
const URLS = [
  './',
  "./admin.html",
  './en.html',
  "./entext.js",
  "./fr.html",
  "./frtext.js",
  "./es.html",
  "./estext.js",
  './functions.js',
  './index.html',
  './intro_en.html',
  './intro_fr.html',
  './intro_es.html',
  "./logo150.png",
  "./logo512.png",
  "./manifest.json",
  './style.css'
];

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all URLs');
    await cache.addAll(URLS);
  })());
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
      fetch(e.request).catch(function() {
          return caches.match(e.request,{'ignoreSearch':true})
      })
  )
})

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keyList) => {
    Promise.all(keyList.map((key) => {
      if (key === cacheName) { return; }
      caches.delete(key);
    }))
  }));
});
