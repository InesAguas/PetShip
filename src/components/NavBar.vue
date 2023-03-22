<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #FD7E14;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="color:white; font-family:Coiny;">
        <img src="../assets/logo_site_smaller.png" alt="Logo" width="42" height="48" class="">
        <b>PetShip</b>
      </a>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page"  to="/registar">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">About</a>
          </li>
        </ul>
      </div>

      <span class="text-white lang" :class="{ 'fw-bold': (this.$i18n.locale == 'pt') }"  @click="setLocale('pt')">PT</span>
      <span class="text-white"> &nbsp;|&nbsp; </span>
      <span class="text-white lang" :class="{ 'fw-bold': (this.$i18n.locale == 'en') }" @click="setLocale('en')">EN</span>

      <!--Aqui falta o nome da pessoa caso esteja logged in...-->
      <a href="#" class="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-person-circle"
          viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
    </div>
  </nav>
</template>

<style>
.lang {
  cursor:pointer;
}
</style>

<script>
export default {
  name: 'NavBar',

  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
