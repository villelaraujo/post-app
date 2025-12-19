<script setup>
    const props = defineProps({
        id:{type:String, required:true},
        name:{type:String, required:true},
        members:{type:Number, required:true},
        description:{type:String, required:true},
    });
</script>

<template>
    <router-link :to="'/posts/'+props.id" class="group cursor-pointer flex flex-col gap-2 app-window-padding py-4 bg-transparent transition-colors duration-200 hover:bg-gray-200">
        <div class="flex justify-between items-center">
            <span class="text-2xl">{{ props.name }}</span>
            <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Z"/></svg>
                <span>{{ String(props.members) }}</span>
            </div>
        </div>
        <span class="opacity-60">{{ props.description }}</span>
    </router-link>
</template>