<template>
    <div>
        <div>
            <div class="w-full flex flex-col gap-7">
                <div>
                    <div class="px-5 py-3 bg-white font-onest-medium">
                        {{ pathTitle }}
                    </div>

                    <div class="w-full flex flex-col items-center">
                        <div v-for="category in categoriesTree" class="mt-3 w-3/4 flex flex-col gap-5">
                            <div class="font-onest-regular opacity-50 hover:opacity-100 cursor-pointer transition">
                                {{ locale === 'ru' ? category.name.ru : category.name.uz }}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="flex flex-col gap-5">
                        <div class="font-onest-medium">
                            {{ locale === 'ru' ? 'Цена, сум' : 'Narx, so\'m'}}
                        </div>
                        <div>line</div>
                        <div class="flex gap-5">
                            <div>
                                <input v-model="priceValue[0]" class="font-onest-regular w-24 py-2 text-center border border-black border-opacity-20 bg-transparent outline-none" type="number" placeholder="50 000">
                            </div>
                            <div>
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
                            <input id="cover-type" type="checkbox" class="border border-black border-opacity-20">
                            <label for="cover-type" class="font-onest-regular ml-5 opacity-50">Yumshoq</label>
                        </div>
                        <div>
                            <input id="cover-type" type="checkbox" class="border border-black border-opacity-20">
                            <label for="cover-type" class="font-onest-regular ml-5 opacity-50">Qattiq</label>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="flex flex-col gap-5">
                        <div class="font-onest-medium">
                            {{ locale === 'ru' ? 'Язык' : 'Til'}}
                        </div>
                        <div>
                            <input id="cover-type" type="checkbox" class="border border-black border-opacity-20">
                            <label for="cover-type" class="font-onest-regular ml-5 opacity-50">O'zbek tili</label>
                        </div>
                        <div>
                            <input id="cover-type" type="checkbox" class="border border-black border-opacity-20">
                            <label for="cover-type" class="font-onest-regular ml-5 opacity-50">Ingliz tili</label>
                        </div>
                        <div>
                            <input id="cover-type" type="checkbox" class="border border-black border-opacity-20">
                            <label for="cover-type" class="font-onest-regular ml-5 opacity-50">Rus tili</label>
                        </div>
                    </div>
                </div>

                <div class="w-full cursor-pointer border border-black border-opacity-20 font-onest-medium text-center py-4 text-sm hover:bg-black hover:bg-opacity-10 transition">
                    O'chirish
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl";

const categoriesTree = ref([])
const config = useRuntimeConfig()
const { data, load } = fetchUrl()
const { locale } = useI18n()
const priceValue = ref([50000, 200000])


const props = defineProps({
    category: {
        required: true
    },
    pathTitle: {
        required: true
    }
})


if (props.category.child_id) {
    for (let i = 0; i < props.category.child_id.length; i++) {
        await load(`${config.public.apiUrl}/categories/${props.category.child_id[i]}`)

        categoriesTree.value.push(data.value.data)
    }
}

</script>

<style scoped>

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
