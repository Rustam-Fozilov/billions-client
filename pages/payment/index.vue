<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white pb-24 pt-12">
            <div class="container">
                <div>
                    <breadcrumbs-path/>
                </div>

                <div class="mt-12 flex gap-7 flex-col">
                    <div class="font-onest-medium text-xl">
                        {{ locale === 'ru' ? 'Способы оплаты' : 'To\'lov turlari' }}
                    </div>
                    <div class="font-onest-medium text-base">
                        Оплата онлайн.
                    </div>
                    <div class="font-onest-regular">
                        Оплатить заказ на сайте можно банковскими картами Visa и Mastercard, которые были выпущены в России, а также картами платежной системы МИР и с помощью сервиса Yandex Pay. Эти же условия действуют для покупки электронных книг на сайте Альпина.Книги.
                        В приложении Альпина.Книги для Android вы можете оплатить банковской картой российских банков, IOS электронные книги можно оплатить только с помощью зарубежного аккаунта ApplePay или российским аккаунтом, на который внесены средства.
                        Если вы не оплатите покупку сразу, через некоторое время вам на почту придет письмо со ссылкой, по которой вы сможете завершить оплату. Сделать это нужно в течение недели — на восьмой день мы аннулируем неоплаченные заказы.
                    </div>
                    <div class="font-onest-medium text-base">
                        Оплата при получении.
                    </div>
                    <div class="font-onest-regular">
                        Если вы выбрали оплату при получении, заказ вам привезет курьер. Оплатить книги можно наличными или по банковской карте. Опция доступна только для физических лиц при заказе стоимостью до 30 000 руб.
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

definePageMeta({
    title: {
        uz: 'To\'lov turlari',
        ru: 'Способы оплаты',
    },
})


const { locale } = useI18n()

</script>

<style scoped>

</style>