<template>
    <header :class="{'h-20':showHeader}" class="fixed overflow-hidden transition-all duration-100 h-0 top-0 left-0 w-full z-50 shadow-md">
        <div class="flex items-center justify-between gap-2 flex-nowrap py-4 px-10 h-full w-full bg-gray-100 border-b border-gray-300">
            <div class="sm:w-8 w-6"><img src="/stamp.png" alt="logo" class="w-fit bg-cover"></div>
            <div class="flex items-center gap-4">
                <router-link to="/home" class="group flex items-center h-fit w-fit p-2 rounded-md bg-transparent transition-colors duration-150 hover:bg-gray-200">
                <svg class="transition-colors duration-150 group-hover:fill-sky-600" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z"/></svg>
                </router-link>
                <router-link to="/posts" class="group flex items-center h-fit w-fit p-2 rounded-md bg-transparent transition-colors duration-150 hover:bg-gray-200">
                    <svg class="transition-colors duration-150 group-hover:fill-sky-600" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M40-272q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240v-32Zm800 112H738q11-18 16.5-38.5T760-240v-40q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v40q0 33-23.5 56.5T840-160ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
                </router-link>
                <router-link to="/settings" class="group flex items-center h-fit w-fit p-2 rounded-md bg-transparent transition-colors duration-150 hover:bg-gray-200">
                    <svg class="transition-colors duration-150 group-hover:fill-sky-600" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
                </router-link>
                <router-link to="/" class="group flex items-center h-fit w-fit p-2 rounded-md bg-transparent transition-colors duration-150 hover:bg-gray-200">
                    <svg class="transition-colors duration-150 group-hover:fill-sky-600" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h240q17 0 28.5 11.5T480-160q0 17-11.5 28.5T440-120H200Zm487-320H400q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h287l-75-75q-11-11-11-27t11-28q11-12 28-12.5t29 11.5l143 143q12 12 12 28t-12 28L669-309q-12 12-28.5 11.5T612-310q-11-12-10.5-28.5T613-366l74-74Z"/></svg>
                </router-link>
            </div>
            <div>
                <a href="#" class="group flex items-center h-fit w-fit p-2 rounded-md bg-transparent transition-colors duration-150 hover:bg-gray-300">
                    <svg class="transition-colors duration-150 group-hover:fill-sky-600" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#1f1f1f"><path d="M440-647 244-451q-12 12-28 11.5T188-452q-11-12-11.5-28t11.5-28l264-264q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l264 264q11 11 11 27.5T772-452q-12 12-28.5 12T715-452L520-647v447q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200v-447Z"/></svg>
                </a>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

    let showHeader = ref(false);
    let scrollY = ref(0);

    function handleScroll(){
        scrollY.value = window.scrollY;
    }
    onMounted(()=>{
        handleScroll();
        checkScroll();
        window.addEventListener('scroll', handleScroll);
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('scroll', handleScroll);
    })

    watch(scrollY, (newY)=>{
        if(newY>100){
            showHeader.value = true;
        }else{
            showHeader.value = false;
        }
    })

    function checkScroll(){
        if(scrollY>100){
            showHeader.value = true;
        }else{
            showHeader.value = false;
        }
    };
</script>

<style scoped>
    a svg{
        width: 32px;
        height: 32px;
    }
</style>