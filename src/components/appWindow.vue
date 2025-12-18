<template>
    <div class="flex flex-col gap-5 sm:gap-10 items-center justify-center py-4 sm:py-2 md:py-6">
        <AppHeader/>
        <div class="flex gap-3 items-center text-center">
            <div class="sm:w-10 w-8"><img src="/stamp.png" alt="logo" class="w-fit bg-cover"></div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700">NEWP<span class="text-sky-600">O</span>ST</h2>
        </div>
        <div id="appwindow" class="flex flex-col gap-6 md:gap-8 rounded-2xl bg-gray-100 border border-gray-400 shadow-md py-6 sm:py-10 w-[90vw] md:w-[85vw] lg:w-[60vw] xl:w-[50vw] h-auto">
            <div class="w-full app-window-padding">
                <div class="flex flex-col items-center w-full">
                    <NavBar/>
                </div>
            </div>
            <slot></slot>
        </div>
        <appFooter/>
    </div>
</template>

<script setup>
    //components
    import appFooter from './appFooter.vue';
    import AppHeader from './appHeader.vue';
    import NavBar from './navBar.vue';

</script>