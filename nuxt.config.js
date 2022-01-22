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
  env: {
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
}
