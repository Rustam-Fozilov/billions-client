<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white pt-12 pb-24 sm:pt-7">
            <div class="container">
                <div class="flex lg:flex-col lg:gap-5">
                    <div class="w-1/4 lg:w-full">
                        <personal-nav/>
                    </div>
                    <div class="w-full">
                        <div class="flex gap-5 sm:gap-3">
                            <div class="font-onest-medium text-xl sm:text-base">
                                {{ locale === 'ru' ? 'Избранное' : 'Sevimlilar' }}
                            </div>
                            <div class="font-onest-regular opacity-50 mt-4 sm:mt-1">
                                {{ locale === 'ru' ? `${data ? data.data.length : ''} книги` : `${data ? data.data.length : ''}ta kitob` }}
                            </div>
                        </div>
                        <div class="flex justify-between flex-wrap">
                            <div v-for="book in data ? data.data : []" class="mt-5 lg:w-[48%]">
                                <favorite-book-card :book="book"/>
                            </div>
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
