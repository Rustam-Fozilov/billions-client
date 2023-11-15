<template>
    <div>
        <div id="header-banner" class="w-full h-[500px]">
            <div class="w-full h-full">
                <img class="w-full h-full" :src="`${config.public.imageUrl}/images/banners/banner.png`" alt="banner">
            </div>
        </div>
    </div>
</template>

<script setup>

const config = useRuntimeConfig()

</script>