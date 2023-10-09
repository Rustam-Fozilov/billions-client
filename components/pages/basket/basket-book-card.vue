<template>
    <div>
        <div>
            <div class="bg-white p-10 flex justify-between items-center">
                <div class="flex gap-7 items-center w-2/5">
                    <div class="w-5/12 h-48">
                        <img class="w-full h-full object-cover" src="~/assets/images/books/book-cover.png" alt="book cover" />
                    </div>
                    <div class="font-onest-regular flex flex-col gap-7 w-1/2">
                        <div class="opacity-50">
                            {{ locale === 'ru' ? book.book.inventory[0].cover_type.ru : book.book.inventory[0].cover_type.uz }}
                        </div>
                        <div>
                            {{ locale === 'ru' ? book.book.name.ru : book.book.name.uz }}
                        </div>
                    </div>
                </div>
                <div>
                    <div class="h-11 w-36 flex items-center justify-between border border-opacity-20 border-black">
                        <div @click="decreaseBookQuantity" class="font-onest-regular h-full flex items-center ml-4 opacity-50" :class="book.quantity <= 1 ? 'cursor-not-allowed' : 'cursor-pointer'">
                            <svg width="14" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.0908813V2.09088H0V0.0908813H12Z" fill="black"/>
                            </svg>
                        </div>
                        <div class="font-onest-regular">
                            {{ book.quantity }}
                        </div>
                        <div @click="increaseBookQuantity" class="font-onest-regular cursor-pointer mr-4">
                            <svg width="12" height="13" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.56667 11.0909V0.0908813H6.43333V11.0909H4.56667ZM0 6.52422V4.65755H11V6.52422H0Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div v-if="currencyType.id === 12" class="font-onest-medium text-base whitespace-nowrap">
                        {{ book.book.prices[1].price }}
                        {{ locale === 'ru' ? book.book.prices[1].currency.name.ru : book.book.prices[1].currency.name.uz }}
                    </div>
                    <div v-if="currencyType.id === 13" class="font-onest-medium text-base whitespace-nowrap">
                        {{ book.book.prices[0].price }}
                        {{ locale === 'ru' ? book.book.prices[0].currency.name.ru : book.book.prices[0].currency.name.uz }}
                    </div>
                </div>
                <div>
                    <div @click="removeFromCart" class="opacity-50 cursor-pointer hover:opacity-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                        <path opacity="1" d="M6.04167 1.98H5.83333C5.94792 1.98 6.04167 1.881 6.04167 1.76V1.98H13.9583V1.76C13.9583 1.881 14.0521 1.98 14.1667 1.98H13.9583V3.96H15.8333V1.76C15.8333 0.78925 15.0859 0 14.1667 0H5.83333C4.91406 0 4.16667 0.78925 4.16667 1.76V3.96H6.04167V1.98ZM19.1667 3.96H0.833333C0.372396 3.96 0 4.35325 0 4.84V5.72C0 5.841 0.09375 5.94 0.208333 5.94H1.78125L2.42448 20.3225C2.46615 21.2603 3.20052 22 4.08854 22H15.9115C16.8021 22 17.5339 21.263 17.5755 20.3225L18.2187 5.94H19.7917C19.9062 5.94 20 5.841 20 5.72V4.84C20 4.35325 19.6276 3.96 19.1667 3.96ZM15.7109 20.02H4.28906L3.65885 5.94H16.3411L15.7109 20.02Z" fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const currencyType = useCurrencyType()
const props = defineProps(['book'])
const booksInCart = useBooksInCart()
const totalAmountOfCart = useTotalAmountOfCart()
const { locale } = useI18n()

const bookPrice = currencyType.value.id === 12 ?
    props.book.book.prices[1].price :
    props.book.book.prices[0].price

if (totalAmountOfCart.value === 0) {
    totalAmountOfCart.value += bookPrice + 30000
} else {
    totalAmountOfCart.value += bookPrice
}


const increaseBookQuantity = () => {
    const book = booksInCart.value.find((item) => item.book.id === props.book.book.id)
    book.quantity += 1

    if (currencyType.value.id === 12) {
        book.book.prices[1].price += bookPrice
    } else {
        book.book.prices[0].price += bookPrice
    }

    totalAmountOfCart.value += bookPrice
}


const decreaseBookQuantity = () => {
    const book = booksInCart.value.find((item) => item.book.id === props.book.book.id)

    if (book.quantity <= 1) {
        book.quantity = 1
    } else {
        book.quantity -= 1

        if (currencyType.value.id === 12) {
            book.book.prices[1].price -= bookPrice
        } else {
            book.book.prices[0].price -= bookPrice
        }

        totalAmountOfCart.value -= bookPrice
    }
}


const removeFromCart = () => {
    const index = booksInCart.value.findIndex((item) => item.book.id === props.book.book.id);

    if (index !== -1) {
        const removedBook = booksInCart.value.splice(index, 1)[0];

        // Update the totalAmountOfCart by subtracting the removed book's price multiplied by its quantity
        totalAmountOfCart.value -= removedBook.quantity * bookPrice;
    }
};


</script>