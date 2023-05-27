<template>
    <TheNavbar/>
    <Banner/>

    <div class="container mt-12">
        <NavigationText @navigate="gotoPopular">Популярные товары</NavigationText>

        <div class="mt-8">
            <Cards :products="books"/>
        </div>
    </div>

    <Banner/>

    <div class="mt-8 container">
        <NavigationText @navigate="console.log('navigate2')">Популярные товары</NavigationText>
    </div>

    <div class="mt-8 container">
        <Cards :products="books"/>
    </div>

    <TheFooter/>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import Banner from '@/components/HomePage/Banner.vue'
import Cards from '../components/Cards.vue';
import TheFooter from '../components/TheFooter.vue';
import NavigationText from '../components/ui/NavigationText.vue';

const gotoPopular = () => {
    window.location.href = '/popular'
}

const books = [
    {
        id: 1,
        title: 'Psychology of money1',
        author: 'Morgan Housel',
        price: 150000,
        isLiked: true
    },
    {
        id: 2,
        title: 'Psychology of money2',
        author: 'Morgan Housel',
        price: 150000,
        isLiked: false
    },
    {
        id: 3,
        title: 'Psychology of money3',
        author: 'Morgan Housel',
        price: 150000,
        isLiked: false
    },
    {
        id: 4,
        title: 'Psychology of money4',
        author: 'Morgan Housel',
        price: 150000,
        isLiked: false
    },
    {
        id: 5,
        title: 'Psychology of money5',
        author: 'Morgan Housel',
        price: 150000,
        isLiked: false
    },
    {
        id: 6,
        title: 'Psychology of money6',
        author: 'Morgan Housel',
        price: 150000,
        isLiked: false
    }
]
</script>