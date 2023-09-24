<template>
    <div>
        <div class="flex gap-5 items-end">
            <div class="font-onest-medium text-xl">
                {{ locale === 'ru' ? `Результаты по запросу «${title}»` : `Qidiruv natijalar «${title}»` }}
            </div>
            <div class="font-onest-regular opacity-50 mb-2">123 ta kitob</div>
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

const { locale } = useI18n()

</script>