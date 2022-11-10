<script setup lang="ts">
defineProps<{
	href: string
	separator?: boolean
}>()
</script>

<template>
	<div class="flex items-center">
		<a :href="href" title="Link" class="font-semibold font-display text-xs text-white hover:text-secondary-300 transition ease-in duration-100">
			<slot />
		</a>
		<div v-if="separator" class="ml-10 w-[3px] h-[3px] rounded-full bg-secondary-300" />
	</div>
</template>