<template>
	<footer class="container flex flex-col md:flex-row gap-4 justify-around items-start md:items-center text-xs py-4">
		<div class="flex flex-col md:flex-row gap-4">
			<p class="opacity-70">
				© {{new Date().getFullYear()}} PEZE.DEV<br>
				{{ $t('footer.copyright') }}
			</p>
		</div>
		<ul class="flex flex-col">
			<li>
				<a href="#" title="Support" class="opacity-70 hover:opacity-100 transition ease-in duration-100">
					{{ $t('footer.links.support') }}
				</a>
			</li>
			<li>
				<a href="#" title="Privacy policy" class="opacity-70 hover:opacity-100 transition ease-in duration-100">
					{{ $t('footer.links.privacy') }}
				</a>
			</li>
		</ul>
		<div class="flex gap-4">
			<a href="https://github.com/pezexd" target="_blank" title="Github" class="flex px-2 py-2 border-2 border-stone-300/10 hover:border-stone-300/70 justify-center items-center rounded-full transition ease-in duration-100">
				<i-ph-github-logo-fill />
			</a>
			<a href="https://www.instagram.com/peze.dev" target="_blank" title="Instagram" class="flex px-2 py-2 border-2 border-stone-300/10 hover:border-stone-300/70 justify-center items-center rounded-full transition ease-in duration-100">
				<i-ri-instagram-fill />
			</a>
		</div>
	</footer>
</template>