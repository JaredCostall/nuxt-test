export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    router: { base: '/nuxt-test/' },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'westfield-the-briefing',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        'nuxt-i18n',
    ],

    // Content module configuration (https://go.nuxtjs.dev/content-config)
    content: {},

    // i18n module configuration
    i18n: {
        locales: ['en', 'nl'],
        defaultLocale: 'en',
        strategy: 'prefix',
        vueI18nLoader: true,
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: {
                    welcome: 'Welcome',
                },
                nl: {
                    welcome: 'Bienvenue',
                },
            },
        },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    eslint: {
        fix: true,
    },
}
