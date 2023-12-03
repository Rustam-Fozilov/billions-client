<template>
    <div>
        <div>
            <div class="pt-12 md:py-7">
                <div class="flex flex-col gap-12 sm:gap-7">
                    <div>
                        <div class="text-xl font-onest-medium sm:text-base">{{ $t('catalog.title') }}</div>
                    </div>
                    <div class="flex gap-7 flex-wrap sm:justify-evenly sm:gap-5">
                        <div @click="gotoCatalog(category.path_name)" v-for="category in data.data" class="w-52 sm:w-24">
                            <div class="w-full h-52 bg-white cursor-pointer sm:h-24">
                                 <img class="w-full h-full object-cover" :src="`${config.public.imageUrl}/images/categories/${category.image.link}`" alt="catalog image">
                            </div>
                            <div class="text-center mt-5 font-onest-medium text-base sm:text-xs sm:mt-3">{{ locale === 'ru' ? category.name.ru : category.name.uz }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/helpers/fetchUrl';
import { useRouter } from "vue-router";


const router = useRouter()
const config = useRuntimeConfig()
const { locale } = useI18n()
const { data, load } = fetchUrl()


await load(`${config.public.apiUrl}/categories`);


const gotoCatalog = (name) => {
    router.push(`/${locale.value}/catalog/${name}`)
}

</script>