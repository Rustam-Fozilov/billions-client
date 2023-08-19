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
        'nav-bg': '#EEEEEE',
      },
      fontSize: {
        'sm': '18px',
        'base': '24px',
        'lg': '28px',
        'xl': '32px',
        '2xl': '46px',
        'xxl': '72px',
      },
    },
  },
  plugins: [],
}

