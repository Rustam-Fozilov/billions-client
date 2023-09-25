<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white">
            <div class="container pt-12">
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

                <div class="flex justify-end py-24">
                    <the-pagination/>
                </div>
            </div>

        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'


const searchResult = useSearchResult()
const route = useRoute()
const query = ref(route.query.q)

onUpdated(() => {
    query.value = route.query.q
    searchResult.value = searchResult.value
})

</script>