<template>
    <AppWindow>
        <SearchBar search="Communities" @search-query="onSearchCommunities"/>
        <div class="flex flex-col items-center gap-10 md:gap-16 w-full">
            <div v-if="searchResults.length>0" class="w-full">
                <div class="flex flex-col gap-6 w-full">
                    <div class="w-full"><span class="text-2xl opacity-50 app-window-padding">Search Results</span></div>
                    <div v-for="community in searchResults" class="flex flex-col">
                        <router-link :to="'/posts/'+community.id" class="group cursor-pointer flex flex-col app-window-padding py-4 bg-transparent transition-colors duration-200 hover:bg-gray-200">
                            <div class="flex justify-between items-center">
                                <span class="text-2xl">{{ community.name }}</span>
                                <div class="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Z"/></svg>
                                    <span>{{ String(community.members) }}</span>
                                </div>
                            </div>
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