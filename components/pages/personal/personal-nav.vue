<template>
    <div>
        <div class="flex flex-col gap-5">
            <NuxtLink :to="'/' + locale + '/personal/orders'" class="cursor-pointer font-onest-medium text-sm hover:opacity-100 transition" :class="routeFromPersonal === 'orders' ? 'opacity-100' : 'opacity-50'">
                {{ locale === 'ru' ? 'Мои заказы' : 'Mening buyurtmalarim' }}
            </NuxtLink>
            <NuxtLink :to="'/' + locale + '/personal/favorites'" class="cursor-pointer font-onest-medium text-sm hover:opacity-100 transition" :class="routeFromPersonal === 'favorites' ? 'opacity-100' : 'opacity-50'">
                {{ locale === 'ru' ? 'Избранное' : 'Sevimlilar' }}
            </NuxtLink>
            <NuxtLink :to="'/' + locale + '/personal/profile'" class="cursor-pointer font-onest-medium text-sm hover:opacity-100 transition" :class="routeFromPersonal === 'profile' ? 'opacity-100' : 'opacity-50'">
                {{ locale === 'ru' ? 'Мои данные' : 'Mening ma\'lumotlarim' }}
            </NuxtLink>
            <NuxtLink :to="'/' + locale + '/personal/addresses'" class="cursor-pointer font-onest-medium text-sm hover:opacity-100 transition" :class="routeFromPersonal === 'addresses' ? 'opacity-100' : 'opacity-50'">
                {{ locale === 'ru' ? 'Мои адреса' : 'Mening manzillarim' }}
            </NuxtLink>
            <NuxtLink :to="'/' + locale + '/personal/reviews'" class="cursor-pointer font-onest-medium text-sm hover:opacity-100 transition" :class="routeFromPersonal === 'reviews' ? 'opacity-100' : 'opacity-50'">
                {{ locale === 'ru' ? 'Отзывы' : 'Sharhlar' }}
            </NuxtLink>
            <NuxtLink :to="'/' + locale + '/'" class="cursor-pointer font-onest-medium text-sm opacity-50 hover:opacity-100 transition">
                {{ locale === 'ru' ? 'Выход' : 'Chiqish' }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>


const { locale } = useI18n()
const route = useRoute()
const routeFromPersonal = route.path.split('/').pop()


</script>
