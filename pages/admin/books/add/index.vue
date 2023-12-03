<template>
    <div class="container">
        <ui-brand w="150" class="my-5"/>
        <div class="text-xl font-onest-medium">Admin panel</div>
        <div class="font-onest-medium">* add new book</div>

        <div class="mt-5 mb-10">
            <form @submit="submit">
                <div class="flex gap-3 flex-col">
                    <div>
                        <div class="mb-1">Name uz</div>
                        <input type="text" v-model="name_uz" placeholder="name_uz" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Name ru</div>
                        <input type="text" v-model="name_ru" placeholder="name_ru" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Price</div>
                        <input type="number" v-model="price" placeholder="price" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Category id</div>
                        <input type="number" v-model="category_id" placeholder="category_id" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Description uz</div>
                        <textarea type="text" v-model="description_uz" rows="5" placeholder="description_uz" class="resize-none border border-black px-3 py-2 font-onest-regular w-full"/>
                    </div>
                    <div>
                        <div class="mb-1">Description ru</div>
                        <textarea type="text" v-model="description_ru" rows="5" placeholder="description_ru" class="resize-none border border-black px-3 py-2 font-onest-regular w-full"/>
                    </div>
                    <div>
                        <div class="mb-1">Short description uz</div>
                        <textarea type="text" v-model="short_description_uz" rows="5" placeholder="short_description_uz" class="resize-none border border-black px-3 py-2 font-onest-regular w-full"/>
                    </div>
                    <div>
                        <div class="mb-1">Short description ru</div>
                        <textarea type="text" v-model="short_description_ru" rows="5" placeholder="short_description_ru" class="resize-none border border-black px-3 py-2 font-onest-regular w-full"/>
                    </div>
                    <div>
                        <div class="mb-1">Quantity</div>
                        <input type="number" v-model="quantity" placeholder="quantity" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Image 1</div>
                        <input type="text" v-model="image_1" placeholder="image 1" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Image 2</div>
                        <input type="text" v-model="image_2" placeholder="image 2" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Image 3</div>
                        <input type="text" v-model="image_3" placeholder="image 3" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Image 4</div>
                        <input type="text" v-model="image_4" placeholder="image 4" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Image 5</div>
                        <input type="text" v-model="image_5" placeholder="image 5" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Image 6</div>
                        <input type="text" v-model="image_6" placeholder="image 6" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Author id</div>
                        <input type="number" v-model="author_id" placeholder="author_id" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Number of pages</div>
                        <input type="number" v-model="number_of_pages" placeholder="number_of_pages" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Year</div>
                        <input type="number" v-model="year" placeholder="year" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Cover type uz</div>
                        <input type="text" v-model="cover_type_uz" placeholder="cover_type_uz" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Cover type ru</div>
                        <input type="text" v-model="cover_type_ru" placeholder="cover_type_ru" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Language uz</div>
                        <input type="text" v-model="language_uz" placeholder="language_uz" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Language ru</div>
                        <input type="text" v-model="language_ru" placeholder="language_ru" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>
                    <div>
                        <div class="mb-1">Secret key</div>
                        <input type="text" v-model="secret_key" placeholder="secret_key" class="border border-black px-3 py-2 font-onest-regular w-full">
                    </div>

                    <button type="submit" class="bg-black text-white py-4 hover:opacity-80 transition">
                        SUBMIT
                    </button>

                    <div class="font-onest-regular text-center">
                        {{ response }}
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import axios from "axios"

// base64:+AahgkKRbUoRWM1ygpDjO7ZNPIdPVD3lZYywSXTPy+k=


const year = ref(0)
const price = ref(0)
const images = ref([])
const image_1 = ref('')
const image_2 = ref('')
const image_3 = ref('')
const image_4 = ref('')
const image_5 = ref('')
const image_6 = ref('')
const name_uz = ref('')
const name_ru = ref('')
const quantity = ref(0)
const author_id = ref(0)
const response = ref('')
const category_id = ref(0)
const secret_key = ref('')
const language_uz = ref('')
const language_ru = ref('')
const cover_type_uz = ref('')
const cover_type_ru = ref('')
const number_of_pages = ref(0)
const description_uz = ref('')
const description_ru = ref('')
const config = useRuntimeConfig()
const short_description_uz = ref('')
const short_description_ru = ref('')

function sortImages() {
    if (image_1.value !== '') {
        images.value.push({
            'link': image_1.value
        })
    }

    if (image_2.value !== '') {
        images.value.push({
            'link': image_2.value
        })
    }

    if (image_3.value !== '') {
        images.value.push({
            'link': image_3.value
        })
    }

    if (image_4.value !== '') {
        images.value.push({
            'link': image_4.value
        })
    }

    if (image_5.value !== '') {
        images.value.push({
            'link': image_5.value
        })
    }

    if (image_6.value !== '') {
        images.value.push({
            'link': image_6.value
        })
    }
}

const submit = () => {
    sortImages()

    axios
        .post(`${config.public.apiUrl}/books`, {
            "secret-key": secret_key.value,
            "price": price.value,
            "name": {
                "uz": name_uz.value,
                "ru": name_ru.value
            },
            "category_id": category_id.value,
            "description": {
                "uz": description_uz.value,
                "ru": description_ru.value
            },
            "short_description": {
                "uz": short_description_uz.value,
                "ru": short_description_ru.value
            },
            "quantity": quantity.value,
            "author_id": author_id.value,
            "images": images.value,
            "number_of_pages": {
                "uz": number_of_pages.value,
                "ru": number_of_pages.value
            },
            "year": {
                "uz": year.value,
                "ru": year.value
            },
            "cover_type": {
                "uz": cover_type_uz.value,
                "ru": cover_type_ru.value
            },
            "language": {
                "uz": language_uz.value,
                "ru": language_ru.value
            }
        })
        .then(res => {
            response.value = res.data.message
            images.value = []
        })
        .catch(res => {
            console.log(res)
        })
}

</script>
