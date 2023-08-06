cacheName='v20';
const URLS = [
  './',
  "./admin_am.html",
  "./admin_bd.html",
  "./admin_en.html",
  "./admin_fr.html",
  "./admin_ny.html",
  "./admin_sw.html",
  "./am.html",
  "./amtext.js",
  "./bd.html",
  "./bdtext.js",
  './en.html',
  "./entext.js",
  "./fr.html",
  "./frtext.js",
  './sw.html',
  './swtext.js',
  "./fullreport.html",
  './functions.js',
  './index.html',
  './intro_am.html',
  './intro_bd.html',
  './intro_en.html',
  './intro_fr.html',
  './intro_ny.html',
  './intro_sw.html',
  "./logo150.png",
  "./logo512.png",
  "./manifest.json",
  './style.css',
  './sw.js',
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
