<template>
    <div>
        <form @submit.prevent="search" id="search-input" class="w-full flex justify-center">
            <div class="w-1/2 flex justify-between items-center px-6 py-3 border border-black border-opacity-20 xl:w-full">
                <div class=" font-onest-regular w-4/5">
                    <input v-model="input" class="w-full outline-none" type="text" :placeholder="$t('nav.search-input')">
                </div>
                <button class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 23 23" fill="none">
                    <path d="M22 22L17.0418 17.0329M19.7895 10.3947C19.7895 12.8864 18.7997 15.276 17.0378 17.0378C15.276 18.7997 12.8864 19.7895 10.3947 19.7895C7.9031 19.7895 5.51351 18.7997 3.75165 17.0378C1.9898 15.276 1 12.8864 1 10.3947C1 7.9031 1.9898 5.51351 3.75165 3.75165C5.51351 1.9898 7.9031 1 10.3947 1C12.8864 1 15.276 1.9898 17.0378 3.75165C18.7997 5.51351 19.7895 7.9031 19.7895 10.3947Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/helpers/fetchUrl'


const { data, load } = fetchUrl()
const { locale } = useI18n()
const router = useRouter()
const config = useRuntimeConfig()
const searchResult = useSearchResult()
const input = ref('')


const search = () => {
    router.push({path: `/${locale.value}/search`, query: {q: input.value}})
}

</script>