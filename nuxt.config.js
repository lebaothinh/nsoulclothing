export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  publicRuntimeConfig: {
    baseUrl: 'khutro.vn'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NSoulClothing Shop',
    htmlAttrs: {
      lang: 'vi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'NSoulClothing Shop', name: 'Ghé shop tại số 10, đường số 1, khu phố 5, phường Hiệp Bình Chánh, quận Thủ Đức, Hồ Chí Minh, Việt Nam', content: 'Với mong muốn mang đến cho cô gái hiện đại sự tự tin, phóng khoáng trong nhịp sống của thời đại, N soul sẽ giúp bạn chọn lựa phong cách thời trang đơn giản, gần gũi, giữ trong mình nét tinh tế thời thượng.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/static/vendor/bootstrap/css/bootstrap.min.css",
    "@/static/fonts/font-awesome-4.7.0/css/font-awesome.min.css",
    "@/static/fonts/iconic/css/material-design-iconic-font.min.css",
    "@/static/fonts/linearicons-v1.0.0/icon-font.min.css",
    "@/static/vendor/animate/animate.css",
    "@/static/vendor/css-hamburgers/hamburgers.min.css",
    "@/static/vendor/animsition/css/animsition.min.css",
    "@/static/vendor/select2/select2.min.css",
    "@/static/vendor/daterangepicker/daterangepicker.css",
    "@/static/vendor/slick/slick.css",
    "@/static/vendor/MagnificPopup/magnific-popup.css",
    "@/static/vendor/perfect-scrollbar/perfect-scrollbar.css",
    "@/static/css/util.css",
    "@/static/css/main.css"
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
  ],

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
    publicPath: '/'
  },
  static: {
    prefix: false
  },
  router: { base: '/'},
}
