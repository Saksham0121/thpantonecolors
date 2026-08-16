import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig(({ command }) => ({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    ...(command === "build"
      ? [
          nitro({
            preset: process.env.NITRO_PRESET || (process.env.VERCEL ? "vercel" : "vercel"),
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));
