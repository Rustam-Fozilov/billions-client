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
            </div>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/helpers/fetchUrl'


const { data, load } = fetchUrl()
const { locale } = useI18n()
const searchResult = useSearchResult()
const route = useRoute()
const router = useRouter()
const query = ref(route.query.q)
const config = useRuntimeConfig()


onMounted( async () => {
    await search()
})


onUpdated(async () => {
    query.value = route.query.q
    await search()
})


const search = async () => {
    await load(`${config.public.apiUrl}/books/search/${query.value}?withAuthor=true&page=1`)

    if (!data.value.success) {
        await router.push(`/${locale.value}/search/not-found`)
    } else {
        searchResult.value = data.value.data.books
    }
}

</script>