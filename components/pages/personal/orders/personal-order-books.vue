<template>
    <div>
        <div class="flex justify-between mt-5 font-onest-regular">
            <div class="flex gap-5 items-center">
                <div class="w-9 h-10">
                    <img class="w-full h-full object-cover" :src="book.images[0].link" alt="">
                </div>
                <div>
                    {{ locale === 'ru' ? book.name.ru : book.name.uz }}
                </div>
            </div>
            <div class="flex gap-7">
                <div>
                    {{ locale === 'ru' ? book.order_quantity + ' шт' : book.order_quantity + 'ta kitob' }}
                </div>
                <div>
                    {{ locale === 'ru' ? book.prices[1].price + ' сум' : book.prices[1].price + ' so\'m' }}
                </div>
            </div>
            <div @click="openReviewModal" class="font-onest-medium text-bronze hover:opacity-80 cursor-pointer">
                Sharh qoldirish
            </div>
        </div>

        <add-review-modal :book_id="book.id"/>
    </div>
</template>

<script setup>

const { locale } = useI18n()
const props = defineProps(['book'])
const isReviewModalOpen = useIsReviewModalOpen()


const openReviewModal = () => {
    isReviewModalOpen.value = true
}

</script>
