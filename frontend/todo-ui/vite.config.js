import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy : {
      '/login' : 'http://localhost:3000',
      '/register' : 'http://localhost:3000',
      '/todo/allTodo' : 'http://localhost:3000',
    }
  }
})
