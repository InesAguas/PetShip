<template>
    <NavBar></NavBar>
   
    <PerfilParticular></PerfilParticular>

    <PerfilAssociacao></PerfilAssociacao>
  <router-view></router-view>
</template>

<script>

import NavBar from './NavBar.vue'
import PerfilParticular from './perfil/PerfilParticular.vue'
import PerfilAssociacao from './perfil/PerfilAssociacao.vue'

export default {
  name: 'HelloWorld',
  data() {
    return {
      utilizador: {
        nome: "",
        apelido: ""
      }
      
    }
  },
  components: {
        NavBar,
        PerfilParticular,
        PerfilAssociacao
    },
  methods: {


  }
}
</script>
