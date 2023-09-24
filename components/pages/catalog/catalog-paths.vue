<template>
    <div>
        <div id="breadcrumbs-catalog-path">
            <div class="flex items-center gap-3 opacity-50">

                <NuxtLink :to="'/' + locale" class="font-onest-regular hover:opacity-100 transition">
                    {{ locale === 'ru' ? 'Главная' : 'Asosiy' }}
                </NuxtLink>

                <div class="flex items-center gap-3 hover:opacity-100 transition">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                            <circle cx="1.5" cy="1.5" r="1.5" fill="black"/>
                        </svg>
                    </div>

                    <div class="font-onest-regular">
                        {{ pathTitle }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { fetchUrl } from "~/helpers/fetchUrl";


const pathTitle = ref('')
const route = useRoute()
const config = useRuntimeConfig()
const { data, load } = fetchUrl()
const { locale } = useI18n()


await load(`${config.public.apiUrl}/categories?only_parents=true`)
const category = data.value.data.find((category) => category.path_name === route.params.name)
pathTitle.value = category.name[locale.value]

</script>
