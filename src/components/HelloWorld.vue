<template>
    <NavBar></NavBar>
   
    <PerfilParticular></PerfilParticular>
    <FormAnimal></FormAnimal>
  <router-view></router-view>
</template>

<script>

import FormAnimal from './animais/FormAnimal.vue'
import NavBar from './NavBar.vue'
import PerfilParticular from './perfil/PerfilParticular.vue'

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
        FormAnimal,
        NavBar,
        PerfilParticular
    },
  methods: {


  }
}
</script>
