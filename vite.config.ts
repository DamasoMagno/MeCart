import { defineConfig } from 'vite'
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import path from 'path'

const manifest: false | Partial<ManifestOptions> = {
  display: 'standalone',
  name: 'MeCart',
  scope: '/',
  start_url: '/',
  background_color: '#202024',
  short_name: 'MeCart',
  description: 'Monte seu carrinho de compras com consciência.',
  icons: [
    {
      src: '/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/icon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      src: '/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
    },
    {
      src: '/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      workbox: {
        globPatterns: ['**/*'],
        cleanupOutdatedCaches: false,
      },
      includeAssets: ['**/*'],
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest,
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@contexts': path.resolve(__dirname, 'src/contexts/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@services': path.resolve(__dirname, 'src/services/'),
    },
  },
})
