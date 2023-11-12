<template>
    <div>
        <div class="bg-white p-7 w-2/3">
            <div class="flex items-center justify-between">
                <div class="font-onest-medium">
                    {{ locale === 'ru' ? 'Номер заказа: ' : 'Buyurtma raqami: ' }} {{ order.id }}
                </div>
                <div class="font-onest-regular opacity-50">
                    {{ order.books.length }} {{ locale === 'ru' ? 'книги' : 'ta kitob' }}
                </div>
                <div class="font-onest-regular">
                    {{ order.created_at }}
                </div>
                <div class="font-onest-medium">
                    {{ order.sum }} {{ locale === 'ru' ? 'сум' : 'so\'m' }}
                </div>
                <div class="flex items-center gap-3">
                    <div class="px-2 py-1 border border-bronze text-bronze font-onest-regular">
                        {{ locale === 'ru' ? order.status.name.ru : order.status.name.uz }}
                    </div>
                    <div @click="isDetailsOpen = !isDetailsOpen" class="opacity-50 cursor-pointer hover:opacity-100 transition" :class="isDetailsOpen ? 'rotate-180' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 23" fill="none">
                            <path d="M2 11.7692L12 21L22 11.7692M12 19.718V1" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div v-if="isDetailsOpen">
                <div class="h-[1px] bg-black bg-opacity-20 mt-7"></div>
                <div class="my-7 flex gap-12 font-onest-regular">
                    <div>
                        <div class="opacity-50">
                            {{ locale === 'ru' ? 'Способ оплаты' : 'To\'lov turi' }}
                        </div>
                        <div>
                            {{ locale === 'ru' ? order.payment_type.name.ru : order.payment_type.name.uz }}
                        </div>
                    </div>
                    <div>
                        <div class="opacity-50">
                            {{ locale === 'ru' ? 'Способ доставки' : 'Yetkazib berish turi' }}
                        </div>
                        <div>
                            {{ locale === 'ru' ? order.delivery_method.name.ru : order.delivery_method.name.uz }}
                        </div>
                    </div>
                </div>

                <div class="h-[1px] bg-black bg-opacity-20 mt-7"></div>

                <personal-order-books v-for="book in order.books" :key="book.id" :book="book"/>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps(['order'])
const isDetailsOpen = ref(false)
const { locale } = useI18n()

</script>
