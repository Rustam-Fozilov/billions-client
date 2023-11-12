<template>
    <div>
        <div class="bg-white w-4/5">
            <div class=" p-7 flex justify-between items-center" :class="review.body ? 'border-b-black border-b-[1px] border-opacity-20' : ''">
                <div class="flex gap-5 items-center">
                    <div class="w-16 h-20">
                        <img class="object-cover w-full h-full" :src="review.book.images[0].link" :alt="review.book.name.ru">
                    </div>
                    <div class="font-onest-regular">
                        {{ locale === 'ru' ? review.book.name.ru : review.book.name.uz }}
                    </div>
                </div>

                <div class="flex items-center gap-5 font-onest-regular">
                    <div class="opacity-50">
                        {{ review.created_at.split(' ')[0] }}
                    </div>
                    <div class="flex items-center gap-3">
                        <div v-for="overall in 5" class="opacity-50">
                            <full-star-icon v-if="overall <= review.rating" fill="#D9A53D"/>
                            <half-star-icon v-if="overall - 0.5 === review.rating"/>
                            <gray-star-icon v-if="overall > review.rating && overall - 0.5 !== review.rating"/>
                        </div>
                        <div class="font-onest-regular">{{ review.rating }} {{ locale === 'ru' ? 'звезд' : 'yulduz' }}</div>
                    </div>
                    <div @click="deleteReview" class="font-onest-medium opacity-50 cursor-pointer hover:opacity-100 transition">
                        {{ locale === 'ru' ? 'Удалить' : 'O\'chirish' }}
                    </div>
                </div>
            </div>

            <div v-if="review.body" class="p-7">
                <div class="font-onest-regular flex gap-2">
                    <div class="opacity-50">
                        {{ locale === 'ru' ? 'Отзыв:' : 'Sharh:' }}
                    </div>
                    <div>
                        {{ review.body }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios"


const props = defineProps(['review'])
const { locale } = useI18n()
const authToken = await useAuthToken()
const config = useRuntimeConfig()
const router = useRouter()


const deleteReview = async () => {
    await axios
        .delete(`${config.public.apiUrl}/reviews/${props.review.id}`, {
            headers: {
                Authorization: `Bearer ${authToken.value}`
            }
        })
        .then((res) => {
            router.go()
        })
}


</script>
