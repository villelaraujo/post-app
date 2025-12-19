<script setup>
    import { inject } from 'vue';
    import AppWindow from '../appWindow.vue';

    let username = inject("username");

</script>

<template>
    <AppWindow>
        <div class="flex flex-col gap-6 md:gap-8 py-4">
            <div class="flex flex-col items-center gap-3">
                <span class="text-2xl">Profile</span>
                <div class="h-px w-full mb-6 bg-gray-400"></div>
            </div>
            <div class="flex items-center gap-3 w-full app-window-padding">
                <span>Username</span>
                <input v-model="username" class="flex-1 rounded-md bg-gray-200 border border-gray-600 text-center px-2 py-1 placeholder:text-gray-500" type="text" :placeholder="username">
            </div>
        </div>
    </AppWindow>
</template>