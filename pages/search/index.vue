<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white">
            <div class="container py-12">
                <search-query-title :title="query"/>
            </div>

            <div class="">
                
            </div>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'


const route = useRoute()
const query = route.query.q

</script>