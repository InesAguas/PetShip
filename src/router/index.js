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
import NovaPassword from '../components/NovaPassword'
import GestaoAnuncios from '../components/dashboard/GestaoAnuncios'
import GestaoStock from '../components/dashboard/GestaoStock'
import PaginaDashboard from '../components/dashboard/PaginaDashboard'
import GestaoEscalas from '../components/dashboard/GestaoEscalas'

//import App from '../App'

function logado() {
    if (sessionStorage.getItem('utilizador') == null) {
        return '/login'
    }
}

function deslogado() {
    if (sessionStorage.getItem('utilizador') != null) {
        return '/adotar'
    }
}

function isTipo2() {
    if (sessionStorage.getItem('utilizador') != null) {
        let utilizador = JSON.parse(sessionStorage.getItem('utilizador'))
        if (utilizador.tipo != 2) {
            return '/'
        }
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
        path: '/novapassword/:token',
        name: 'novapassword',
        component: NovaPassword,
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
        path:'/dashboard/mensagens',
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
        beforeEnter: [logado, isTipo2]
    },
    {
        path: '/dashboard/anuncios',
        name: 'dashboardAnuncios',
        component: GestaoAnuncios,
        props: true,
        beforeEnter: [logado]
    },
    {
        path: '/dashboard/stock',
        name: 'dashboardStock',
        component: GestaoStock,
        beforeEnter: [logado, isTipo2]
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: PaginaDashboard,
        beforeEnter: [logado]
    },
    {
        path: '/dashboard/escalas',
        name: 'dashboardEscalas',
        component: GestaoEscalas,
        beforeEnter: [logado, isTipo2]
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router