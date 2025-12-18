<template>
    <AppWindow>
        <SearchBar search="Communities" @search-query="onSearchCommunities"/>
        <div class="flex flex-col items-center gap-10 md:gap-16 w-full">
            <div v-if="searchResults.length>0" class="w-full">
                <div class="flex flex-col gap-6 w-full">
                    <div class="w-full"><span class="text-2xl opacity-50 app-window-padding">Search Results</span></div>
                    <div v-for="community in searchResults" class="flex flex-col">
                        <router-link :to="'/posts/'+community.id" class="group cursor-pointer flex flex-col app-window-padding py-4 bg-transparent transition-colors duration-200 hover:bg-gray-200">
                            <span class="text-2xl">{{ community.name }}</span>
                            <span class="opacity-60">{{ community.description }}</span>
                        </router-link>
                    </div>
                </div>
                <div class="h-1 w-full mb-6 bg-gray-400"></div>
            </div>
        </div>
        <AllCommunities/>
    </AppWindow>
</template>

<script setup>
    import { ref } from 'vue';

    import { communities } from '@/data/communities';
    //components
    import AllCommunities from '../allCommunities.vue';
    import AppWindow from '../appWindow.vue';
    import SearchBar from '../searchBar.vue';

    let searchResults = ref([]);

    function onSearchCommunities (words){
        return searchResults.value = communities.filter((community)=>{
            return community.name.includes(words) || community.description.includes(words);

        });
    };
</script>