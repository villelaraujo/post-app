<template>
    <section :id = "props.id" class="min-h-screen flex flex-col px-4">
        <div class="flex flex-col flex-1 max-w-[1400px] w-full mx-auto">
            <slot></slot>
        </div>
    </section>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        id:{type:String, required:true}
    });
</script>