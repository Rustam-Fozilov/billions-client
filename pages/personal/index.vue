<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()


if (route.path === `/${locale.value}/personal`) {
    router.push(`/${locale.value}/personal/orders`)
}

</script>