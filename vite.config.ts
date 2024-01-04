// import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
// import react from '@vitejs/plugin-react'
// import { ImageLoader } from 'esbuild-vanilla-image-loader'
import { defineConfig } from 'vite'
import sassDts from 'vite-plugin-sass-dts'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'
import tsconfigPaths from 'vite-tsconfig-paths'

// import plugin from './.vite-plugins/typedCssModulesPlugin'

export default defineConfig(({ mode }) => ({
  plugins: [
    tsconfigPaths(),
    react(),
    createSvgSpritePlugin({
      symbolId: 'icon-[name]-[hash]',
    }),
    // vanillaExtractPlugin({
    //   identifiers: mode === 'production' ? 'short' : 'debug',
    //   esbuildOptions: {
    //     // @ts-ignore
    //     plugins: [ImageLoader({ filter: /\.(gif|jpe?g|tiff?|png|webp|avif|bmp|svg)$/ })],
    //   },
    // }),
    sassDts({
      enabledMode: ['development', 'production'],
    }),
    // plugin(),
  ],
  server: {
    port: 3000,
  },
  preview: { port: 3000 },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      cssModules: { pattern: '[name]_[local]' },
    },
  },
  build: {
    sourcemap: 'hidden',
    target: 'esnext',
    cssMinify: false,
    rollupOptions: {
      output: {
        manualChunks: path =>
          path.split('/').reverse()[path.split('/').reverse().indexOf('node_modules') - 1],
      },
    },
  },
}))
