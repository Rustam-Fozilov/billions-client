<template>
    <div>
        <footer class="bg-soft-black">
            <div class="container">
                <div class="p-[100px] w-full 2xl:px-0">
                    <div class="flex justify-center">
                        <ui-brand w="150" fill="white"/>
                    </div>
                    <div class="mt-12">
                        <div class="flex justify-between text-white font-onest-regular xl:flex-wrap sm:flex-col">
                            <div v-for="footer in footerData" class="flex flex-col gap-5 mb-7">
                                <div class="font-onest-medium">{{ locale === 'ru' ? footer.title.ru : footer.title.uz }}</div>
                                <nuxt-link v-for="link in footer.links" :to="link.link" class="opacity-70 hover:opacity-100 transition">{{ locale === 'ru' ? link.title.ru : link.title.uz }}</nuxt-link>
                            </div>

                            <div id="contacts" class="flex flex-col gap-5 font-onest-medium text-base sm:text-sm">
                                <div class="text-sm">{{ locale === 'ru' ? 'Контакты' : 'Kontaktlar' }}</div>
                                <div>shop@billions.uz</div>
                                <div>(+998) 97 767-20-97</div>
                                <div>(+998) 97 175-63-33</div>

<!--                                    <div class="px-11 py-4 bg-white cursor-pointer text-center">-->
<!--                                        <a href="mailto:thisisrustam@gmail.com" class="text-black">{{ locale === 'ru' ? 'Отправить сообщение' : 'Xabar yuborish' }}</a>-->
<!--                                    </div>-->

                                <div id="social-media">
                                    <div class="flex gap-3">
                                        <a href="/">
                                            <div class="bg-[#707070] w-12 h-12 flex justify-center items-center rounded-3xl">
                                                <span>
                                                    <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.8" d="M10 17.25H13.5714L15 11.25H10V8.25C10 6.705 10 5.25 12.8571 5.25H15V0.21C14.5343 0.1455 12.7757 0 10.9186 0C7.04 0 4.28571 2.4855 4.28571 7.05V11.25H0V17.25H4.28571V30H10V17.25Z" fill="white"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </a>

                                        <a href="https://instagram.com/billionsbooks.uz" target="_blank">
                                            <div class="bg-[#707070] w-12 h-12 flex justify-center items-center rounded-3xl">
                                                <span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.7" d="M12 0C8.7435 0 8.334 0.015 7.0545 0.072C5.775 0.132 4.9035 0.333 4.14 0.63C3.33914 0.931229 2.61374 1.40374 2.0145 2.0145C1.40411 2.61404 0.931661 3.33936 0.63 4.14C0.333 4.902 0.1305 5.775 0.072 7.05C0.015 8.3325 0 8.7405 0 12.0015C0 15.2595 0.015 15.6675 0.072 16.947C0.132 18.225 0.333 19.0965 0.63 19.86C0.9375 20.649 1.347 21.318 2.0145 21.9855C2.6805 22.653 3.3495 23.064 4.1385 23.37C4.9035 23.667 5.7735 23.8695 7.0515 23.928C8.3325 23.985 8.7405 24 12 24C15.2595 24 15.666 23.985 16.947 23.928C18.2235 23.868 19.098 23.667 19.8615 23.37C20.6618 23.0686 21.3867 22.5961 21.9855 21.9855C22.653 21.318 23.0625 20.649 23.37 19.86C23.6655 19.0965 23.868 18.225 23.928 16.947C23.985 15.6675 24 15.2595 24 12C24 8.7405 23.985 8.3325 23.928 7.0515C23.868 5.775 23.6655 4.902 23.37 4.14C23.0684 3.33934 22.5959 2.61401 21.9855 2.0145C21.3864 1.40351 20.661 0.930968 19.86 0.63C19.095 0.333 18.222 0.1305 16.9455 0.072C15.6645 0.015 15.258 0 11.997 0H12.0015H12ZM10.9245 2.163H12.0015C15.2055 2.163 15.585 2.1735 16.8495 2.232C18.0195 2.2845 18.6555 2.481 19.0785 2.6445C19.638 2.862 20.0385 3.123 20.4585 3.543C20.8785 3.963 21.138 4.362 21.3555 4.923C21.5205 5.3445 21.7155 5.9805 21.768 7.1505C21.8265 8.415 21.8385 8.7945 21.8385 11.997C21.8385 15.1995 21.8265 15.5805 21.768 16.845C21.7155 18.015 21.519 18.6495 21.3555 19.0725C21.1631 19.5935 20.856 20.0647 20.457 20.451C20.037 20.871 19.638 21.1305 19.077 21.348C18.657 21.513 18.021 21.708 16.8495 21.762C15.585 21.819 15.2055 21.8325 12.0015 21.8325C8.7975 21.8325 8.4165 21.819 7.152 21.762C5.982 21.708 5.3475 21.513 4.9245 21.348C4.40325 21.1559 3.93169 20.8494 3.5445 20.451C3.14513 20.0641 2.83758 19.5925 2.6445 19.071C2.481 18.6495 2.2845 18.0135 2.232 16.8435C2.175 15.579 2.163 15.1995 2.163 11.994C2.163 8.79 2.175 8.412 2.232 7.1475C2.286 5.9775 2.481 5.3415 2.646 4.9185C2.8635 4.359 3.1245 3.9585 3.5445 3.5385C3.9645 3.1185 4.3635 2.859 4.9245 2.6415C5.3475 2.4765 5.982 2.2815 7.152 2.2275C8.259 2.1765 8.688 2.1615 10.9245 2.16V2.163ZM18.4065 4.155C18.2174 4.155 18.0301 4.19225 17.8554 4.26461C17.6807 4.33698 17.522 4.44305 17.3883 4.57677C17.2545 4.71048 17.1485 4.86923 17.0761 5.04394C17.0037 5.21864 16.9665 5.4059 16.9665 5.595C16.9665 5.7841 17.0037 5.97135 17.0761 6.14606C17.1485 6.32077 17.2545 6.47952 17.3883 6.61323C17.522 6.74695 17.6807 6.85302 17.8554 6.92539C18.0301 6.99775 18.2174 7.035 18.4065 7.035C18.7884 7.035 19.1547 6.88329 19.4247 6.61323C19.6948 6.34318 19.8465 5.97691 19.8465 5.595C19.8465 5.21309 19.6948 4.84682 19.4247 4.57677C19.1547 4.30671 18.7884 4.155 18.4065 4.155ZM12.0015 5.838C11.1841 5.82525 10.3723 5.97523 9.61347 6.27921C8.85459 6.58319 8.16377 7.03511 7.58123 7.60863C6.99868 8.18216 6.53605 8.86585 6.22026 9.61989C5.90448 10.3739 5.74185 11.1833 5.74185 12.0007C5.74185 12.8182 5.90448 13.6276 6.22026 14.3816C6.53605 15.1356 6.99868 15.8193 7.58123 16.3929C8.16377 16.9664 8.85459 17.4183 9.61347 17.7223C10.3723 18.0263 11.1841 18.1763 12.0015 18.1635C13.6193 18.1383 15.1623 17.4779 16.2975 16.3249C17.4326 15.1719 18.0689 13.6188 18.0689 12.0007C18.0689 10.3827 17.4326 8.82962 16.2975 7.67662C15.1623 6.52363 13.6193 5.86324 12.0015 5.838ZM12.0015 7.9995C13.0625 7.9995 14.08 8.42098 14.8303 9.17122C15.5805 9.92146 16.002 10.939 16.002 12C16.002 13.061 15.5805 14.0785 14.8303 14.8288C14.08 15.579 13.0625 16.0005 12.0015 16.0005C10.9405 16.0005 9.92296 15.579 9.17272 14.8288C8.42248 14.0785 8.001 13.061 8.001 12C8.001 10.939 8.42248 9.92146 9.17272 9.17122C9.92296 8.42098 10.9405 7.9995 12.0015 7.9995Z" fill="white"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </a>

                                        <a href="/">
                                            <div class="bg-[#707070] w-12 h-12 flex justify-center items-center rounded-3xl">
                                                <span>
                                                    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M22.4104 0.14611C22.7178 0.0167374 23.0542 -0.0278823 23.3847 0.0168944C23.7152 0.0616711 24.0276 0.194208 24.2895 0.400709C24.5514 0.60721 24.7531 0.880127 24.8737 1.19105C24.9943 1.50198 25.0294 1.83955 24.9753 2.16862L22.1542 19.2804C21.8805 20.931 20.0695 21.8775 18.5557 21.0553C17.2895 20.3675 15.4088 19.3077 13.7171 18.2019C12.8713 17.6484 10.2803 15.8759 10.5988 14.6147C10.8724 13.5362 15.2259 9.48374 17.7136 7.07439C18.6901 6.12782 18.2448 5.58176 17.0917 6.45246C14.2271 8.61429 9.63104 11.9018 8.11105 12.8272C6.77017 13.6432 6.07112 13.7825 5.23525 13.6432C3.71028 13.3895 2.29602 12.9964 1.14172 12.5175C-0.418075 11.8707 -0.3422 9.72629 1.14048 9.10188L22.4104 0.14611Z" fill="white"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-[100px] font-onest-regular text-center text-white text-xs">
                        <div>2023, OOO, Billions</div>
                        <div>{{ locale === 'ru' ? 'Все права защищены' : 'Barcha huquqlar himoyalangan'}}</div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/helpers/fetchUrl'


