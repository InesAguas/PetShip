<template>
<nav class="navbar navbar-expand-lg  navbar-expand-md bg-body-tertiary pb-0 pt-0" style="background-color: #FD7E14;">
    <div class="container-fluid">
      <a class="navbar-brand" href="/" style="color:white; font-family:Coiny;">
        <img src="../assets/logo_site_smaller.png" alt="Logo" width="42" height="48" class="">
        <b>PetShip</b>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/adotar">Adotar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/associacoes">Associações</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/desaparecido">Desaparecidos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/petsitting">Pet Sitting</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/dashboard/animais">Dashboard</router-link>
          </li>
        </ul>
        <div class="d-flex justify-content-end">
          <div class="dropdown" v-if="utilizador">
          <span class="text-white">{{ utilizador.nome }}</span>
          
            <button type="button" class="btn p-0 m-0" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-person-circle"
              viewBox="0 0 16 16" style="margin-left:10px;margin-right:10px;">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
          </button>
            <ul class="dropdown-menu dropdown-menu-center">
              <li><a class="dropdown-item" href="/perfil">Perfil</a></li>
              <li><a class="dropdown-item" href="/anunciar">Publicar animal</a></li>
              <li><a class="dropdown-item" href="/mensagens">Mensagens</a></li>
              <li><a class="dropdown-item" href="/animal">Animal</a></li>
              <li><a class="dropdown-item" href="#" v-on:click="logout">logout</a></li>
            </ul>
          </div>
          <div v-if="!utilizador">
              <router-link class="nav-link text-white me-2" aria-current="page" to="/login">Login</router-link>
          </div>
  
          <span class="text-white lang" :class="{ 'fw-bold': (this.$i18n.locale == 'pt') }"
            @click="setLocale('pt')">PT</span>
          <span class="text-white"> &nbsp;|&nbsp; </span>
          <span class="text-white lang" :class="{ 'fw-bold': (this.$i18n.locale == 'en') }"
            @click="setLocale('en')">EN</span>
        </div>
      </div>
    </div>
  </nav>

</template>
<style>
.lang {
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      utilizador: []
    }
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    },

    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('utilizador');

      this.$router.push('/login');
      //pedido a api para logout para apagar token???
    }
  },
  mounted() {
    this.utilizador = JSON.parse(localStorage.getItem('utilizador'));
    console.log(this.utilizador);
  }
}
</script>
