<template>
    <div>
        <nav-top-item />

        <div class="my-7">
            <div class="container">
                
                <!-- SEARCH -->
                <div class="flex items-center justify-between">
                    <div>
                        <ui-brand w="150" />
                    </div>
                    <div class="w-full">
                        <ui-search-input />
                    </div>
                    <div>
                        <nav-actions/>
                    </div>
                </div>

                <!-- CATEGORIES -->
                <div>
                    <nav-categories/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl";


const authToken = await useAuthToken()
const authUser = await useAuthUser()
const config = useRuntimeConfig()
const { data, load } = fetchUrl()


onMounted(() => {
    refreshToken()
})


const refreshToken = async () => {
    if (!authUser.value.id) {
        return
    }

    await load(
        `${config.public.apiUrl}/auth/refresh-token`,
        {
            user_id: authUser.value.id,
            token: authToken.value
        },
        'POST'
    )

    if (process.client) {
        localStorage.setItem('token', data.value.data.token)
    }
}

</script>
