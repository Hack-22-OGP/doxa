export default {
  target: 'static',
  srcDir: 'src/',
  components: true,
  configPath: '~~/tailwind.config.js',
  server: {
    port: 3333, // default: 3000
  },
  env: {
    apiURL:
      process.env.NODE_ENV === 'production'
        ? 'https://73l0w8qedc.execute-api.ap-southeast-1.amazonaws.com/dev/api/'
        : 'http://localhost:3000/dev/api/',
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  buildModules: ['@nuxt/postcss8'],
  css: ['./src/assets/css/tailwind.css'],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://73l0w8qedc.execute-api.ap-southeast-1.amazonaws.com/dev/api/'
        : 'http://localhost:3000/dev/api/',
  },
}
