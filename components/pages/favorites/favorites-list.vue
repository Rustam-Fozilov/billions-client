<template>
    <div>
        <div class="mt-7">
            <div class="flex gap-5 items-center">
                <div class="font-onest-medium text-xl">{{ locale === 'ru' ? 'Избранное' : 'Sevimlilar' }}</div>
                <div class="font-onest-regular opacity-50 relative top-[3px]">{{ locale === 'ru' ? '3 книги' : '3ta kitob' }}</div>
            </div>

            <div>
                <div class="pt-12 pb-24 flex justify-between flex-wrap">
                    <div v-for="book in data ? data.data : []" class="mb-5">
                        <favorite-book-card :book="book"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/helpers/fetchUrl';


const config = useRuntimeConfig();
const { locale } = useI18n()
const { data, load } = fetchUrl();
const authToken = await useAuthToken()


await load(`${config.public.apiUrl}/favorites?withAuthor=true`, {
    headers: {
        'Authorization': `Bearer ${authToken.value}`
    }
})


</script>