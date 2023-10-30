<template>
    <div>
        <div>
            <div class="pt-12">
                <div class="flex flex-col gap-12">
                    <div>
                        <div class="text-xl font-onest-medium">{{ $t('catalog.title') }}</div>
                    </div>
                    <div class="flex gap-7 flex-wrap">
                        <div @click="gotoCatalog(category.path_name)" v-for="category in data.data" class="w-52">
                            <div class="w-full h-52 bg-white cursor-pointer">
                                <!--                                 <img class="w-full h-full object-cover" src="~/assets/images/uzb-flag.png" alt="catalog image">-->
                            </div>
                            <div class="text-center mt-5 font-onest-medium text-base">{{ locale === 'ru' ? category.name.ru : category.name.uz }}</div>
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