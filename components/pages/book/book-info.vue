<template>
    <div>
        <div class="container mt-12">
            <div>
                <div class="flex justify-between w-full h-full">
                    <div id="book-images" class="w-2/5 h-full">
                        <div class="w-full h-full">
                            <img class="w-full h-full object-cover" src="~/assets/images/books/book-cover.png" alt="book cover">
                        </div>
                        <div class="mt-3 flex justify-between w-full gap-3">
                            <div class="w-1/6 h-[60px]]">
                                <img class="object-cover" src="~/assets/images/books/book-cover.png" alt="Book image">
                            </div>
                            <div class="w-1/6 h-[60px]]">
                                <img class="object-cover" src="~/assets/images/books/book-cover.png" alt="Book image">
                            </div>
                            <div class="w-1/6 h-[60px]]">
                                <img class="object-cover" src="~/assets/images/books/book-cover.png" alt="Book image">
                            </div>
                            <div class="w-1/6 h-[60px]]">
                                <img class="object-cover" src="~/assets/images/books/book-cover.png" alt="Book image">
                            </div>
                            <div class="w-1/6 h-[60px]]">
                                <img class="object-cover" src="~/assets/images/books/book-cover.png" alt="Book image">
                            </div>
                            <div class="w-1/6 h-[60px]]">
                                <img class="object-cover" src="~/assets/images/books/book-cover.png" alt="Book image">
                            </div>
                        </div>
                    </div>
                    <div id="book-info-section" class="w-2/4 flex flex-col gap-12">
                        <div id="book-reviews">
                            <div class="flex justify-between">
                                <div class="flex items-center gap-3">
                                    <div v-for="overall in 5" class="opacity-50">
                                        <!-- <component :is="starComponent"/> -->
                                    </div>
                                    <div class="font-onest-regular">{{ bookInfo.data.overall_rating }} {{ locale === 'ru' ? 'оценка' : 'baho' }}</div>
                                </div>
                                <div class="flex gap-3 items-center opacity-50 hover:opacity-100 transition-all cursor-pointer">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                                        <path opacity="1" d="M17.7486 6.34742L12.6054 11.2883C12.4446 11.4428 12.2264 11.5296 11.999 11.5296C11.7715 11.5296 11.5534 11.4428 11.3925 11.2883C11.2317 11.1338 11.1413 10.9242 11.1413 10.7057C11.1413 10.4872 11.2317 10.2776 11.3925 10.1231L15.0731 6.58829H10.8203C8.72949 6.58773 6.69776 7.2548 5.04462 8.4846C3.39149 9.71439 2.21073 11.4372 1.68802 13.382C1.63118 13.5936 1.48919 13.7748 1.29327 13.8858C1.09735 13.9968 0.863553 14.0285 0.643315 13.9739C0.423078 13.9193 0.234439 13.7829 0.118897 13.5946C0.00335435 13.4064 -0.0296274 13.1818 0.027208 12.9702C0.643974 10.6712 2.03921 8.63458 3.99321 7.18101C5.94722 5.72745 8.34899 4.93953 10.8203 4.94133H15.0752L11.3925 1.40655C11.3129 1.33004 11.2497 1.23921 11.2066 1.13924C11.1635 1.03928 11.1413 0.932137 11.1413 0.823937C11.1413 0.715736 11.1635 0.608594 11.2066 0.50863C11.2497 0.408665 11.3129 0.317835 11.3925 0.241325C11.5534 0.0868073 11.7715 0 11.999 0C12.1116 0 12.2231 0.0213118 12.3272 0.0627185C12.4313 0.104125 12.5258 0.164816 12.6054 0.241325L17.7486 5.1822C17.8283 5.25868 17.8915 5.3495 17.9347 5.44947C17.9778 5.54943 18 5.65659 18 5.76481C18 5.87303 17.9778 5.98018 17.9347 6.08015C17.8915 6.18012 17.8283 6.27094 17.7486 6.34742Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <div class="font-onest-regular">
                                        {{ locale === 'ru' ? 'поделиться' : 'ulashish' }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="book-info-text" class="flex flex-col gap-7">
                            <div>
                                <div class="font-onest-medium text-xl">{{ locale === 'ru' ? book.data.name.ru : book.data.name.uz }}</div>
                                <div class="font-onest-medium text-base">Как решать нерешаемые задачи, посмотрев на проблему с другой стороны</div>
                            </div>
                            <div>
                                <div class="font-onest-regular opacity-50">
                                    {{
                                        locale === 'ru' ? book.data.author.first_name.ru + ' ' + book.data.author.last_name.ru :
                                        book.data.author.first_name.uz + ' ' + book.data.author.last_name.uz
                                    }}
                                </div>
                            </div>
                            <div class="flex items-center gap-7">
                                <div>
                                    <div class="h-11 w-36 flex items-center justify-between border border-opacity-20 border-black">
                                        <div @click="decreaseQuantity" class="font-onest-regular h-full flex items-center ml-4" :class="quantity <= 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer opacity-100'">
                                            <svg width="14" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 0.0908813V2.09088H0V0.0908813H12Z" fill="black"/>
                                            </svg>
                                        </div>
                                        <div class="font-onest-regular">{{ quantity }}</div>
                                        <div @click="increaseQuantity" class="font-onest-regular mr-4" :class="quantity === book.data.inventory[0].quantity ? 'cursor-not-allowed opacity-50' : 'cursor-pointer opacity-100'">
                                            <svg width="12" height="13" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.56667 11.0909V0.0908813H6.43333V11.0909H4.56667ZM0 6.52422V4.65755H11V6.52422H0Z" fill="black"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="locale === 'ru'" class="font-onest-regular text-stock-green">Есть {{ book.data.inventory[0].quantity }} штуки</div>
                                <div v-if="locale === 'uz'" class="font-onest-regular text-stock-green">{{ book.data.inventory[0].quantity }} dona bor</div>
                            </div>
                            <div class="font-onest-medium text-xl">
                                {{ book.data.prices[1].price }} {{ locale === 'ru' ? book.data.prices[1].currency.name.ru : book.data.prices[1].currency.name.uz }}
                            </div>
                            <div class="flex gap-7">
                                <div>
                                    <button @click="addToCart()" id="add-to-cart-btn" class="bg-bronze py-7 px-32 font-onest-medium text-white disabled:cursor-not-allowed disabled:bg-nav-bg disabled:text-gray-500">
                                        {{ locale === 'ru' ? 'Добавить в корзину' : 'Savatga qo\'shish' }}
                                    </button>
                                </div>
                                <div>
                                    <button @click="addToFavorites" class="p-6 bg-white border border-black border-opacity-10 transition">
                                        <svg v-if="!isBookExistsInFavorites" width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M18 29.7728L18.5613 30.8638C18.3877 30.9533 18.1953 31 18 31C17.8047 31 17.6123 30.9533 17.4387 30.8638L17.4338 30.8605L17.4224 30.8556L17.3815 30.8344C14.3355 29.1809 11.4663 27.2211 8.81836 24.9854C4.58182 21.3822 0 16.0812 0 9.8365V9.83487C0 4.17569 4.62927 0 9.38618 0C13.14 0 16.1689 2.00525 18 5.07854C19.8327 2.00525 22.86 0 26.6138 0C31.3691 0 36 4.17405 36 9.8365C36 16.0812 31.4165 21.3838 27.1816 24.9854C24.5337 27.221 21.6645 29.1808 18.6185 30.8344L18.5776 30.8556L18.5662 30.8605L18.5629 30.8622L18 29.7728ZM9.38618 2.4534C5.98418 2.4534 2.45455 5.52833 2.45455 9.8365C2.45455 14.9183 6.25745 19.5847 10.4089 23.1176C12.7312 25.0787 15.2328 26.8174 17.8805 28.3106L18 28.3777L18.1195 28.3123C18.5629 28.062 19.2011 27.6907 19.9685 27.2099C21.5067 26.2481 23.5522 24.853 25.5911 23.1176C29.7425 19.5847 33.5455 14.9183 33.5455 9.8365C33.5455 5.52833 30.0158 2.4534 26.6138 2.4534C23.1676 2.4534 20.394 4.72525 19.1635 8.4119C19.0808 8.65476 18.9242 8.86567 18.7155 9.01503C18.5069 9.16439 18.2566 9.2447 18 9.2447C17.7434 9.2447 17.4931 9.16439 17.2845 9.01503C17.0758 8.86567 16.9192 8.65476 16.8365 8.4119C15.606 4.72525 12.8307 2.4534 9.38618 2.4534Z" fill="black"/>
                                        </svg>

                                        <svg v-if="isBookExistsInFavorites" xmlns="http://www.w3.org/2000/svg" width="36" height="31" viewBox="0 0 36 31" fill="none">
                                            <path d="M30.8548 1.09534C24.6455 -2.08931 19.7075 2.42228 18.0146 5.07616V31C29.0533 26.5726 34.1127 18.0866 35.2626 14.3971C36.3805 11.2901 37.064 4.28 30.8548 1.09534Z" fill="#FF0000"/>
                                            <path d="M5.14524 1.09535C11.3545 -2.08931 16.3217 2.42228 18.0146 5.07616V31C6.97589 26.5726 1.88729 18.0866 0.73742 14.3971C-0.380505 11.2901 -1.06404 4.28 5.14524 1.09535Z" fill="#FF0000"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="book-delivery-text">
                            <div class="font-onest-regular opacity-50">
                                <div>{{ $t('delivery.day') }}</div>
                                <div>{{ $t('delivery.price') }}</div>
                                <div>{{ locale === 'ru' ? '300 заказов.' : '300 ta buyurtma' }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/helpers/fetchUrl';
import axios from "axios";


const quantity = ref(1)
const { locale } = useI18n()
const config = useRuntimeConfig()
const authToken = await useAuthToken()
const currencyType = useCurrencyType()
const props = defineProps(['book'])
const booksInCart = await useBooksInCart()
const { data: bookInfo, load } = fetchUrl()
const isAuthModalOpen = useIsAuthModalOpen()
const isBookExistsInFavorites = ref(false)


await load(`${config.public.apiUrl}/books/${props.book.data.id}/reviews`, {
    headers: {
        'Authorization': `Bearer ${config.public.authToken}`
    }
})


if (authToken.value) {
    await load(
        `${config.public.apiUrl}/favorites`, {
            headers: {
                'Authorization': `Bearer ${authToken.value}`
            }
        }
    )

    isBookExistsInFavorites.value = bookInfo.value.data.find((item) => item.id === props.book.data.id)
}


onMounted(() => {
    if (isBookExistsInCart.value) {
        makeBtnDisabled()
    }
})


const increaseQuantity = () => {
    if (props.book.data.inventory[0].quantity > quantity.value) {
        quantity.value++
    }
}


const decreaseQuantity = () => {
    if (quantity.value <= 1) {
        quantity.value = 1
    } else {
        quantity.value--
    }
}


const addToCart = () => {
    if (!isBookExistsInCart.value) {
        booksInCart.value.push(
            {
                'book': props.book.data,
                'quantity': 1,
                'originalPrice': props.book.data.prices[1].price,
            }
        )

        if (process.client) {
            localStorage.setItem('booksInCart', JSON.stringify(booksInCart.value))
        }

        makeBtnDisabled()
    }

}


const isBookExistsInCart = computed(() => {
    return props.book.data.id === booksInCart.value.find(item => item.book.id === props.book.data.id)?.book.id
})


const makeBtnDisabled = () => {
    document.getElementById('add-to-cart-btn').setAttribute('disabled' , 'true')
    locale.value === 'ru' ?
        document.getElementById('add-to-cart-btn').innerText = 'Добавлено в корзину' :
        document.getElementById('add-to-cart-btn').innerText = 'Savatga qo\'shildi'
}


const addToFavorites = () => {
    if (!authToken.value) {
        return isAuthModalOpen.value = true
    }

    if (isBookExistsInFavorites.value !== undefined) {
        axios
            .delete(`${config.public.apiUrl}/favorites/${isBookExistsInFavorites.value.id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${authToken.value}`
                    }
                }
            )
            .then((res) => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })

        isBookExistsInFavorites.value = undefined
    } else {
        axios
            .post(`${config.public.apiUrl}/favorites`,
                {
                    "book_id": props.book.data.id
                },
                {
                    headers: {
                        'Authorization': `Bearer ${authToken.value}`
                    }
                }
            )
            .then((res) => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })

        isBookExistsInFavorites.value = props.book.data

    }
}


</script>
