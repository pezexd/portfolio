<script lang="ts">
    export default {
        inheritAttrs: false
    }
</script>

<script setup lang="ts">
    defineProps<{
        name: string
    }>()
</script>

<template>
    <div class="relative flex">
        <label :for="name" class="absolute -top-2.5 left-0 bg-stone-900 px-1 text-sm ml-3">
            <slot />
        </label>
        <input :id="name" :name="name" v-bind="$attrs" class="bg-transparent w-full px-3 py-2 border-2 border-stone-300/10 rounded-lg outline-none focus:border-secondary-300">
    </div>
</template>