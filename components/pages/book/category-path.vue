<template>
    <div>
        <div class="container py-12">
            <div class="flex items-center gap-3">
                <div v-for="category in categoriesTree.slice().reverse()">
                    <div @click="gotoCategory" class="flex items-center gap-3 cursor-pointer opacity-50 hover:opacity-100 hover:text-primary-red transition">
                        <div v-if="category.parent_id !== null">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="black"/>
                            </svg>
                        </div>
                        <div class="font-onest-regular">
                            {{ category.name.ru }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/composable/fetchUrl';

const props = defineProps(['category_id'])
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
