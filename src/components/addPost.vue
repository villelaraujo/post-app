<template>
    <div class="app-window-padding">
        <div class="flex flex-col gap-3 items-center bg-gray-300 rounded-2xl w-full py-8 px-8">
            <div class="flex flex-col gap-3 sm:gap-6 w-full">
                <input v-model.trim.lazy="poster.name" class="rounded-md bg-gray-200 border border-gray-600 text-center px-2 py-1 placeholder:text-gray-500" type="text" placeholder="Poster Name" required maxlength="65">
                <input v-model.trim.lazy="poster.title" class="rounded-md bg-gray-200 border border-gray-600 text-center px-2 py-1 placeholder:text-gray-500" type="text" placeholder="Title" required maxlength="255">
                <textarea v-model="poster.description" maxlength="655" class="resize-none min-h-20 field-sizing-content w-full rounded-md bg-gray-200 border border-gray-600 text-center px-2 py-1 placeholder:text-gray-500 focus:min-h-32" type="text" placeholder="Description" required></textarea>
            </div>
            <button v-if="canPost" type="submit" @click="addPost" class="custom-button"><span>Send Post</span></button>
            <button v-else type="submit" class="custom-button-disabled"><span>Send Post</span></button>
        </div>
    </div>
</template>

<script setup>
    import { reactive, watch } from 'vue';

    const emit = defineEmits(['add-post']);

    let canPost = false;
    const poster = reactive({
        name:"",
        title:"",
        description:"",
        favourite:false,
        timestamp:"",
    })
    watch(poster, (newPost)=>{
        if(newPost.name.length>0 && newPost.title.length>0 && newPost.description.length>0){
            canPost = true;
        }else{
            canPost = false;
        }
    })
   function getDate() {
        const now = Date.now();
        const date = new Date(now);
        return date.toLocaleDateString('en-US', {year: "numeric", month: "numeric", day: "numeric"});
    };
    function addPost(){
        emit('add-post', {
            name:poster.name,
            title:poster.title,
            description:poster.description,
            favourite:poster.favorite,
            timestamp:getDate(),
        });
        poster.name="";
        poster.title="";
        poster.description="";
        poster.timestamp="";
        poster.favourite=false;
        return;
    };
</script>