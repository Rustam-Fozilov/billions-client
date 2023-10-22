<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white">
            <div class="container pb-24 pt-12">
                <div>
                    <breadcrumbs-path/>
                </div>

                <div>
                    <search-authors-input/>
                </div>

                <div class="font-onest-medium text-base">
                    {{ locale === 'ru' ? 'Авторы' : 'Mualliflar' }}
                </div>

                <div class="flex justify-start gap-5 flex-wrap mt-12">
                    <div v-for="author in data.data" :key="author.id">
                        <author-card :author="author"/>
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
import { fetchUrl } from "~/helpers/fetchUrl";


definePageMeta({
    title: {
        ru: 'Авторы',
        uz: 'Mualliflar'
    }
})


const { data, load } = fetchUrl()
const config = useRuntimeConfig()
const { locale } = useI18n()


await load(`${config.public.apiUrl}/authors?withBooks=true`)

</script>
