<template>
    <div>
        <div class="container mt-12">
            <div>
                <div>
                    <div class="flex gap-7 font-onest-medium text-base cursor-pointer">
                        <div @click="switchToWhatAboutProperty" class="">
                            {{ $t('book_properties.description') }}
                            <div v-if="togglePropertiesValue === 'what-about'" class="-mb-6 mt-4 bg-bronze h-2"></div>
                        </div>
                        <div @click="switchToPropertiesProperty">
                            {{ $t('book_properties.properties') }}
                            <div v-if="togglePropertiesValue === 'properties'" class="-mb-6 mt-4 bg-bronze h-2"></div>
                        </div>
                        <div @click="switchToReviewsProperty" class="">
                            {{ $t('book_properties.reviews') }}
                            <div v-if="togglePropertiesValue === 'reviews'" class="-mb-6 mt-4 bg-bronze h-2"></div>
                        </div>
                    </div>

                    <div class="opacity-20 mt-5">
                        <div id="long-line" class="w-full h-[1px] opacity-20 bg-black"></div>
                    </div>
                </div>
                <div class="mt-12">
                    <div class="w-2/5 relative left-1/4">
                        <div v-if="togglePropertiesValue === 'what-about'" id="what-about" class="flex flex-col gap-7">
                            <div class="font-onest-medium text-xl">{{ $t('book_properties.what_about') }}</div>
                            <div class="font-onest-regular text-base">
                                {{ locale === 'ru' ? props.book.data.description.ru : props.book.data.description.uz }}
                            </div>
                        </div>

                        <div v-if="togglePropertiesValue === 'properties'" id="properties">
                            <div class="flex gap-12 font-onest-regular">
                                <div class="flex flex-col gap-5 opacity-50">
                                    <div>{{ $t('book_properties.lang') }}</div>
                                    <div>{{ $t('book_properties.cover') }}</div>
                                    <div>{{ $t('book_properties.pages') }}</div>
                                    <div>{{ $t('book_properties.year') }}</div>
                                </div>
    
                                <div class="flex flex-col gap-5">
                                    <div>{{ locale === 'ru' ? props.book.data.inventory[0].language.ru : props.book.data.inventory[0].language.uz }}</div>
                                    <div>{{ locale === 'ru' ? props.book.data.inventory[0].cover_type.ru : props.book.data.inventory[0].cover_type.uz }}</div>
                                    <div>{{ locale === 'ru' ? props.book.data.inventory[0].number_of_pages.ru : props.book.data.inventory[0].number_of_pages.uz }}</div>
                                    <div>{{ locale === 'ru' ? props.book.data.inventory[0].year.ru : props.book.data.inventory[0].year.uz }}</div>
                                </div>
                            </div>
                        </div>

                        <div v-if="togglePropertiesValue === 'reviews'" id="what-about">
                            <div class="font-onest-medium text-xl">{{ $t('book_properties.reviews') }}, <span class="opacity-50">({{ reviews.reviews_count }})</span></div>

                            <div v-if="reviews.reviews_count > 0" class="mt-7 flex flex-col gap-5">
                                <div @click="openReviewModal" class="font-onest-medium text-sm text-bronze cursor-pointer hover:opacity-80 transition">
                                    {{ locale === 'ru' ? 'Оставить отзыв' : 'Sharh qoldirish' }}
                                </div>
                                <div v-for="(review, index) in reviews.reviews" :key="index" class="font-onest-regular flex flex-col gap-2">
                                    <div class="font-onest-medium">
                                        {{ review.user.full_name }}
                                    </div>
                                    <div class="flex gap-2">
                                        <div v-for="overall in 5" class="opacity-50">
                                            <full-star-icon v-if="overall <= review.rating" fill="#D9A53D"/>
                                            <half-star-icon v-if="overall - 0.5 === review.rating"/>
                                            <gray-star-icon v-if="overall > review.rating && overall - 0.5 !== review.rating"/>
                                        </div>
                                        <div class="opacity-50">{{ review.created_at.split(' ')[0] }}</div>
                                    </div>
                                    <div>{{ review.body }}</div>
                                    <div v-if="review !== reviews.reviews[reviews.reviews.length - 1]" class="w-full h-[1px] bg-black bg-opacity-20"></div>
                                </div>
                            </div>

                            <div v-if="reviews.reviews_count <= 0" class="mt-7">
                                <div class="font-onest-regular text-sm">
                                    {{ locale === 'ru' ? 'Отзывов пока нет, будьте первым.' : 'Hozircha sharhlar yo\'q, birinchi bo\'lib boshlang.' }}
                                </div>
                                <div>
                                    <button @click="openReviewModal" class="mt-5 px-14 py-4 bg-bronze font-onest-medium text-white">
                                        {{ locale === 'ru' ? 'Оставить отзыв' : 'Sharh qoldirish' }}
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl"


const reviews = ref(null)
const { locale } = useI18n()
const config = useRuntimeConfig()
const { data, load } = fetchUrl()
const authToken = await useAuthToken()
const props = defineProps(['book'])
const isAuthModalOpen = useIsAuthModalOpen()
const togglePropertiesValue = ref('what-about')
const isReviewModalOpen = useIsReviewModalOpen()


await load(`${config.public.apiUrl}/books/${props.book.data.id}/reviews`)
reviews.value = data.value.data


const switchToWhatAboutProperty = () => {
    togglePropertiesValue.value = 'what-about'
}


const switchToPropertiesProperty = () => {
    togglePropertiesValue.value = 'properties'
}


const switchToReviewsProperty = () => {
    togglePropertiesValue.value = 'reviews'
}


const openReviewModal = () => {
    if (!authToken.value) {
        return isAuthModalOpen.value = true
    }

    return isReviewModalOpen.value = true
}

</script>