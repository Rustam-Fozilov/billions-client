<template>
    <TheNavbar/>

    <div class="container">
        <div class="text-lg font-intermedi mt-12">Ваша корзина, <span class="opacity-50">2 книги</span></div>

        <div class="mt-11 h-auto flex justify-between">
            <div class="w-2/3 border border-black p-7 flex flex-col gap-7">
                <div class="text-right font-interreg text-sm cursor-pointer hover:underline">Очистить корзину</div>
                <div id="product-id" class="flex justify-between items-center p-10 bg-white">
                    <div class="w-28">
                        <img class="w-full" src="./../assets/books-image/image-01.png" alt="Book image">
                    </div>
                    <div class="text-sm font-interreg w-1/4">Will. Чему может научить нас простой парень</div>
                    <div class="flex items-center border border-black px-4 py-3">
                        <div class="font-interreg text-sm cursor-pointer">
                            <svg width="13" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.0908813V2.09088H0V0.0908813H12Z" fill="black"/>
                            </svg>
                        </div>
                        <div class="font-interreg text-sm mx-9">1</div>
                        <div class="font-interreg text-sm cursor-pointer">
                            <svg width="12" height="13" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.56667 11.0909V0.0908813H6.43333V11.0909H4.56667ZM0 6.52422V4.65755H11V6.52422H0Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <div class="font-interreg text-sm">249 000 сум</div>
                    <div class="cursor-pointer">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 1.18867L16.8112 0L9 7.81128L1.18876 0L0 1.18867L7.81129 9L0 16.8113L1.18876 18L9 10.1887L16.8112 18L18 16.8113L10.1887 9L18 1.18867Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div id="product-id2" class="flex justify-between items-center p-10 bg-white">
                    <div class="w-28">
                        <img class="w-full" src="./../assets/books-image/image-01.png" alt="Book image">
                    </div>
                    <div class="text-sm font-interreg w-1/4">Will. Чему может научить нас простой парень</div>
                    <div class="flex items-center border border-black px-4 py-3">
                        <div class="font-interreg text-sm cursor-pointer">
                            <svg width="13" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.0908813V2.09088H0V0.0908813H12Z" fill="black"/>
                            </svg>
                        </div>
                        <div class="font-interreg text-sm mx-9">1</div>
                        <div class="font-interreg text-sm cursor-pointer">
                            <svg width="12" height="13" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.56667 11.0909V0.0908813H6.43333V11.0909H4.56667ZM0 6.52422V4.65755H11V6.52422H0Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <div class="font-interreg text-sm">249 000 сум</div>
                    <div class="cursor-pointer">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 1.18867L16.8112 0L9 7.81128L1.18876 0L0 1.18867L7.81129 9L0 16.8113L1.18876 18L9 10.1887L16.8112 18L18 16.8113L10.1887 9L18 1.18867Z" fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="zakaz-accept" class="w-[30%] h-80 p-7 flex flex-col justify-between border border-black">
                <div class="font-interreg text-base">Ваш заказ</div>
                <div>
                    <div class="flex justify-between">
                        <div class="text-sm font-interreg opacity-70">Товаров в заказе</div>
                        <div class="text-sm font-interreg">2 шт.</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-sm font-interreg opacity-70">Доставка</div>
                        <div class="text-sm font-interreg">Бесплатно</div>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div class="text-base font-intermedi">Итого:</div>
                    <div class="text-base font-intermedi">249 000 сум</div>
                </div>
                <div class="w-full bg-gold font-interreg text-sm py-4 text-center cursor-pointer">Оформить заказ</div>
            </div>
        </div>

        <div class=" mt-12">
            <div class="text-base font-futura">С этими книгами покупают</div>
            <div class="mt-7">
                <Cards :products="books"/>
            </div>
        </div>
    </div>

    <div class="mt-5">
        <TheFooter/>
    </div>
</template>

<script setup>
import TheNavbar from '../components/TheNavbar.vue';
import Cards from '../components/Cards.vue';
import TheFooter from '../components/TheFooter.vue';

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