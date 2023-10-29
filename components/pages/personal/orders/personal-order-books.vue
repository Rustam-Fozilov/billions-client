<template>
    <div>
        <div class="flex justify-between mt-5 font-onest-regular">
            <div class="flex gap-5 items-center">
                <div class="w-9 h-9">
                    <img class="w-full h-full object-cover" src="/images/uzb-flag.png" alt="">
                </div>
                <div>
                    {{ locale === 'ru' ? book.name.ru : book.name.uz }}
                </div>
            </div>
            <div class="flex gap-7">
                <div>
                    {{ locale === 'ru' ? book.order_quantity + ' книги' : book.order_quantity + 'ta kitob' }}
                </div>
                <div>
                    {{ locale === 'ru' ? book.prices[1].price + ' сум' : book.prices[1].price + ' so\'m' }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps(['book'])
const { locale } = useI18n()

</script>
