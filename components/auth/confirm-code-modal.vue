<template>
    <div>
        <div v-if="isAuthModalOpen" @click="closeAuthModal" class="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
        <div v-if="isAuthModalOpen" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
            <div id="confirm-code-dialog" class="p-8 outline-none overscroll-none">
                <div class="flex flex-col justify-between h-[480px] w-[400px]">
                    <div @click="closeAuthModal" class="cursor-pointer opacity-50 hover:opacity-100 transition flex w-full justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path opacity="1" d="M16.1237 15.2595L16.2474 15.1358L16.1238 15.0121L9.62119 8.5L16.1238 1.98793L16.2474 1.86419L16.1237 1.74053L15.2595 0.876256L15.1358 0.752602L15.0121 0.876167L8.5 7.37881L1.98793 0.876167L1.86419 0.752602L1.74053 0.876256L0.876256 1.74053L0.752602 1.86419L0.876167 1.98793L7.37881 8.5L0.876167 15.0121L0.752602 15.1358L0.876256 15.2595L1.74053 16.1237L1.86419 16.2474L1.98793 16.1238L8.5 9.62119L15.0121 16.1238L15.1358 16.2474L15.2595 16.1237L16.1237 15.2595Z" fill="black" stroke="black" stroke-width="0.35"/>
                        </svg>
                    </div>
                    <div class="flex flex-col gap-12">
                        <div>
                            <div class="font-onest-medium text-base">{{ locale === 'ru' ? 'Введите код' : 'Kodni kiriting' }}</div>
                            <div class="font-onest-regular">{{ locale === 'ru' ? 'Чтобы подтвердить телефон, код был отправлен в +998 97 767-20-97.' : 'Telefonni tasdiqlash maqsadida +998 97 767-20-97 raqamiga kod yuborildi' }}</div>
                            </div>
                        <div>
                            <div class="flex justify-center">
                                <div class="flex gap-3 w-4/5">
                                    <div class="bg-soft-white px-5 py-4">
                                        <input v-model="inputCodes[0]" @input="numericOnly" maxlength="1" class="w-full text-center outline-none font-onest-regular bg-transparent" type="text">
                                    </div>

                                    <div class="bg-soft-white px-5 py-4">
                                        <input v-model="inputCodes[1]" @input="numericOnly" maxlength="1" class="w-full text-center outline-none font-onest-regular bg-transparent" type="text">
                                    </div>

                                    <div class="bg-soft-white px-5 py-4">
                                        <input v-model="inputCodes[2]" @input="numericOnly" maxlength="1" class="w-full text-center outline-none font-onest-regular bg-transparent" type="text">
                                    </div>

                                    <div class="bg-soft-white px-5 py-4">
                                        <input v-model="inputCodes[3]" @input="numericOnly" maxlength="1" class="w-full text-center outline-none font-onest-regular bg-transparent" type="text">
                                    </div>

                                    <div class="bg-soft-white px-5 py-4">
                                        <input v-model="inputCodes[4]" @input="numericOnly" maxlength="1" class="w-full text-center outline-none font-onest-regular bg-transparent" type="text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div v-if="true" class="font-onest-regular text-[18px] w-full">
                            {{ locale === 'ru' ? 'Вы можете получить новый код через 33 секунды' : 'Yangi kodni 33 soniyadan so\'ng olishingiz mumkin' }}
                        </div>

                        <div v-if="false" class="font-onest-regular text-[18px] w-full text-bronze cursor-pointer">
                            {{ locale === 'ru' ? 'Отправить код повторно' : 'Kodni qayta yuborish' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


const isAuthModalOpen = useIsAuthModalOpen()
const { locale } = useI18n()
const phoneNumber = ref('')
const inputCodes = ref([])


onUpdated(() => {
    isAuthModalOpen.value = isAuthModalOpen.value
})


const confirmCode = () => {
    console.log(phoneNumber.value);
}


const closeAuthModal = () => {
    isAuthModalOpen.value = false
}


const gotoNextInput = (el) => {

}


const gotoPrevInput = (el) => {

}


const numericOnly = () => {
    let value = phoneNumber.value.replace(/\D/g, ''); // Remove non-numeric characters

    phoneNumber.value = value;
}

</script>