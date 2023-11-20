<template>
    <div>
        <div class="container">
            <div class="flex items-center gap-3 flex-wrap sm:text-xs">
                <div v-for="category in categoriesTree.slice().reverse()">
                    <div @click="gotoCategory(category)" class="flex items-center gap-3 cursor-pointer opacity-50 hover:opacity-100 hover:text-bronze transition">
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

                <div class="font-onest-regular opacity-50">
                    {{ locale === 'ru' ? book_name.ru : book_name.uz }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/helpers/fetchUrl'


const props = defineProps(['category_id', 'book_name'])
const router = useRouter()
const { locale } = useI18n()
const config = useRuntimeConfig()
const {data: categoryData, load} = fetchUrl()
const categoriesTree = ref([])


await load(`${config.public.apiUrl}/categories/${props.category_id}`)
categoriesTree.value.push(categoryData.value.data)


while(categoryData.value.data.parent_id !== null){
    await load(`${config.public.apiUrl}/categories/${categoryData.value.data.parent_id}`)

    categoriesTree.value.push(categoryData.value.data)
}


const gotoCategory = (category) => {
    router.push(`/${locale.value}/catalog/${category.path_name}`)
}

</script>