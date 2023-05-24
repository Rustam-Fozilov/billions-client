<template>
    <ProductCard v-for="product in products" :key="product.id" :product="product" class="mb-5"/>
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