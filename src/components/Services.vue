<template>
	<div class="w-full flex flex-col md:flex-row justify-around md:justify-between md:items-center gap-4 mx-4 md:mx-0">
		<div class="flex flex-col justify-around gap-4 md:h-full">
			<div class="flex flex-col gap-2 max-w-xs">
				<app-section-title>
					{{ $t('services.title') }}
				</app-section-title>
				<p class="text-sm font-medium">
					{{ $t('services.desc') }}
				</p>
				<a href="" class="text-xs text-primary-500 font-semibold">
					{{ $t('services.more') }}
				</a>
			</div>
			<div class="flex justify-start md:justify-start">
				<app-contact />
			</div>
		</div>
		<section class="flex flex-col gap-2">
			<services-card :title="$t('services.web')" :description="$t('services.web.desc')">
				<i-fluent-globe-desktop-20-filled />
			</services-card>
			<services-card :title="$t('services.design')" :description="$t('services.design.desc')">
				<i-ph-ruler-fill />
			</services-card>
			<services-card :title="$t('services.branding')" :description="$t('services.branding.desc')">
				<i-ph-pencil-circle-fill />
			</services-card>
			<services-card :title="$t('services.server')" :description="$t('services.server.desc')">
				<i-ph-cloud-fill />
			</services-card>
		</section>
	</div>
</template>