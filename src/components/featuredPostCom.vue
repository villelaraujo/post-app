<template>
    <div class="flex flex-col gap-6 w-full">
        <div class="flex flex-col gap-2 items-center">
            <span class="text-lg opacity-70">Featured Posts Communities</span>
            <div class="h-px w-full bg-gray-400"></div>
        </div>
        <div class="flex flex-col gap-4">
            <div v-for="community in featuredCommunities" class="flex flex-col">
                <router-link :to="'/posts/' + community.id" class="group cursor-pointer flex flex-col app-window-padding py-4 w-full bg-transparent transition-colors duration-200 hover:bg-gray-200">
                    <span class="text-2xl">{{ community.name }}</span>
                    <span class="opacity-60">{{ community.description }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    let featuredCommunities = ref([
        {
            name:"TechTalk",
            description:"A community for tech enthusiasts to share and discuss the latest in technology.",
            id:"techtalk"
        },
        {
            name:"Christmas Posts",
            description:"Post your Christmas presents and decorations for inspiration.",
            id:"christmas"
        },
        {
            name:"Wellbeing Hub",
            description:"Let`s make a hub about feeling well and doing good.",
            id:"wellbeing"
        }
    ])
</script>