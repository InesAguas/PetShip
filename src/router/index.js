import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import FormLogin from '../components/FormLogin'
//import App from '../App'

const routes = [
    {
        path: '/',
        name: 'login',
        component: FormLogin
    },
    {
        path: '/teste',
        name: 'teste',
        component: HelloWorld
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router