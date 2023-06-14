<template>
<ModalAdicionarAnuncio @anuncioCriado="anuncioCriado" @anuncioEditado="anuncioEditado" :anuncioSelecionado="anuncioSelecionado"></ModalAdicionarAnuncio>
<ModalInfoAnuncio :anuncio="anuncioSelecionado"></ModalInfoAnuncio>
    <div class="modal" tabindex="-1" id="modalApagar" >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{$t('dashboardAnuncios.modalRemover')}}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>  
            <div class="modal-body">
              {{$t('dashboardAnuncios.modalRemoverTexto')}}
              {{ anuncioSelecionado.nome }}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{$t('dashboardAnuncios.modalRemoverCancelar')}}</button>
              <button type="button" class="btn text-white" data-bs-dismiss="modal" style="background-color:#FD7E14"
                @click="remover">{{$t('dashboardAnuncios.modalRemoverConfirmar')}}</button>
            </div>
          </div>
        </div>
      </div>

    <NavBar></NavBar>
    <div class="container-fluid ms-0">
      <div class="row flex-nowrap">
        <PainelDashboard :isActive="'anuncios'"></PainelDashboard>
        <div class="col-8">
            <div class="row my-3">
                <div class="col">
                  <h2 class="fw-bold" style="color: #653208;">{{$t('dashboardAnuncios.titulo')}}</h2>
                </div>
                <div class="col">
                  <button type="button" class="btn text-white fw-bold float-end" id="buttontest" ref="buttontest" style="background-color: #FD7E14;" @click="abrirModalAdicionar()"
                    data-bs-toggle="modal" data-bs-target="#formRegisto">{{$t('dashboardAnuncios.botaoAdicionar')}}</button>
                </div>
              </div>

              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">{{$t('dashboardAnuncios.nome')}}</th>
                    <th scope="col">{{$t('dashboardAnuncios.especie')}}</th>
                    <th scope="col">{{$t('dashboardAnuncios.sexo')}}</th>
                    <th scope="col">{{$t('dashboardAnuncios.porte')}}</th>
                    <th scope="col">{{$t('dashboardAnuncios.idade')}}</th>
                    <th scope="col">{{$t('dashboardAnuncios.etiqueta')}}</th>
                    <th scope="col">{{$t('dashboardAnuncios.estado')}}</th>
                    <th scope="col">{{$t('dashboardAnuncios.acoes')}}</th>
                  </tr>
                </thead>
                <tbody v-if="anuncios">
                  <tr v-for="animal in anuncios" :key="animal">
                    <td style="width:10%">
                      <img v-if="animal.fotografias" :src="animal.fotografias[0]" class="rounded-circle"
                        style="width:50px; height:50px; object-fit:cover;vertical-align: middle"> {{ animal.nome }}
                    </td>
                    <td style="width:10%;vertical-align: middle">{{ animal.especie }}</td>
                    <td style="width:10%;vertical-align: middle">{{ animal.sexo }}</td>
                    <td style="width:10%;vertical-align: middle">{{ animal.porte }}</td>
                    <td style="width:10%;vertical-align: middle">{{ animal.idade }}</td>
                    <td style="width:10%;vertical-align: middle">{{ animal.etiqueta }}</td>
                    <td style="width:10%;vertical-align: middle">
                      <button v-if="animal.estado == 'Ativo' || animal.estado == 'Active'" type="button" class="btn btn-success" :title="$t('dashboardAnuncios.desativar')" @click.once="alterarEstado(animal); " > {{ animal.estado}}</button>
                      <button v-else type="button" class="btn btn-danger" :title="$t('dashboardAnuncios.ativar')" @click.once="alterarEstado(animal)"> {{ animal.estado}}</button> </td>
                    <td style="width:10%;vertical-align: middle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="orange"
                        class="bi bi-pencil-square me-3" viewBox="0 0 16 16">
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        <rect class="btn" x="0" y="0" width="24" height="24" fill="transparent" @click="abrirEditar(animal)" data-bs-toggle="modal"
                        data-bs-target="#formRegisto" />
      
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-trash me-3"
                        viewBox="0 0 16 16">
                        <path
                          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        <rect class="btn" x="0" y="0" width="24" height="24" fill="transparent"
                          @click="abrirModalRemover(animal)" data-bs-toggle="modal" data-bs-target="#modalApagar" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-eye"
                        viewBox="0 0 16 16">
                        <path
                          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        <rect class="btn" x="0" y="0" width="24" @click="abrirModalInformacoes(animal)" data-bs-toggle="modal"
                          data-bs-target="#modalInformativo" height="24" fill="transparent" />
                      </svg>
                    </td>
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
import ModalAdicionarAnuncio from './ModalAdicionarAnuncio.vue';
import ModalInfoAnuncio from './ModalInfoAnuncio.vue';

