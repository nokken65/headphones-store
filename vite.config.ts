import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({ babel: { babelrc: true } }),
    createSvgSpritePlugin({
      symbolId: 'icon-[name]-[hash]',
    }),
  ],
  publicDir: './public',
  server: {
    port: 3000,
  },
  preview: { port: 3000 },
  build: {
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'nanostores-vendor': ['nanostores', '@nanostores/persistent', '@nanostores/react'],
          'styled-components-vendor': ['styled-components'],
          'framer-motion-vendor': ['framer-motion'],
          'utils-vendor': ['ramda', '@uidotdev/usehooks'],
        },
      },
    },
  },
})
