<template>
    <div>
        <div id="nav-actions">
            <div class="flex gap-5">
                
                <div @click="openAuthModalOrGotoProfile" class="flex flex-col gap-2 cursor-pointer items-center justify-end">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                        <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="black" stroke-width="1.5"/>
                        <path d="M17 16.5C17 18.985 17 21 9 21C1 21 1 18.985 1 16.5C1 14.015 4.582 12 9 12C13.418 12 17 14.015 17 16.5Z" stroke="black" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div v-if="!authToken" class="font-onest-regular">{{ $t('nav.login') }}</div>
                    <div v-if="authToken && authUser.first_name" class="font-onest-regular">{{ authUser.first_name }}</div>
                    <div v-if="authToken && !authUser.first_name" class="font-onest-regular">{{ locale === 'ru' ? 'Кабинет' : 'Kabinet' }}</div>
                </div>

                <div @click="gotoFavorites" class="flex flex-col gap-2 cursor-pointer items-center justify-end">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                        <path d="M11 18.203L11.343 18.87C11.2369 18.9247 11.1193 18.9533 11 18.9533C10.8807 18.9533 10.7631 18.9247 10.657 18.87L10.654 18.868L10.647 18.865L10.622 18.852C8.76058 17.8411 7.00716 16.6429 5.389 15.276C2.8 13.073 0 9.832 0 6.014V6.013C0 2.553 2.829 0 5.736 0C8.03 0 9.881 1.226 11 3.105C12.12 1.226 13.97 0 16.264 0C19.17 0 22 2.552 22 6.014C22 9.832 19.199 13.074 16.611 15.276C14.9928 16.6428 13.2394 17.841 11.378 18.852L11.353 18.865L11.346 18.868L11.344 18.869L11 18.203ZM5.736 1.5C3.657 1.5 1.5 3.38 1.5 6.014C1.5 9.121 3.824 11.974 6.361 14.134C7.78018 15.333 9.3089 16.396 10.927 17.309L11 17.35L11.073 17.31C11.344 17.157 11.734 16.93 12.203 16.636C13.143 16.048 14.393 15.195 15.639 14.134C18.176 11.974 20.5 9.121 20.5 6.014C20.5 3.38 18.343 1.5 16.264 1.5C14.158 1.5 12.463 2.889 11.711 5.143C11.6605 5.29149 11.5648 5.42043 11.4373 5.51175C11.3097 5.60307 11.1568 5.65217 11 5.65217C10.8432 5.65217 10.6903 5.60307 10.5627 5.51175C10.4352 5.42043 10.3395 5.29149 10.289 5.143C9.537 2.889 7.841 1.5 5.736 1.5Z" fill="black"/>
                        </svg>
                    </div>
                    <div class="font-onest-regular">{{ $t('nav.favorites') }}</div>
                </div>

                <NuxtLink :to="'/' + locale + '/basket'" class="cursor-pointer flex relative">
                    <span>
                        <div class="flex flex-col items-center justify-end gap-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                <path d="M0 0.785714C0 0.57733 0.0807743 0.377481 0.224554 0.230131C0.368333 0.0827805 0.563339 0 0.766674 0H3.06669C3.23771 4.8418e-05 3.4038 0.0586939 3.53855 0.16661C3.67331 0.274527 3.76898 0.425518 3.81037 0.595571L4.43137 3.14286H22.2335C22.35 3.14289 22.4649 3.17011 22.5696 3.22245C22.6742 3.2748 22.7659 3.35089 22.8376 3.44495C22.9092 3.53901 22.9591 3.64857 22.9833 3.76531C23.0075 3.88206 23.0054 4.00291 22.9772 4.11871L20.6772 13.5473C20.6358 13.7173 20.5401 13.8683 20.4054 13.9762C20.2706 14.0842 20.1045 14.1428 19.9335 14.1429H6.13339C5.96237 14.1428 5.79628 14.0842 5.66153 13.9762C5.52678 13.8683 5.4311 13.7173 5.38972 13.5473L2.46869 1.57143H0.766674C0.563339 1.57143 0.368333 1.48865 0.224554 1.3413C0.0807743 1.19395 0 0.994099 0 0.785714ZM4.81471 4.71429L6.7314 12.5714H19.3355L21.2522 4.71429H4.81471ZM7.66674 17.2857C7.26007 17.2857 6.87006 17.4513 6.5825 17.746C6.29494 18.0407 6.13339 18.4404 6.13339 18.8571C6.13339 19.2739 6.29494 19.6736 6.5825 19.9683C6.87006 20.263 7.26007 20.4286 7.66674 20.4286C8.07341 20.4286 8.46342 20.263 8.75098 19.9683C9.03854 19.6736 9.20008 19.2739 9.20008 18.8571C9.20008 18.4404 9.03854 18.0407 8.75098 17.746C8.46342 17.4513 8.07341 17.2857 7.66674 17.2857ZM4.60004 18.8571C4.60004 18.0236 4.92314 17.2242 5.49826 16.6348C6.07337 16.0454 6.8534 15.7143 7.66674 15.7143C8.48008 15.7143 9.2601 16.0454 9.83522 16.6348C10.4103 17.2242 10.7334 18.0236 10.7334 18.8571C10.7334 19.6907 10.4103 20.4901 9.83522 21.0795C9.2601 21.6689 8.48008 22 7.66674 22C6.8534 22 6.07337 21.6689 5.49826 21.0795C4.92314 20.4901 4.60004 19.6907 4.60004 18.8571ZM18.4002 17.2857C17.9935 17.2857 17.6035 17.4513 17.3159 17.746C17.0284 18.0407 16.8668 18.4404 16.8668 18.8571C16.8668 19.2739 17.0284 19.6736 17.3159 19.9683C17.6035 20.263 17.9935 20.4286 18.4002 20.4286C18.8068 20.4286 19.1969 20.263 19.4844 19.9683C19.772 19.6736 19.9335 19.2739 19.9335 18.8571C19.9335 18.4404 19.772 18.0407 19.4844 17.746C19.1969 17.4513 18.8068 17.2857 18.4002 17.2857ZM15.3335 18.8571C15.3335 18.0236 15.6566 17.2242 16.2317 16.6348C16.8068 16.0454 17.5868 15.7143 18.4002 15.7143C19.2135 15.7143 19.9935 16.0454 20.5686 16.6348C21.1438 17.2242 21.4669 18.0236 21.4669 18.8571C21.4669 19.6907 21.1438 20.4901 20.5686 21.0795C19.9935 21.6689 19.2135 22 18.4002 22C17.5868 22 16.8068 21.6689 16.2317 21.0795C15.6566 20.4901 15.3335 19.6907 15.3335 18.8571Z" fill="black"/>
                                </svg>
                            </div>
                            <div class="font-onest-regular">{{ $t('nav.cart') }}</div>
                        </div>
                        <div class="h-5 w-5 text-center text-white rounded-xl absolute right-0 top-[-10px] bg-bronze font-onest-regular text-[14px]">
                            {{ countOfBooksInCart }}
                        </div>
                    </span>
                </NuxtLink>

            </div>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()
const isAuthModalOpen = useIsAuthModalOpen()
const booksInCart = await useBooksInCart()
const router = useRouter()
const authUser = await useAuthUser()
const authToken = await useAuthToken()


onUpdated(() => {
    authUser.value = authUser.value
})


const openAuthModalOrGotoProfile = () => {
    if (!authToken.value) {
        isAuthModalOpen.value = true
    } else {
        router.push(`/${locale.value}/personal`)
    }
}


const gotoFavorites = () => {
    if (!authToken.value) {
        isAuthModalOpen.value = true
    } else {
        router.push(`/${locale.value}/favorites`)
    }
}


const countOfBooksInCart = computed(() => {
    return booksInCart.value ? booksInCart.value.length : 0
})

</script>