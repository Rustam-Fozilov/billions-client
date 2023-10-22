<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white">
            <div class="container pt-12">
                <div>
                    <catalog-paths/>
                </div>

                <div>
                    <div class="mt-7">
                        <div class="flex gap-5 items-center">
                            <div class="font-onest-medium text-xl">{{ pathTitle }}</div>
                            <div class="font-onest-regular opacity-50 relative top-[3px]">{{ locale === 'ru' ? `${countOfBooks.value} книги` : `${countOfBooks.value}ta kitob` }}</div>
                        </div>
                    </div>
                </div>

                <div class="mt-12 flex">
                    <div class="w-1/5">
                        <books-filter :category="category" :path-title="pathTitle"/>
                    </div>

                    <div class=" w-4/5 flex flex-wrap gap-5">
                        <div v-for="book in books">
                            <book-card :book="book"/>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end py-24">
                    <the-pagination :pagination-data="paginationData"/>
                </div>
            </div>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl"


const pathTitle = ref('')
const books = ref([])
const category = ref(null)
const route = useRoute()
const config = useRuntimeConfig()
const { data, load } = fetchUrl()
const { locale } = useI18n()
const paginationData = ref([])
const countOfBooks = ref(0)


watch(() => route.query.page, async (name) => {
    await load(`${config.public.apiUrl}/categories/${category.value.id}/books?withAuthor=true&page=${name}`)
    books.value = data.value.data.books
})


await load(`${config.public.apiUrl}/categories?limit=100`)
category.value = data.value.data.find((item) => item.path_name === route.params.name)
pathTitle.value = category.value.name[locale.value]


if (route.query.page) {
    await load(`${config.public.apiUrl}/categories/${category.value.id}/books?withAuthor=true&page=${route.query.page}`)
    paginationData.value.push(data.value.data)
} else {
    await load(`${config.public.apiUrl}/categories/${category.value.id}/books?withAuthor=true`)
    paginationData.value.push(data.value.data)
}


books.value = data.value.data.books
countOfBooks.value = computed(() => data.value.data.books.length)


while (data.value.data.links.next) {
    await load(data.value.data.links.next)
    paginationData.value.push(data.value.data)
}

</script>