<template>
    <div>
        <div class="bg-white p-7 w-2/3">
            <div class="flex items-center justify-between">
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
            <div v-if="true">
                <div class="h-[1px] bg-black bg-opacity-20 mt-7"></div>
                <div class="my-7 flex gap-12 font-onest-regular">
                    <div>
                        <div class="opacity-50">To'lov turi</div>
                        <div>Kuryer orqali</div>
                    </div>
                    <div>
                        <div class="opacity-50">To'lov turi</div>
                        <div>Kuryer orqali</div>
                    </div>
                </div>

                <div class="h-[1px] bg-black bg-opacity-20 mt-7"></div>
                <div class="flex justify-between mt-5 font-onest-regular">
                    <div class="flex gap-5 items-center">
                        <div class="w-9 h-9">
                            <img class="w-full h-full object-cover" src="/images/uzb-flag.png" alt="">
                        </div>
                        <div>Bookname</div>
                    </div>
                    <div class="flex gap-7">
                        <div>
                            1ta kitob
                        </div>
                        <div>
                            150 000 so'm
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
