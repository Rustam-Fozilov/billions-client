<template>
    <div>
        <div>
            <the-navbar/>
        </div>

        <div class="bg-soft-white pt-12 pb-24">
            <div class="container">
                <div class="flex">
                    <div class="w-1/4">
                        <personal-nav/>
                    </div>

                    <div class="w-full">
                        <div class="flex justify-between">
                            <div class="font-onest-medium text-xl">
                                {{ locale === 'ru' ? 'Мои адреса' : 'Mening manzillarim' }}
                            </div>
                            <div class="font-onest-medium text-base cursor-pointer hover:opacity-50 transition">
                                {{ locale === 'ru' ? '+ Добавить' : '+ Qo\'shish' }}
                            </div>
                        </div>

                        <div class="mt-5">
                            <div class="flex flex-col gap-7">
                                <div class="flex justify-between border-b-2 pb-5">
                                    <div class="flex items-center gap-5">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="27" viewBox="0 0 22 27" fill="none">
                                                <path d="M10.998 10.999H11.0109V11.0119H10.998V10.999Z" stroke="black" stroke-width="4" stroke-linejoin="round"/>
                                                <path d="M11 25.1421L18.0712 18.0709C19.4697 16.6724 20.4221 14.8905 20.8079 12.9507C21.1937 11.0109 20.9956 9.00029 20.2387 7.17306C19.4819 5.34582 18.2001 3.78407 16.5557 2.68527C14.9112 1.58648 12.9778 1 11 1C9.02221 1 7.08883 1.58648 5.44435 2.68527C3.79987 3.78407 2.51814 5.34582 1.76125 7.17306C1.00436 9.00029 0.806303 11.0109 1.19212 12.9507C1.57793 14.8905 2.5303 16.6724 3.92878 18.0709L11 25.1421Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <div class="font-onest-medium text-sm">Address one</div>
                                            <div class="font-onest-regular">Address description</div>
                                        </div>
                                    </div>
                                    <div class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                            <path d="M2 11.7692L12 21L22 11.7692M12 19.718V1" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    content two
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <the-footer/>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()

</script>
