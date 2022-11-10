<template>
	<div class="relative w-full flex justify-start items-center mx-4 md:mx-0 z-20">
		<div class="flex flex-col gap-4 md:gap-8">
			<div class="flex flex-col gap-1">
				<h1 class="text-5xl text-justify font-display font-bold">
					PEDRO TORRES
				</h1>
				<p class="text-sm text-primary-400 font-medium">
					{{ $t('home.desc')}}
				</p>
			</div>
			<div class="max-w-sm">
				<p class="text-lg text-justify font-bold">
					{{ $t('home.prghps') }}
				</p>
			</div>
			<div class="flex justify-start">
				<app-contact />
			</div>
		</div>
		<div class="absolute flex w-full justify-center -bottom-12 opacity-70 select-none">
			<div class="flex md:hidden flex-col items-center gap-1.5">
				<i-ic-round-swipe-up />
				<span class="text-xs">
					{{ $t('home.swipe') }}
				</span>
			</div>
			<div class="hidden md:flex flex-col items-center gap-1.5">
				<svg width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.78-8.841a.75.75 0 0 0-1.06 0l-1.97 1.97V.75a.75.75 0 0 0-1.5 0v6.379l-1.97-1.97a.75.75 0 0 0-1.06 1.06l3.25 3.25L8 10l.53-.53l3.25-3.25a.75.75 0 0 0 0-1.061Z" clip-rule="evenodd"/></svg>
				<span class="text-xs">
					{{ $t('home.scroll') }}
				</span>
			</div>
		</div>
	</div>
	<div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-stone-900/70 to-stone-800/70 backdrop-blur object-cover z-10" />
	<img class="absolute top-0 left-0 w-full h-full object-left-bottom md:object-center object-cover z-0" src="/background-1.svg" alt="">
</template>