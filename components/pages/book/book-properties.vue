<template>
    <div>
        <div class="container mt-12">
            <div>
                <div>
                    <div class="flex font-onest-medium text-base cursor-pointer">
                        <div @click="switchToWhatAboutProperty" class=" w-36" >{{ $t('book_properties.description') }}</div>
                        <div @click="switchToPropertiesProperty">{{ $t('book_properties.properties') }}</div>
                    </div>
                    <div class="flex flex-col mt-5 z-10">
                        <div v-if="togglePropertiesValue === 'what-about'" id="short-line" class="w-28 bg-bronze h-2 relative top-1"></div>
                        <div v-if="togglePropertiesValue === 'properties'" id="short-line" class=" w-36 bg-bronze h-2 relative top-1 left-[140px]"></div>

                        <div class="opacity-20">
                            <div id="long-line" class="w-full h-[1px] opacity-20 bg-black"></div>
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['book'])
const togglePropertiesValue = ref('what-about')
const { locale } = useI18n()



const switchToWhatAboutProperty = () => {
    togglePropertiesValue.value = 'what-about'
}


const switchToPropertiesProperty = () => {
    togglePropertiesValue.value = 'properties'
}

</script>