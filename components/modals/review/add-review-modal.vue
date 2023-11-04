<template>
    <div>
        <div v-if="isReviewModalOpen" @click="closeModal" class="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
        <div v-if="isReviewModalOpen" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
            <div class="p-8 outline-none overscroll-none">
                <div class="flex flex-col gap-7 justify-start w-[500px]">
                    <div class="flex w-full justify-between border-b-2 pb-4">
                        <div class="font-onest-medium text-base">
                            {{ locale === 'ru' ? 'Оставить отзыв' : 'Sharh qoldirish' }}
                        </div>

                        <div @click.stop="closeModal" class="cursor-pointer opacity-50 hover:opacity-100 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path opacity="1" d="M16.1237 15.2595L16.2474 15.1358L16.1238 15.0121L9.62119 8.5L16.1238 1.98793L16.2474 1.86419L16.1237 1.74053L15.2595 0.876256L15.1358 0.752602L15.0121 0.876167L8.5 7.37881L1.98793 0.876167L1.86419 0.752602L1.74053 0.876256L0.876256 1.74053L0.752602 1.86419L0.876167 1.98793L7.37881 8.5L0.876167 15.0121L0.752602 15.1358L0.876256 15.2595L1.74053 16.1237L1.86419 16.2474L1.98793 16.1238L8.5 9.62119L15.0121 16.1238L15.1358 16.2474L15.2595 16.1237L16.1237 15.2595Z" fill="black" stroke="black" stroke-width="0.35"/>
                            </svg>
                        </div>
                    </div>

                    <div class="flex flex-col gap-7">
                        <div class="font-onest-regular text-sm">
                            {{ locale === 'ru' ? 'Общая оценка' : 'Umumiy baho' }}
                        </div>

                        <div>
                            <textarea :placeholder="locale === 'ru' ? 'Напишите отзыв' : 'Sharh yozing'" rows="5" class="border border-black border-opacity-20 outline-none resize-none p-5 font-onest-regular w-full"></textarea>
                        </div>

                        <div @click="addReview" class="bg-bronze font-onest-medium text-white p-5 text-center cursor-pointer hover:bg-opacity-90 transition">
                            {{ locale === 'ru' ? 'Оставить отзыв' : 'Sharh qoldirish' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()
const isReviewModalOpen = useIsReviewModalOpen()


const closeModal = () => {
    isReviewModalOpen.value = false
}


</script>
