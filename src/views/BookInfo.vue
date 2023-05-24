<template>
    <TheNavbar />

    <div class="container mt-20">
        <div id="book-info__header" class="flex justify-between">
            <div id="image-container" class=" w-2/5 flex justify-between h-[500px] sticky top-3  bottom-9">
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
            <div id="info-text__container" class="w-1/2">
                <div id="basic-info" class="h-[500px] flex flex-col justify-between">
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

                <hr class="my-14">

                <div id="description-text">
                    <div class="text-base font-intermedi">Описание</div>
                    <div class="font-interreg text-sm mt-6">
                        Эта книга станет незаменимым помощником для тех школьников, кто испытывает ступор при виде чистого листа, и для тех, кто пишет легко, но почему-то не получает пятерки. Вы узнаете 7 секретов качественной работы над любой предложенной темой — от «Как я провел лето» до «Евгений Онегин — эгоист поневоле».
                        В чем разница между сочинением, изложением, эссе и заметкой? Какие бывают виды сочинений? Почему важно придерживаться плана и как его составить? Как грамотно выстроить структуру

                        Какие бывают виды сочинений? Почему важно придерживаться плана и как его составить? Как грамотно выстроить структуру
                    </div>
                </div>
            </div>
        </div>

        <hr class="my-12">

        <div id="recomended-books">
            <NavigationText>Книги по теме</NavigationText>
            <div class="my-10">
                <Cards :products="books"/>
            </div>
        </div>
    </div>

    <TheFooter />
</template>

<script setup>
import TheNavbar from '../components/TheNavbar.vue';
import TheFooter from '../components/TheFooter.vue';
import Cards from '../components/Cards.vue';
import NavigationText from '../components/ui/NavigationText.vue';

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
    }
]
</script>