<template>
    <div>
        <div class="container">
            <div class="flex items-center gap-3">
                <div v-for="category in categoriesTree.slice().reverse()">
                    <div @click="gotoCategory" class="flex items-center gap-3 cursor-pointer opacity-50 hover:opacity-100 hover:text-bronze transition">
                        <div class="font-onest-regular">
                            {{ locale === 'ru' ? category.name.ru : category.name.uz }}
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="font-onest-regular opacity-50 cursor-pointer hover:opacity-100 hover:text-bronze transition">
                    {{ locale === 'ru' ? book_name.ru : book_name.uz }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/composable/fetchUrl';


const props = defineProps(['category_id', 'book_name'])
const { locale } = useI18n()
const config = useRuntimeConfig();
const {data: categoryData, load} = fetchUrl();
const categoriesTree = ref([]);


await load(`${config.public.apiUrl}/categories/${props.category_id}`)
categoriesTree.value.push(categoryData.value.data);


while(categoryData.value.data.parent_id !== null){
    await load(`${config.public.apiUrl}/categories/${categoryData.value.data.parent_id}`)

    categoriesTree.value.push(categoryData.value.data);
}


const gotoCategory = () => {
    console.log('gotoCategory');
}

</script>
