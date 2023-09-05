<template>
    <div>
        <div>
            <div class="flex justify-between mt-7">
                <div class="w-[70%]">
                    <div class="flex justify-between items-end">
                        <div class="flex gap-5 items-center">
                            <div class="font-onest-medium text-xl">{{ locale === 'ru' ? 'Корзина' : 'Savat' }}</div>
                            <div class="font-onest-regular opacity-50 relative top-[3px]">{{ locale === 'ru' ? '3 книги' : '3ta kitob' }}</div>
                        </div>
                        <div class="font-onest-medium text-base opacity-50 uppercase cursor-pointer hover:opacity-100 transition">{{ locale === 'ru' ? 'удалить' : 'O\'chirish' }}</div>
                    </div>
    
                    <div id="books-in-basket">
                        <div class="mt-12 flex flex-col gap-7">
                            <basket-book-card/>
                            <basket-book-card/>
                            <basket-book-card/>
                        </div>
                    </div>
                </div>
    
                <div id="basket-details" class="w-[30%] pl-12 mt-12">
                    <basket-details/>
                </div>
    
            </div>
        </div>

        <bestsellers-list/>
    </div>
</template>

<script setup>

const { locale } = useI18n()

</script>