<script setup>
    //vue
    import { reactive, ref } from 'vue';
    import { useRoute } from 'vue-router';
    //data
    import { communities } from '@/data/communities';
    //components
    import addPost from '../addPost.vue';
    import Post from '../post.vue';
    import searchBar from '../searchBar.vue';
    import CommunityUrl from '../communityUrl.vue';
    import appWindow from '../appWindow.vue';

    const route = useRoute();
    const queryId = route.params;
    const thisCommunity = communities.find((elm)=>elm.id === queryId.community);

    let posts = reactive([]);
    let searchResults = ref([]);

    function onAddPost(newPost){
        posts.push(newPost);
    };
    function onSearchPosts (words){
        return searchResults.value = posts.filter((post)=>{
            return post.title.includes(words) || post.description.includes(words);

        });
    };
</script>

<template>
    <appWindow>
        <CommunityUrl :name="thisCommunity.name" :url="thisCommunity.id"/>
        <addPost @add-post="onAddPost"/>
        <searchBar search="Posts" @search-query="onSearchPosts"/>
        <div class="flex flex-col items-center gap-10 md:gap-16 w-full">
            <div v-if="searchResults.length>0" class="w-full">
                <div class="w-full">
                    <div class="w-full"><span class="text-2xl opacity-50 app-window-padding">Search Results</span></div>
                    <div v-for="resultPost in searchResults" class="py-4 md:py-6 w-full">
                        <Post 
                            :name="resultPost.name"
                            :title="resultPost.title"
                            :timestamp="resultPost.timestamp"
                            :favourite="resultPost.favourite"
                            :description="resultPost.description"
                            @toggle-favourite="resultPost.favourite = !resultPost.favourite"
                        />
                    </div>
                </div>
                <div class="h-1 w-full mb-6 bg-gray-400"></div>
            </div>
        </div>
        <div class="flex flex-col items-center gap-10 md:gap-16 w-full">
            <div v-if="posts.length>0" class="w-full">
                <div class="w-full"><span class="text-2xl opacity-50 app-window-padding">Latest Posts</span></div>
                <div v-for="post in posts" class="py-4 md:py-6 w-full">
                    <Post 
                        :name="post.name"
                        :title="post.title"
                        :timestamp="post.timestamp"
                        :description="post.description"
                        :favourite="post.favourite"
                        @toggle-favourite="post.favourite = !post.favourite"
                    />
                </div>
            </div>
            <div v-else>
                <p class="opacity-50 my-10">No POSTs yet, nothing to see here.</p>
            </div>
        </div>
    </appWindow>
</template>