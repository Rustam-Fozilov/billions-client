<template>
    <div>
        <div @click="gotoAuthor" class="cursor-pointer">
            <div class="flex flex-col gap-7 w-72 bg-white p-7">
                <div class="w-full h-60 rounded-full">
                    <img class="w-full h-full object-cover rounded-full" :src="author.photo" alt="author name">
                </div>

                <div class="font-onest-regular">
                    <div class="text-base">
                        {{
                            locale === 'ru' ?
                            author.first_name.ru + ' ' + author.last_name.ru :
                            author.first_name.uz + ' ' + author.last_name.uz
                        }}
                    </div>
                    <div class="opacity-50">
                        {{ author.books.length }} {{ locale === 'ru' ? ' книг' : ' ta kitob' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['author'])
const { locale } = useI18n()
const router = useRouter()


const gotoAuthor = () => {
    router.push(`/${locale.value}/authors/${props.author.id}`)
}

</script>
