<template>
    <div>
        <div class="flex flex-col gap-7">
            <div class="flex gap-5">
                <div class="font-onest-medium text-xl">
                    Buyurtmalar
                </div>
                <div class="font-onest-regular opacity-50 mt-4">
                    1ta buyurtma
                </div>
            </div>

            <div class="w-full flex flex-col gap-5">
                <personal-orders-block/>

                <div class="bg-white p-7 flex items-center justify-between w-2/3">
                    <div class="font-onest-medium">
                        Buyurtma raqami: 123456789
                    </div>
                    <div class="font-onest-regular opacity-50">
                        1ta kitob
                    </div>
                    <div class="font-onest-regular">
                        16.06.2023
                    </div>
                    <div class="font-onest-medium">
                        150 000 so'm
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="px-2 py-1 border border-bronze text-bronze font-onest-regular">
                            To'lovni kutishda
                        </div>
                        <div class="opacity-50 cursor-pointer hover:opacity-100 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 23" fill="none">
                                <path d="M2 11.7692L12 21L22 11.7692M12 19.718V1" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
