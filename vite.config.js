import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Aquathon/", // Required to tell github to check on it's repository
  plugins: [react()],
})
