<template>
  <div>
    <div
      v-if="loading"
      class="fixed left-0 top-0 h-[5px] w-full z-50 bg-bronze drop-shadow-md"
    ></div>

    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">


const nuxtApp = useNuxtApp()
const loading = ref(false)


nuxtApp.hook("page:start", () => {
  loading.value = true;
})


nuxtApp.hook("page:finish", () => {
  loading.value = false;
})

</script>