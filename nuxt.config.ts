// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/icon", "@nuxt/ui", "nuxt-icon", "shadcn-nuxt", "@nuxtjs/color-mode"],
  ui: {
    safelistColors: ['venice-blue', 'atlantis'],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  devServer: {
    port: 3001
  }
})