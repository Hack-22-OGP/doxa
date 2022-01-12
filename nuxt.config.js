export default {
  target: 'static',
  srcDir: 'src/',
  configPath: '~~/tailwind.config.js',
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
}
