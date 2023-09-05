<template>
    <div>
        <div id="nav-categories" class="w-full flex justify-between mt-7">
            <div v-for="category in categories">
                <div class="font-onest-regular cursor-pointer">
                    {{ locale === 'ru' ? category.name.ru : category.name.uz }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';

const { locale } = useI18n()
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
</script>