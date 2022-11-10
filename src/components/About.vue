<script setup lang="ts">

const Specialists: string[] = ['HTML', 'CSS', 'TailwindCSS', 'Javascript', 'Typescript', 'Vue.js', 'Node.js', 'MongoDB', 'RESTful API']

</script>

<template>
	<div class="w-full flex flex-col md:flex-row justify-around md:justify-between md:items-center gap-4 mx-4 md:mx-0">
		<div class="flex flex-col justify-start gap-4 md:h-full">
			<div class="flex flex-col gap-2 max-w-xs">
				<app-section-title>
					{{ $t('about.title') }}
				</app-section-title>
				<p class="text-sm font-medium text-primary-400">
					{{ $t('about.desc') }}
				</p>
			</div>
            <div class="max-w-sm">
				<p class="text-lg text-justify font-bold">
					{{ $t('about.story') }}
				</p>
			</div>
		</div>
		<div class="flex flex-col justify-start gap-4 md:h-full">
			<div class="flex flex-col gap-2 max-w-xs">
				<app-section-title>
					{{ $t('about.spec') }}
				</app-section-title>
				<p class="text-sm font-medium text-primary-400">
					{{ $t('about.spec.desc') }}
				</p>
			</div>
			<section class="flex flex-wrap gap-2 max-w-sm">
				<article v-for="Specialist in Specialists" :key="Specialist" class="flex justify-center rounded-lg px-3 py-1 text-sm uppercase bg-gradient-to-br from-stone-800/70 to-stone-700/50 select-none hover:text-secondary-300 transition ease-in duration-100">
					{{ Specialist }}
				</article>
			</section>
		</div>
	</div>
</template>