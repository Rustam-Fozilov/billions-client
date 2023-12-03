<template>
    <div>
        <div>
            <send-sms-code-modal v-if="!isSMSCodeSent"/>

            <confirm-code-modal v-if="isSMSCodeSent"/>
        </div>
    </div>
</template>

<script setup>

const isSMSCodeSent = useIsSMSCodeSent()
const isAuthModalOpen = useIsAuthModalOpen()


onUpdated(() => {
    isAuthModalOpen.value = isAuthModalOpen.value
    isSMSCodeSent.value = isSMSCodeSent.value
})

</script>