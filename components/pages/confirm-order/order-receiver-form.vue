<template>
    <div>
        <div id="confirm-order-section-one">
            <div>
                <div id="section-title" class="flex gap-5 font-onest-medium text-base">
                    <div>
                        <div class="flex items-center justify-center w-6 h-6 text-sm border-black border-opacity-50 border-2 rounded-full">1</div>
                    </div>
                    <div>
                        {{ locale === 'ru' ? 'Получатель' : 'Qabul qiluvchi' }}
                    </div>
                </div>

                <div class="mt-5 flex flex-col gap-5">
                    <div class="flex justify-between">
                        <div>
                            <div class="font-onest-medium">{{ locale === 'ru' ? 'Имя' : 'Ism' }}</div>
                            <div>
                                <input type="text" :placeholder="locale === 'ru' ? 'Введите ваше имя' : 'Ismingizni kiriting'" class="w-[400px] outline-none px-6 py-4 font-onest-regular bg-transparent border border-black border-opacity-20 mt-1">
                            </div>
                        </div>
                        <div>
                            <div class="font-onest-medium">{{ locale === 'ru' ? 'Фамилия' : 'Familiya' }}</div>
                            <div>
                                <input type="text" :placeholder="locale === 'ru' ? 'Введите вашу фамилию' : 'Familiyangizni kiriting'" class="w-[400px] outline-none px-6 py-4 font-onest-regular bg-transparent border border-black border-opacity-20 mt-1">
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <div class="font-onest-medium">
                                {{ locale === 'ru' ? 'Телефон' : 'Telefon' }}
                            </div>
                            <div>
                                <input type="text" placeholder="+998 90 000-00-00" class="w-[400px] outline-none px-6 py-4 font-onest-regular bg-transparent border border-black border-opacity-20 mt-1">
                            </div>
                        </div>
                        <div class="w-[400px] mt-5">
                            <div class="font-onest-regular opacity-50">
                                {{ locale === 'ru' ? 'Курьер свяжется с вами по телефону для подтверждения времени доставки.' : 'Yetkazib berish vaqtini aniqlashtirish uchun kuryer siz bilan telefon orqali bog\'lanadi.' }}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div class="font-onest-medium">
                                {{ locale === 'ru' ? 'Сообщение курьеру' : 'Kuryerga xabar' }}
                                <span class="opacity-50">{{ locale === 'ru' ? '(необязательный)' : '(majburiy emas)' }}</span>
                            </div>
                            <div>
                                <textarea type="text" class="w-full h-24 resize-none outline-none px-6 py-4 font-onest-regular bg-transparent border border-black border-opacity-20 mt-1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()

</script>