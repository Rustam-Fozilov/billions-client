<template>
    <div>
        <div>
            <div class="w-full flex flex-col gap-7 pr-5">
                <div>
                    <div class="flex flex-col gap-5">
                        <div class="font-onest-medium">
                            {{ locale === 'ru' ? 'Цена, сум' : 'Narx, so\'m'}}
                        </div>
                        <div class="flex gap-5 font-onest-regular">
                            <div>
                                <div>
                                    {{ locale === 'ru' ? 'От' : 'Dan' }}
                                </div>
                                <input v-model="priceValue[0]" class="font-onest-regular w-24 py-2 text-center border border-black border-opacity-20 bg-transparent outline-none" type="number" placeholder="50 000">
                            </div>
                            <div>
                                <div>
                                    {{ locale === 'ru' ? 'До' : 'Gacha' }}
                                </div>
                                <input v-model="priceValue[1]" class="font-onest-regular w-24 py-2 text-center border border-black border-opacity-20 bg-transparent outline-none" type="number" placeholder="200 000">
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="flex flex-col gap-5">
                        <div class="font-onest-medium">
                            {{ locale === 'ru' ? 'Тип покрытия' : 'Muqova turi'}}
                        </div>
                        <div>
                            <input id="cover-soft" name="cover-type" type="checkbox" class="border border-black border-opacity-20">
                            <label for="cover-soft" class="font-onest-regular ml-5 opacity-50 cursor-pointer">Yumshoq</label>
                        </div>
                        <div>
                            <input id="cover-hard" name="cover-type" type="checkbox" class="border border-black border-opacity-20">
                            <label for="cover-hard" class="font-onest-regular ml-5 opacity-50 cursor-pointer">Qattiq</label>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="flex flex-col gap-5">
                        <div class="font-onest-medium">
                            {{ locale === 'ru' ? 'Язык' : 'Til'}}
                        </div>
                        <div>
                            <input id="lang-uzb" name="lang" type="checkbox" class="border border-black border-opacity-20">
                            <label for="lang-uzb" class="font-onest-regular ml-5 opacity-50 cursor-pointer">O'zbek tili</label>
                        </div>
                        <div>
                            <input id="lang-eng" name="lang" type="checkbox" class="border border-black border-opacity-20">
                            <label for="lang-eng" class="font-onest-regular ml-5 opacity-50 cursor-pointer">Ingliz tili</label>
                        </div>
                        <div>
                            <input id="lang-rus" name="lang" type="checkbox" class="border border-black border-opacity-20">
                            <label for="lang-rus" class="font-onest-regular ml-5 opacity-50 cursor-pointer">Rus tili</label>
                        </div>
                    </div>
                </div>

                <div class="w-full cursor-pointer border border-black border-opacity-20 font-onest-medium text-center py-4 text-sm hover:bg-black hover:bg-opacity-10 transition">
                    {{ locale === 'ru' ? 'Очистит' : 'O\'chirish' }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


const { locale } = useI18n()
const priceValue = ref([])


</script>

<style scoped>

</style>