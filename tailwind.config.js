/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        name: {
          words: ['Efe', 'Alexander', 'Obieroma'], 
          delay: 0.5
        }
      }
    })
  ],
}