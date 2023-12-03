<template>
    <div>
        <div>
            <div class="container">
                <div class="py-[100px] flex flex-col gap-12 md:py-7 sm:gap-7">
                    <div class="flex gap-7 items-end">
                        <div class="text-xl font-onest-medium sm:text-base">{{ $t('catalog.title') }}</div>
                        <div class="font-onest-regular opacity-50 hover:opacity-100">
                            <div class="relative top-[-5px] left-0 sm:top-0">
                                <NuxtLink :to="`/${locale}/catalog`">{{ $t('catalog.show_all') }}</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-7 flex-wrap xl:justify-between sm:gap-5">
                        <div @click="gotoCatalog(category.path_name)" v-for="category in data.data" class="w-52 sm:w-24" :key="category.id">
                            <div class="w-full h-52 bg-soft-white cursor-pointer sm:h-24">
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
import { fetchUrl } from '~/helpers/fetchUrl'


const router = useRouter()
const config = useRuntimeConfig()
const { locale } = useI18n()
const { data, load } = fetchUrl()


await load(`${config.public.apiUrl}/categories`, {
    params: {
        'limit': 6
    }
})


const gotoCatalog = (name) => {
    router.push({path: `/${locale.value}/catalog/${name}`})
}

</script>