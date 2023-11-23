<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white pt-12 pb-24 sm:pt-7 sm:pb-12">
            <div class="container">
                <div class="flex lg:flex-col lg:gap-5">
                    <div class="w-1/4 lg:w-full">
                        <personal-nav/>
                    </div>

                    <div class="w-full">
                        <div class="flex gap-5 items-center">
                            <div class="font-onest-medium text-xl sm:text-base">
                                {{ locale === 'ru' ? 'Отзывы' : 'Izohlar' }}
                            </div>
                            <div class="mt-2 font-onest-regular opacity-50 sm:mt-1">
                                {{ data ? data.data.length : 0 }} {{ locale === 'ru' ? 'отзывов' : 'izoh' }}
                            </div>
                        </div>

                        <div class="mt-7 flex flex-col gap-7 sm:mt-5 sm:gap-5">
                            <div v-for="review in reviewsData">
                                <personal-review-card :review="review"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end pt-24 sm:pt-12">
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


const route = useRoute()
const { locale } = useI18n()
const reviewsData = ref(null)
const paginationData = ref([])
const config = useRuntimeConfig()
const { data, load } = fetchUrl()
const authToken = await useAuthToken()


watch(() => reviewsData.value, async (name) => {
    await load(
        `${config.public.apiUrl}/user-reviews?page=${route.query.page ?? 1}`, {
            headers: {
                Authorization: `Bearer ${authToken.value}`
            }
        }
    )
    reviewsData.value = data.value ? data.value.data.reviews : null
})


watch(() => route.query.page, async (name) => {
    await load(
        `${config.public.apiUrl}/user-reviews?page=${name}`, {
            headers: {
                Authorization: `Bearer ${authToken.value}`
            }
        }
    )
    reviewsData.value = data.value ? data.value.data.reviews : null
})


await load(
    `${config.public.apiUrl}/user-reviews`, {
        headers: {
            Authorization: `Bearer ${authToken.value}`
        }
    }
)
reviewsData.value = data.value ? data.value.data.reviews : null


await load(
    `${config.public.apiUrl}/user-reviews?page=1`, {
        headers: {
            Authorization: `Bearer ${authToken.value}`
        }
    }
)
paginationData.value.push(data.value ? data.value.data : [])


if (data.value && data.value.data.links) {
    while (data.value.data.links.next) {
        await load(data.value.data.links.next, {
            headers: {
                Authorization: `Bearer ${authToken.value}`
            }
        })
        paginationData.value.push(data.value.data)
    }
}


</script>
