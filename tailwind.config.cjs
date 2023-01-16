/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgHome: 'url(/src/assets/bg.jpg)'
      },
      fontFamily: {
        name: 'Josefin Sans, sans-serif',
        title: 'Moon Dance, cursive',
        text: 'Roboto, sans-serif'
      },
    }
  }
}