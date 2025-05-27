// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@vueuse/nuxt'],
  srcDir: 'src/',
  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false // 取消自动前缀
  //   }
  // ],
  app: {
    // head
    head: {
      title: 'Nuxt',
      meta: [
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge,chrome=1'
        },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
        },
        {
          name: 'description',
          content: 'Nuxt3'
        }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/fontawesome.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/brands.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/solid.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/regular.min.css'
        }
      ]
    }
  },

  // css
  css: ['~/assets/css/main.css', '~/assets/css/vendor/aos.css']
})
