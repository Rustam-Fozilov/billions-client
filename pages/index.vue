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
import { useRouter } from 'vue-router';

const router = useRouter()
const { locale, setLocale } = useI18n()


if (locale.value === 'ru') {
    router.push('/ru')
} else if (locale.value === 'uz') {
    router.push('/uz')
}

</script>