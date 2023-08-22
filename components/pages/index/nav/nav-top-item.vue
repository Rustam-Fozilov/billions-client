<template>
    <div>
        <div>
            <div class="bg-nav-bg h-12">
                <div class="flex justify-between container items-center h-full">
                    <div class="flex gap-8">
                        <div class="flex gap-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M3.93333 2.22222C4 3.21111 4.16667 4.17778 4.43333 5.1L3.1 6.43333C2.64444 5.1 2.35556 3.68889 2.25556 2.22222H3.93333ZM14.8889 15.5778C15.8333 15.8444 16.8 16.0111 17.7778 16.0778V17.7333C16.3111 17.6333 14.9 17.3444 13.5556 16.9L14.8889 15.5778ZM5 0H1.11111C0.5 0 0 0.5 0 1.11111C0 11.5444 8.45556 20 18.8889 20C19.5 20 20 19.5 20 18.8889V15.0111C20 14.4 19.5 13.9 18.8889 13.9C17.5111 13.9 16.1667 13.6778 14.9222 13.2667C14.8119 13.2267 14.6951 13.2078 14.5778 13.2111C14.2889 13.2111 14.0111 13.3222 13.7889 13.5333L11.3444 15.9778C8.19492 14.3671 5.6329 11.8051 4.02222 8.65556L6.46667 6.21111C6.77778 5.9 6.86667 5.46667 6.74444 5.07778C6.32295 3.79784 6.10913 2.45866 6.11111 1.11111C6.11111 0.5 5.61111 0 5 0Z" fill="black"/>
                                </svg>
                            </div>
                            <div class="font-onest-regular">
                                (+998) 71 200 00 00
                            </div>
                        </div>
                        <div class="flex gap-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                                <path d="M15 8.25C15 6.45979 14.2888 4.7429 13.023 3.47703C11.7571 2.21116 10.0402 1.5 8.25 1.5C6.45979 1.5 4.7429 2.21116 3.47703 3.47703C2.21116 4.7429 1.5 6.45979 1.5 8.25C1.5 11.019 3.7155 14.628 8.25 18.951C12.7845 14.628 15 11.019 15 8.25ZM8.25 21C2.7495 16.0005 0 11.7495 0 8.25C0 6.06196 0.869194 3.96354 2.41637 2.41637C3.96354 0.869194 6.06196 0 8.25 0C10.438 0 12.5365 0.869194 14.0836 2.41637C15.6308 3.96354 16.5 6.06196 16.5 8.25C16.5 11.7495 13.7505 16.0005 8.25 21Z" fill="black"/>
                                <path d="M8.25 10.5C8.84674 10.5 9.41903 10.2629 9.84099 9.84099C10.2629 9.41903 10.5 8.84674 10.5 8.25C10.5 7.65326 10.2629 7.08097 9.84099 6.65901C9.41903 6.23705 8.84674 6 8.25 6C7.65326 6 7.08097 6.23705 6.65901 6.65901C6.23705 7.08097 6 7.65326 6 8.25C6 8.84674 6.23705 9.41903 6.65901 9.84099C7.08097 10.2629 7.65326 10.5 8.25 10.5ZM8.25 12C7.25544 12 6.30161 11.6049 5.59835 10.9016C4.89509 10.1984 4.5 9.24456 4.5 8.25C4.5 7.25544 4.89509 6.30161 5.59835 5.59835C6.30161 4.89509 7.25544 4.5 8.25 4.5C9.24456 4.5 10.1984 4.89509 10.9016 5.59835C11.6049 6.30161 12 7.25544 12 8.25C12 9.24456 11.6049 10.1984 10.9016 10.9016C10.1984 11.6049 9.24456 12 8.25 12Z" fill="black"/>
                                </svg>
                            </div>
                            <div class="font-onest-regular">
                                Tashkent
                            </div>
                        </div>
                    </div>
                    <div class="font-onest-regular">
                        1-3 kun ichida yetkazib beramiz
                    </div>
                    <div>
                        <div class="relative">
                            <div @click="callme" class=" m-3 h-full cursor-pointer flex items-center gap-2">
                                <div class="w-7 h-7">
                                    <img class="w-full h-full object-cover rounded-2xl" src="~/assets/images/uzb-flag.png" alt="language uz">
                                </div>
                                <div class="font-onest-regular">O'zbekcha</div>
                            </div>
                            <!-- <div class="bg-white shadow-lg absolute top-full cursor-pointer mt-2 w-full">
                                <div class="flex gap-2 items-center m-3">
                                    <div class="w-7 h-7">
                                        <img class="w-full h-full object-cover rounded-2xl" src="~/assets/images/russia-flag.png" alt="language ru">
                                    </div>
                                    <div class="font-onest-regular">Русский</div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
