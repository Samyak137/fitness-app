// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'fitness-app' with your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: "/fitness-app/",
});
