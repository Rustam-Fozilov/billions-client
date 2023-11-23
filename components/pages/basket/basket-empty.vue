<template>
    <div>
        <div class="pt-7 pb-24 sm:pb-20">
            <div class="flex flex-col items-center gap-3">
                <div>
                    <div class="font-onest-medium text-xl text-center sm:text-base">
                        {{ locale === 'ru' ? 'Корзина пока пуста' : 'Savatingiz hozircha bo\'sh.' }}
                    </div>
                </div>

                <div class="font-onest-regular text-sm opacity-70 text-center sm:text-[16px]">
                    {{ locale === 'ru' ?
                    'Посмотрите каталог чтобы найти товары, или воспользуйтесь поиском' :
                    'Mahsulotlarni topish uchun katalogni ko\'ring yoki qidiruvdan foydalaning' }}
                </div>

                <div class="mt-6">
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
