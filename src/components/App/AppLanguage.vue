<script setup lang="ts">
import { useLanguage } from '~/stores/LanguageStores'
import { Languages } from '~/types/LanguageTypes'

const { locale } = useI18n()
const Language = useLanguage()

const SetLang = () => {
	if(locale.value === 'en'){
		Language.SetLang(Languages.spanish)
		locale.value = 'es'
	}
	else {
		Language.SetLang(Languages.english)
		locale.value = 'en'
	}
}
</script>

<template>
	<app-btn-circle title="Language" @click="SetLang">
		<i-tabler-language />
	</app-btn-circle>
</template>