import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { lingui } from "@lingui/vite-plugin";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [["@lingui/swc-plugin", {},]],
    }),
    lingui(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
})
