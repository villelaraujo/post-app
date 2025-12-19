<script setup>
    import { ref, provide } from 'vue';
    import { RouterView } from 'vue-router';

    let username = ref("Guest");
    provide("username", username);
</script>

<template>
    <RouterView/>
</template>
