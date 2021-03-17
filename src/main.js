import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import store from './store'
import en from './translations/en.json'
import pl from './translations/pl.json'

const i18n = createI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages: {
    en: en,
    pl: pl,
  },
})

const app = createApp(App)
app.use(store)
app.use(i18n)
app.mount('#app')
