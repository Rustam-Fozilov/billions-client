<template>
    <div class="w-full bg-white flex justify-center items-center h-[50px]">
        <div class="container flex justify-between">
            <div class="font-interreg text-sm">Доставим ваш заказ бесплатно — всего за 1 день!</div>
            <div class="font-interreg text-sm">+998 97 767 20 97</div>
        </div>
    </div>
    <nav class="mt-[30px] container">
        <div class="flex justify-between items-center">
            <div class="w-[150px]">
                <a href="/">
                    <span>
                        <img class="w-full" src="../assets/logo.svg" alt="LOGO">
                    </span>
                </a>
            </div>
            <form @submit.prevent="searchBooks" class="w-[40%] border-[1px] border-black flex justify-between py-[0.65rem] px-4 opacity-50">
                <input v-model="search" type="text" class="w-4/5 text-sm font-interreg bg-transparent text-black outline-none placeholder:text-black" placeholder="Search books">
                <div class="flex items-center mr-1" @click="searchBooks">
                    <SearchIcon/>
                </div>
            </form>
            <div class="flex gap-5">
                <LikeIcon @click="gotoFavorites"/>
                <CartIcon/>
            </div>
        </div>
        <div class="mt-7">
            <Categories :categories="categories"/>
        </div>
    </nav>
</template>

<script setup>
import SearchIcon from './ui/SearchIcon.vue';
import CartIcon from './ui/CartIcon.vue';
import LikeIcon from './ui/LikeIcon.vue';
import Categories from './ui/Categories.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const search = ref('');

const categories = [
    {id: 1, name: 'Художественная литература'},
    {id: 2, name: 'Детская литература'},
    {id: 3, name: 'Психология'},
    {id: 4, name: 'Бизнес-книги'},
    {id: 5, name: 'Компьютерная литература'},
    {id: 6, name: 'Книги для подростков'},
    {id: 7, name: 'Книги для саморазвития'},
]

const searchBooks = () => {
    search.value = search.value.trim();
    router.push({ name: 'Home', query: { search: search.value } });

    search.value = '';
}

const gotoFavorites = () => {
    window.location.href = '/favorites';
}

</script>