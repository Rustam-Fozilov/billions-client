<template>
    <div>
        <div>
            <dialog id="confirm-code-dialog" class="p-8 outline-none overscroll-none">
                <div class="flex flex-col justify-between h-[480px] w-[400px]">
                    <div @click="closeAuthModal" class="cursor-pointer opacity-50 hover:opacity-100 transition flex w-full justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path opacity="1" d="M16.1237 15.2595L16.2474 15.1358L16.1238 15.0121L9.62119 8.5L16.1238 1.98793L16.2474 1.86419L16.1237 1.74053L15.2595 0.876256L15.1358 0.752602L15.0121 0.876167L8.5 7.37881L1.98793 0.876167L1.86419 0.752602L1.74053 0.876256L0.876256 1.74053L0.752602 1.86419L0.876167 1.98793L7.37881 8.5L0.876167 15.0121L0.752602 15.1358L0.876256 15.2595L1.74053 16.1237L1.86419 16.2474L1.98793 16.1238L8.5 9.62119L15.0121 16.1238L15.1358 16.2474L15.2595 16.1237L16.1237 15.2595Z" fill="black" stroke="black" stroke-width="0.35"/>
                        </svg>
                    </div>
                    <div class="flex flex-col gap-12">
                        <div>
                            <div class="font-onest-medium text-base">{{ locale === 'ru' ? 'Введите номер телефона' : 'Kodni kiriting' }}</div>
                            <div class="font-onest-regular">{{ locale === 'ru' ? 'Войти или зарегистрироваться по номеру телефона' : 'Telefon raqam orqali kirish yoki ro\'yxatdan o\'tish' }}</div>
                            </div>
                        
                        <form @submit.prevent="sendSMS">
                            <div class="flex flex-col gap-5">
                                <div>
                                    <div class="bg-soft-white px-5 py-4 flex gap-2">
                                        <div class="font-onest-regular">+998</div>
                                        <input v-model="phoneNumber" @input="numericOnly" maxlength="9" class="w-full outline-none font-onest-regular bg-transparent" type="tel" placeholder="00 000-00-00">
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="px-5 py-4 w-full font-onest-medium bg-bronze text-white">
                                        {{ locale === 'ru' ? 'Получить код' : 'Kodni olish' }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="text-center">
                        <div class="font-onest-regular">
                            {{ locale === 'ru' ? 'Авторизуясь,' : 'Siz avtotizatsiyadan o\'tib,' }}
                            <span class=" text-blue-500 hover:underline cursor-pointer">
                                {{ locale === 'ru' ? 'вы принимаете политику конфиденциальности.' : 'shaxsiy ma\'lumotlarni qayta ishlash siyosatini qabul qilmoqdasiz.' }}
                            </span>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'


const { locale } = useI18n()
const router = useRouter()
const route = useRoute()
const phoneNumber = ref('')


const sendSMS = () => {
    console.log(phoneNumber.value);
}


const closeAuthModal = () => {
    document.getElementById('auth-dialog').close()
}


const numericOnly = () => {
    let value = phoneNumber.value.replace(/\D/g, ''); // Remove non-numeric characters

    phoneNumber.value = value;
}

</script>