<template>
    <div>
        <the-navbar/>

        <header-banner/>

        <catalog-list/>

        <new-books-list/>

        <bestsellers-list/>

        <purchased-today/>

        <the-footer/>
    </div>
</template>

<script setup>
import {fetchUrl} from '~/composable/fetchUrl';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const { setLocale } = useI18n()
const { data, load } = fetchUrl()

await load(`${config.public.apiUrl}/guest-settings`)
setLocale(data.value.data[0].value.details.code)


if (route.path === '/') {
    
    const localeCode = data.value.data[0].value.details.code
    // setLocale(localeCode)


    if (localeCode === 'uz') {
        router.push('/uz')
    } else if (localeCode === 'ru') {
        router.push('/ru')
    }

}

// else if (route.path === '/ru') {

//     await load(`${config.public.apiUrl}/guest-settings/1`, {
//         'setting_id': 1,
//         'value_id': 11,
//     }, 'PUT')
        

//     setLocale('ru')

//     router.push(`/ru`)

// } else if (route.path === '/uz') {

//     await load(`${config.public.apiUrl}/guest-settings/1`, {
//         'setting_id': 1,
//         'value_id': 10,
//     }, 'PUT')
        

//     setLocale('uz')

//     router.push(`/uz`)
// }




</script>