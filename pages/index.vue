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
const { setLocale } = useI18n()


if(process.client) {
    if(localStorage.getItem('lang')) {
        setLocale(JSON.parse(localStorage.getItem('lang')).code)

        router.push('/' + JSON.parse(localStorage.getItem('lang')).code)
    } else {
        setLocale('ru')

        localStorage.setItem('lang', JSON.stringify({
            'code': 'ru',
            'name': 'Русский',
            'icon': 'russia-flag.png',
            'enemy_name': 'O\'zbekcha',
            'enemy_icon': 'uzb-flag.png'
        }))

        router.push('/ru')
    }
}

</script>