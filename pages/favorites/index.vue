<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white w-full">
            <div class="container pt-12 sm:pt-7">
                <breadcrumbs-path/>

                <favorites-list/>

            </div>
        </div>,

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    title: {
        uz: 'Sevimlilar',
        ru: 'Избранные',
    },
})

</script>