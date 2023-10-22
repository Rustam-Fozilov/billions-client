<template>
    <div>
        <div class="flex items-center gap-3 opacity-50">
            <NuxtLink :to="'/' + locale" class="font-onest-regular hover:opacity-100 transition">
                {{ locale === 'ru' ? 'Главная' : 'Asosiy' }}
            </NuxtLink>

            <div class="flex items-center gap-3 hover:opacity-100 transition">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="black"/>
                    </svg>
                </div>

                <NuxtLink :to="'/' + locale + '/authors'" class="font-onest-regular hover:opacity-100 transition">
                    {{ locale === 'ru' ? 'Авторы' : 'Mualliflar' }}
                </NuxtLink>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="black"/>
                    </svg>
                </div>

                <div class="font-onest-regular">
                    {{ locale === 'ru' ? first_name.ru + ' ' + last_name.ru : first_name.uz + ' ' + last_name.uz }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps(['first_name', 'last_name'])
const { locale } = useI18n()

</script>
