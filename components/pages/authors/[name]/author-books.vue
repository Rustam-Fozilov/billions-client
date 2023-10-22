<template>
    <div>
        <div>
            <book-card :book="data.data"/>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/helpers/fetchUrl'


const props = defineProps(['bookId'])
const { data, load } = fetchUrl()
const config = useRuntimeConfig()


await load(`${config.public.apiUrl}/books/${props.bookId}?withAuthor=true`)

</script>