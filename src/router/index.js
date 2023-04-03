import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import FormLogin from '../components/FormLogin'
import FormRegisto from '../components/FormRegisto'
import PageAdotar from '../components/PageAdotar'
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
        path: '/adotar',
        name: 'adotar',
        component: PageAdotar
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

//const isAuthenticated = false

/*router.beforeEach(async (to) => {
    if (!isAuthenticated && to.name !== 'Login' ) {
      return { name: 'login' }
    } else if(isAuthenticated && to.name == 'login') {
        return { name: 'teste' }
    }
  })
*/
export default router