/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'onest-regular': ["Onest Regular", "sans-serif", "monospace", "system-ui", "ui-sans-serif", "ui-serif", "sans-serif", "apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'onest-medium': ["Onest Medium", "sans-serif", "monospace", "system-ui", "ui-sans-serif", "ui-serif", "sans-serif", "apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      colors: {
        'primary-red': '#8C2230',
        'nav-bg': '#EEEEEE',
        'soft-white': '#F3F5F7',
        'soft-black': '#333333',
        'stock-green': '#00BA34',
        'bronze': '#D9A53D'
      },
      fontSize: {
        'xs': '12px',
        'sm': '18px',
        'base': '22px',
        'lg': '28px',
        'xl': '32px',
        '2xl': '46px',
        'xxl': '72px',
      },
    },
  },
  plugins: [],
}

