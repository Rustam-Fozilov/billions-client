<template>
    <div>
        <div>
            <div class="w-full mt-12 sticky top-3 bottom-9">
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
                    <div class="mt-7 flex flex-col gap-5">
                        <div class="font-onest-medium text-base">{{ locale === 'ru' ? 'Информация о доставке' : 'Yetkazib berish haqida ma\'lumot' }}</div>
                        <div class="font-onest-regular opacity-50">
                            <div>{{ $t('delivery.day')  }}</div>
                            <div>{{ $t('delivery.price') }}</div>
                        </div>
                        <div class="font-onest-medium text-base flex justify-between">
                            <div>{{ locale === 'ru' ? 'Итого:' : 'Jami' }}</div>
                            <div>{{ locale === 'ru' ? `${totalAmountOfCart} сум` : `${totalAmountOfCart} sum` }}</div>
                        </div>
                    </div>
                </div>

                <div @click="confirmOrder" id="cart-confirm-button">
                    <div class="mt-12 cursor-pointer">
                        <span>
                            <div class="w-full bg-bronze py-7 text-white text-center font-onest-regular">{{ locale === 'ru' ? 'Подтвердить' : 'Tasdiqlash' }}</div>
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl";


const { data, load } = fetchUrl()
const { locale } = useI18n()
const config = useRuntimeConfig()
const totalAmountOfCart = await useTotalAmountOfCart()
const booksInCart = await useBooksInCart()
const isAuthModalOpen = useIsAuthModalOpen()
const isSMSCodeSent = useIsSMSCodeSent()
const orderPaymentType = useOrderPaymentType()
const receiverInfo = useReceiverInfo()
const authToken = await useAuthToken()


const confirmOrder = () => {
    if (authToken.value) {
        isAuthModalOpen.value = true
        isSMSCodeSent.value = true
    } else {
        load(
            `${config.public.apiUrl}/orders`,
            {
                headers: {
                    Authorization: `Bearer ${authToken.value}`
                },
                body: {
                    comment: receiverInfo.value.textToCourier,
                    delivery_method_id: 3,
                    payment_type_id: orderPaymentType.value === 'online' ? 1 : 2,
                    sum: totalAmountOfCart.value,
                    address_id: 1,
                    books: [
                        ...booksInCart.value.map(book => {
                            return {
                                book_id: book.book.id,
                                stock_id: 1,
                                quantity: book.quantity
                            }
                        })
                    ]
                }
            },
            'POST'
        )
    }
}

</script>