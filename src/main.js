import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import jquery from 'jquery'
import popper from 'popper.js'

window.$ = jquery
window.jQuery = jquery
window.Popper = popper

createApp(App).mount('#app')
