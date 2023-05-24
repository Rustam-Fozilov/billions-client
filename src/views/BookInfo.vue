<template>
    <TheNavbar />

    <div class="container flex justify-between mt-20">
        <div id="image-container" class=" w-2/5 flex justify-between h-[500px]">
            <div id="image-carousel" class="w-1/4 h-full flex flex-col justify-between">
                <div class="w-full  h-[32%] bg-white border-[0.5px] border-black cursor-pointer">
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
        <div id="full-info-container" class="w-1/2 h-[500px] flex flex-col justify-between">
            <div id="book-title">
                <div class="text-sm font-interreg text-black opacity-70">9 заказов</div>
                <div class="mt-6">
                    <div class="font-intersemi text-lg">Will. Чему может научить нас простой парень</div>
                    <div class="font-interreg text-[20px]">Сильная автобиография, заставляющая встать с дивана и действовать</div>
                    <div class="text-sm font-interreg opacity-70">Смит Мэнсон</div>
                </div>
            </div>
            <div id="book-properties" class="mt-2 w-2/5">
                <div class="w-full flex justify-between opacity-70">
                    <div class="font-interreg text-sm">Язык:</div>
                    <div class="font-interreg text-sm">Русский</div>
                </div>
                <div class="w-full flex justify-between opacity-70">
                    <div class="font-interreg text-sm">Количество страниц:</div>
                    <div class="font-interreg text-sm">328</div>
                </div>
                <div class="w-full flex justify-between opacity-70">
                    <div class="font-interreg text-sm">Обложка:</div>
                    <div class="font-interreg text-sm">Твердая</div>
                </div>
                <div class="w-full flex justify-between opacity-70">
                    <div class="font-interreg text-sm">Год издания:</div>
                    <div class="font-interreg text-sm">2023</div>
                </div>
            </div>
            <div id="book-price">
                <div class="text-sm font-interreg opacity-70">Цена:</div>
                <div class="text-base font-intermedi">200 000 сум</div>
            </div>
            <div id="book-buttons" class="flex gap-5">
                <div class="px-20 py-4 bg-gold cursor-pointer text-sm font-futura">В корзину</div>
                <div class="px-20 py-4 bg-white cursor-pointer text-sm font-futura">Купить в 1 клик</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TheNavbar from '../components/TheNavbar.vue';
</script>