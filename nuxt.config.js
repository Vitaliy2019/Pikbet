module.exports = {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
    //'@nuxtjs/redirect-module'
    //'@nuxtjs/sitemap'
  ],
  /* sitemap: {
     path: '/sitemap.xml',
     hostname: 'https://www.acrtr.ru',
     cacheTime: 1000 * 60 * 15,
     gzip: true,
     generate: false, // Enable me when using nuxt generate
     exclude: [
       '/Cabinet/**'
       // '/admin/**'
     ],
     routes() {
       return getAppRoutes()
     }
   },*/
  axios: {
    // baseURL: // process.env.NODE_ENV !== 'production' ? 'http://localhost:59501' : ''
    baseURL: 'https://localhost:5001'
    // baseURL: 'https://api.acrtr.ru'
    // baseURL: apiUrl
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/Account',
            method: 'post',
            propertyName: 'token'
          },
          user: {
            url: '/api/Client/getuser',
            method: 'get',
            propertyName: 'user'
          },
          logout: false
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    redirect: {
      login: '/Cabinet/default',
      logout: '/',
      callback: '/Login',
      home: '/'
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Прогнозы на спорт. Стань успешным каппером. Регистрируйся на сайте и зарабатывай на своих прогнозах. Следи за успешными капперами. Повторяй ставки и выигрывай вместе с ними.',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Прогнозы на спорт. Стань успешным каппером. Регистрируйся на сайте и зарабатывай на своих прогнозах. Следи за успешными капперами. Повторяй ставки и выигрывай вместе с ними.'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }, {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: ['~/assets/style/app.styl'],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}