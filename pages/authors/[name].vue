<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white">
            <div class="container pb-24 pt-12">
                <div>
                    <author-paths/>
                </div>

                <div class="mt-12">
                    author page
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
        ru: 'Авторы',
        uz: 'Mualliflar'
    }
})

</script>
