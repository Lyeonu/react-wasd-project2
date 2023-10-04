import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 //  base: '/react-wasd-project2/',   추후 배포할 때 해제 예정
})
