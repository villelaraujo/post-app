<template>
    <AppWindow>
        <div class="flex flex-col gap-12 md:gap-16 my-8">
            <div class="flex flex-col items-center"><span class="text-2xl">Welcome, {{username}}</span></div>
            <UserCommunities/>
            <FeaturedPostCom/>
        </div>
    </AppWindow>
</template>

<script setup>
    //vue
    import { inject } from 'vue';

    //components
    import FeaturedPostCom from '../featuredPostCom.vue';
    import AppWindow from '../appWindow.vue';
    import UserCommunities from '../userCommunities.vue';

    let username = inject("username");
</script>