// vite.config.js
import { defineConfig } from "file:///C:/Users/pc/Desktop/Tether2/Tether%20For%20US/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/pc/Desktop/Tether2/Tether%20For%20US/node_modules/@vitejs/plugin-react/dist/index.mjs";
import copy from "file:///C:/Users/pc/Desktop/Tether2/Tether%20For%20US/node_modules/rollup-plugin-config/dist/rollup-plugin-config.cjs.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 3420
  },
  build: {
    // Output directory for the production build
    outDir: "build",
    // Copy the assets from public folder to build folder
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: "src/assets/*", dest: "build" }
          ]
        })
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwY1xcXFxEZXNrdG9wXFxcXFRldGhlcjJcXFxcVGV0aGVyIEZvciBVU1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccGNcXFxcRGVza3RvcFxcXFxUZXRoZXIyXFxcXFRldGhlciBGb3IgVVNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3BjL0Rlc2t0b3AvVGV0aGVyMi9UZXRoZXIlMjBGb3IlMjBVUy92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgY29weSBmcm9tICdyb2xsdXAtcGx1Z2luLWNvbmZpZydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzQyMFxuICB9LFxuICBidWlsZDoge1xuICAgIC8vIE91dHB1dCBkaXJlY3RvcnkgZm9yIHRoZSBwcm9kdWN0aW9uIGJ1aWxkXG4gICAgb3V0RGlyOiAnYnVpbGQnLFxuICAgIC8vIENvcHkgdGhlIGFzc2V0cyBmcm9tIHB1YmxpYyBmb2xkZXIgdG8gYnVpbGQgZm9sZGVyXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBjb3B5KHtcbiAgICAgICAgICB0YXJnZXRzOiBbXG4gICAgICAgICAgICB7IHNyYzogJ3NyYy9hc3NldHMvKicsIGRlc3Q6ICdidWlsZCcgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSwgIFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlQsU0FBUyxvQkFBb0I7QUFDMVYsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUdqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsUUFBUTtBQUFBO0FBQUEsSUFFUixlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxLQUFLO0FBQUEsVUFDSCxTQUFTO0FBQUEsWUFDUCxFQUFFLEtBQUssZ0JBQWdCLE1BQU0sUUFBUTtBQUFBLFVBQ3ZDO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
