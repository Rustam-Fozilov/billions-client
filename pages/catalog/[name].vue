<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white">
            <div class="container">
                <div class="pt-12">
                    <catalog-paths/>
                </div>

                <div>
                    <div class="mt-7">
                        <div class="flex gap-5 items-center">
                            <div class="font-onest-medium text-xl">{{ pathTitle }}</div>
                            <div class="font-onest-regular opacity-50 relative top-[3px]">{{ locale === 'ru' ? `${countOfBooks} книги` : `${countOfBooks}ta kitob` }}</div>
                        </div>
                    </div>
                </div>

                <div class="mt-12">
                    <div class="w-1/5">
                        <books-filter :category="category" :path-title="pathTitle"/>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { fetchUrl } from "~/helpers/fetchUrl";


const pathTitle = ref('')
const route = useRoute()
const config = useRuntimeConfig()
const { data, load } = fetchUrl()
const { locale } = useI18n()


await load(`${config.public.apiUrl}/categories?only_parents=true`)
const category = data.value.data.find((category) => category.path_name === route.params.name)
pathTitle.value = category.name[locale.value]


await load(`${config.public.apiUrl}/categories/${category.id}/books`)
const countOfBooks = computed(() => data.value.data.length)


</script>