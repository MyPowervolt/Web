import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← qui rientra in gioco
  ],
  server: {
    host: true, // permette a Vite di usare qualsiasi IP disponibile
    port: 5173,
  },
});
