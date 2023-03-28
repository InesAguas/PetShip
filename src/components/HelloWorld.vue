<template>
    <NavBar></NavBar>
    <FormAnimal></FormAnimal>
  <router-view></router-view>
</template>

<script>

import FormAnimal from './animais/FormAnimal.vue'
import NavBar from './NavBar.vue'

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
        NavBar
    },
  methods: {


  }
}
</script>
