<template>
    <div>
        <div class="flex gap-5 items-end">
            <div class="font-onest-medium text-xl">
                {{ locale === 'ru' ? `Результаты по запросу «${title}»` : `Qidiruv natijalar «${title}»` }}
            </div>
            <div class="font-onest-regular opacity-50 mb-2">
                {{ locale === 'ru' ? `${searchResult.length} книги` : `${searchResult.length} ta kitob` }}
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    title: {
        type: String,
        default: ''
    }
})


const searchResult = useSearchResult()
const { locale } = useI18n()

</script>