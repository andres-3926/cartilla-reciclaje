import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'icons.svg',
        'images/logo-reciclando.png',
        'images/logo-uniminuto.png',
        'images/logo-fundacion.jpg'
      ],
      manifest: {
        name: 'ReciclAndo App: Formación en Economía Circular',
        short_name: 'ReciclAndo App',
        description: 'Cartilla web interactiva para la Fundación Bajo la Mano de Dios y proyecto Ecoescuelas Digitales UNIMINUTO',
        theme_color: '#0F5132',
        background_color: '#F8FAFC',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/images/logo-reciclando.png',
            sizes: '192x192 512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,mp3}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image' || request.destination === 'audio' || request.destination === 'font',
            handler: 'CacheFirst',
            options: {
              cacheName: 'cartilla-assets-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 año de persistencia offline
              }
            }
          }
        ]
      }
    })
  ]
});
