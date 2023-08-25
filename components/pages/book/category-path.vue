<template>
    <div>
        <h1>{{ data }}</h1>
    </div>
</template>

<script setup>
import { fetchUrl } from '~/composable/fetchUrl';

const props = defineProps(['category_id'])
const category_id = ref(props.category_id);

const config = useRuntimeConfig();
const {data, load} = fetchUrl();

// await load(`${config.public.apiUrl}/categories/${props.category_id}`)

// while(true){
    for (let i = 0; i < 10; i++) {
        await load(`${config.public.apiUrl}/categories/${category_id.value}`)
        if (data.value.data.parent_id == null) {
            console.log('break');
        }
    
        category_id.value = data.value.data.parent_id;
    }
// }

</script>
