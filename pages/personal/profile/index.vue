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
                                    {{ locale === 'ru' ? 'Имя' : 'Ism' }}
                                </div>
                                <div class="w-9/12">
                                    <input v-model="newUserInfo.first_name" :placeholder="locale === 'ru' ? 'Введите ваше имя' : 'Ismingizni kiriting'" type="text" class="w-1/2 border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="font-onest-medium text-base opacity-50 w-1/4">
                                    {{ locale === 'ru' ? 'Фамилия' : 'Familiya' }}
                                </div>
                                <div class="w-9/12">
                                    <input v-model="newUserInfo.last_name" :placeholder="locale === 'ru' ? 'Введите вашу фамилию' : 'Familiyangizni kiriting'" type="text" class="w-1/2 border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="font-onest-medium text-base opacity-50 w-1/4">
                                    {{ locale === 'ru' ? 'Телефон' : 'Telefon' }}
                                </div>
                                <div class="w-9/12 flex gap-3 border-">
                                    <div class="font-onest-medium text-base">+998</div>
                                    <input v-model="newUserInfo.phone" @input="numericOnly" maxlength="9" :placeholder="locale === 'ru' ? 'Введите свой номер телефона' : 'Telefon raqamingizni kiriting'" type="text" class="w-1/2 border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                                </div>
                            </div>
                            <div class="flex">
                                <div class="font-onest-medium text-base opacity-50 w-1/4">
                                    {{ locale === ru ? 'Электронная почта' : 'Email'}}
                                </div>
                                <div class="w-9/12">
                                    <input v-model="newUserInfo.email" :placeholder="locale === 'ru' ? 'Введите свой адрес электронной почты (необязательно)' : 'Emailingizni kiriting (majburiy emas)'" type="text" class="w-1/2 border-b-2 outline-none bg-transparent font-onest-medium text-base border-opacity-20">
                                    <div @click="updateUserInfo" class="py-4 px-20 bg-bronze text-white font-onest-medium w-min cursor-pointer mt-12">
                                        Saqlash
                                    </div>
                                    <div v-if="error" class="text-red-600 font-onest-regular mt-2">
                                        {{ locale === 'ru' ? '* Пожалуйста, заполните все необходимые поля' : '* Iltomos barcha kerakli maydonlarni to\'ldiring' }}
                                    </div>
                                    <div v-if="isChangesSaved" class="text-xs font-onest-regular mt-2">
                                        <span class="text-green-600">✓</span> {{ locale === 'ru' ? 'Изменения сохранены' : 'O\'zgarishlar saqlandi' }}
                                    </div>
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
import { fetchUrl } from '~/helpers/fetchUrl'


const error = ref(false)
const { locale } = useI18n()
const newUserInfo = ref(null)
const { data, load } = fetchUrl()
const isChangesSaved = ref(false)
const config = useRuntimeConfig()
const authToken = await useAuthToken()


await load(
    `${config.public.apiUrl}/auth/user`, {
        headers: {
            'Authorization': `Bearer ${authToken.value}`
        }
    }
)
newUserInfo.value = data.value ? data.value.data : []
newUserInfo.value.phone ? newUserInfo.value.phone = newUserInfo.value.phone.slice(3) : ''


const updateUserInfo = async () => {
    if (
        newUserInfo.value.first_name === '' ||
        newUserInfo.value.last_name === '' ||
        newUserInfo.value.phone === '' ||
        newUserInfo.value.phone.length < 9
    ) {
        error.value = true
    } else {
        await load(
            `${config.public.apiUrl}/user/${newUserInfo.value.id}`,
            {
                first_name: newUserInfo.value.first_name,
                last_name: newUserInfo.value.last_name,
                phone: '998' + newUserInfo.value.phone,
                email: newUserInfo.value.email,
            },
            'PUT'
        )

        error.value = false
        isChangesSaved.value = true
        makeChangesSavedTextHidden()
    }
}


const makeChangesSavedTextHidden = () => {
    setTimeout(() => {
        isChangesSaved.value = false
    }, 3000)
}


const numericOnly = () => {
    newUserInfo.value.phone = newUserInfo.value.phone.replace(/\D/g, '');
}


</script>
