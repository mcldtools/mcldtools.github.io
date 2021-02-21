const cacheName = 'mcldtools-v1.5';
const staticAssets = [
  './',
  './index.html',
  './intro_en.html',
  './intro_fr.html',
  './en.html',
  "./fr.html",
  "./admin.html",
  './functions.js',
  './style.css',
  "./logo50.png",
  "./logo150.png",
  "./logo512.png",
  "./entext.js",
  "./frtext.js"
];

self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName); 
  await cache.addAll(staticAssets); 
});

self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});
async function cacheFirst(req) {
  const cache = await caches.open(cacheName); 
  const cachedResponse = await cache.match(req); 
  return cachedResponse || fetch(req); 
}
