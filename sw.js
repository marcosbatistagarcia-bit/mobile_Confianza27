/* Confianza R1 — service worker (RG-03). Guarda o app para abrir sem internet.
   Troque VERSAO a cada publicação para os celulares baixarem a versão nova. */
const VERSAO = 'confianza-r1-2026-10-24';
const APP = ['./', 'index.html', 'manifest.webmanifest', 'assets/logo/icon-192.png', 'assets/logo/icon-512.png', 'assets/logo/icon-maskable-192.png', 'assets/logo/icon-maskable-512.png', 'assets/logo/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSAO).then(c => c.addAll(APP)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url); if (url.origin !== location.origin) return;   // CDN (PDF/PPTX) segue direto pela rede
  // página e base de dados: rede primeiro (pega a versão nova), cache se estiver sem internet
  if (req.mode === 'navigate' || url.pathname.endsWith('.json')) {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSAO).then(k => k.put(req, c)); return r; }).catch(() => caches.match(req).then(r => r || caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(n => { const c = n.clone(); caches.open(VERSAO).then(k => k.put(req, c)); return n; })));
});
