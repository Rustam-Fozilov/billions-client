<template>
    <div>
        <div>
            <div class="flex justify-between mt-7">
                <div class="w-[70%] pr-40">
                    <div class="flex flex-col gap-12">
                        <div class="flex gap-5 items-center">
                            <div class="font-onest-medium text-xl">{{ locale === 'ru' ? 'Оформление заказа' : 'Buyurtmani rasmiylashtirish' }}</div>
                            <div class="font-onest-regular opacity-50 relative top-[3px]">{{ locale === 'ru' ? `${booksInCart ? booksInCart.length : 0} книги` : `${booksInCart ? booksInCart.length : 0}ta kitob` }}</div>
                        </div>

                        <div>
                            <order-receiver-form/>
                        </div>

                        <div>
                            <order-payment-type/>
                        </div>

                        <div>
                            <order-addresses/>
                        </div>

                        <div class="bg-black bg-opacity-20 h-[1px]"></div>

                        <div class="flex flex-col gap-7">
                            <div class="font-onest-medium text-xl">{{ locale === 'ru' ? 'Товары под заказ' : 'Buyurtmadagi mahsulotlar' }}</div>
                            
                            <div>
                                <order-products/>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div id="basket-details" class="w-[30%] pl-12 mt-12">
                    <order-details/>
                </div>
            </div>

            <div>
                <add-user-address-modal/>
            </div>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()
const booksInCart = await useBooksInCart()

</script>