<template>
    <div class="flex justify-between">
        <div v-for="category in categories" :key="category.id" class="cursor-pointer font-futura text-sm">{{ category.name }}</div>
    </div>
</template>

<script setup>

defineProps({
    categories: {
        type: Array,
        required: true
    }
})

</script>