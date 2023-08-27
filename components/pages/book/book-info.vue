<template>
    <div>
        <div class="container">
            <div>
                <div class="flex justify-between w-full h-full">
                    <div id="book-images" class="w-2/5 h-[650px]">
                        <div class="w-full h-full">
                            <img class="w-full h-full object-cover" src="~/assets/images/books/book-cover.png" alt="book cover">
                        </div>
                        <div class="mt-3 flex w-full h-full">
                            <div class="bg-red-300 w-1/6 h-1/6">RASM</div>
                            <div class="bg-red-300 w-1/6 h-1/6">RASM</div>
                            <div class="bg-red-300 w-1/6 h-1/6">RASM</div>
                        </div>
                    </div>
                    <div id="book-info-section" class="w-2/4">
                        <div id="book-reviews">RATING</div>
                        <div></div>
                        <div id="book-delivery-text"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['book']) 
</script>