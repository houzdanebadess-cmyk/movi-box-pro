self.addEventListener('install', (e) => {
  console.log('Installé');
});

self.addEventListener('fetch', (e) => {
  // Permet à l'application de fonctionner online
  e.respondWith(fetch(e.request));
});