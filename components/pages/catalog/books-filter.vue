<template>
    <div>
        <div>
            <div class="w-full flex flex-col gap-7 pr-5">
                <div>
                    <div class="px-5 py-3 bg-white font-onest-medium">
                        {{ pathTitle }}
                    </div>

                    <div class="w-full flex flex-col items-center">
                        <div v-for="category in categoriesTree" class="mt-3 w-3/4 flex flex-col gap-5">
                            <NuxtLink :to="category.path_name" class="font-onest-regular opacity-50 hover:opacity-100 cursor-pointer transition">
                                {{ locale === 'ru' ? category.name.ru : category.name.uz }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>

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
                                <input @input="filterBooks" v-model="priceValue[0]" class="font-onest-regular w-24 py-2 text-center border border-black border-opacity-20 bg-transparent outline-none" type="number">
                            </div>
                            <div>
                                <div>
                                    {{ locale === 'ru' ? 'До' : 'Gacha' }}
                                </div>
                                <input @input="filterBooks" v-model="priceValue[1]" class="font-onest-regular w-24 py-2 text-center border border-black border-opacity-20 bg-transparent outline-none" type="number">
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
                            <input @input="filterBooks" v-model="coverType" value="soft" id="cover-soft" name="cover-type" type="checkbox" class="border border-black border-opacity-20">
                            <label for="cover-soft" class="font-onest-regular ml-5 opacity-50 cursor-pointer">Yumshoq</label>
                        </div>
                        <div>
                            <input @input="filterBooks" v-model="coverType" value="hard" id="cover-hard" name="cover-type" type="checkbox" class="border border-black border-opacity-20">
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
                            <input @input="filterBooks" v-model="language" value="uzb" id="lang-uzb" name="lang" type="checkbox" class="border border-black border-opacity-20">
                            <label for="lang-uzb" class="font-onest-regular ml-5 opacity-50 cursor-pointer">O'zbek tili</label>
                        </div>
                        <div>
                            <input @input="filterBooks" v-model="language" value="eng" id="lang-eng" name="lang" type="checkbox" class="border border-black border-opacity-20">
                            <label for="lang-eng" class="font-onest-regular ml-5 opacity-50 cursor-pointer">Ingliz tili</label>
                        </div>
                        <div>
                            <input @input="filterBooks" v-model="language" value="rus" id="lang-rus" name="lang" type="checkbox" class="border border-black border-opacity-20">
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
import { fetchUrl } from "~/helpers/fetchUrl";


const language = ref([])
const coverType = ref([])
const priceValue = ref([])
const { locale } = useI18n()
const categoriesTree = ref([])
const { data, load } = fetchUrl()
const config = useRuntimeConfig()
const props = defineProps(['category', 'pathTitle'])


if (props.category.child_id) {
    for (let i = 0; i < props.category.child_id.length; i++) {
        await load(`${config.public.apiUrl}/categories/${props.category.child_id[i]}`)

        categoriesTree.value.push(data.value.data)
    }
}


const filterBooks = async () => {
    await console.log(language.value)
}





</script>

<style>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}

</style>
