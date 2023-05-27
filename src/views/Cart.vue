<template>
    <TheNavbar/>

    <div class="container">
        <div class="text-lg font-intermedi mt-12">Ваша корзина</div>
    </div>
</template>

<script setup>
import TheNavbar from '../components/TheNavbar.vue';
import Cards from '../components/Cards.vue';

const books = [
    {
        id: 1,
        title: 'Psychology of money1',
        author: 'Morgan Housel',
        price: 150000,
        isLiked: false
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
        isLiked: true
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
    }
]
</script>