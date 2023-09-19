<template>
    <div>
        <div id="confirm-order-section-two">
            <div>
                <div id="section-title" class="flex gap-5 font-onest-medium text-base">
                    <div>
                        <div class="flex items-center justify-center w-6 h-6 text-sm border-black border-opacity-50 border-2 rounded-full">2</div>
                    </div>
                    <div>{{ locale === 'ru' ? 'Способ оплаты' : 'To\'lov turi' }}</div>
                </div>

                <div class="mt-5 flex flex-col gap-5">
                    <div @click="changePaymentType('online')" id="order-payment-online" class="p-5 w-full border-2 border-bronze cursor-pointer">
                        <div class="flex gap-2 items-start">
                            <div id="order-payment-online-radio" class="w-4 h-4 bg-transparent rounded-full border-bronze border-4"></div>
                            <div>
                                <div class="font-onest-regular">{{ locale === 'ru' ? 'Онлайн-картой (Click, Payme, Узумбанк...)' : 'Onlayn karta orqali (Click, Payme, Uzumbank...)' }}</div>
                                <div class="flex gap-3 items-center mt-2">
                                    <div><img src="/images/click.png" alt=""></div>
                                    <div><img src="/images/payme.png" alt=""></div>
                                    <div><img src="/images/uzumbank.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div @click="changePaymentType('cash')" id="order-payment-cash" class="p-5 w-full border-2 border-black border-opacity-20 cursor-pointer">
                        <div class="flex gap-2 items-start">
                            <div id="order-payment-cash-radio" class="w-4 h-4 bg-transparent rounded-full border-black border-opacity-20 border-2"></div>
                            <div>
                                <div class="font-onest-regular">{{ locale === 'ru' ? 'Наличными' : 'Naqd pul orqali' }}</div>
                                <div class="font-onest-regular text-xs opacity-50">
                                    {{ locale === 'ru' ? 'После доставки курьером' : 'Kuryer yetkazib bergandan so\'ng' }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { changePaymentType } from '~/helpers/orderPaymentType'


const { locale } = useI18n()

</script>