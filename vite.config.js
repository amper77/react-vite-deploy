import { defineConfig } from "vite";
import react from "@vitejs/plug-react";

export default defineConfig({
  plugins: [react()],
   base: "./"
});