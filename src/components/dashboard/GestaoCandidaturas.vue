<template>
    <NavBar></NavBar>

    <div class="modal" tabindex="-1" id="modalApagar" >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{$t('dashboardCandidaturas.cancelarCandidatura')}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>  
          <div class="modal-body">
            {{$t('dashboardCandidaturas.cancelarCandidaturaTexto')}} {{ candidaturaSelecionada ? candidaturaSelecionada.nome_animal : '' }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{$t('dashboardCandidaturas.nao')}}</button>
            <button type="button" class="btn text-white" data-bs-dismiss="modal" style="background-color:#FD7E14"
              @click="cancelar">{{$t('dashboardCandidaturas.sim')}}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid ms-0">
      <div class="row flex-nowrap">
        <PainelDashboard :isActive="'candidaturas'"></PainelDashboard>
        <div class="col-8">
            <div class="row my-3">
                <div class="col">
                  <h2 class="fw-bold" style="color: #653208;">{{$t('dashboardCandidaturas.titulo')}}</h2>
                </div>
              </div>

              <table v-if="utilizador && utilizador.tipo == 2" class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">{{$t('dashboardCandidaturas.nomeCandidato')}}</th>
                    <th scope="col">{{$t('dashboardCandidaturas.cartaoCidadao')}}</th>
                    <th scope="col">{{$t('dashboardCandidaturas.nomeAnimal')}}</th>
                    <th scope="col">{{$t('dashboardCandidaturas.dataCandidatura')}}</th>
                    <th scope="col">{{$t('dashboardCandidaturas.estado')}}</th>
                    <th scope="col">{{$t('dashboardCandidaturas.acoes')}}</th>
                  </tr>
                </thead>
                <tbody v-if="candidaturas">
                  <tr v-for="candidatura in candidaturas" :key="candidatura">
                    <td style="width:10%;vertical-align: middle">{{candidatura.nome_candidato}}</td>
                    <td style="width:10%;vertical-align: middle">{{candidatura.cc}}</td>
                    <td style="width:10%;vertical-align: middle">{{candidatura.nome_animal}}</td>
                    <td style="width:10%;vertical-align: middle">{{candidatura.created_at}}</td>
                    <td style="width:10%;vertical-align: middle">{{candidatura.estado}}</td>
                    <td style="width:10%;vertical-align: middle">
                      <button v-if="candidatura.estado != 'Cancelada' && candidatura.estado != 'Cancelled' && candidatura.estado == ('Pedido realizado' || 'Requested') " type="button" class="btn btn-success" @click="aceitar(candidatura)">{{$t('dashboardCandidaturas.aceitar')}}</button>
                      <button v-if="candidatura.estado != 'Cancelada' && candidatura.estado != 'Cancelled' && candidatura.estado == ('Aceite' || 'Accepted') " type="button" class="btn btn-success" @click="concluir(candidatura)">{{$t('dashboardCandidaturas.terminar')}}</button>
                      <svg v-if="candidatura.estado != 'Cancelada' && candidatura.estado != 'Cancelled' && candidatura.estado != 'Concluída' && candidatura.estado != 'Complete'" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#bf1f13" class="bi bi-x-circle-fill ms-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        <rect class="btn" x="0" y="0" width="24" height="24" fill="transparent" @click="abrirModal(candidatura)" data-bs-toggle="modal"
                        data-bs-target="#modalApagar" />
                      </svg>
                    </td>
                   
                  </tr>
                </tbody>
              </table>
              <table v-else class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">{{$t('dashboardCandidaturas.nomeAnimal')}}</th>
                    <th scope="col">{{$t('dashboardCandidaturas.dataCandidatura')}}</th>
                    <th scope="col">{{$t('dashboardCandidaturas.estado')}}</th>
                    <th scope="col">{{$t('dashboardCandidaturas.acoes')}}</th>
                  </tr>
                </thead>
                <tbody v-if="candidaturas">
                  <tr v-for="candidatura in candidaturas" :key="candidatura">
                    <td style="width:10%;vertical-align: middle">{{candidatura.nome_animal}}</td>
                    <td style="width:10%;vertical-align: middle">{{candidatura.created_at}}</td>
                    <td style="width:10%;vertical-align: middle">{{candidatura.estado}}</td>
                    <td style="width:10%;vertical-align: middle"><button v-if="candidatura.estado != 'Cancelada' && candidatura.estado != 'Cancelled' && candidatura.estado != 'Concluída' && candidatura.estado != 'Complete'" type="button" class="btn btn-danger" @click="abrirModal(candidatura)" data-bs-toggle="modal"
                      data-bs-target="#modalApagar">{{$t('dashboardCandidaturas.cancelar')}}</button></td>
                  </tr>
                </tbody>
              </table>
        </div>
      </div>
    </div>
  </template>
  <script>
  import NavBar from '../NavBar.vue';
  import PainelDashboard from './PainelDashboard.vue';
  
  export default {
    name: 'GestaoCandidaturas',
    components: {
      NavBar,
      PainelDashboard,
    },
    data() {
      return {
        candidaturas: null,
        utilizador: null,
        candidaturaSelecionada: null
      }
    },
    watch: {
        '$i18n.locale': function () {
            this.obterCandidaturas();
        }
    },
    methods: {
      
        obterCandidaturas() {
            //pedido para obter as candidaturas 
            this.axios.get("dashboard/candidaturas", {
    }).then(response => {
      this.candidaturas = response.data.candidaturas
      console.log(this.utilizador)
    })
        },

        abrirModal(candidatura) {
          this.candidaturaSelecionada = candidatura
        },
        cancelar() {
          this.axios.post('/candidatura/cancelar/' + this.candidaturaSelecionada.id)
          .then(response => {
            let index = this.candidaturas.indexOf(this.candidaturaSelecionada)
             this.candidaturas.splice(index, 1, response.data.candidatura)
             alert(this.$t('dashboardCandidaturas.candidaturaCancelada'))
          })
        },

        aceitar(candidatura) {
          this.axios.post('/candidatura/aceitar/' + candidatura.id)
          .then(response => {
            let index = this.candidaturas.indexOf(candidatura)
             this.candidaturas.splice(index, 1, response.data.candidatura)
             alert(this.$t('dashboardCandidaturas.candidaturaAceite'))
          })
        },

        concluir(candidatura){
          this.axios.post('/candidatura/concluir/' + candidatura.id)
          .then(response => {
            let index = this.candidaturas.indexOf(candidatura)
             this.candidaturas.splice(index, 1, response.data.candidatura)
             alert(this.$t('dashboardCandidaturas.candidaturaConcluida'))
          })
        }
    },
    mounted() {
      this.utilizador = JSON.parse(sessionStorage.getItem('utilizador'));
      console.log(this.utilizador.tipo)
      this.obterCandidaturas()
    }
  }
  </script>