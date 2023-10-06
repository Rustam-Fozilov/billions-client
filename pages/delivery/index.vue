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
                        {{ locale === 'ru' ? 'Доставка' : 'Yetkazib berish' }}
                    </div>
                    <div class="font-onest-regular">
                        Доставляем книги курьером до двери, в пункты выдачи и почтой по всей России. Если вы хотите заказать книги в другую страну, пожалуйста, напишите нам на почту shop@alpinabook.ru или позвоните по номеру 8 (800) 550-53-22. Мы поможем оформить заказ и рассчитаем стоимость и сроки доставки.
                    </div>
                    <div class="font-onest-medium text-base">
                        Доставка курьером до двери
                    </div>
                    <div class="font-onest-regular">
                        Доставка курьером доступна по всей России. В Москве и ближайших городах* заказ привезет курьерская служба Logsis, в других городах России — DPD.
                        <br>
                        Курьеры доставляют заказы по будням и выходным с 10 до 19 часов. В день доставки вам придет СМС, а за час до прибытия с вами свяжется курьер. Физические лица могут оплатить заказ онлайн или при получении. Подробнее о способах оплаты — на этой странице.
                    </div>
                    <div class="font-onest-medium text-base">
                        Сроки и стоимость доставки
                    </div>
                    <div class="font-onest-regular">
                        Срок доставки — 1–2 рабочих дня. Он зависит от времени оформления заказа. Обычно если заказ был оформлен до 13:00, мы доставляем его на следующий день; если после — через день. Исключение составляют заказы, оформленные в субботу после 13:00, — скорее всего, курьер привезет их во вторник.
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
        uz: 'Yetkazib berish',
        ru: 'Доставка'
    }
})


const { locale } = useI18n()

</script>

<style scoped>

</style>