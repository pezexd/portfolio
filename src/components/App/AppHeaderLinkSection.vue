<script setup lang="ts">
const Props = defineProps<{
	dataMenuanchor: string
	href: string
	separator?: boolean
}>()

const location = useBrowserLocation()

const IsActive = computed(() => {
	if(location.value.hash === Props.href)
		return true
	else
		return false
})
</script>

<template>
	<li :data-menuanchor="dataMenuanchor" class="active flex flex-col md:flex-row items-center">
        <a :href="href" :title="dataMenuanchor" :class="IsActive ? 'text-secondary-300' : 'text-white'" class="font-semibold font-display text-xs hover:text-secondary-300 transition ease-in duration-100">
            <slot />
        </a>
		<div v-if="separator" class="mt-5 md:mt-0 md:ml-10 w-[3px] h-[3px] rounded-full bg-secondary-300" />
	</li>
</template>