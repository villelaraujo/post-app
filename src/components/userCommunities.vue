<template>
    <div class="flex flex-col gap-6 w-full">
        <div class="flex flex-col gap-2 items-center">
            <span class="text-lg opacity-70">Your Communities</span>
            <div class="h-px w-full bg-gray-400"></div>
        </div>
        <div class="flex flex-col gap-8">
            <div v-for="community in userCommunities" class="flex flex-col">
                <router-link :to="'/posts/'+community.id" class="group cursor-pointer flex flex-col app-window-padding py-4 bg-transparent transition-colors duration-200 hover:bg-gray-200">
                    <span class="text-2xl">{{ community.name }}</span>
                    <span class="opacity-60">{{ community.description }}</span>
                </router-link>
            </div>
            <div class="flex flex-col items-center">
                <router-link to="/posts" class="cursor-pointer transition-colors duration-150 hover:text-sky-400">View all</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    let userCommunities = ref([
        {
            name:"Christmas Posts",
            description:"Post your Christmas presents and decorations for inspiration.",
            id:"christmas",
        },
    ])
</script>