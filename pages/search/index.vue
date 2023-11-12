<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white">
            <div class="container pt-12 pb-24">
                <div>
                    <search-query-title :title="query"/>
                </div>

                <div class="flex mt-12">
                    <div class="w-1/5">
                        <search-books-filter/>
                    </div>

                    <div class=" w-4/5 flex flex-wrap gap-5">
                        <div v-for="result in searchResult">
                            <book-card :book="result"/>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end pt-24">
                    <the-pagination v-if="paginationData.length > 1" :pagination-data="paginationData"/>
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
    await load(`${config.public.apiUrl}/books/search/${query.value}?withAuthor=true&page=${route.query.page ?? 1}`)

    if (data.value.success) {
        searchResult.value = data.value.data.books
    } else {
        await router.push(`/${locale.value}/search/not-found`)
    }
})


await load(`${config.public.apiUrl}/books/search/${query.value}?withAuthor=true&page=1`)

if (!data.value.success) {
    await router.push(`/${locale.value}/search/not-found`)
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