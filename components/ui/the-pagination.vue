<template>
    <div>
        <div class="flex gap-10 items-center">
            <div @click="paginatePrev" class="cursor-pointer opacity-50 hover:opacity-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                <path opacity="1" d="M0.363604 6.3636C0.0121327 6.71507 0.0121326 7.28492 0.363604 7.63639L6.09117 13.364C6.44264 13.7154 7.01249 13.7154 7.36396 13.364C7.71543 13.0125 7.71543 12.4426 7.36396 12.0912L2.27279 7L7.36396 1.90883C7.71543 1.55736 7.71543 0.98751 7.36396 0.636038C7.01249 0.284566 6.44264 0.284566 6.09117 0.636038L0.363604 6.3636ZM19 6.1L1 6.1L1 7.9L19 7.9L19 6.1Z" fill="black"/>
                </svg>
            </div>
            <div class="flex gap-3">
                <div v-for="(pagination, index) in paginationData">
                    <div
                        @click="paginate(pagination)"
                        class="cursor-pointer font-onest-medium w-10 h-10 rounded-full flex items-center justify-center"
                        :class="route.query.page ? index + 1 === +route.query.page ? 'bg-nav-bg' : '' : index + 1 === 1 ? 'bg-nav-bg' : ''"
                    >
                        {{ index + 1 }}
                    </div>
                </div>
            </div>
            <div @click="paginateNext" class="cursor-pointer opacity-50 hover:opacity-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                <path opacity="1" d="M18.6364 7.6364C18.9879 7.28492 18.9879 6.71508 18.6364 6.3636L12.9088 0.636039C12.5574 0.284567 11.9875 0.284567 11.636 0.636039C11.2846 0.987511 11.2846 1.55736 11.636 1.90883L16.7272 7L11.636 12.0912C11.2846 12.4426 11.2846 13.0125 11.636 13.364C11.9875 13.7154 12.5574 13.7154 12.9088 13.364L18.6364 7.6364ZM0 7.9L18 7.9V6.1L0 6.1L0 7.9Z" fill="black"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl";


const props = defineProps(['paginationData'])
const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const { data, load } = fetchUrl()


const paginate = (pagination) => {
    router.push({
        path: route.path,
        query: {
            page: pagination.meta.current_page,
        }
    })
}


const paginateNext = () => {
    if (+route.query.page === props.paginationData[props.paginationData.length - 1].meta.current_page) {
        return
    }

    if (route.query.page === undefined) {
        router.push({
            path: route.path,
            query: {
                page: 2,
            }
        })
        return
    }

    router.push({
        path: route.path,
        query: {
            page: +route.query.page + 1,
        }
    })
}


const paginatePrev = () => {
    if (+route.query.page === 1 || route.query.page === undefined) {
        return
    }

    router.push({
        path: route.path,
        query: {
            page: +route.query.page - 1,
        }
    })
}

</script>