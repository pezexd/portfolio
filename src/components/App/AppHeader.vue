<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'

const location = useBrowserLocation()

const IsSection = computed(() => {
	if (location.value.hash !== '#home' && location.value.hash !== '')
		return true
	else
		return false
})

const ShowMenu = ref<boolean>(false)

const ToggleMenu = useToggle(ShowMenu)

interface RouteT {
	menuanchor: string
	href: string
	text: string
	separator: boolean
}

const Routes = ref<RouteT[]>([
	{
	menuanchor: 'home',
	href: '#home',
	separator: true,
	text: 'nav.home'
	},
	{
	menuanchor: 'services',
	href: '#services',
	separator: true,
	text: 'nav.services'
	},
	{
	menuanchor: 'works',
	href: '#works',
	separator: true,
	text: 'nav.works'
	},
	{
	menuanchor: 'about',
	href: '#about',
	separator: true,
	text: 'nav.about'
	},
	{
	menuanchor: 'contact',
	href: '#contact',
	separator: true,
	text: 'nav.contact'
	},
])

</script>

<template>
	<div :class="IsSection ? 'bg-stone-900/50 backdrop-blur-sm' : '' " class="fixed top-0 left-0 w-full z-10 py-6 px-0 md:px-12">
		<header class="container flex items-start md:items-center justify-between gap-8">
			<div class="flex items-center">
				<a href="#home" title="Logo">
					<img src="/logo.png" class="w-32 md:w-36" alt="">
				</a>
			</div>
			<!-- DesktopNav -->
			<nav class="hidden md:flex flex-col md:flex-row md:flex-wrap items-center gap-5 mt-1.5">
				<ul id="menu" class="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-10 items-center">
					<app-header-link-section v-for="Route in Routes" :key="Route.text" :data-menuanchor="Route.menuanchor" :href="Route.href" :separator="Route.separator">
						{{ $t(`${Route.text}`) }}
					</app-header-link-section>
				</ul>
				<app-language />
			</nav>
			<!-- MobileNav -->
			<transition-root
				as="nav"
				:show="ShowMenu"
				enter="transform transition duration-[300ms]"
				enter-from="opacity-0 translate-x-[300px] -translate-y-[300px] scale-0"
				enter-to="opacity-100 translate-x-0 translate-y-0 scale-100"
				leave="transform duration-300 transition ease-in-out"
				leave-from="opacity-100"
				leave-to="opacity-0"
				:class="ShowMenu ? 'flex md:hidden' : 'hidden md:hidden'" class="absolute top-0 left-0 z-20 w-full h-screen py-5 flex-col justify-center items-center gap-5 bg-stone-800"
			>
				<ul id="menu" class="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
					<app-header-link-section v-for="Route in Routes" :key="Route.text" :data-menuanchor="Route.menuanchor" :href="Route.href" :separator="Route.separator" @click="ToggleMenu()">
						{{ $t(`${Route.text}`) }}
					</app-header-link-section>
				</ul>
				<app-language />
			</transition-root>
			<button type="button" title="Menu" class="absolute flex md:hidden top-0 right-0 z-30 mt-4 mr-6 px-2 py-2 border-2 border-stone-300/10 hover:border-stone-300/70 justify-center items-center rounded-full transition ease-in duration-100" @click="ToggleMenu()">
				<i-ph-x-fill v-if="ShowMenu" class="text-xs" />
				<i-ph-list-fill v-else class="text-xs" />
			</button>
		</header>
	</div>
</template>