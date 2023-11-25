<template>
    <div v-if="booksInCart ? booksInCart.length !== 0 : 0">
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white w-full">
            <div class="container pt-12">
                <breadcrumbs-path/>

                <confirm-order-info/>
            </div>

            <div class="mt-[100px] sm:mt-16">
                <the-footer/>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    title: {
        uz: 'Buyurtmani rasmiylashtirish',
        ru: 'Оформление заказа',
    },
})


const router = useRouter()
const { locale } = useI18n()
const booksInCart = await useBooksInCart()
const authToken = await useAuthToken()


if (!authToken.value) {
    router.push(`/${locale.value}/`)
} else if (booksInCart.value) {
    if (booksInCart.value.length === 0) {
        router.push(`/${locale.value}/`)
    }
}

</script>