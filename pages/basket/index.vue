<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white w-full">
            <div class="container pt-12">
                <breadcrumbs-path/>

                <div v-if="booksInBasket ? booksInBasket.length : 0">
                    <basket-info/>
                </div>

                <div v-if="booksInBasket ? !booksInBasket.length : 0">
                    <basket-empty/>
                </div>
            </div>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    title: {
        ru: 'Корзина',
        uz: 'Savat'
    },
})

const booksInBasket = await useBooksInCart()

</script>