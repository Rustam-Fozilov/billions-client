<template>
    <div>
        <div class="bg-white p-10 flex justify-between items-center xl:p-7 xl:flex-col xl:gap-5 xl:items-center">
            <div class="flex gap-7 items-center w-1/2 xl:gap-5 xl:w-full sm:flex-col">
                <div class="w-5/12 h-48 xl:min-w-[120px] lg:h-full">
                    <img class="w-full h-full object-cover" src="~/assets/images/books/book-cover.png" alt="book cover" />
                </div>
                <div class="font-onest-regular flex flex-col gap-7 w-1/2 xl:gap-5 xl:w-full xl:items-center">
                    <div class="opacity-50">{{ locale === 'ru' ? `${book.book.inventory[0].cover_type.ru} обложка` : `${book.book.inventory[0].cover_type.uz} muqova` }}</div>
                    <div class="sm:text-center">{{ locale === 'ru' ? book.book.name.ru: book.book.name.uz }}</div>
                </div>
            </div>
            <div>
                <div class=" font-onest-regular">
                    {{ locale === 'ru' ? `${book.quantity} шт` : `${book.quantity} dona` }}
                </div>
            </div>
            <div>
                <div class="font-onest-medium text-base whitespace-nowrap">{{ book.book.prices[1].price }} {{ locale === 'ru' ? 'сум' : 'so\'m' }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps(['book'])
const { locale } = useI18n()

</script>