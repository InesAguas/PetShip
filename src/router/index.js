import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld'
//import App from '../App'

const routes = [
    {
        path: '/olaaa',
        name: 'teste',
        component: HelloWorld
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router