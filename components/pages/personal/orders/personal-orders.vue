<template>
    <div>
        <div class="flex flex-col gap-7">
            <div class="flex gap-5">
                <div class="font-onest-medium text-xl">
                    {{ locale === 'ru' ? 'Заказы' : 'Buyurtmalar' }}
                </div>
                <div class="font-onest-regular opacity-50 mt-4">
                    {{ locale === 'ru' ? `${data ? data.data.length : ''} заказов` : `${data ? data.data.length : ''}ta buyurtma` }}
                </div>
            </div>

            <div v-for="order in data ? data.data : []" class="w-full flex flex-col gap-5">
                <personal-orders-block :order="order"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl"


const { locale } = useI18n()
const { data, load } = fetchUrl()
const config = useRuntimeConfig()
const authToken = await useAuthToken()


await load(
    `${config.public.apiUrl}/orders`, {
        headers: {
            Authorization: `Bearer ${authToken.value}`
        }
    }
)


</script>
