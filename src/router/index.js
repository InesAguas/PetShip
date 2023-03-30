import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import FormLogin from '../components/FormLogin'
import FormRegisto from '../components/FormRegisto'
import CardAnimal from '../components/CardAnimal'
//import App from '../App'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: FormLogin
    },
    {
        path: '/teste',
        name: 'teste',
        component: HelloWorld
    },
    {
        path: '/registar',
        name: 'registar',
        component: FormRegisto
    },
    {
        path: '/card',
        name: 'card',
        component: CardAnimal
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router