export default {
    name: 'GestaoAnuncios',
    components: {
        NavBar,
        PainelDashboard,
        ModalAdicionarAnuncio,
        ModalInfoAnuncio
    },
    data() {
    return {
      anuncios: [],
      anuncioSelecionado: {
        nome: null,
        sexo: 1,
        especie: 1,
        raca: 1,
        porte: 1,
        idade: 1,
        cor: 1,
        distrito: 'Aveiro',
        etiqueta: 1,
        descricao: null,
        fotografias: [],
        created_at: null,
      },
      novo: false,
    }
  },
  watch: {
        '$i18n.locale': function () {
            this.loadAnimais();
        }
    },
  mounted() {
    this.loadAnimais();

    if(this.$route.query != null && this.$route.query.animalanuncio != null ){

      this.axios.get('associacao/animal/num/' + this.$route.query.animalanuncio)
                .then(response => {
                    console.log(response)

                    this.anuncioSelecionado.nome = response.data.animal.nome
                    this.anuncioSelecionado.sexo = response.data.animal.sexo
                    this.anuncioSelecionado.especie = response.data.animal.especie
                    this.anuncioSelecionado.raca = response.data.animal.raca
                    this.anuncioSelecionado.porte = response.data.animal.porte
                    this.anuncioSelecionado.idade = response.data.animal.idade
                    this.anuncioSelecionado.cor = response.data.animal.cor
                    this.anuncioSelecionado.distrito = 'Aveiro'
                    this.anuncioSelecionado.etiqueta = 2
                    this.anuncioSelecionado.fotografias = [],
                    this.anuncioSelecionado.created_at = null,
                    this.anuncioSelecionado.animal_id = response.data.animal.id

                    this.novo = true
                    document.getElementById('buttontest').click();
                })
                    .catch(() => {
                        alert(this.$t('mensagens.erro'))
                    });
            

    }
    
  },

  methods: {
    loadAnimais() {
      this.axios.get("utilizador/anuncios").then(response => {
      this.anuncios = response.data.anuncios
    })
    },

    abrirModalAdicionar() {
      if(!this.novo) {
        this.anuncioSelecionado = {
        nome: null,
        sexo: 1,
        especie: 1,
        raca: 1,
        porte: 1,
        idade: 1,
        cor: 1,
        distrito: 'Aveiro',
        etiqueta: 1,
        descricao: null,
        fotografias: [],
        created_at: null,
      }
      }
      this.novo = false
      
    },

    abrirModalRemover(animal) {
        this.anuncioSelecionado = animal
    },
    abrirModalInformacoes(animal) {
        this.anuncioSelecionado = animal
    },

    abrirEditar(data) {
      this.anuncioSelecionado = data
    },

    remover() {
        this.axios.delete('removeranuncio/' + this.anuncioSelecionado.id).then(() => {
        let index = this.anuncios.indexOf(this.anuncioSelecionado)
        this.anuncios.splice(index, 1)
        alert(this.$t('mensagens.anuncioRemovido'))
      })
        .catch(() => {
          alert(this.$t('mensagens.erro'))
        });
    },

    anuncioCriado(anuncio) {
        this.anuncios.unshift(anuncio)
    },

    anuncioEditado(anuncio) {
        let index = this.anuncios.indexOf(this.anuncioSelecionado)
         this.anuncios.splice(index, 1, anuncio)
    },

    alterarEstado(anuncio) {
      this.axios.post('anuncio/estado/' + anuncio.id, "").then(response => {
        let index = this.anuncios.indexOf(anuncio)
        this.anuncios.splice(index, 1, response.data.anuncio)
        alert(this.$t('mensagens.estadoAlterado'))
      })
        .catch(() => {
          alert(this.$t('mensagens.erro'))
        });
    }
  }
}
</script>

<style>
.modal-backdrop {
  height:100%;
  width:100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>