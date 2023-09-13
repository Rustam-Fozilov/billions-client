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
import { fetchUrl}  from '~/helpers/fetchUrl';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()
const { data, load } = fetchUrl()


</script>