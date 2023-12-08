<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white">
            <div class="container pt-12 pb-24 sm:pt-7 sm:pb-12">
                <div>
                    <search-query-title :title="query"/>
                </div>

                <div class="flex mt-12 lg:mt-7 lg:flex-col">
<!--                    <div class="w-1/5 lg:w-full">-->
<!--                        <search-books-filter/>-->
<!--                    </div>-->

                    <div class="flex flex-wrap gap-5 lg:justify-between">
                        <div v-for="result in searchResult" class="lg:w-[47%]">
                            <book-card :book="result"/>
                        </div>
                    </div>
                </div>

                <div v-if="paginationData.length > 1" class="flex justify-end pt-24 sm:pt-16">
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
import { fetchUrl } from '~/helpers/fetchUrl'


const route = useRoute()
const router = useRouter()
const { locale } = useI18n()
const paginationData = ref([])
const query = ref(route.query.q)
const { data, load } = fetchUrl()
const config = useRuntimeConfig()
const searchResult = useSearchResult()


watch(() => route.query.page, async (name) => {
    await load(`${config.public.apiUrl}/books/search/${query.value}?withAuthor=true&page=${name}`)
    if (data.value.success) {
        searchResult.value = data.value.data.books
    }
})


watch(() => route.query.q, async (name) => {
    query.value = name
    console.log(query.value)
    await load(`${config.public.apiUrl}/books/search/${query.value}?withAuthor=true&page=${route.query.page ?? 1}`)

    if (data.value.success) {
        searchResult.value = data.value.data.books
    } else {
        await router.push(`/${locale.value}/search/not-found`)
        // console.log(data.value)
    }
})


await load(`${config.public.apiUrl}/books/search/${query.value}?withAuthor=true&page=1`)

if (!data.value.success) {
    await router.push(`/${locale.value}/search/not-found`)
    // console.log(data.value)
} else {
    searchResult.value = data.value.data.books
    paginationData.value.push(data.value.data)
}

if (data.value.data && data.value.data.links) {
    while (data.value.data.links.next) {
        await load(data.value.data.links.next)
        paginationData.value.push(data.value.data)
    }
}

</script>