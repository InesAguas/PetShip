import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import FormLogin from '../components/FormLogin'
import FormRegisto from '../components/FormRegisto'
import PageAdotar from '../components/animais/PageAdotar'
import PageAssociacoes from '../components/associacoes/PageAssociacoes'
import PageAnunciarAnimal from '../components/animais/PageAnunciarAnimal'
import PagePerfil from '../components/perfil/PagePerfil'

//import App from '../App'

function logado() {
    if (localStorage.getItem('utilizador') == null) {
        return '/login'
    }
}

function deslogado() {
    if (localStorage.getItem('utilizador') != null) {
        return '/adotar'
    }
}

const routes = [
    {
        path: '/login',
        name: 'login',
        component: FormLogin,
        beforeEnter: [deslogado]
    },
    {
        path: '/teste',
        name: 'teste',
        component: HelloWorld,
        beforeEnter: [logado]
    },
    {
        path: '/registar',
        name: 'registar',
        component: FormRegisto,
        beforeEnter: [deslogado]
    },
    {
        path: '/adotar',
        name: 'adotar',
        component: PageAdotar
    }
    ,
    {
        path: '/associacao',
        name: 'associacao',
        component: PageAssociacoes
    },
    {
        path:'/anunciar',
        name:'anunciar',
        component: PageAnunciarAnimal,
        beforeEnter: [logado]
    },
    {
        path:'/perfil',
        name:'perfil',
        component: PagePerfil,
        beforeEnter: [logado]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router