<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white">
            <div class="container pb-24 pt-12 sm:pb-12 sm:pt-7">
                <div>
                    <author-paths :first_name="data.data.first_name" :last_name="data.data.last_name"/>
                </div>

                <div class="mt-12 flex justify-start gap-7 lg:flex-col lg:mt-7 lg:gap-5">
                    <div class="bg-white w-[600px] h-[600px] lg:w-full lg:h-full">
                        <img :src="data.data.photo" alt="author photo" class="object-cover w-full h-full">
                    </div>
                    <div>
                        <div class="flex flex-col gap-7 lg:gap-3">
                            <div class="font-onest-medium text-xl lg:text-base">
                                {{ locale === 'ru' ? data.data.first_name.ru + ' ' + data.data.last_name.ru : data.data.first_name.uz + ' ' + data.data.last_name.uz }}
                            </div>
                            <div class="font-onest-regular">
                                {{ 'description' }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="container pt-12 pb-24 sm:pb-12 sm:pt-7">
            <div>
                <div class="font-onest-medium text-xl lg:text-base">
                    {{ locale === 'ru' ? 'Книги автора' : 'Muallifning kitoblari' }}
                </div>
            </div>

            <div class="mt-12 flex justify-start gap-5 flex-wrap lg:mt-7 lg:gap-3 lg:w-full lg:justify-between">
                <div v-for="book in data.data.books" :key="book.id" class="lg:w-[47%]">
                    <author-books :book-id="book.id"/>
                </div>
            </div>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl"


definePageMeta({
    title: {
        ru: 'Авторы',
        uz: 'Mualliflar'
    }
})


const { locale } = useI18n()
const { data, load } = fetchUrl()
const route = useRoute()
const config = useRuntimeConfig()


await load(
    `${config.public.apiUrl}/authors/${route.fullPath.split('/').pop()}?withBooks=true`
)

</script>
