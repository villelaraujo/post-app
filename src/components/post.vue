<template>
    <div class="h-px w-full bg-gray-300"></div>
    <div class="flex flex-col gap-4 md:gap-6 w-full app-window-padding py-6 sm:py-10">
        <div class="flex items-center justify-between gap-4 w-full">
            <div class="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="m16,23.314c-1.252.444-2.598.686-4,.686s-2.748-.242-4-.686v-2.314c0-2.206,1.794-4,4-4s4,1.794,4,4v2.314ZM12,7c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm12,5c0,4.433-2.416,8.311-6,10.389v-1.389c0-3.309-2.691-6-6-6s-6,2.691-6,6v1.389C2.416,20.311,0,16.433,0,12,0,5.383,5.383,0,12,0s12,5.383,12,12Zm-8-3c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Z"/></svg>
                <a class="cursor-pointer transition-colors duration-150 hover:text-sky-500">{{props.name}}</a>
            </div>
            <span class="opacity-40">{{ props.timestamp }}</span>
        </div>
        <div class="flex items-center justify-between gap-4 w-full">
            <span class="opacity-60 text-xl">{{ props.title }}</span>
            <svg @click="toggleFavourite" :class="{'fill-amber-500' : props.favourite }" class="cursor-pointer transition-colors duration-150 hover:fill-amber-300 active:fill-amber-800" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"/></svg>
        </div>
        <div class="max-w-full py-2 h-fit">
            <p class="opacity-50 wrap-anywhere">{{ props.description }}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {type:String, required:true},
        name: {type:String, required:true},
        timestamp: {type:String, required:false},
        description: {type:String, required:true},
        favourite: {type:Boolean, required:false},
    })
    const emit = defineEmits(['toggle-favourite']);

    function toggleFavourite(){
        emit('toggle-favourite');
        return;
    };
</script>