import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Tailwind v4 用法：Vite 插件 + CSS 一行 @import，不生成 tailwind.config.js，不走 PostCSS。
export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
