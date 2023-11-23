<template>
    <div>
        <div class="flex flex-col gap-5 text-sm font-onest-medium lg:flex-row sm:text-xs lg:flex-wrap lg:gap-3">
            <NuxtLink :to="'/' + locale + '/personal/orders'" class="cursor-pointer hover:opacity-100 transition" :class="routeFromPersonal === 'orders' ? 'opacity-100' : 'opacity-50'">
                {{ locale === 'ru' ? 'Мои заказы' : 'Mening buyurtmalarim' }}
            </NuxtLink>
            <NuxtLink :to="'/' + locale + '/personal/favorites'" class="cursor-pointer hover:opacity-100 transition" :class="routeFromPersonal === 'favorites' ? 'opacity-100' : 'opacity-50'">
                {{ locale === 'ru' ? 'Избранное' : 'Sevimlilar' }}
            </NuxtLink>
            <NuxtLink :to="'/' + locale + '/personal/profile'" class="cursor-pointer hover:opacity-100 transition" :class="routeFromPersonal === 'profile' ? 'opacity-100' : 'opacity-50'">
                {{ locale === 'ru' ? 'Мои данные' : 'Mening ma\'lumotlarim' }}
            </NuxtLink>
            <NuxtLink :to="'/' + locale + '/personal/addresses'" class="cursor-pointer hover:opacity-100 transition" :class="routeFromPersonal === 'addresses' ? 'opacity-100' : 'opacity-50'">
                {{ locale === 'ru' ? 'Мои адреса' : 'Mening manzillarim' }}
            </NuxtLink>
            <NuxtLink :to="'/' + locale + '/personal/reviews'" class="cursor-pointer hover:opacity-100 transition" :class="routeFromPersonal === 'reviews' ? 'opacity-100' : 'opacity-50'">
                {{ locale === 'ru' ? 'Отзывы' : 'Sharhlar' }}
            </NuxtLink>
            <div @click="logout" class="cursor-pointer opacity-50 hover:opacity-100 transition">
                {{ locale === 'ru' ? 'Выход' : 'Chiqish' }}
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios"


const route = useRoute()
const { locale } = useI18n()
const config = useRuntimeConfig()
const authToken = await useAuthToken()
const routeFromPersonal = route.path.split('/').pop()


const logout = () => {
    axios
        .post(`${config.public.apiUrl}/auth/logout`, {}, {
            headers: {
                Authorization: `Bearer ${authToken.value}`
            }
        })
        .then((res) => {
            // console.log(res.data)
            localStorage.removeItem('token')
            localStorage.removeItem('user')

            window.location.href = `/${locale.value}`
        })
}


</script>
