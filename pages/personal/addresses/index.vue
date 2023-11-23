<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white pt-12 pb-24 sm:pt-7 sm:pb-12">
            <div class="container">
                <div class="flex lg:flex-col lg:gap-5">
                    <div class="w-1/4 lg:w-full">
                        <personal-nav/>
                    </div>

                    <div class="w-full">
                        <div class="flex justify-between">
                            <div class="font-onest-medium text-xl sm:text-base">
                                {{ locale === 'ru' ? 'Мои адреса' : 'Mening manzillarim' }}
                            </div>
                            <div @click="openAddAddressModal" class="font-onest-medium text-base sm:text-sm cursor-pointer hover:opacity-50 transition">
                                {{ locale === 'ru' ? '+ Добавить' : '+ Qo\'shish' }}
                            </div>
                        </div>

                        <div class="mt-5">
                            <div class="flex flex-col gap-7 sm:gap-5">
                                <div v-for="address in data ? data.data : 0" :key="address.id">
                                    <personal-address-card :address="address"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <add-user-address-modal/>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl"


const { locale } = useI18n()
const config = useRuntimeConfig()
const { data, load } = fetchUrl()
const authToken = await useAuthToken()
const isAddUserAddressModalOpen = useIsAddUserAddressModalOpen()


await load(
    `${config.public.apiUrl}/user-addresses`, {
        headers: {
            Authorization: `Bearer ${authToken.value}`
        }
    }
)


const openAddAddressModal = () => {
    isAddUserAddressModalOpen.value = true
}

</script>
