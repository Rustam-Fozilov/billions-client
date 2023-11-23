<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white">
            <div class="container pt-12 sm:pt-7">
                <div>
                    <catalog-paths/>
                </div>

                <div class="mt-7 lg:mt-5">
                    <div class="flex gap-5 items-center">
                        <div class="font-onest-medium text-xl lg:text-base">{{ pathTitle }}</div>
                        <div class="font-onest-regular opacity-50 relative top-[3px] lg:top-1">{{ locale === 'ru' ? `${countOfBooks.value} книги` : `${countOfBooks.value}ta kitob` }}</div>
                    </div>
                    <div @click="openFilterModal" class="mt-3 flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                            <rect y="8" width="20" height="2" rx="1" fill="#949599"/>
                            <rect y="2" width="20" height="2" rx="1" fill="#949599"/>
                            <circle cx="6" cy="3" r="2" fill="white" stroke="#949599" stroke-width="2"/>
                            <circle cx="14" cy="9" r="2" fill="white" stroke="#949599" stroke-width="2"/>
                        </svg>
                        <div>
                            {{ locale === 'ru' ? 'Фильтр' : 'Filtr' }}
                        </div>
                    </div>
                </div>

                <div class="mt-12 flex lg:mt-7">
                    <div class="w-1/5 xl:hidden">
                        <books-filter :category="category" :path-title="pathTitle"/>
                    </div>

                    <div class="w-4/5 flex flex-wrap gap-5 xl:w-full">
                        <div v-for="book in books" class="lg:w-[47%]">
                            <book-card :book="book"/>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end py-24 sm:py-12">
                    <the-pagination v-if="paginationData.length > 1" :pagination-data="paginationData"/>
                </div>
            </div>
        </div>

        <div>
            <book-filter-modal v-if="isFilterModalOpen"/>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl"


const books = ref([])
const route = useRoute()
const pathTitle = ref('')
const category = ref(null)
const countOfBooks = ref(0)
const { locale } = useI18n()
const isFilterModalOpen  = ref(false)
const paginationData = ref([])
const { data, load } = fetchUrl()
const config = useRuntimeConfig()


watch(() => route.query.page, async (name) => {
    await load(`${config.public.apiUrl}/categories/${category.value.id}/books?withAuthor=true&page=${name}`)
    books.value = data.value.data.books
})


await load(`${config.public.apiUrl}/categories?limit=100`)
category.value = data.value.data.find((item) => item.path_name === route.params.name)
pathTitle.value = category.value.name[locale.value]


await load(`${config.public.apiUrl}/categories/${category.value.id}/books?withAuthor=true&page=${route.query.page ?? 1}`)
books.value = data.value.data.books


await load(`${config.public.apiUrl}/categories/${category.value.id}/books?withAuthor=true&page=1`)
paginationData.value.push(data.value.data)
countOfBooks.value = computed(() => data.value.data.books.length)


while (data.value.data.links.next) {
    await load(data.value.data.links.next)
    paginationData.value.push(data.value.data)
}


const openFilterModal = () => {
    isFilterModalOpen.value = true
}

</script>