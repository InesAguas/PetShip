import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import FormLogin from '../components/FormLogin'
import FormRegisto from '../components/FormRegisto'
import PageAdotar from '../components/animais/PageAdotar'
import PageAssociacoes from '../components/associacoes/PageAssociacoes'
import PageAnunciarAnimal from '../components/animais/PageAnunciarAnimal'
import PagePerfil from '../components/perfil/PagePerfil'
import PageDesaparecido from '../components/animais/PageDesaparecido'
import PagePetSitting from '../components/animais/PagePetSitting'
import PaginaInicial from '../components/PaginaInicial'
import PageMensagens from '../components/mensagens/PageMensagens'
import PageAnimal from '../components/animais/PageAnimal'
import EditarPerfil from '../components/perfil/EditarPerfil'
import GestaoAnimais from '../components/dashboard/GestaoAnimais'
import PasswordEsquecida from '../components/PasswordEsquecida'

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
        path: '/',
        name: 'home',
        component: PaginaInicial
    },
    {
        path: '/login',
        name: 'login',
        component: FormLogin,
        beforeEnter: [deslogado]
    },
    {
        path: '/password-esquecida',
        name: 'password-esquecida',
        component: PasswordEsquecida,
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
        props: true,
        component: PageAdotar
    }
    ,
    {
        path: '/associacoes',
        name: 'associacoes',
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
    },
    {
        path:'/perfil/:id',
        name:'perfilOutro',
        component: PagePerfil,
    },
    {
        path: '/desaparecido',
        name: 'desaparecido',
        component: PageDesaparecido
    },
    {
        path: '/petsitting',
        name: 'petsitting',
        component: PagePetSitting
    },
    {
        path: '/animal/:id',
        name: 'animal',
        component: PageAnimal
    },
    {
        path:'/mensagens',
        name: 'mensagens',
        props: true,
        component: PageMensagens,
        beforeEnter: [logado]
        
    },
    {
        path:'/editarPerfil',
        name: 'editarPerfil',
        component: EditarPerfil,
        beforeEnter: [logado]
    },
    {
        path: '/dashboard/animais',
        name: 'dashboardAnimais',
        component: GestaoAnimais,
        beforeEnter: [logado]
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router