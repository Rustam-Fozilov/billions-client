<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div id="main-not-found" class="w-full flex justify-center py-48 2xl:py-24">
            <div class="w-1/2 flex items-center flex-col xl:w-full">
                <div>
                    <div class="font-onest-medium text-xl text-center xl:text-base">
                        {{ locale === 'ru' ?
                        'К сожалению, по вашему запросу ничего не нашлось' :
                        'Afsuski, sizning so\'rovingiz bo\'yicha hech narsa topilmadi.' }}
                    </div>
                    <div class="font-onest-regular opacity-50 text-center mt-2">
                        {{ locale === 'ru' ?
                        'Но у нас всегда найдется, что почитать' :
                        'Ammo bizda har doim o\'qish uchun nimadir bor' }}
                    </div>
                </div>
                <div class="mt-12 lg:mt-9">
                    <NuxtLink :to="'/' + locale + '/catalog'" class="cursor-pointer px-20 py-5 bg-bronze font-onest-medium text-center text-white">
                        {{ locale === 'ru' ? 'Каталог' : 'Katalog' }}
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()

</script>

<style scoped>

@media only screen and (max-width: 1024px) {
    #main-not-found {
        padding-top: 30px;
        padding-bottom: 80px;
    }
}

</style>