import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

const root= resolve(__dirname,'src')
const outDir = resolve(__dirname,'dist')
// https://vite.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions:{
      input:{
        main: resolve(root, 'index.html'),
        BookLibrary: resolve(root,'BookLibrary','index.html'),
        SignIn: resolve(root,'Signin','index.html'),
        SignUp: resolve(root,'SignUp','index.html'),
        UserProfile: resolve(root,'UserProfile','index.html'),
        ClassicsPage: resolve(root,'ClassicsPage','index.html'),
      }
    }
  }
})
