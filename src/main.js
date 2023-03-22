import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import jquery from 'jquery'
import popper from 'popper.js'
import router from './router'
import axios from 'axios'


import { createI18n } from 'vue-i18n'
import { pt } from './locales/pt.js'
import { en } from './locales/en.js'

window.$ = jquery
window.jQuery = jquery
window.Popper = popper

const languages = {
    pt, 
    en
}

const i18n = createI18n({
    locale: 'pt',
    fallbacklocale: 'pt',
    messages: languages
})

const app = createApp(App)
app.use(i18n)
app.use(router)

axios.defaults.baseURL = "http://127.0.0.1:8000/api"
app.config.globalProperties.axios=axios

app.mount('#app')


