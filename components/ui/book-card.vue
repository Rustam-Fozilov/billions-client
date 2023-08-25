<template>
    <div @click="gotoBook(book)" id="books-card" class="cursor-pointer">
        <div class=" w-[17rem]">
            <div class="w-full h-80">
                <img class="w-full h-full object-cover" src="~/assets/images/books/book-cover.png" alt="book cover">
            </div>
            <div class="mt-5 flex flex-col gap-2 font-onest-regular">
                <div class="flex justify-between">
                    <div class="font-onest-medium">
                        {{ book.prices[1].price }} {{ book.prices[1].currency.name.uz }}
                    </div>
                    <div class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M1.98601 16.2896C1.03196 12.4734 0.554928 10.5664 1.5568 9.28319C2.55755 8 4.52571 8 8.45868 8H13.607C17.5411 8 19.507 8 20.5089 9.28319C21.5108 10.5653 21.0337 12.4745 20.0797 16.2896C19.4726 18.717 19.1701 19.9301 18.265 20.6373C17.3598 21.3434 16.1089 21.3434 13.607 21.3434H8.45868C5.95679 21.3434 4.70584 21.3434 3.80071 20.6373C2.89558 19.9301 2.59202 18.717 1.98601 16.2896Z" stroke="black"/>
                        <path d="M19.3726 8.22755L18.5831 5.33091C18.2785 4.2134 18.1261 3.6552 17.8137 3.23377C17.5021 2.81509 17.079 2.49255 16.5927 2.30307C16.1035 2.11182 15.5253 2.11182 14.3688 2.11182M2.69336 8.22755L3.48284 5.33091C3.78752 4.2134 3.93986 3.6552 4.25231 3.23377C4.56386 2.81509 4.98697 2.49255 5.47324 2.30307C5.9625 2.11182 6.54071 2.11182 7.69714 2.11182" stroke="black"/>
                        <path d="M7.69727 2.11195C7.69727 1.81704 7.81442 1.53421 8.02295 1.32568C8.23148 1.11715 8.51431 1 8.80922 1H13.257C13.5519 1 13.8348 1.11715 14.0433 1.32568C14.2518 1.53421 14.369 1.81704 14.369 2.11195C14.369 2.40686 14.2518 2.68969 14.0433 2.89822C13.8348 3.10675 13.5519 3.2239 13.257 3.2239H8.80922C8.51431 3.2239 8.23148 3.10675 8.02295 2.89822C7.81442 2.68969 7.69727 2.40686 7.69727 2.11195Z" stroke="black"/>
                        <path d="M8 14.5H14" stroke="black" stroke-linecap="round"/>
                        <path d="M11 17.5L11 11.5" stroke="black" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
                <div class="opacity-50">{{ book.inventory[0].cover_type.uz }} muqova</div>
                <div>{{ book.name.uz }}</div>
                <div class="opacity-50">{{ book.author }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['book'])

const router = useRouter();

const gotoBook = (book) => {
    router.push({
        path: `/books/${book.name.uz.split(' ').join('-')}-${book.id}`,
    });
}

</script>