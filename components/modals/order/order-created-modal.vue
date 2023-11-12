<template>
    <div>
        <div v-if="isOrderCreated" @click="gotoMain" class="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
        <div v-if="isOrderCreated" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
            <div class="p-8 outline-none overscroll-none">
                <div class="flex flex-col gap-12 items-center justify-between w-[520px]">
                    <div @click.stop="gotoMain" class="cursor-pointer opacity-50 hover:opacity-100 transition flex w-full justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path opacity="1" d="M16.1237 15.2595L16.2474 15.1358L16.1238 15.0121L9.62119 8.5L16.1238 1.98793L16.2474 1.86419L16.1237 1.74053L15.2595 0.876256L15.1358 0.752602L15.0121 0.876167L8.5 7.37881L1.98793 0.876167L1.86419 0.752602L1.74053 0.876256L0.876256 1.74053L0.752602 1.86419L0.876167 1.98793L7.37881 8.5L0.876167 15.0121L0.752602 15.1358L0.876256 15.2595L1.74053 16.1237L1.86419 16.2474L1.98793 16.1238L8.5 9.62119L15.0121 16.1238L15.1358 16.2474L15.2595 16.1237L16.1237 15.2595Z" fill="black" stroke="black" stroke-width="0.35"/>
                        </svg>
                    </div>

                    <div class="text-center">
                        <div class="font-onest-medium text-base">
                            {{ locale === 'ru' ? 'Ваш заказ принят' : 'Buyurtmangiz qabul qilindi' }}
                        </div>
                        <div class="font-onest-regular opacity-50 mt-2">
                            {{ locale === 'ru' ?
                            'Заказ принят, наши операторы свяжутся с вами в ближайшее время для подтверждения заказа.' :
                            'Buyurtma qabul qilindi, buyurtmani tasdiqlash uchun operatorlarimiz tez orada siz bilan bog’lanadi.'
                            }}
                        </div>
                    </div>

                    <div>
                        <img src="/images/done.svg" alt="Order created">
                    </div>

                    <div class="flex gap-5 mt-12">
                        <div @click="gotoMyOrders" class="bg-nav-bg px-10 py-5 font-onest-regular cursor-pointer">
                            Mening buyurtmalarim
                        </div>
                        <div @click="gotoMain" class="bg-bronze text-white px-10 py-5 font-onest-regular cursor-pointer">
                            Sotuvni davom ettirish
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios"


const router = useRouter()
const { locale } = useI18n()
const config = useRuntimeConfig()
const booksInCart = useBooksInCart()
const authToken = await useAuthToken()
const isOrderCreated = useIsOrderCreated()
const totalAmountOfCart = useTotalAmountOfCart()


const gotoMyOrders = () => {
    removeFromCart()
    isOrderCreated.value = false
    router.push('/' + locale.value + '/personal/orders')
}


const gotoMain = () => {
    removeFromCart()
    isOrderCreated.value = false
    router.push('/' + locale.value)
}


const removeFromCart = () => {
    axios
        .delete(`${config.public.apiUrl}/cart`, {
            headers: {
                Authorization: `Bearer ${authToken.value}`
            }
        })
        .then(res => {
            // console.log(res.data)
        })

    if (process.client) {
        localStorage.removeItem('booksInCart')
        localStorage.removeItem('totalAmountOfCart')
    }

    booksInCart.value = []
    totalAmountOfCart.value = 0
}

</script>
