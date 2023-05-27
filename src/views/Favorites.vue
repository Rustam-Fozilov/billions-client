<template>
    <TheNavbar/>

    <div class="container">
        <div class="text-lg font-intermedi mt-12">Мои желания</div>
    
        <hr class="my-7">

        <Cards :products="books"/>

    </div>
    
    <TheFooter/>
</template>

<script setup>
import Cards from '../components/Cards.vue';
import TheNavbar from '../components/TheNavbar.vue';
import TheFooter from '../components/TheFooter.vue';

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
        isLiked: true
    },
    {
        id: 3,
        title: 'Psychology of money3',
        author: 'Morgan Housel',
        price: 150000,
        isLiked: true
    },
    {
        id: 4,
        title: 'Psychology of money4',
        author: 'Morgan Housel',
        price: 150000,
        isLiked: true
    },
    {
        id: 5,
        title: 'Psychology of money5',
        author: 'Morgan Housel',
        price: 150000,
        isLiked: true
    }
]
</script>