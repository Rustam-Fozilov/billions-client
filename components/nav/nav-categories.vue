<template>
    <div>
        <div id="nav-categories" class="w-full flex flex-wrap justify-between mt-7">
            <div @click="gotoCatalog(category.path_name)" v-for="category in categories">
                <div class="font-onest-regular cursor-pointer">
                    {{ locale === 'ru' ? category.name.ru : category.name.uz }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'


const router = useRouter()
const categories = ref([])
const { locale } = useI18n()
const config = useRuntimeConfig()


await axios
    .get(`${config.public.apiUrl}/categories`, {
        params: {
            'limit': 10
        }
    })
    .then((res) => {
        categories.value = res.data.data
    })
    .catch((err) => {
        // console.log(err)
    })


const gotoCatalog = (name) => {
    router.push(`/${locale.value}/catalog/${name}`)
}

</script>

<style scoped>

@media only screen and (max-width: 1400px) {
    #nav-categories {
        display: none;
    }
}

</style>