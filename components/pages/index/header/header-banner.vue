<template>
    <div>
        <div id="header-banner" class="w-full h-full">
            <div @click="gotoCatalog" class="w-full h-full cursor-pointer">
                <img class="w-full h-full object-cover" :src="
                locale === 'ru' ?
                `${config.public.imageUrl}/images/banners/banner_v1_ru.png` :
                `${config.public.imageUrl}/images/banners/banner_v1_uz.png`"
                 alt="Katalog books">
            </div>
        </div>
    </div>
</template>

<script setup>

const router = useRouter()
const { locale } = useI18n()
const config = useRuntimeConfig()


const gotoCatalog = () => {
    router.push(`/${locale.value}/catalog`)
}

</script>