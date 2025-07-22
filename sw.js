cacheName='v48';
const URLS = [
  './',
  "./am.html",
  "./amtext.js",
  "./ar.html",
  "./artext.js",
  "./bd.html",
  "./bdtext.js",
  './ee.html',
  "./eetext.js",
  './en.html',
  "./entext.js",
  './es.html',
  "./estext.js",
  "./fr.html",
  "./frtext.js",
  "./lg.html",
  "./lgtext.js",
  "./ny.html",
  "./nytext.js",
  './sw.html',
  './swtext.js',
  './functions.js',
  './index.html',
  './intro_am.html',
  './intro_ar.html',
  './intro_bd.html',
  './intro_ee.html',
  './intro_en.html',
  './intro_es.html',
  './intro_fr.html',
  './intro_lg.html',
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
