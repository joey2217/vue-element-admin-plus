import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      '@': '/src/',
    },
  },
  plugins: [vue()],
  server: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'https://vue-element-admin-plus.joey2019.vercel.app/',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
