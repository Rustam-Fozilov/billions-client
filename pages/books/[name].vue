<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white py-12">
            <category-path :category_id="bookData.data.category.id" :book_name="bookData.data.name"/>
            
            <book-info :book="bookData"/>

            <book-properties :book="bookData"/>
        </div>

        <div>
            <bestsellers-list/>

            <add-review-modal :book_id="bookData.data.id"/>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/helpers/fetchUrl'


const route = useRoute()
const config = useRuntimeConfig()
const { data: bookData, load } = fetchUrl()


await load(`${config.public.apiUrl}/books/${route.params.name.split('-').pop()}?withAuthor=true`)

</script>