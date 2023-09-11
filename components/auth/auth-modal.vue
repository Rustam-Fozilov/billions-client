<template>
    <div>
        <div>
            <send-sms-code-modal :is-open-auth="copyIsOpenAuth"/>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['isOpenAuth'])
const copyIsOpenAuth = ref(props.isOpenAuth)

onUpdated(() => {
    copyIsOpenAuth.value = props.isOpenAuth
})

</script>