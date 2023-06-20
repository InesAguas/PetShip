<template>
<nav class="navbar navbar-expand-lg  navbar-expand-md bg-body-tertiary pb-0 pt-0" style="background-color: #FD7E14;">
    <div class="container-fluid">
      <a class="navbar-brand" href="/" style="color:#ffffff; font-family:Coiny;">
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
            <router-link class="nav-link text-white" aria-current="page" to="/">{{$t('navbarMsg.inicio')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/adotar">{{$t('navbarMsg.adotar')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/associacoes">{{$t('navbarMsg.associacoes')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/desaparecido">{{$t('navbarMsg.desaparecidos')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/petsitting">Petsitting</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/dashboard/anuncios">Dashboard</router-link>
          </li>
        </ul>
        <div class="d-flex justify-content-end">
          <div v-if="utilizador">
          <span class="text-white">{{ utilizador.nome }}</span>
          <a href="/perfil">
            <img v-if="utilizador && utilizador.fotografia != null" :src="utilizador.fotografia" alt="Foto" width="30" height="30" class="rounded-circle ms-1 me-1">
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-person-circle"
              viewBox="0 0 16 16" style="margin-left:10px;margin-right:10px;">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
          </a>
          
          <svg v-if="utilizador && utilizador.tipo == 2" xmlns="http://www.w3.org/2000/svg" width="25" style="cursor:pointer" height="25" fill="white" data-bs-toggle="dropdown" class="bi bi-bell me-2" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
          </svg>
          <div v-if="utilizador && utilizador.tipo == 2" class="dropdown">
          <ul class="dropdown-menu dropdown-menu-lg-end" >
           <li v-for="stock in stocks" :key="stock.id" class="" > <router-link style="width:300px; word-wrap: break-word;white-space: normal;" class="dropdown-item" to="/dashboard/stock">{{$t('navbarMsg.notifStock')}}{{ stock.nome }}{{$t('navbarMsg.notifStock2')}}{{$t('navbarMsg.notifStock3')}}{{ stock.qnt_atual }}</router-link></li>
            <li class="dropdown-item disabled" v-if="stocks == null || stocks.length == 0">{{$t('navbarMsg.semNotifs')}}</li>
          </ul>
          </div>
          </div>
          <div v-else>
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
      utilizador: [],
      stocks: null
    }
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      this.axios.defaults.headers.common['Accept-Language'] = this.$i18n.locale
      sessionStorage.setItem('locale', locale)

      this.loadNotifs();
    }
  },
  mounted() {
    this.utilizador = JSON.parse(sessionStorage.getItem('utilizador'));
    console.log(this.utilizador);
    if(this.utilizador && this.utilizador.tipo == 2) {
      this.axios.get('stock/notificacoes')
      .then((response) => {
        console.log(response.data)
        this.stocks = response.data.stocks;
      })
    }
  }
}
</script>
