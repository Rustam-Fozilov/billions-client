<template>
    <div class="w-[290px] h-full bg-white cursor-pointer" @click="gotoBookInfo">
        <div class="w-full h-[260px]">
            <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Book image">
        </div>
        <div class="p-7">
            <div class="text-base font-futura">{{ product.title }}</div>
            <div class="font-futura text-sm opacity-50">{{ product.author }}</div>
            <div class="mt-10 flex justify-between items-center">
                <div class="font-futura text-[22px]">{{ product.price }} so'm</div>
                <div>
                    <LikeIcon class="like-icon" v-if="!isLiked" @click.stop="doFavorite"/>
                    <LikeRedIcon class="like-icon" v-if="isLiked" @click.stop="removeFavorite"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import LikeIcon from './ui/LikeIcon.vue';
import LikeRedIcon from './ui/LikeRedIcon.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const isLiked = ref(props.product.isLiked);

const gotoBookInfo = () => {
    window.location.href = `/book/${props.product.title.split(' ').join('-').toLowerCase()}`;
}

const doFavorite = () => {
    console.log('add to favorites');
    isLiked.value = !isLiked.value;
    document.querySelector('.like-icon').classList.toggle('liked');
}

const removeFavorite = () => {
    console.log('remove from favorites');
}
</script>