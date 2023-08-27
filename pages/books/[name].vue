<template>
    <div>
        <the-navbar/>

        <category-path :category_id="bookData.category_id"/>

        <book-info :book="bookData"/>

        <the-footer/>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/composable/fetchUrl';

const route = useRoute();
const config = useRuntimeConfig();
const {data: bookData, load} = fetchUrl();

await load(`${config.public.apiUrl}/books/${route.params.name.split('-').pop()}`)

</script>