cacheName='v11';
const URLS = [
  './',
  "./admin_en.html",
  "./admin_bd.html",
  "./admin_fr.html",
  "./admin_am.html",
  './en.html',
  "./entext.js",
  "./fr.html",
  "./frtext.js",
  "./fullreport.html",
  "./bd.html",
  "./bdtext.js",
  "./am.html",
  "./amtext.js",
  './functions.js',
  './index.html',
  './intro_en.html',
  './intro_fr.html',
  './intro_bd.html',
  './intro_am.html',
  "./logo150.png",
  "./logo512.png",
  "./manifest.json",
  './style.css',
  './sw.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
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
