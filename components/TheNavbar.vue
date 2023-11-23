<template>
    <div>
        <nav-top-item />

        <div class="my-7 sm:mb-0">
            <div class="container">
                
                <!-- SEARCH -->
                <div class="flex items-center justify-between xl:gap-7 sm:flex-col">
                    <div>
                        <ui-brand w="150" />
                    </div>
                    <div class="w-full">
                        <ui-search-input />
                    </div>
                    <div>
                        <nav-actions class="xl:hidden"/>
                    </div>
                </div>

                <!-- CATEGORIES -->
                <div>
                    <nav-categories/>
                </div>
            </div>
        </div>

        <div class="z-10">
            <auth-modal/>
        </div>

        <mobile-nav v-if="screenSize"/>
    </div>
</template>

<script setup>
import { fetchUrl } from "~/helpers/fetchUrl"


const config = useRuntimeConfig()
const { data, load } = fetchUrl()
const authUser = await useAuthUser()
const authToken = await useAuthToken()
const { locale, setLocale } = useI18n()
const screenSize = await useScreenSize()


onMounted(() => {
    refreshToken()
    redirectWithLocale()
})


const redirectWithLocale = () => {
    return 0
}


const refreshToken = async () => {
    if (!authUser.value || !authUser.value.id) {
        return
    }

    await load(
        `${config.public.apiUrl}/auth/refresh-token`,
        {
            phone: authUser.value.phone,
            token: authToken.value
        },
        'POST'
    )

    if (process.client) {
        localStorage.setItem('token', data.value.data.token)
    }
}

</script>
