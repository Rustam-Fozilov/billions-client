<template>
    <div>
        <div class="flex flex-col gap-7">
            <div class="flex gap-5">
                <div class="font-onest-medium text-xl sm:text-base">
                    {{ locale === 'ru' ? 'Заказы' : 'Buyurtmalar' }}
                </div>
                <div class="font-onest-regular opacity-50 mt-4 sm:mt-1">
                    {{ locale === 'ru' ? `${data ? data.data.orders.length : ''} заказов` : `${data ? data.data.orders.length : ''}ta buyurtma` }}
                </div>
            </div>

            <div v-for="order in data ? data.data.orders : []" class="w-full flex flex-col gap-5">
                <personal-orders-block :order="order"/>
            </div>
        </div>
        <div class="flex justify-end pt-24 sm:pt-12">
            <the-pagination v-if="paginationData.length > 1" :pagination-data="paginationData"/>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl"


const { locale } = useI18n()
const { data, load } = fetchUrl()
const config = useRuntimeConfig()
const authToken = await useAuthToken()
const paginationData = ref([])
const ordersData = ref(null)
const route = useRoute()


watch(() => route.query.page, async (name) => {
    await load(
        `${config.public.apiUrl}/orders?page=${name}`, {
            headers: {
                Authorization: `Bearer ${authToken.value}`
            }
        }
    )
    ordersData.value = data.value.data.orders
})


watch(() => ordersData.value, async (name) => {
    await load(
        `${config.public.apiUrl}/orders?page=${route.query.page ?? 1}`, {
            headers: {
                Authorization: `Bearer ${authToken.value}`
            }
        }
    )
    ordersData.value = data.value ? data.value.data.orders : []
})


await load(
    `${config.public.apiUrl}/orders?page=${route.query.page ?? 1}`, {
        headers: {
            Authorization: `Bearer ${authToken.value}`
        }
    }
)
ordersData.value = data.value ? data.value.data.orders : []


await load(
    `${config.public.apiUrl}/orders?page=1`, {
        headers: {
            Authorization: `Bearer ${authToken.value}`
        }
    }
)
paginationData.value.push(data.value ? data.value.data : [])


if (data.value && data.value.data.links) {
    while (data.value.data.links.next) {
        await load(data.value.data.links.next, {
            headers: {
                Authorization: `Bearer ${authToken.value}`
            }
        })
        paginationData.value.push(data.value.data)
    }
}

</script>
