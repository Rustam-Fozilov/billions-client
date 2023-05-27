<template>
    <TheNavbar/>

    <div class="container">
        <div class="text-lg font-intermedi mt-12">Популярные товары</div>
    
        <hr class="my-7">

        <div class="flex justify-between">
            <div class="w-1/5">
                <div class="w-11/12 font-interreg text-sm">
                    <div class="bg-white h-12 pl-5 pt-2">
                        Фильтр
                    </div>
                    <div class="flex flex-col items-center mt-7">
                        <div class=" leading-9">
                            <div class="cursor-pointer">Саморазвитие</div>
                            <div class="cursor-pointer">Саморазвитие</div>
                            <div class="cursor-pointer">Саморазвитие</div>
                            <div class="cursor-pointer">Саморазвитие</div>
                            <div class="cursor-pointer">Саморазвитие</div>
                            <div class="cursor-pointer">Саморазвитие</div>
                        </div>
                    </div>

                    <hr class="my-7">

                    <div>
                        <div class="">Цена, сум</div>
                        <div class=" my-3">
                            <input type="range" name="price" id="">
                        </div>
                        <div class="flex gap-3 items-center">
                            <div class="border border-black py-2 w-2/5">
                                <input type="number" required name="" id="" class="bg-transparent w-full outline-none hide-arrows text-center" value="1">
                            </div>
                            <div>—</div>
                            <div class="border border-black py-2 w-2/5">
                                <input type="number" required name="" id="" class="bg-transparent w-full outline-none hide-arrows text-center" value="250">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-4/5">
                <Cards :products="books"/>
            </div>
        </div>


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