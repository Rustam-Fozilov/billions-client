<template>
    <div class="flex flex-wrap justify-between">
        <ProductCard v-for="product in products" :key="product.id" :product="product" class="mb-5"/>
    </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';

defineProps({
    products: {
        type: Array,
        required: true
    }
})
</script>