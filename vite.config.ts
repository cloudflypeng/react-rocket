import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite';

// 检查是否使用 Bun 运行时
if (typeof Bun === 'undefined') {
  console.log('Bun is not defined')
  console.warn('\x1b[33m警告：当前未使用 Bun 运行时！建议使用 Bun 来运行项目。\x1b[0m')
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
