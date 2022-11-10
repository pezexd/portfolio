import type { Module } from '~/types/module'

import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

export const install: Module = ({ app }) => {
    const i18n = createI18n({
        legacy: false,
        locale: 'en',
        messages,
    })
    app.use(i18n)
}
