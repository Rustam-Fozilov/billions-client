<template>
    <div>
        <div>
            <div class="bg-white p-10 flex justify-between items-center">
                <div class="flex gap-7 items-center w-1/2">
                    <div class="w-5/12 h-48">
                        <img class="w-full h-full object-cover" src="~/assets/images/books/book-cover.png" alt="book cover" />
                    </div>
                    <div class="font-onest-regular flex flex-col gap-7 w-1/2">
                        <div class="opacity-50">{{ locale === 'ru' ? 'Мягкая обложка' : 'Yumshoq muqova' }}</div>
                        <div>Чудесное путешествие в Чудинию. Правописание ЖИ, ШИ, ЧА, ЩА, ЧУ, ЩУ</div>
                    </div>
                </div>
                <div>
                    <div class=" font-onest-regular">
                        {{ locale === 'ru' ? '1 шт' : '1 dona' }}
                    </div>
                </div>
                <div>
                    <div class="font-onest-medium text-base whitespace-nowrap">129 000 {{ locale === 'ru' ? 'сум' : 'so\'m' }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()

</script>