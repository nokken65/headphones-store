// vite.config.ts
import { vanillaExtractPlugin } from "file:///home/hecate/Documents/it-incubator/headphones-store/node_modules/.pnpm/@vanilla-extract+vite-plugin@3.9.3_@types+node@20.10.5_lightningcss@1.22.1_sass@1.69.7_vite@5.0.10/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import react from "file:///home/hecate/Documents/it-incubator/headphones-store/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.0.10/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { ImageLoader } from "file:///home/hecate/Documents/it-incubator/headphones-store/node_modules/.pnpm/esbuild-vanilla-image-loader@0.1.3/node_modules/esbuild-vanilla-image-loader/dist/index.mjs";
import { defineConfig } from "file:///home/hecate/Documents/it-incubator/headphones-store/node_modules/.pnpm/vite@5.0.10_@types+node@20.10.5_lightningcss@1.22.1_sass@1.69.7/node_modules/vite/dist/node/index.js";
import sassDts from "file:///home/hecate/Documents/it-incubator/headphones-store/node_modules/.pnpm/vite-plugin-sass-dts@1.3.16_postcss@8.4.32_prettier@3.1.1_sass@1.69.7_vite@5.0.10/node_modules/vite-plugin-sass-dts/dist/index.js";
import createSvgSpritePlugin from "file:///home/hecate/Documents/it-incubator/headphones-store/node_modules/.pnpm/vite-plugin-svg-sprite@0.5.1_vite@5.0.10/node_modules/vite-plugin-svg-sprite/esm/index.js";
import tsconfigPaths from "file:///home/hecate/Documents/it-incubator/headphones-store/node_modules/.pnpm/vite-tsconfig-paths@4.2.2_typescript@5.3.3_vite@5.0.10/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig(({ mode }) => ({
  plugins: [
    tsconfigPaths(),
    react(),
    createSvgSpritePlugin({
      symbolId: "icon-[name]-[hash]"
    }),
    vanillaExtractPlugin({
      identifiers: mode === "production" ? "short" : "debug",
      esbuildOptions: {
        // @ts-ignore
        plugins: [ImageLoader({ filter: /\.(gif|jpe?g|tiff?|png|webp|avif|bmp|svg)$/ })]
      }
    }),
    sassDts()
  ],
  publicDir: "./public",
  server: {
    port: 3e3
  },
  preview: { port: 3e3 },
  css: {
    transformer: "lightningcss"
  },
  build: {
    sourcemap: "hidden",
    target: "esnext",
    cssMinify: "lightningcss",
    cssCodeSplit: true,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: (path) => path.split("/").reverse()[path.split("/").reverse().indexOf("node_modules") - 1]
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9oZWNhdGUvRG9jdW1lbnRzL2l0LWluY3ViYXRvci9oZWFkcGhvbmVzLXN0b3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9oZWNhdGUvRG9jdW1lbnRzL2l0LWluY3ViYXRvci9oZWFkcGhvbmVzLXN0b3JlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2hlY2F0ZS9Eb2N1bWVudHMvaXQtaW5jdWJhdG9yL2hlYWRwaG9uZXMtc3RvcmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2YW5pbGxhRXh0cmFjdFBsdWdpbiB9IGZyb20gJ0B2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW4nXG4vLyBpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICdlc2J1aWxkLXZhbmlsbGEtaW1hZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBzYXNzRHRzIGZyb20gJ3ZpdGUtcGx1Z2luLXNhc3MtZHRzJ1xuaW1wb3J0IGNyZWF0ZVN2Z1Nwcml0ZVBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zdmctc3ByaXRlJ1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgcGx1Z2luczogW1xuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICByZWFjdCgpLFxuICAgIGNyZWF0ZVN2Z1Nwcml0ZVBsdWdpbih7XG4gICAgICBzeW1ib2xJZDogJ2ljb24tW25hbWVdLVtoYXNoXScsXG4gICAgfSksXG4gICAgdmFuaWxsYUV4dHJhY3RQbHVnaW4oe1xuICAgICAgaWRlbnRpZmllcnM6IG1vZGUgPT09ICdwcm9kdWN0aW9uJyA/ICdzaG9ydCcgOiAnZGVidWcnLFxuICAgICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBwbHVnaW5zOiBbSW1hZ2VMb2FkZXIoeyBmaWx0ZXI6IC9cXC4oZ2lmfGpwZT9nfHRpZmY/fHBuZ3x3ZWJwfGF2aWZ8Ym1wfHN2ZykkLyB9KV0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHNhc3NEdHMoKSxcbiAgXSxcbiAgcHVibGljRGlyOiAnLi9wdWJsaWMnLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICB9LFxuICBwcmV2aWV3OiB7IHBvcnQ6IDMwMDAgfSxcbiAgY3NzOiB7XG4gICAgdHJhbnNmb3JtZXI6ICdsaWdodG5pbmdjc3MnLFxuICB9LFxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogJ2hpZGRlbicsXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICBjc3NNaW5pZnk6ICdsaWdodG5pbmdjc3MnLFxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiBwYXRoID0+XG4gICAgICAgICAgcGF0aC5zcGxpdCgnLycpLnJldmVyc2UoKVtwYXRoLnNwbGl0KCcvJykucmV2ZXJzZSgpLmluZGV4T2YoJ25vZGVfbW9kdWxlcycpIC0gMV0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFUsU0FBUyw0QkFBNEI7QUFFblgsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsbUJBQW1CO0FBQzVCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sYUFBYTtBQUNwQixPQUFPLDJCQUEyQjtBQUNsQyxPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLE1BQU07QUFBQSxJQUNOLHNCQUFzQjtBQUFBLE1BQ3BCLFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxJQUNELHFCQUFxQjtBQUFBLE1BQ25CLGFBQWEsU0FBUyxlQUFlLFVBQVU7QUFBQSxNQUMvQyxnQkFBZ0I7QUFBQTtBQUFBLFFBRWQsU0FBUyxDQUFDLFlBQVksRUFBRSxRQUFRLDZDQUE2QyxDQUFDLENBQUM7QUFBQSxNQUNqRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTLEVBQUUsTUFBTSxJQUFLO0FBQUEsRUFDdEIsS0FBSztBQUFBLElBQ0gsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLGNBQWM7QUFBQSxJQUNkLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWMsVUFDWixLQUFLLE1BQU0sR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLE1BQU0sR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLGNBQWMsSUFBSSxDQUFDO0FBQUEsTUFDbkY7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
