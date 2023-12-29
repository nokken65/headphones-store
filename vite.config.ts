import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { ImageLoader } from 'esbuild-vanilla-image-loader'
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
    vanillaExtractPlugin({
      identifiers: 'debug',
      esbuildOptions: {
        // @ts-ignore
        plugins: [ImageLoader({ filter: /\.(gif|jpe?g|tiff?|png|webp|avif|bmp|svg)$/ })],
      },
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
          'utils-vendor': ['ramda'],
        },
      },
    },
  },
})
