<template>
    <div>
        <div>
            <div class="flex justify-between mt-7 xl:mt-5 lg:flex-col">
                <div class="w-[70%] pr-40 xl:pr-0 xl:w-full">
                    <div class="flex flex-col gap-12 xl:gap-7">
                        <div class="flex gap-5 items-center">
                            <div class="font-onest-medium text-xl lg:text-base">{{ locale === 'ru' ? 'Оформление заказа' : 'Buyurtmani rasmiylashtirish' }}</div>
                            <div class="font-onest-regular opacity-50 relative top-[3px] xl:top-0">{{ locale === 'ru' ? `${booksInCart ? booksInCart.length : 0} книги` : `${booksInCart ? booksInCart.length : 0}ta kitob` }}</div>
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
                            <div class="font-onest-medium text-xl xl:text-base">{{ locale === 'ru' ? 'Товары под заказ' : 'Buyurtmadagi mahsulotlar' }}</div>
                            
                            <div>
                                <order-products/>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div id="basket-details" class="w-[30%] pl-12 mt-12 xl:w-full xl:pl-5 xl:mt-7">
                    <order-details/>
                </div>
            </div>

            <div>
                <add-user-address-modal/>
            </div>

            <div>
                <order-created-modal/>
            </div>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()
const booksInCart = await useBooksInCart()

</script>

<style scoped>

@media only screen and (max-width: 1280px) {
    #basket-details {
        padding-left: 0;
    }
}

</style>