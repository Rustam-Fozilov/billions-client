<template>
    <div>
        <div class="flex items-center gap-3 opacity-50">

            <NuxtLink to="/" class="font-onest-regular hover:opacity-100 transition">
                Asosiy
            </NuxtLink>

            <div class="flex items-center gap-3 hover:opacity-100 transition">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="black"/>
                    </svg>
                </div>

                <div class="font-onest-regular">
                    {{ route.meta.title.uz }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
