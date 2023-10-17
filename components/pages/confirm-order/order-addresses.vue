<template>
    <div>
        <div id="confirm-order-section-three">
            <div>
                <div id="section-title" class="flex gap-5 font-onest-medium text-base">
                    <div>
                        <div class="flex items-center justify-center w-6 h-6 text-sm border-black border-opacity-50 border-2 rounded-full">3</div>
                    </div>
                    <div>{{ locale === 'ru' ? 'Адрес' : 'Manzil' }}</div>
                </div>

                <div class="mt-5">
                    <div>
                        <select @input="selectAddress" class="w-1/3 p-3 cursor-pointer outline-none bg-white border border-black border-opacity-20 font-onest-regular" name="" id="">
                            <option class="p-2" value="" disabled selected>{{ locale === 'ru' ? 'Выберите адрес' : 'Manzilni tanlang' }}</option>
                            <option v-for="address in userAddresses" :value="address.id" class="font-onest-regular">
                                {{ locale === 'ru' ? address.address_name.ru : address.address_name.uz}},
                                {{ address.street }}, {{ address.house }}
                            </option>
                            <option nonce="" value="add"    >
                                {{ locale === 'ru' ? '+ Добавить адрес' : '+ Manzil qo\'shish' }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl";


const { data, load } = fetchUrl()
const authToken = await useAuthToken()
const { locale } = useI18n()
const config = useRuntimeConfig()
const userAddresses = useUserAddresses()
const isAddUserAddressModalOpen = useIsAddUserAddressModalOpen()

await load(
    `${config.public.apiUrl}/user-addresses`,
    {
        headers: {
            Authorization: `Bearer ${authToken.value}`
        }
    }
)

userAddresses.value = data.value.data


const selectAddress = (e) => {
    if (e.target.value === 'add') {
        isAddUserAddressModalOpen.value = true
    }
}

</script>
