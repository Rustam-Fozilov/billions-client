<template>
    <div>
        <nav-top-item/>

        <div class="mt-5">
            <div class="container">
                <div class="flex items-center justify-between">
                    <div>
                        <ui-brand w="150"/>
                    </div>
                    <div class="w-full">
                        <ui-search-input/>
                    </div>
                    <div>
                        <nav-actions/>
                    </div>
                </div>
    
                <!-- CATEGORIES -->
                <div>
                    <div id="nav-categories" class="w-full flex justify-between mt-7">
                        <div v-for="category in categories">
                            <div class="font-onest-regular cursor-pointer">
                                {{ category.name.ru }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';

const config = useRuntimeConfig()
const categories = ref([])

await axios
    .get(`${config.public.apiUrl}/categories`)
    .then((res) => {
        categories.value = res.data.data
        console.log('res data', categories.value);
    })
    .catch((err) => {
        console.log(err)
    })

</script>
