import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { lingui } from "@lingui/vite-plugin";
import { VitePWA } from 'vite-plugin-pwa'
import { join } from 'path'
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills(),
    react({
      plugins: [["@lingui/swc-plugin", {},]],
    }),
    lingui(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
  resolve: {
    alias: {
      "@": join(__dirname, "src")
    },
  },
})
