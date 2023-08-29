<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white w-full">
            <div class="container pt-12">
                <breadcrumbs-path/>

                <basket-info/>
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
        uz: 'Savat',
        ru: 'Корзина',
    },
    name: {
        uz: 'Savat',
        ru: 'Корзина',
    },
    url: '/basket',
})

</script>