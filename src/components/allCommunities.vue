<template>
    <div class="flex flex-col gap-6 w-full">
        <div class="flex flex-col gap-2 items-center">
            <span class="text-lg opacity-70">All Communities</span>
            <div class="h-px w-full bg-gray-400"></div>
        </div>
        <div class="flex flex-col gap-8">
            <div v-for="community in communities" class="flex flex-col">
                <community-link
                    :id="community.id"
                    :name="community.name"
                    :members="community.members"
                    :description="community.description"
                />
            </div>
            <div class="flex flex-col items-center">
                <span class="cursor-pointer transition-colors duration-150 hover:text-sky-400">View more</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import communityLink from './communityLink.vue';
    import { communities } from '@/data/communities';

</script>