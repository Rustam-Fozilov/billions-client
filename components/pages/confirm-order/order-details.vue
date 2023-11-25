<template>
    <div>
        <div>
            <div class="w-full mt-12 sticky top-3 bottom-9 sm:mt-7 sm:bottom-5">
                <div class="font-onest-regular flex flex-col gap-4">
                    <div class="flex justify-between">
                        <div class="opacity-50">{{ locale === 'ru' ? 'Товаров в заказе' : 'Buyurtma bo\'yicha tovarlar' }}</div>
                        <div>{{ locale === 'ru' ? `${booksInCart ? booksInCart.length : 0} шт` : `${booksInCart ? booksInCart.length : 0} dona` }}.</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="opacity-50">{{ locale === 'ru' ? 'Доставка' : 'Yetkazib berish' }}</div>
                        <div>{{ locale === 'ru' ? '30 000 сум' : '30 000 so\'m' }}</div>
                    </div>
                </div>

                <div>
                    <div class="mt-7 flex flex-col gap-5 sm:mt-5">
                        <div class="font-onest-medium text-base">{{ locale === 'ru' ? 'Информация о доставке' : 'Yetkazib berish haqida ma\'lumot' }}</div>
                        <div class="font-onest-regular opacity-50">
                            <div>{{ $t('delivery.day')  }}</div>
                            <div>{{ $t('delivery.price') }}</div>
                        </div>
                        <div class="font-onest-medium text-base flex justify-between">
                            <div>{{ locale === 'ru' ? 'Итого:' : 'Jami' }}</div>
                            <div>{{ locale === 'ru' ? `${totalAmountOfCart} сум` : `${totalAmountOfCart} so'm` }}</div>
                        </div>
                    </div>
                </div>

                <div @click="confirmOrder" id="cart-confirm-button">
                    <div class="mt-12 cursor-pointer sm:mt-5">
                        <span>
                            <div class="w-full bg-bronze py-7 text-white text-center font-onest-regular sm:py-5">{{ locale === 'ru' ? 'Подтвердить' : 'Tasdiqlash' }}</div>
                        </span>
                    </div>
                </div>

                <div v-if="addressError" class="font-onest-regular text-red-500 mt-3">
                    {{ locale === 'ru' ? '* Адрес не выбран' : '* Manzil tanlanmagan' }}
                </div>

                <div v-if="nameError" class="font-onest-regular text-red-500 mt-3">
                    {{ locale === 'ru' ? '* Имя не заполнено' : '* Ism to\'ldirilmagan' }}
                </div>

                <div v-if="phoneError" class="font-onest-regular text-red-500 mt-3">
                    {{ locale === 'ru' ? '* Телефон не заполнен' : '* Telefon to\'ldirilmagan' }}
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl"
import axios from "axios"


const { locale } = useI18n()
const nameError = ref(false)
const phoneError = ref(false)
const addressError = ref(false)
const config = useRuntimeConfig()
const { data, load } = fetchUrl()
const receiverInfo = useReceiverInfo()
const authToken = await useAuthToken()
const booksInCart = await useBooksInCart()
const orderAddressId = useOrderAddressId()
const isOrderCreated = useIsOrderCreated()
const orderPaymentType = useOrderPaymentType()
const totalAmountOfCart = await useTotalAmountOfCart()


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


const confirmOrder = () => {
    if (receiverInfo.value.name === '') {
        return nameError.value = true
    }

    if (receiverInfo.value.phoneNumber.length !== 9) {
        return phoneError.value = true
    }

    if (typeof orderAddressId.value !== 'number') {
        return addressError.value = true
    }

    axios
        .post(
            `${config.public.apiUrl}/orders`,
            {
                comment: receiverInfo.value.textToCourier,
                delivery_method_id: 3,
                payment_type_id: orderPaymentType.value === 'online' ? 1 : 2,
                sum: totalAmountOfCart.value,
                address_id: orderAddressId.value,
                books: [
                    ...booksInCart.value.map(book => {
                        return {
                            book_id: book.book.id,
                            stock_id: book.book.inventory[0].stock_id,
                            quantity: book.quantity
                        }
                    })
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${authToken.value}`
                }
            }
        )
        .then(res => {
            // console.log(res)
            isOrderCreated.value = true
        })
        .catch(err => {
            console.log(err)
        })
}

</script>