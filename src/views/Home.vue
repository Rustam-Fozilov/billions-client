<template>
    <TheNavbar/>
    <Banner/>

    <div class="container mt-12">
        <a href="/">
            <span>
                <div class="flex items-center text-base font-futura gap-3">Популярные товары <ArrowIcon/></div>
            </span>
        </a>

        <div class="flex mt-8 flex-wrap justify-between">
            <Cards :products="books"/>
        </div>
    </div>

    <Banner/>

    <div class="mt-8 container">
        <a href="/">
            <span>
                <div class="flex items-center text-base font-futura gap-3">Популярные товары <ArrowIcon/></div>
            </span>
        </a>
    </div>

    <div class="flex mt-8 flex-wrap justify-between container">
        <Cards :products="books"/>
    </div>

    <TheFooter/>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import Banner from '@/components/HomePage/Banner.vue'
import ArrowIcon from '../components/ui/ArrowIcon.vue';
import Cards from '../components/Cards.vue';
import TheFooter from '../components/TheFooter.vue';

const books = [
    {
        id: 1,
        title: 'Psychology of money1',
        author: 'Morgan Housel',
        price: 150000,
    },
    {
        id: 2,
        title: 'Psychology of money2',
        author: 'Morgan Housel',
        price: 150000,
    },
    {
        id: 3,
        title: 'Psychology of money3',
        author: 'Morgan Housel',
        price: 150000,
    },
    {
        id: 4,
        title: 'Psychology of money4',
        author: 'Morgan Housel',
        price: 150000,
    },
    {
        id: 5,
        title: 'Psychology of money5',
        author: 'Morgan Housel',
        price: 150000,
    },
    {
        id: 6,
        title: 'Psychology of money6',
        author: 'Morgan Housel',
        price: 150000,
    }
]
</script>