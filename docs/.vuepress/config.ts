import process from 'node:process'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { loadEnv } from 'vite'
import { defineUserConfig } from 'vuepress'
import { path } from 'vuepress/utils'
import { navbar, navbarZh, sidebar, sidebarZh } from './configs'

// development production
const mode = process.env.NODE_ENV || 'production'
const env = loadEnv(mode, process.cwd(), 'VITE_')

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: env.VITE_VUEPRESS_TITLE || 'DaYangPay',
      description: env.VITE_VUEPRESS_DESCRIPTION || 'Documentation for Merchants',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '大洋支付',
      description: '商户接口文档',
    },
  },

  bundler: viteBundler(),
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    editLink: false,
    contributors: false,
    lastUpdated: false,

    colorMode: 'dark',

    locales: {
      '/': {
        navbar,
        sidebar,
      },

      '/zh/': {
        navbar: navbarZh,
        sidebar: sidebarZh,

        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
      },
    },
  }),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],

})
