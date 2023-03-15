import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import jquery from 'jquery'
import popper from 'popper.js'
import router from './router'
import axios from 'axios'


window.$ = jquery
window.jQuery = jquery
window.Popper = popper

const app = createApp(App)
app.use(router)


axios.defaults.baseURL = "http://127.0.0.1:8000/api"
app.config.globalProperties.axios=axios

app.mount('#app')


