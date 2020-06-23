import path from 'path'

export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/css/tailwind.css'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
  ],
  srcDir: 'src/',
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    }

  }
}
