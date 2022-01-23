export default {
  ssr: false,
  target: 'static',
  srcDir: 'src/',
  components: true,
  configPath: '~~/tailwind.config.js',
  generate: {
    fallback: '404.html',
  },
  server: {
    port: 3333, // default: 3000
  },
  publicRuntimeConfig: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'http://doxa.mindnaked.com'
        : 'http://localhost:3333',
    apiURL:
      process.env.NODE_ENV === 'production'
        ? 'https://api.mindnaked.com/dev/api'
        : 'http://localhost:3000/dev/api',
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
  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt'],
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://api.mindnaked.com/dev/api'
        : 'http://localhost:3000/dev/api',
  },
  head: {
    title: 'Doxa, your opinion counts! Literally.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
}
