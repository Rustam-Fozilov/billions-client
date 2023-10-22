<template>
    <div>
        <div v-if="isAddUserAddressModalOpen" @click="closeModal" class="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
        <div v-if="isAddUserAddressModalOpen" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
            <div class="p-8 outline-none overscroll-none">
                <div class="flex flex-col gap-12 justify-start w-[520px]">
                    <div @click.stop="closeModal" class="cursor-pointer opacity-50 hover:opacity-100 transition flex w-full justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path opacity="1" d="M16.1237 15.2595L16.2474 15.1358L16.1238 15.0121L9.62119 8.5L16.1238 1.98793L16.2474 1.86419L16.1237 1.74053L15.2595 0.876256L15.1358 0.752602L15.0121 0.876167L8.5 7.37881L1.98793 0.876167L1.86419 0.752602L1.74053 0.876256L0.876256 1.74053L0.752602 1.86419L0.876167 1.98793L7.37881 8.5L0.876167 15.0121L0.752602 15.1358L0.876256 15.2595L1.74053 16.1237L1.86419 16.2474L1.98793 16.1238L8.5 9.62119L15.0121 16.1238L15.1358 16.2474L15.2595 16.1237L16.1237 15.2595Z" fill="black" stroke="black" stroke-width="0.35"/>
                        </svg>
                    </div>

                    <div class="flex flex-col gap-7">
                        <div v-if="error" class="text-center text-red-500 font-onest-regular">
                            {{ locale === 'ru' ? 'Пожалуйста, заполните все обязательные поля' : 'Iltimos barcha kerakli maydonlarni to\'ldiring' }}
                        </div>
                        <div class="font-onest-medium text-base text-center">
                            {{ locale === 'ru' ? 'Добавить адрес' : 'Manzil qo\'shish' }}
                        </div>

                        <div class="flex flex-col gap-5">
                            <div class="flex justify-between items-center w-full">
                                <div class="w-1/3 font-onest-medium text-base">
                                    {{ locale === 'ru' ? 'Название адреса' : 'Manzil nomi' }}
                                </div>
                                <div class="w-2/3">
                                    <input
                                        v-model="addressInfo.name"
                                        type="text"
                                        class="bg-transparent w-full outline-none border-x-0 text-base font-onest-regular border-opacity-20 border-b border-black"
                                        :placeholder="locale === 'ru' ? 'Введите название адреса' : 'Manzil nomini kiriting'"
                                    >
                                </div>
                            </div>

                            <div class="flex justify-between items-center w-full">
                                <div class="w-1/3 font-onest-medium text-base">
                                    {{ locale === 'ru' ? 'Hазвание улицы' : 'Ko\'cha nomi' }}
                                </div>
                                <div class="w-2/3">
                                    <input
                                        v-model="addressInfo.street"
                                        type="text"
                                        class="bg-transparent w-full outline-none border-x-0 text-base font-onest-regular border-opacity-20 border-b border-black"
                                        :placeholder="locale === 'ru' ? 'Введите название улицы' : 'Ko\'cha nomini kiriting'"
                                    >
                                </div>
                            </div>

                            <div class="flex justify-between items-center w-full">
                                <div class="w-1/3 font-onest-medium text-base">
                                    {{ locale === 'ru' ? 'Hомер дома' : 'Uy raqami' }}
                                </div>
                                <div class="w-2/3">
                                    <input
                                        v-model="addressInfo.home"
                                        type="text"
                                        class="bg-transparent w-full outline-none border-x-0 text-base font-onest-regular border-opacity-20 border-b border-black"
                                        :placeholder="locale === 'ru' ? 'Введите номер дома' : 'Uy raqamini kiriting'"
                                    >
                                </div>
                            </div>

                            <div class="flex justify-between items-center w-full">
                                <div class="w-1/3 font-onest-medium text-base">
                                    {{ locale === 'ru' ? 'Дополнительная информация' : 'Qo\'shimcha ma\'lumot' }}
                                </div>
                                <div class="w-2/3">
                                    <input
                                        v-model="addressInfo.additional"
                                        type="text"
                                        class="bg-transparent w-full outline-none border-x-0 text-base font-onest-regular border-opacity-20 border-b border-black"
                                        :placeholder="locale === 'ru' ? '(по желанию)' : '(majburiy emas))'"
                                    >
                                </div>
                            </div>
                        </div>

                        <div @click="addUserAddress" class="bg-bronze font-onest-medium text-white p-5 text-center cursor-pointer hover:bg-opacity-90 transition">
                            {{ locale === 'ru' ? 'Добавить' : 'Qo\'shish' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl"
import axios from "axios";


const config = useRuntimeConfig()
const authToken = await useAuthToken()
const error = ref(false)
const isAddUserAddressModalOpen = useIsAddUserAddressModalOpen()
const { locale } = useI18n()
const { data, load } = fetchUrl()
const addressInfo = ref({
    name: '',
    street: '',
    home: '',
    additional: ''
})


const addUserAddress = async () => {
    if (addressInfo.value.name === '' || addressInfo.value.street === '' || addressInfo.value.home === '') {
        error.value = true
        return setTimeout(() => {
            error.value = false
        }, 3000)
    }

    axios
        .post(`${config.public.apiUrl}/user-addresses`, {
            address_name: addressInfo.value.name,
            region: 'Tashkent',
            street: addressInfo.value.street,
            house: addressInfo.value.home,
            additional_info: addressInfo.value.additional
        }, {
            headers: {
                "Authorization": `Bearer ${authToken.value}`
            }
        })
        .then(res => {
            window.location.reload(true)
            isAddUserAddressModalOpen.value = false
            error.value = false
        })
        .catch(err => {
            console.log(err)
        })
}


const closeModal = () => {
    isAddUserAddressModalOpen.value = false
}

</script>
