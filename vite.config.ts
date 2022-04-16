import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["/public/favicon.ico", "/public/robots.txt", "/public/apple-touch-icon.png"],
      manifest: {
        name: "E-Koi Monitor",
        short_name: "E-Koi Monitor",
        description: "E-Koi Monitor",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/public/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/public/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/public/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
