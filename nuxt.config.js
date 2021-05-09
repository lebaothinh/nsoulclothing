export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  publicRuntimeConfig: {
    baseUrl: 'localhost:3000/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CozaShop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/static/vendor/bootstrap/css/bootstrap.min.css",
    "@/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css",
    "@/assets/fonts/iconic/css/material-design-iconic-font.min.css",
    "@/assets/fonts/linearicons-v1.0.0/icon-font.min.css",
    "@/static/vendor/animate/animate.css",
    "@/static/vendor/css-hamburgers/hamburgers.min.css",
    "@/static/vendor/animsition/css/animsition.min.css",
    "@/static/vendor/select2/select2.min.css",
    "@/static/vendor/daterangepicker/daterangepicker.css",
    "@/static/vendor/slick/slick.css",
    "@/static/vendor/MagnificPopup/magnific-popup.css",
    "@/static/vendor/perfect-scrollbar/perfect-scrollbar.css",
    "@/assets/css/util.css",
    "@/assets/css/main.css"
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  static: {
    prefix: false
  }
}
