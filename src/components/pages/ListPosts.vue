<template>
    <AppWindow>
        <SearchBar search="Communities"/>
        <AllCommunities/>
    </AppWindow>
</template>

<script setup>
    import AllCommunities from '../allCommunities.vue';
    import AppWindow from '../appWindow.vue';
    import SearchBar from '../searchBar.vue';
</script>