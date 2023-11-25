<template>
    <div>
        <div class="flex flex-col gap-7 xl:gap-5">
            <div v-for="book in booksInCart">
                <order-book-card :book="book"/>
            </div>
        </div>
    </div>
</template>

<script setup>

const booksInCart = await useBooksInCart()

</script>
