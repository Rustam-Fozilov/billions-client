<template>
    <div>
        <div class="container py-12 flex flex-col gap-12 sm:gap-7 sm:py-7 xl:w-full">
            <div class="flex gap-7 items-end">
                <div class="text-xl font-onest-medium sm:text-base">{{ $t('bestseller_books.title') }}</div>
                <div class="font-onest-regular opacity-50 hover:opacity-100">
                    <div class="relative top-[-5px] left-0 sm:top-0">
                        <NuxtLink to="/">{{ $t('bestseller_books.show_all') }}</NuxtLink>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex flex-wrap justify-between">
                    <div v-for="book in data.data" class="mb-5 lg:w-[48%]">
                        <book-card :book="book"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/helpers/fetchUrl'


const config = useRuntimeConfig()
const { data, load} = fetchUrl()


await load(`${config.public.apiUrl}/books?limit=10&withAuthor=true`)

// console.log(data.value)

</script>