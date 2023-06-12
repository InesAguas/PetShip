import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import jquery from 'jquery'
import popper from 'popper.js'
import router from './router'
import axios from 'axios'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import VueSocketIO from 'vue-3-socket.io'
//import SocketIO from 'socket.io-client'

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
app.use(store)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCB6KjQGetQmdzbyolgPMBLvvY_Zg-Y3bY',
        // language: 'de',
    },
})

app.use(new VueSocketIO({
    debug: true,
    //connection: 'http://127.0.0.1:3000',
    connection: 'https://petship-websockets-fsafa.ondigitalocean.app/',
    //withCredentials: true,
}))


if(localStorage.getItem('token') != null && localStorage.getItem('utilizador') != null){ 
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    sessionStorage.setItem('utilizador', localStorage.getItem('utilizador'))
    sessionStorage.setItem('token', localStorage.getItem('token'))
}

if(sessionStorage.getItem('token') != null && sessionStorage.getItem('utilizador') != null){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
}

axios.defaults.baseURL = "https://api.petship.pt/api"

axios.defaults.headers.common['Accept-Language'] = i18n.global.locale

//axios.defaults.baseURL = "http://127.0.0.1:8000/api"
app.config.globalProperties.axios=axios

app.mount('#app')




