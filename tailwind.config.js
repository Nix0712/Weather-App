/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-weather-blue': '#021B79',
        'light-weather-blue': '#0575E6',
      },
      backgroundImage: {
        'back-sky': "url('/public/background.jpg')",
      }
    },
  },
  plugins: [],
}

