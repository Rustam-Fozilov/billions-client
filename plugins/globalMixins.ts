import categories from 'composable/categories';

export default defineNuxtPlugin({
    // nuxtApp.vueApp.mixin({
    //     methods: {
    //         // Global methods here
    //     }
    // })
    name: 'globalMixins',
    async setup(nuxtApp) {
        console.log('globalMixins setup')
    }
})
