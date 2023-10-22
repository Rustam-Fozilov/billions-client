<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white">
            <div class="container pb-24 pt-12">
                <div>
                    <author-paths :first_name="data.data.first_name" :last_name="data.data.last_name"/>
                </div>

                <div class="mt-12 flex justify-start gap-7">
                    <div class="bg-white w-[600px] h-[600px]">
                        <img :src="data.data.photo" alt="author photo" class="object-cover w-full h-full">
                    </div>
                    <div>
                        <div class="flex flex-col gap-7">
                            <div class="font-onest-medium text-xl">
                                {{ locale === 'ru' ? data.data.first_name.ru + ' ' + data.data.last_name.ru : data.data.first_name.uz + ' ' + data.data.last_name.uz }}
                            </div>
                            <div>
                                {{ 'description' }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="container pt-12 pb-24">
            <div>
                <div class="font-onest-medium text-xl">
                    {{ locale === 'ru' ? 'Книги автора' : 'Muallifning kitoblari' }}
                </div>
            </div>

            <div class="mt-12 flex justify-start gap-5 flex-wrap">
                <div v-for="book in data.data.books" :key="book.id">
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