const footerData = ref([])
const { locale } = useI18n()
const { data, load} = fetchUrl()
const config = useRuntimeConfig()
const authToken = await useAuthToken()
const isAuthModalOpen = useIsAuthModalOpen()


await load(`${config.public.apiUrl}/categories?only_parents=true`)


footerData.value = [
    {
        title: {
            'uz': 'Biz haqimizda',
            'ru': 'О нас'
        },
        links: [
            {
                title: {
                    'uz': 'Kitoblar',
                    'ru': 'Книги'
                },
                link: `/${locale.value}/catalog`
            },
            {
                title: {
                    'uz': 'Mualliflar',
                    'ru': 'Авторы'
                },
                link: `/${locale.value}/authors`
            },
            {
                title: {
                    'uz': 'Maxfiylik siyosati',
                    'ru': 'Политика конфиденциальности'
                },
                link: `/${locale.value}/privacy`
            }
        ]
    },
    {
        title: {
            'uz': 'Kategoriyalar',
            'ru': 'Категории'
        },
        links: [
            {
                'title': {
                    'uz': 'Shaxsiy rivojlanish',
                    'ru': 'Личное развитие'
                },
                'link': `/${locale.value}/catalog/personal-development`
            },
            {
                'title': {
                    'uz': 'Psixologiya',
                    'ru': 'Психология'
                },
                'link': `/${locale.value}/catalog/psychology`
            },
            {
                'title': {
                    'uz': "Biznes",
                    'ru': "Бизнес"
                },
                'link': `/${locale.value}/catalog/business`
            },
            {
                'title': {
                    'uz': 'Moliya',
                    'ru': "Финансы"
                },
                'link': `/${locale.value}/catalog/finance`
            },
            {
                'title': {
                    'uz': 'Bolalar va ota-onalar uchun',
                    'ru': "Для детей и родителей"
                },
                'link': `/${locale.value}/catalog/for-children-and-parents`
            },
            {
                'title': {
                    'uz': "Marketing va sotuvlar",
                    'ru': "Маркетинг и продажи"
                },
                'link': `/${locale.value}/catalog/marketing-and-sales`
            },
            {
                'title': {
                    'uz': "Iqtisodiyot va siyosat",
                    'ru': "Экономика и политика"
                },
                'link': `/${locale.value}/catalog/economics-and-politics`
            },
            {
                'title': {
                    'uz': "Sog'lom hayot tarzi",
                    'ru': "Здоровый образ жизни"
                },
                'link': `/${locale.value}/catalog/healthy-lifestyle`
            },
            {
                'title': {
                    'uz': "San'at va ijod",
                    'ru': "Искусство и творчество"
                },
                'link': `/${locale.value}/catalog/art-and-creativity`
            },
        ]
    },
    {
        title: {
            'uz': 'Sotib olish',
            'ru': 'Купить'
        },
        links: [
            {
                title: {
                    'uz': 'Kitobni qanday sotib olish mumkin',
                    'ru': 'Как купить книгу'
                },
                link: `/${locale.value}/howtobuy`
            },
            {
                title: {
                    'uz': 'To\'lov',
                    'ru': 'Оплата'
                },
                link: `/${locale.value}/payment`
            },
            {
                title: {
                    'uz': 'Yetkazib berish',
                    'ru': 'Доставка'
                },
                link: `/${locale.value}/delivery`
            },
            {
                title: {
                    'uz': 'Qaytarish',
                    'ru': 'Возврат'
                },
                link: `/${locale.value}/refunding`
            }
        ]
    },
    {
        title: {
            'uz': 'Shaxsiy',
            'ru': 'Личный'
        },
        links: [
            {
                title: {
                    'uz': 'Mening buyurtmalarim',
                    'ru': 'Мои заказы'
                },
                link: authToken.value ? `/${locale.value}/personal/orders` : () => {
                    isAuthModalOpen.value = true
                    return '/'
                }
            },
            {
                title: {
                    'uz': 'Shaxsiy kabinet',
                    'ru': 'Личный кабинет'
                },
                link: authToken.value ? `/${locale.value}/personal` : '#'
            },
        ]
    },
]

</script>