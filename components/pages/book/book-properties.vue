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
                                <div v-for="(review, index) in reviews.reviews" :key="index" class="font-onest-regular flex flex-col gap-2">
                                    <div class="font-onest-medium">
                                        {{ review.user.full_name }}
                                    </div>
                                    <div class="flex gap-2">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="20" viewBox="0 0 120 20" fill="none">
                                                <path opacity="0.2" d="M109.103 1.81699C109.47 1.07374 110.53 1.07374 110.897 1.81699L112.706 5.48347C112.852 5.77862 113.133 5.98319 113.459 6.03051L117.505 6.61846C118.326 6.73765 118.653 7.74562 118.06 8.32416L115.132 11.1781C114.896 11.4079 114.789 11.7389 114.844 12.0632L115.535 16.0931C115.675 16.91 114.818 17.533 114.084 17.1473L110.465 15.2446C110.174 15.0915 109.826 15.0915 109.535 15.2446L105.916 17.1473C105.182 17.533 104.325 16.91 104.465 16.0931L105.156 12.0632C105.211 11.7389 105.104 11.4079 104.868 11.1781L101.94 8.32416C101.347 7.74562 101.674 6.73765 102.495 6.61846L106.541 6.03051C106.867 5.98319 107.148 5.77862 107.294 5.48347L109.103 1.81699Z" fill="black"/>
                                                <path opacity="0.6" d="M59.1033 1.81699C59.4701 1.07374 60.5299 1.07374 60.8967 1.81699L62.7063 5.48347C62.8519 5.77862 63.1335 5.98319 63.4592 6.03051L67.5054 6.61846C68.3256 6.73765 68.6531 7.74562 68.0596 8.32416L65.1318 11.1781C64.8961 11.4079 64.7885 11.7389 64.8442 12.0632L65.5353 16.0931C65.6754 16.91 64.818 17.533 64.0844 17.1473L60.4653 15.2446C60.174 15.0915 59.826 15.0915 59.5347 15.2446L55.9156 17.1473C55.182 17.533 54.3246 16.91 54.4647 16.0931L55.1558 12.0632C55.2115 11.7389 55.1039 11.4079 54.8682 11.1781L51.9404 8.32416C51.3469 7.74562 51.6744 6.73765 52.4946 6.61846L56.5408 6.03051C56.8665 5.98319 57.1481 5.77862 57.2937 5.48347L59.1033 1.81699Z" fill="#D9A53D"/>
                                                <path opacity="0.6" d="M84.1033 1.81699C84.4701 1.07374 85.5299 1.07374 85.8967 1.81699L87.7063 5.48347C87.8519 5.77862 88.1335 5.98319 88.4592 6.03051L92.5054 6.61846C93.3256 6.73765 93.6531 7.74562 93.0596 8.32416L90.1318 11.1781C89.8961 11.4079 89.7885 11.7389 89.8442 12.0632L90.5353 16.0931C90.6754 16.91 89.818 17.533 89.0844 17.1473L85.4653 15.2446C85.174 15.0915 84.826 15.0915 84.5347 15.2446L80.9156 17.1473C80.182 17.533 79.3246 16.91 79.4647 16.0931L80.1558 12.0632C80.2115 11.7389 80.1039 11.4079 79.8682 11.1781L76.9404 8.32416C76.3469 7.74562 76.6744 6.73765 77.4946 6.61846L81.5408 6.03051C81.8665 5.98319 82.1481 5.77862 82.2937 5.48347L84.1033 1.81699Z" fill="#D9A53D"/>
                                                <path opacity="0.6" d="M34.1033 1.81699C34.4701 1.07374 35.5299 1.07374 35.8967 1.81699L37.7063 5.48347C37.8519 5.77862 38.1335 5.98319 38.4592 6.03051L42.5054 6.61846C43.3256 6.73765 43.6531 7.74562 43.0596 8.32416L40.1318 11.1781C39.8961 11.4079 39.7885 11.7389 39.8442 12.0632L40.5353 16.0931C40.6754 16.91 39.818 17.533 39.0844 17.1473L35.4653 15.2446C35.174 15.0915 34.826 15.0915 34.5347 15.2446L30.9156 17.1473C30.182 17.533 29.3246 16.91 29.4647 16.0931L30.1558 12.0632C30.2115 11.7389 30.1039 11.4079 29.8682 11.1781L26.9404 8.32416C26.3469 7.74562 26.6744 6.73765 27.4946 6.61846L31.5408 6.03051C31.8665 5.98319 32.1481 5.77862 32.2937 5.48347L34.1033 1.81699Z" fill="#D9A53D"/>
                                                <path opacity="0.6" d="M9.10326 1.81699C9.47008 1.07374 10.5299 1.07374 10.8967 1.81699L12.7063 5.48347C12.8519 5.77862 13.1335 5.98319 13.4592 6.03051L17.5054 6.61846C18.3256 6.73765 18.6531 7.74562 18.0596 8.32416L15.1318 11.1781C14.8961 11.4079 14.7885 11.7389 14.8442 12.0632L15.5353 16.0931C15.6754 16.91 14.818 17.533 14.0844 17.1473L10.4653 15.2446C10.174 15.0915 9.82598 15.0915 9.53466 15.2446L5.91562 17.1473C5.18199 17.533 4.32456 16.91 4.46467 16.0931L5.15585 12.0632C5.21148 11.7389 5.10393 11.4079 4.86825 11.1781L1.94038 8.32416C1.34687 7.74562 1.67438 6.73765 2.4946 6.61846L6.54081 6.03051C6.86652 5.98319 7.14808 5.77862 7.29374 5.48347L9.10326 1.81699Z" fill="#D9A53D"/>
                                            </svg>
                                        </div>
                                        <div class="opacity-50">{{ review.created_at }}</div>
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
                                    <button class="mt-5 px-14 py-4 bg-bronze font-onest-medium text-white">
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
const props = defineProps(['book'])
const togglePropertiesValue = ref('what-about')


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

</script>