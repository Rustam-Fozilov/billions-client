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
                            <div class="font-onest-regular">{{ locale === 'ru' ? `Чтобы подтвердить телефон, код был отправлен в +998 ${userPhoneNumber}.` : `Telefonni tasdiqlash maqsadida +998 ${userPhoneNumber} raqamiga kod yuborildi` }}</div>
                            <div v-if="error" class="font-onest-regular text-red-500 text-center transition">Kod notog'ri terildi</div>
                        </div>
                        <div>
                            <div class="flex justify-center">
                                <div class="flex gap-3 w-4/5">
                                    <div v-for="index in 5" class="bg-soft-white px-5 py-4">
                                        <input
                                            :disabled="inputCodes.length === 5"
                                            @input="numericOnly(index)"
                                            @keyup.right="focusNext(index)"
                                            @keyup.left="focusPrev(index)"
                                            @keyup.delete="focusPrev(index)"
                                            v-model="inputCodes[index - 1]"
                                            :id="'confirm-code-input-' + index"
                                            maxlength="1"
                                            autocomplete="off"
                                            class="w-full text-center outline-none font-onest-regular bg-transparent" type="text"
                                            :class="{
                                                'cursor-not-allowed': inputCodes.length === 5,
                                                'opacity-50': inputCodes.length === 5,
                                            }"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div v-if="timer > 0" class="font-onest-regular text-[18px] w-full">
                            {{ locale === 'ru' ? `Вы можете получить новый код через ${timer} секунды` : `Yangi kodni ${timer} soniyadan so\'ng olishingiz mumkin` }}
                        </div>

                        <div @click="resendCode" v-if="timer === 0" class="font-onest-regular text-[18px] w-full text-bronze cursor-pointer">
                            {{ locale === 'ru' ? 'Отправить код повторно' : 'Kodni qayta yuborish' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl"


const timer = ref(45)
const error = ref(false)
const router = useRouter()
const { locale } = useI18n()
const smsCode = useSMSCode()
const authUser = useAuthUser()
const authToken = useAuthToken()
const config = useRuntimeConfig()
const { data, load } = fetchUrl()
let inputCodes = reactive([])
const isAuthModalOpen = useIsAuthModalOpen()
const userPhoneNumber = useUserPhoneNumber()


onMounted(() => {
    focusFirst()
    resendCodeTimer()
})


onUpdated(() => {
    isAuthModalOpen.value = isAuthModalOpen.value

    if (inputCodes.length === 5) {
        console.log('teng')
        confirmCode()
    }
})


const confirmCode = async () => {
    if (inputCodes.length === 5) {
        const code = +inputCodes.join('')

        await load(
            `${config.public.apiUrl}/auth/verify-sms-code`,
            {
                id: smsCode.value.id,
                code: code
            },
            'POST'
        )

        if (data.value.success) {
            error.value = false

            if (process.client) {
                localStorage.setItem('token', data.value.data.token)
                localStorage.setItem('user', JSON.stringify(data.value.data.user))
                closeAuthModal()

                return router.go()
            }
        } else {
            inputCodes = []
            error.value = true

            return setTimeout(() => {
                error.value = false
            }, 3000)
        }
    }
}


const resendCode = async () => {
    timer.value = 70

    await load(
        `${config.public.apiUrl}/auth/send-sms-code`,
        {
            phone: '998' + userPhoneNumber.value,
            lang: locale.value
        },
        'POST'
    )

    smsCode.value.id = data.value.data.id
    smsCode.value.code = data.value.data.code
}


const resendCodeTimer = () => {
    setInterval(() => {
        if (timer.value > 0) {
            timer.value--
        }
    }, 1000)
}


const focusNext = (index) => {
    if (index < 5) {
        document.getElementById('confirm-code-input-' + (index + 1)).focus()
    }
}


const focusPrev = (index) => {
    if (index > 1) {
        document.getElementById('confirm-code-input-' + (index - 1)).focus()
    }
}


const focusFirst = () => {
    if (document.getElementById('confirm-code-input-1') === null) {
        return
    }
    
    document.getElementById('confirm-code-input-1').focus()
}


const closeAuthModal = () => {
    isAuthModalOpen.value = false
}


const numericOnly = (index) => {
    let value = inputCodes[index - 1].replace(/\D/g, ''); // Remove non-numeric characters
    inputCodes[index - 1] = value;

    if (value.length === 0) {
        return
    }

    focusNext(index)
    confirmCode()
    
}

</script>
