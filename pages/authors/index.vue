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
                    <div class="py-12">
                        <div class="w-full pb-2 flex items-center gap-7 border-b-2">
                            <div class="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                    <path opacity="0.5" d="M27 27L21.0974 21.0868M24.3684 13.1842C24.3684 16.1504 23.1901 18.9952 21.0926 21.0926C18.9952 23.1901 16.1504 24.3684 13.1842 24.3684C10.218 24.3684 7.37323 23.1901 5.27578 21.0926C3.17833 18.9952 2 16.1504 2 13.1842C2 10.218 3.17833 7.37323 5.27578 5.27578C7.37323 3.17833 10.218 2 13.1842 2C16.1504 2 18.9952 3.17833 21.0926 5.27578C23.1901 7.37323 24.3684 10.218 24.3684 13.1842Z" stroke="black" stroke-width="3" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <input v-model="query" @input="search" class="w-full border-none outline-none font-onest-medium text-xl bg-transparent" placeholder="Mualliflar bo'yicha qidiruv" type="text">
                        </div>
                    </div>
                </div>

                <div class="font-onest-medium text-base">
                    {{ locale === 'ru' ? 'Авторы' : 'Mualliflar' }}
                </div>

                <div class="flex justify-start gap-5 flex-wrap mt-12">
                    <div v-for="author in authorsData" :key="author.id">
                        <author-card :author="author"/>
                    </div>
                </div>

                <div class="flex justify-end pt-24">
                    <the-pagination v-if="paginationData.length > 1" :pagination-data="paginationData"/>
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


const query = ref('')
const route = useRoute()
const { locale } = useI18n()
const authorsData = ref(null)
const paginationData = ref([])
const { data, load } = fetchUrl()
const config = useRuntimeConfig()


watch(() => route.query.page, async (name) => {
    await load(`${config.public.apiUrl}/authors/?withBooks=true&page=${name}`)
    authorsData.value = data.value.data.authors
})


await load(`${config.public.apiUrl}/authors?withBooks=true&page=${route.query.page ?? 1}`)
authorsData.value = data.value.data.authors


await load(`${config.public.apiUrl}/authors?withBooks=true&page=1`)
paginationData.value.push(data.value.data)


const search = async () => {
    if (query.value !== '') {
        await load(
            `${config.public.apiUrl}/authors/search/${query.value}?withBooks=true`
        )

        if (data.value.success) {
            authorsData.value = data.value.data.authors
        } else {
            authorsData.value = []
        }

        paginationData.value = []
    } else {
        await load(`${config.public.apiUrl}/authors?withBooks=true%&page=1`)
        authorsData.value = data.value.data.authors

        if (paginationData.value.length < 1) {
            paginationData.value.push(data.value.data)

            if (data.value.data && data.value.data.links) {
                while (data.value.data.links.next) {
                    await load(data.value.data.links.next)
                    paginationData.value.push(data.value.data)
                }
            }
        }
    }
}


if (data.value.data && data.value.data.links) {
    while (data.value.data.links.next) {
        await load(data.value.data.links.next)
        paginationData.value.push(data.value.data)
    }
}

</script>
