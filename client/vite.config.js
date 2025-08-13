import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Aquí está la magia: pasamos el objeto de configuración directamente al plugin
    tailwindcss({
      config: {
        theme: {
          extend: {
            fontFamily: {
              heading: ['Oswald', 'sans-serif'],
              body: ['Roboto', 'sans-serif'],
            },
          },
        },
      },
    }),
  ],
})