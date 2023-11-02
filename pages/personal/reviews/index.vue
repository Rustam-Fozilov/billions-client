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
                                1ta
                            </div>
                        </div>

                        <div class="mt-5">
                            content
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

const { locale } = useI18n()

</script>
