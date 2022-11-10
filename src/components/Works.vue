<script setup lang="ts">
import { useWorks } from '~/stores/WorkStores'

const Works = useWorks()

onMounted(async () => {
	await Works.Get()
})

const Slider = ref<HTMLElement | null>(null)

const Distance = 344

function ScrollR() {
	Slider.value?.scrollTo({
		left: Slider.value.scrollLeft + Distance,
		behavior: 'smooth'
	})
}

function ScrollL() {
	Slider.value?.scrollTo({
		left: Slider.value.scrollLeft - Distance,
		behavior: 'smooth'
	})
}

const IsOverflowing = computed((): boolean | undefined => {
	if ( Slider.value?.scrollWidth !== undefined && Slider.value?.clientWidth !== undefined){
		if (Slider.value.scrollWidth > Slider.value.clientWidth) {
			return true
		} else {
			return false
		}
	}
})

</script>

<template>
  <div class="w-full flex flex-col justify-around items-start gap-4 px-4 md:px-0">
		<div class="flex flex-col gap-2 max-w-xs">
			<app-section-title>
				{{ $t('works.title') }}
			</app-section-title>
			<p class="text-sm font-medium">
				{{ $t('works.desc') }}
			</p>
		</div>
		<div class="relative w-full flex">
			<div v-if="Works.Works[0]" ref="Slider" :class="IsOverflowing ? 'pb-14': 'pb-0'" class="w-full flex gap-3 md:gap-6 snap-x snap-mandatory overflow-auto touch-pan-x scrollbar">
				<div class="hidden md:flex snap-center shrink-0 w-40 max-w-xs bg-stone-800 opacity-10 rounded-r-lg" />
				<works-slider v-for="Work in Works.Works" :key="Work.title" :data="Work" />
			</div>
			<div v-if="IsOverflowing" class="absolute bottom-3 left-0 flex gap-2 md:gap-4">
				<app-btn-circle title="Move left" @click="ScrollL">
					<i-ph-caret-left />
				</app-btn-circle>
				<app-btn-circle title="Move right" @click="ScrollR">
					<i-ph-caret-right />
				</app-btn-circle>
			</div>
		</div>
		<div>
			<app-contact />
		</div>
	</div>
</template>