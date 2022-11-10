import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import EnvironmentPlugin from 'vite-plugin-environment'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/head', '@vueuse/core', 'vue-i18n'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dts: true,
      resolvers: [IconsResolver(), HeadlessUiResolver()],
    }),
    Icons({
      scale: 1.5,
    }),
    EnvironmentPlugin({
      EMAIL_KEY: undefined,
    }),
    vueI18n({
      runtimeOnly: false,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'src/locales/**')],
    })
  ],
  ssgOptions: {
    script: 'async',
    format: 'cjs',
    mock: true,
    formatting: 'minify',
  },
})
