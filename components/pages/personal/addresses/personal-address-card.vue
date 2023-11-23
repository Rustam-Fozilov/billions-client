<template>
    <div>
        <div class="flex justify-between items-center border-b-2 pb-5">
            <div class="flex items-center gap-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="27" viewBox="0 0 22 27" fill="none">
                        <path d="M10.998 10.999H11.0109V11.0119H10.998V10.999Z" stroke="black" stroke-width="4" stroke-linejoin="round"/>
                        <path d="M11 25.1421L18.0712 18.0709C19.4697 16.6724 20.4221 14.8905 20.8079 12.9507C21.1937 11.0109 20.9956 9.00029 20.2387 7.17306C19.4819 5.34582 18.2001 3.78407 16.5557 2.68527C14.9112 1.58648 12.9778 1 11 1C9.02221 1 7.08883 1.58648 5.44435 2.68527C3.79987 3.78407 2.51814 5.34582 1.76125 7.17306C1.00436 9.00029 0.806303 11.0109 1.19212 12.9507C1.57793 14.8905 2.5303 16.6724 3.92878 18.0709L11 25.1421Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div>
                    <div class="font-onest-medium text-sm">{{ address.address_name }}</div>
                    <div class="font-onest-regular">{{ address.street }}, {{ address.house }}</div>
                </div>
            </div>
            <div @click="toggleAddressDetails" class="cursor-pointer transition" :class="isAddressDetailsOpen ? 'rotate-180' : ''">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                    <path d="M2 11.7692L12 21L22 11.7692M12 19.718V1" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg>
            </div>
        </div>

        <div v-if="isAddressDetailsOpen" class="mt-7 flex flex-col gap-7 sm:mt-5 sm:gap-5">
            <div class="flex">
                <div class="font-onest-medium text-base sm:text-sm opacity-50 w-1/4">
                    Tuman
                </div>
                <div class="w-9/12">
                    <input v-model="addressInfo.region" placeholder="Tuman nomini kiriting" type="text" class="w-1/2 sm:w-full sm:text-sm border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                </div>
            </div>
            <div class="flex items-center">
                <div class="font-onest-medium text-base sm:text-sm opacity-50 w-1/4">
                    Ko’cha nomi
                </div>
                <div class="w-9/12">
                    <input v-model="addressInfo.street" placeholder="Ko'cha nomini kiriting" type="text" class="w-1/2 sm:w-full sm:text-sm border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                </div>
            </div>
            <div class="flex items-center">
                <div class="font-onest-medium text-base sm:text-sm opacity-50 w-1/4">
                    Uy raqami
                </div>
                <div class="w-9/12">
                    <input v-model="addressInfo.house" placeholder="Uy raqamini kiriting" type="text" class="w-1/2 sm:w-full sm:text-sm border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                </div>
            </div>
            <div class="flex">
                <div class="font-onest-medium text-base sm:text-sm opacity-50 w-1/4">
                    Qo’shimcha ma’lumot
                </div>
                <div class="w-9/12">
                    <input v-model="addressInfo.additional_info" placeholder="Qo'shimcha ma'lumot (majburiy emas)" type="text" class="w-1/2 sm:w-full sm:text-sm border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                    <div class="flex gap-5 sm:flex-col sm:gap-3">
                        <div @click="updateAddress" class="py-4 px-20 bg-bronze text-white font-onest-medium w-min cursor-pointer mt-12">
                            Saqlash
                        </div>
                        <div @click="deleteAddress" class="py-4 px-20 bg-nav-bg font-onest-medium w-min cursor-pointer mt-12 sm:mt-0">
                            O'chirish
                        </div>
                    </div>
                    <div v-if="error" class="text-red-600 font-onest-regular mt-2">* Iltomos barcha kerakli maydonlarni to'ldiring</div>
                    <div v-if="isAddressUpdated" class="text-xs font-onest-regular mt-2"><span class="text-green-600">✓</span> O'zgarishlar saqlandi</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios"


const error = ref(false)
const router = useRouter()
const config = useRuntimeConfig()
const isAddressUpdated = ref(false)
const authToken = await useAuthToken()
const isAddressDetailsOpen = ref(false)
const props = defineProps(['address'])
const addressInfo = ref(props.address)


const toggleAddressDetails = () => {
    isAddressDetailsOpen.value = !isAddressDetailsOpen.value
}


const updateAddress = async () => {
    if (addressInfo.value.region && addressInfo.value.street && addressInfo.value.house) {
        await axios.put(`${config.public.apiUrl}/user-addresses/${addressInfo.value.id}`, {
            region: addressInfo.value.region,
            street: addressInfo.value.street,
            house: addressInfo.value.house,
            additional_info: addressInfo.value.additional_info
        }, {
            headers: {
                Authorization: `Bearer ${authToken.value}`
            }
        })

        isAddressUpdated.value = true
        error.value = false

        setTimeout(() => {
            isAddressUpdated.value = false
        }, 3000)
    } else {
        error.value = true
        isAddressUpdated.value = false

        setTimeout(() => {
            error.value = false
        }, 3000)
    }
}


const deleteAddress = async () => {
    await axios.delete(`${config.public.apiUrl}/user-addresses/${addressInfo.value.id}`, {
        headers: {
            Authorization: `Bearer ${authToken.value}`
        }
    })

    router.go()
}

</script>
