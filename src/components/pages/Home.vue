<template>
    <AppWindow>
        <div class="flex flex-col gap-12 md:gap-16 my-8">
            <div class="flex flex-col items-center"><span class="text-2xl">Welcome, Guest</span></div>
            <UserCommunities/>
            <FeaturedPostCom/>
        </div>
    </AppWindow>
</template>

<script setup>
    //components
    import FeaturedPostCom from '../featuredPostCom.vue';
    import AppWindow from '../appWindow.vue';
    import UserCommunities from '../userCommunities.vue';

</script>