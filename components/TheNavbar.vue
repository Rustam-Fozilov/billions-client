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

</script>
