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
                        <div class="flex gap-5 items-center">
                            <div class="font-onest-medium text-xl">
                                {{ locale === 'ru' ? 'Отзывы' : 'Izohlar' }}
                            </div>
                            <div class="mt-2 font-onest-regular opacity-50">
                                {{ data ? data.data.length : 0 }} {{ locale === 'ru' ? 'отзывов' : 'izoh' }}
                            </div>
                        </div>

                        <div class="mt-7 flex flex-col gap-7">
                            <div v-for="review in data ? data.data : []">
                                <personal-review-card :review="review"/>
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
import { fetchUrl } from "~/helpers/fetchUrl"
import PersonalReviewCard from "~/components/pages/personal/reviews/personal-review-card.vue";


const { locale } = useI18n()
const config = useRuntimeConfig()
const { data, load } = fetchUrl()
const authToken = await useAuthToken()


await load(
    `${config.public.apiUrl}/user-reviews`, {
        headers: {
            Authorization: `Bearer ${authToken.value}`
        }
    }
)

console.log(data.value)

</script>
