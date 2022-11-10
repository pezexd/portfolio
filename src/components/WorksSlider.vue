<script setup lang="ts">
import { Work as WorkT } from '~/types/WorkTypes'

defineProps<{
	data: WorkT
}>()
</script>

<template>
	<article class="snap-always snap-center shrink-0 h-auto w-full max-w-xs rounded-lg flex flex-col relative">
		<img class="rounded-t-lg object-cover object-top w-full h-40" :src="data.imgsrc" alt="">
		<a
			class="absolute top-0 right-0 bg-gradient-to-br from-stone-800/70 to-stone-700/50 text-secondary-300 hover:text-secondary-200 rounded-tr-lg rounded-bl-lg px-2 py-2 transition ease-in duration-100"
			:title="data.title"
			:href="data.href"
			target="_blank"
		>
			<i-ph-link />
		</a>
		<div class="rounded-b-lg px-3 py-3 bg-gradient-to-br from-stone-800/70 to-stone-700/50">
			<div class="flex justify-between items-center">
				<h3 class="text-lg font-display font-medium">
					{{ data.title }}
				</h3>
				<p class="text-xs text-primary-300">
					{{ data.type }}
				</p>
			</div>
		</div>
	</article>
</template>