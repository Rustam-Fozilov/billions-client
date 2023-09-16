<template>
    <div>
        <div>
            <send-sms-code-modal v-if="!isSMSCodeSended"/>

            <confirm-code-modal v-if="isSMSCodeSended"/>
        </div>
    </div>
</template>

<script setup>


const isSMSCodeSended = useIsSMSCodeSended()
const isAuthModalOpen = useIsAuthModalOpen()


onUpdated(() => {
    isAuthModalOpen.value = isAuthModalOpen.value
    isSMSCodeSended.value = isSMSCodeSended.value
})

</script>