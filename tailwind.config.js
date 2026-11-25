/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        recicla: {
          blanco: '#F8FAFC',
          verde: '#16A34A',
          negro: '#1E293B',
          acento: '#F59E0B'
        }
      }
    },
  },
  plugins: [],
}