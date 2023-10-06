<template>
    <div>
        <div class="pt-7 pb-24">
            <div class="flex flex-col gap-5">
                <div class="flex gap-5 items-center">
                    <div class="font-onest-medium text-xl">{{ locale === 'ru' ? 'Корзина' : 'Savat' }}</div>
                    <div class="font-onest-regular opacity-50 relative top-[3px]">{{ locale === 'ru' ? '0 книги' : '0ta kitob' }}</div>
                </div>

                <div class="font-onest-regular text-sm">
                    У вас еще нет товаров в корзине.
                </div>

                <div class="mt-12">
                    <NuxtLink :to="'/' + locale + '/catalog'" class="cursor-pointer px-20 py-5 bg-bronze font-onest-medium text-center text-white">
                        {{ locale === 'ru' ? 'Каталог' : 'Katalog' }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()

</script>
