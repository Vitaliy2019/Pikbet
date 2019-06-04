import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import enLocale from '../lang/en'
import ruLocale from '../lang/ru'

Vue.use(VueI18n)

const messages = {
  ru: {
    $vuetify: {
      ...ruLocale
    }
  },
  en: {
    $vuetify: {
      ...enLocale
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ru', // set locale
  messages // set locale messages
})

Vue.use(Vuetify, {
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
})
