<template>
    <div>
        <div class="mt-7">
            <div class="flex gap-5 items-center sm:gap-3">
                <div class="font-onest-medium text-xl sm:text-base">{{ locale === 'ru' ? 'Избранное' : 'Sevimlilar' }}</div>
                <div class="font-onest-regular opacity-50 relative top-[3px]">
                    {{ locale === 'ru' ? `${data ? data.data.length : 0} книги` : `${data ? data.data.length : 0}ta kitob` }}
                </div>
            </div>

            <div>
                <div class="pt-12 pb-24 flex justify-start gap-5 flex-wrap sm:justify-between sm:gap-0">
                    <div v-for="book in data ? data.data : []" class="mb-5 lg:w-[48%]">
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