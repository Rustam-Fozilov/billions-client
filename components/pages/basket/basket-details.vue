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

                <div @click="gotoConfirmOrder" id="cart-confirm-button">
                    <div class="mt-12 cursor-pointer">
                        <span>
                            <div class="w-full bg-bronze py-7 text-white text-center font-onest-regular">{{ locale === 'ru' ? 'Перейти к оформлению' : 'Rasmiylashtirish' }}</div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()
const totalAmountOfCart = await useTotalAmountOfCart()
const router = useRouter()
const authToken = await useAuthToken()
const isAuthModalOpen = useIsAuthModalOpen()
const booksInCart = await useBooksInCart()


onUpdated(async () => {
    if (process.client) {
        if (localStorage.getItem('redirect')) {
            await router.push(`/${locale.value}/confirm-order`)
            localStorage.removeItem('redirect')
        }
    }
})


const gotoConfirmOrder = () => {
    if (!authToken.value) {
        isAuthModalOpen.value = true

        if (process.client) {
            localStorage.setItem('redirect', true)
        }
    } else {
        router.push(`/${locale.value}/confirm-order`)
    }
}

</script>