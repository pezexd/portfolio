<script setup lang="ts">
import { FormSelect } from '~/types/SelectTypes'
import { Form as FormVee, Field as FieldVee, ErrorMessage as ErrorVee } from 'vee-validate'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import { useLanguage } from '~/stores/LanguageStores';

const { t } = useI18n()
const Language = useLanguage()

const Services: FormSelect[] = [
	{
		value: 'uiux',
		title: 'UI/UX Design'
	},
	{
		value: 'website',
		title: 'Website'
	},
	{
		value: 'branding',
		title: 'Branding'
	},
	{
		value: 'server',
		title: 'Web Server'
	},
	{
		value: 'other',
		title: 'Other'
	},
]

const Budgets: FormSelect[] = [
	{
		title: '50$',
		value: 50
	},
	{
		title: '100$',
		value: 100
	},
	{
		title: '150$',
		value: 150
	},
	{
		title: '200$',
		value: 200
	},
	{
		title: 'Other',
		value: 'Other'
	},
]

const LabelClasses = 'absolute -top-2.5 left-0 bg-stone-900 px-1 text-sm ml-3'
const InputClasses = 'bg-transparent w-full px-3 py-2 border-2 border-stone-300/10 rounded-lg outline-none focus:border-secondary-300'
const TextareaClasses = 'bg-transparent w-full px-3 py-1.5 border-2 border-stone-300/10 rounded-lg outline-none focus:border-secondary-300'

const SchemaRules = yup.object({
	name: yup.string().required(),
	email: yup.string().email().required(),
	interest: yup.string().required(),
	budget: yup.mixed().required(),
	message: yup.string().min(8).required()
})

const EmailKey = process.env.EMAIL_KEY

const FormMessage = ref({
	error: false,
	text: ''
})

interface FormContact {
	name: string
	email: string
	interest: string
	budget: string
	message: string
}

function SubmitContact(values: FormContact) {
	emailjs.send('default_service', 'template_k61spsg', values as unknown as Record<string, unknown>, EmailKey)
		.then((result) => {
			FormMessage.value.text = `${t('contact.sended')} ${result.text}`
		}, (error) => {
			FormMessage.value.error = true
			FormMessage.value.text = `${t('contact.notsent')} ${error.text}`
		});
}
</script>

<template>
	<div class="w-full flex flex-col justify-around gap-4 mx-4 md:mx-0">
		<div class="flex flex-col gap-2 max-w-xs">
			<app-section-title>
				{{ $t('contact') }}
			</app-section-title>
			<p class="text-sm font-medium">
				{{ $t('contact.desc') }}
				<span v-if="Language.GetLang === 'es'" class="text-sm font-medium text-primary-400">
					Pueden haber algunos errores de traduccion en esta seccion.
				</span>
			</p>
		</div>
		<div class="w-full flex">
			<form-vee :validation-schema="SchemaRules" @submit.prevent="SubmitContact as unknown">
				<div class="flex flex-col gap-4">
					<div class="flex flex-col md:flex-row gap-4 md:gap-2">
						<div class="relative flex flex-col gap-1">
							<label for="name" :class="LabelClasses">
								{{ $t('contact.form.name') }}
							</label>
							<field-vee name="name" title="Name" type="text" :class="InputClasses" />
							<error-vee name="name" class="first-letter:capitalize text-xs text-red-500" />
						</div>
						<div class="relative flex flex-col gap-1">
							<label for="name" :class="LabelClasses">
								{{ $t('contact.form.email') }}
							</label>
							<field-vee name="email" title="Email" type="email" :class="InputClasses" />
							<error-vee name="email" class="first-letter:capitalize text-xs text-red-500" />
						</div>
					</div>

					<div class="flex flex-col md:flex-row gap-4 md:gap-2">
						<div class="flex flex-col gap-1 w-full">
							<app-select :data="Services" name-prop="interest">
								{{ $t('contact.form.interest') }}
							</app-select>
							<error-vee name="interest" class="first-letter:capitalize text-xs text-red-500" />
						</div>
						<div class="flex flex-col gap-1 w-full">
							<app-select :data="Budgets" name-prop="budget">
								{{ $t('contact.form.budget') }}
							</app-select>
							<error-vee name="budget" class="first-letter:capitalize text-xs text-red-500" />
						</div>
					</div>

					<div class="relative flex flex-col gap-1 items-end col-span-2">
                        <label for="message" :class="LabelClasses">
							{{ $t('contact.form.message') }}
                        </label>
						<field-vee name="message" title="Message" as="textarea" cols="30" rows="5" :class="TextareaClasses" />
						<error-vee name="message" class="first-letter:capitalize text-xs text-red-500" />
                    </div>
					<div class="flex justify-between items-center">
						<div :class="FormMessage.error ? 'text-red-500' : 'text-green-500'">
							{{ FormMessage.text }}
						</div>
						<button type="submit" class="flex gap-2 px-4 py-2 border-2 border-stone-300/10 hover:border-primary-500 justify-center items-center rounded-full transition ease-in duration-100 disabled:opacity-70 disabled:hover:border-stone-300/10">
							<span class="font-display font-medium text-sm">
								{{ $t('contact.form.submit') }}
							</span>
							<i-ph-arrow-up-right class="text-xs text-primary-500" />
						</button>
					</div>
				</div>
			</form-vee>
		</div>
	</div>
</template>