<template>
    <div>
        <div id="nav-categories" class="w-full flex justify-between mt-7">
            <div @click="gotoCatalog(category.path_name)" v-for="category in categories">
                <div class="font-onest-regular cursor-pointer">
                    {{ locale === 'ru' ? category.name.ru : category.name.uz }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';


const { locale } = useI18n()
const router = useRouter()
const config = useRuntimeConfig()
const categories = ref([])


await axios
    .get(`${config.public.apiUrl}/categories`, {
        params: {
            'only_parents': true
        }
    })
    .then((res) => {
        categories.value = res.data.data
    })
    .catch((err) => {
        console.log(err)
    })


const gotoCatalog = (name) => {
    router.push(`/${locale.value}/catalog/${name}`)
}

</script>