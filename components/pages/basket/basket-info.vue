<template>
    <div>
        <div>
            <div class="flex justify-between mt-7">
                <div class="w-[70%]">
                    <div class="flex justify-between items-end">
                        <div class="flex gap-5 items-center">
                            <div class="font-onest-medium text-xl">{{ locale === 'ru' ? 'Корзина' : 'Savat' }}</div>
                            <div class="font-onest-regular opacity-50 relative top-[3px]">{{ locale === 'ru' ? `${booksInCart ? booksInCart.length : 0} книги` : `${booksInCart ? booksInCart.length : 0}ta kitob` }}</div>
                        </div>
                        <div @click="removeAllFromCart" class="font-onest-medium text-base opacity-50 uppercase cursor-pointer hover:opacity-100 transition">{{ locale === 'ru' ? 'удалить' : 'O\'chirish' }}</div>
                    </div>

                    <div id="books-in-basket">
                        <div class="mt-12 flex flex-col gap-7">
                            <div v-for="book in booksInCart">
                                <basket-book-card :book="book"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="basket-details" class="w-[30%] pl-12 mt-12">
                    <basket-details/>
                </div>
    
            </div>
        </div>

        <bestsellers-list/>
    </div>
</template>

<script setup>

const { locale } = useI18n()
const booksInCart = await useBooksInCart()
const totalAmountOfCart = await useTotalAmountOfCart()
const config = useRuntimeConfig()


onMounted(() => {
    calculateTotalValue()
})


onUpdated(() => {
    calculateTotalValue()
})


const calculateTotalValue = () => {
    if (totalAmountOfCart.value === 0) {
        totalAmountOfCart.value = +config.public.deliveryAmount

        if (booksInCart.value) {
            for (let i = 0; i < booksInCart.value.length; i++) {
                totalAmountOfCart.value += booksInCart.value[i].book.prices[1].price
            }
        }
    } else if (totalAmountOfCart.value === +config.public.deliveryAmount) {
        if (booksInCart.value) {
            for (let i = 0; i < booksInCart.value.length; i++) {
                totalAmountOfCart.value += booksInCart.value[i].book.prices[1].price
            }
        }
    } else {
        totalAmountOfCart.value = 0
        calculateTotalValue()
    }
}


const removeAllFromCart = () => {
    booksInCart.value = []
    totalAmountOfCart.value = +config.public.deliveryAmount

    localStorage.setItem('booksInCart', JSON.stringify(booksInCart.value))
    localStorage.setItem('totalAmountOfCart', totalAmountOfCart.value)
}


</script>