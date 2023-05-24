<template>
    <TheNavbar />

    <div class="container flex justify-between mt-20">
        <div id="image-container" class=" w-2/5 flex justify-between h-[440px]">
            <div id="image-carousel" class="w-1/4 h-full flex flex-col justify-between">
                <div class="w-full  h-[32%] bg-white border border-black cursor-pointer">
                    <img src="../assets/books-image/image-02.png" alt="Book image" class="w-full h-full object-contain p-1">
                </div>
                <div class="w-full  h-[32%] bg-white cursor-pointer">
                    <img src="../assets/books-image/image-03.png" alt="Book image" class="w-full h-full object-contain p-1">
                </div>
                <div class="w-full  h-[32%] bg-white cursor-pointer">
                    <img src="../assets/books-image/image-04.png" alt="Book image" class="w-full h-full object-contain p-1">
                </div>
            </div>
            <div id="big-image" class=" w-[70%] bg-white h-full flex justify-center items-center">
                <img src="../assets/books-image/image-01.png" alt="Book image" class=" w-full h-full object-contain p-3">
            </div>
        </div>
        <div id="full-info-container" class="w-1/2">
            <div id="book-title">
                <div>9 zakazov</div>
                <div>
                    <div>Book name</div>
                    <div>Book slogan</div>
                    <div>Author</div>
                </div>
            </div>
            <div id="book-properties">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="book-price">
                <div>Price</div>
                <div>2000 so'm</div>
            </div>
            <div id="book-buttons">
                <div>Korzina</div>
                <div>Kupit v 1 click</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TheNavbar from '../components/TheNavbar.vue';
</script>