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
                        <div class="font-onest-medium text-xl">
                            {{ locale === 'ru' ? 'Мои данные' : 'Mening ma\'lumotlarim' }}
                        </div>

                        <div class="mt-5 flex flex-col gap-7">
                            <div class="flex">
                                <div class="font-onest-medium text-base opacity-50 w-1/4">
                                    Ism
                                </div>
                                <div class="w-9/12">
                                    <input placeholder="Ismingizni kiriting" type="text" class="w-1/2 border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="font-onest-medium text-base opacity-50 w-1/4">
                                    Familiya
                                </div>
                                <div class="w-9/12">
                                    <input placeholder="Familiyangizni kiriting" type="text" class="w-1/2 border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="font-onest-medium text-base opacity-50 w-1/4">
                                    Telefon
                                </div>
                                <div class="w-9/12">
                                    <input placeholder="Telefon raqamingizni kiriting" type="text" class="w-1/2 border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                                </div>
                            </div>
                            <div class="flex">
                                <div class="font-onest-medium text-base opacity-50 w-1/4">
                                    Email
                                </div>
                                <div class="w-9/12">
                                    <input placeholder="Emailingizni kiriting" type="text" class="w-1/2 border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                                    <div class="py-4 px-20 bg-bronze text-white font-onest-medium w-min cursor-pointer mt-12">
                                        Saqlash
                                    </div>
                                    <div v-if="false" class="text-xs font-onest-regular mt-2"><span class="text-green-600">✓</span> O'zgarishlar saqlandi</div>
                                </div>
                            </div>
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
import { fetchUrl } from '~/helpers/fetchUrl';


const config = useRuntimeConfig();
const { locale } = useI18n()
const { data, load} = fetchUrl();
const authToken = await useAuthToken()


</script>
