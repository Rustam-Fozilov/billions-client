<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white pt-12 pb-24">
            <div class="container">
                <div class="flex">
                    <div class="w-1/4">
                        <personal-nav/>
                    </div>
                    <div class="w-full">
                        <div class="flex gap-5 sm:gap-3">
                            <div class="font-onest-medium text-xl">
                                {{ locale === 'ru' ? 'Избранное' : 'Sevimlilar' }}
                            </div>
                            <div class="font-onest-regular opacity-50 mt-4">
                                {{ locale === 'ru' ? `${data ? data.data.length : ''} книги` : `${data ? data.data.length : ''}ta kitob` }}
                            </div>
                        </div>
                        <div v-for="book in data ? data.data : []" class="flex justify-between flex-wrap mt-5">
                            <favorite-book-card :book="book"/>
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
import { fetchUrl } from '~/helpers/fetchUrl';


const config = useRuntimeConfig();
const { locale } = useI18n()
const { data, load} = fetchUrl();
const authToken = await useAuthToken()


await load(`${config.public.apiUrl}/favorites?withAuthor=true`, {
    headers: {
        'Authorization': `Bearer ${authToken.value}`
    }
})

</script>
