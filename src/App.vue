<template>
  <FormLogin></FormLogin>
  <NavBar></NavBar>

</template>

<script>
import FormLogin from './components/FormLogin.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    FormLogin
    NavBar
  }
}
</script>

