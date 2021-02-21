const cacheName = 'mcldtools-v1.7';
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

addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;     // if valid response is found in cache return it
        } else {
          return fetch(event.request)     //fetch from internet
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());    //save the response for future
                  return res;   // return the fetched data
                })
            })
            .catch(function(err) {       // fallback mechanism
              return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
                .then(function(cache) {
                  return cache.match('/offline.html');
                });
            });
        }
      })
  );
});          

