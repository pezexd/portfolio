<script setup lang="ts">
defineProps<{
	title: string
	description: string
}>()
</script>

<template>
	<article class="flex gap-2 px-3 py-3 bg-gradient-to-br from-stone-800/70 to-stone-700/50 rounded-lg md:first-letter:max-w-xs">
		<div class="flex justify-center items-center">
			<div class="flex items-center px-2 py-2 bg-secondary-700/30 text-secondary-300 rounded-full text-lg">
				<slot />
			</div>
		</div>
		<div>
			<h3 class="font-display font-medium">
				{{ title }}
			</h3>
			<p class="text-xs opacity-70">
				{{ description }}
			</p>
		</div>
	</article>
</template>