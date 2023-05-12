<template>
    <NavBar></NavBar>
    <div class="container ms-0">
        <div class="row flex-nowrap">
    <PainelDashboard></PainelDashboard>
    <div class="col">
        <div class="row my-3">
            <div class="col">
                <h2 class="fw-bold" style="color: #653208;">Animais</h2>
            </div>
            <div class="col">
            <button type="button" class="btn text-white fw-bold float-end" style="background-color: #FD7E14;" data-bs-toggle="modal"  data-bs-target="#formRegisto">Adicionar</button>
        </div>
        </div>
        
        <table class="table">
            <thead>
                <tr>
                  <th>Nome</th>
                  <th>First</th>
                  <th>Last</th>
                  <th>Handle</th>
                </tr>
              </thead>
        </table>
    </div>
</div>
</div>


<!-- Modal -->
<div class="modal modal-lg fade" id="formRegisto" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Registar Animal</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
          <label for="data_recolha" class="form-label">Data de recolha</label>
                <input type="date" id="data_recolha" class="form-control">
              </div>
              <div class="col">
                <label for="local" class="form-label">Local de captura</label>
                <input type="text" id="local" class="form-control">
                ferido e agressivo
              </div>
              </div>
                <label for="nome" class="form-label">{{ $t('formAnimalMsg.nome') }}</label>
                <input type="text" id="nome" class="form-control">
                <label for="sexo" class="form-label">{{ $t('formAnimalMsg.sexo') }}</label>
                <select class="form-select" id="sexo">
                    <option v-bind:value="1">{{ $t('formAnimalMsg.sexos[0]') }}</option>
                    <option v-bind:value="2">{{ $t('formAnimalMsg.sexos[1]') }}</option>
                </select>
                <label for="especie" class="form-label">{{ $t('formAnimalMsg.especie') }}</label>
                <select class="form-select" id="especie">
                    <option v-bind:value="1">{{ $t('formAnimalMsg.especies[0]') }}</option>
                    <option v-bind:value="2">{{ $t('formAnimalMsg.especies[1]') }}</option>
                </select>
                <label for="raca" class="form-label">{{ $t('formAnimalMsg.raca') }}</label>
                <select class="form-select" id="raca">
                    
                </select>
                <label for="idade" class="form-label">{{ $t('formAnimalMsg.idade') }}</label>
                <select class="form-select" id="idade">
                    <option v-for="(item,index) in $tm('formAnimalMsg.idades')" :key="item" :value="index+1">{{item}}</option>
                </select>
                <label for="cor" class="form-label">{{ $t('formAnimalMsg.cor') }}</label>
                <select class="form-select" id="cor">
                    <option v-for="(item, index) in $tm('formAnimalMsg.cores')" :key="item" :value="index+1">{{item}}</option>
                </select>
              </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '../NavBar.vue';
import PainelDashboard from './PainelDashboard.vue';

export default {
    name: 'GestaAnimais',
    components: {
        NavBar,
        PainelDashboard
    },
    data() {
        return {
        }
    },
    mounted() {
        }
}

</script>