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
            <button type="button" class="btn text-white fw-bold float-end" style="background-color: #FD7E14;" data-bs-toggle="modal" data-bs-target="#formRegisto">Adicionar</button>
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
<div class="modal fade" id="formRegisto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Registar Animal</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
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