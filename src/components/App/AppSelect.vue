<script lang="ts">
export default {
    inheritAttrs: false
}
</script>

<script setup lang="ts">
import { Field as FieldVee } from 'vee-validate'
import { FormSelect } from '~/types/SelectTypes'

defineProps<{
    data: FormSelect[]
    nameProp: string
}>()
</script>

<template>
    <div class="relative w-full flex">
        <label :for="nameProp" class="absolute -top-2.5 left-0 bg-stone-900 px-1 text-sm ml-3">
            <slot />
        </label>
        <i-ph-caret-down class="absolute top-3 right-0 text-xs mr-3 pointer-events-none" />
        <field-vee :name="nameProp" :title="nameProp" as="select" v-bind="$attrs" class="bg-transparent w-full px-3 py-2 border-2 border-stone-300/10 rounded-lg outline-none focus:border-secondary-300 appearance-none">
            <option v-for="option in data" :key="option.value" :value="option.value" class="bg-stone-800 text-sm">
                {{ option.title }}
            </option>
        </field-vee>
    </div>
</template>