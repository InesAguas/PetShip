<template>
    <NavBar></NavBar>
    <div class="container-fluid ms-0">
      <div class="row flex-nowrap">
        <PainelDashboard :isActive="'escalas'"></PainelDashboard>
        <div class="col-8 text-center" style="height:500px;">
          <h2 class="mt-5">COMING SOON</h2>
        </div>
      </div>
    </div>
  </template>
  <script>
  import NavBar from '../NavBar.vue';
  import PainelDashboard from './PainelDashboard.vue';
  
  export default {
    name: 'GestaoEscalas',
    components: {
      NavBar,
      PainelDashboard,
    },
    data() {
      return {
      }
    },
    methods: {

    }
  }
  </script>