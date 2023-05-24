<template>
    <div @click="navigate" class="cursor-pointer">
        <span>
            <div class="flex items-center text-base font-futura gap-3">
                <slot/> <ArrowIcon/>
            </div>
        </span>
    </div>
</template>

<script setup>
import ArrowIcon from './ArrowIcon.vue';

const emit = defineEmits(['navigate']);

const navigate = () => {
    emit('navigate');
}


</script>