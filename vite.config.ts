import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react({ babel: { babelrc: true } }),
    createSvgSpritePlugin({
      symbolId: 'icon-[name]-[hash]',
    }),
    tsconfigPaths(),
  ],
  publicDir: './public',
  server: { port: 3000 },
})
