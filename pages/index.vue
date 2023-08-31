<template>
    <div>
        <!-- <the-navbar/>

        <header-banner/>

        <catalog-list/>

        <new-books-list/>

        <bestsellers-list/>

        <purchased-today/>

        <the-footer/> -->
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

if(process.client && localStorage.getItem('lang')) {
    const lang = JSON.parse(localStorage.getItem('lang'))
    console.log('data: ', lang);

    if (lang.code === 'ru') {
        router.push('/ru')
    } else {
        router.push('/uz')
    }
} else if(process.client) {
    localStorage.setItem('lang', JSON.stringify({
        'code': 'ru',
        'name': 'Русский',
        'icon': 'russia-flag.png',
        'enemy_name': 'O\'zbekcha',
        'enemy_icon': 'uzb-flag.png'
    }))

    router.push('/ru')
}

</script>