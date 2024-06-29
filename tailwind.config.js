/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'dynamicBg':"url('2018-audi-black-car-car-wallpaper-preview.jpg')",
      },
    },
  },
  plugins: [],
}

