// Nécessaire pour pouvoir installer le QG comme une appli sur Android. Ne met rien en cache : tout vient du réseau.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
