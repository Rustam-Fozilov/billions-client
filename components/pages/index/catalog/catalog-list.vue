<template>
    <div>
        <div>
            <div class="container">
                <div class="py-[100px] flex flex-col gap-12">
                    <div class="flex gap-7 items-end">
                        <div class="text-xl font-onest-medium">{{ $t('catalog.title') }}</div>
                        <div class="font-onest-regular opacity-50 hover:opacity-100">
                            <div class="relative top-[-5px] left-0">
                                <NuxtLink :to="localePath('/')">{{ $t('catalog.show_all') }}</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-7 flex-wrap">
                        <div v-for="category in data.data" class="w-52">
                            <div class="w-full h-52 bg-soft-white cursor-pointer">
                                <!-- <img class="w-full h-full object-cover" src="~/assets/images/uzb-flag.png" alt="catalog image"> -->
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
import {fetchUrl} from '~/composables/fetchUrl';


const config = useRuntimeConfig()
const localePath = useLocalePath()
const { locale } = useI18n()
const { data, load } = fetchUrl()


await load(`${config.public.apiUrl}/categories`, {
    params: {
        'only_parents': true
    }
});

</script>composables/fetchUrl