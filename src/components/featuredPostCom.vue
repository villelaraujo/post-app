<template>
    <div class="flex flex-col gap-6 w-full">
        <div class="flex flex-col gap-2 items-center">
            <span class="text-lg opacity-70">Featured Posts Communities</span>
            <div class="h-px w-full bg-gray-400"></div>
        </div>
        <div class="flex flex-col gap-4">
            <div v-for="community in featuredCommunities" class="flex flex-col">
                <community-link
                    :id="community.id"
                    :name="community.name"
                    :members="community.members"
                    :description="community.description"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import communityLink from './communityLink.vue';

    import { communities } from '@/data/communities';

    let featuredCommunities = ref([]);

    onMounted(()=>{
        featuredCommunities.value=communities.filter((community)=>community.stars>500);
    });
</script>