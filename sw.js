const APP_PREFIX = 'MCLDTools'; // Identifier for this app (this needs to be consistent across every cache update)
const VERSION = 'v2.3'; // Version of the off-line cache (change this value everytime you want to update cache)
const CACHE_NAME = APP_PREFIX + VERSION
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

// Cache resources
self.addEventListener('fetch', function (e) {
  e.respondWith(
      fetch(e.request).catch(function() {
          return caches.match(e.request)
      })
  )
})
