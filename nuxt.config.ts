// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  plugins: [
    {src: '~/plugins/focus', mode: 'client'},
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
  ],
  image: {
    dir: 'assets/images',
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'ru',
    strategy: 'prefix_and_default',
    locales: [
      { code: 'uz', iso: 'uz-UZB', file: 'uz-UZB.json' },
      { code: 'ru', iso: 'ru-RU', file: 'ru-RU.json' },
    ],
  },
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  // devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL,
      authToken: process.env.NUXT_AUTH_TOKEN,
      deliveryAmount: process.env.NUXT_DELIVERY_AMOUNT
    }
  },
})
