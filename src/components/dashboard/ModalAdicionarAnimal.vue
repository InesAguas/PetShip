<template>
    <!-- Modal para criar um animal -->
    <div class="modal modal-lg" id="formRegisto" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 v-if="editar" class="modal-title fs-5" id="exampleModalLabel">{{$t('modalAdicionarAnimal.tituloEditar')}}</h1>
                    <h1 v-else class="modal-title fs-5" id="exampleModalLabel">{{$t('modalAdicionarAnimal.titulo')}}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="mb-0">
                            <div class="alert alert-danger" role="alert" style="padding:5px" v-show="erro">
                                {{ this.mensagemErro }}
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="data_recolha" class="form-label mb-0">{{$t('modalAdicionarAnimal.dataRecolha')}}*</label>
                                <input type="date" id="data_recolha" class="form-control"
                                    v-model="animalModal.data_recolha">
                            </div>
                            <div class="col">
                                <label for="formFile" class="form-label mb-0">{{$t('modalAdicionarAnimal.fotografia')}}</label>
                                <input class="form-control" type="file" id="formFile" accept="image/*"
                                    @change="atualizaFotografia">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-6">
                                <label for="local" class="form-label mb-0">{{$t('modalAdicionarAnimal.localCaptura')}}</label>
                                <input type="text" id="local" class="form-control" v-model="animalModal.local_captura">
                            </div>
                            <div class="col">
                                <label class="form-label mb-0">{{$t('modalAdicionarAnimal.ferido')}}*</label><br>
                                <div class="form-check form-check-inline" id="checkferido">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                        value="1" v-model="animalModal.ferido">
                                    <label class="form-check-label" for="inlineRadio1">{{$t('modalAdicionarAnimal.sim')}}</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                        value="0" v-model="animalModal.ferido">
                                    <label class="form-check-label" for="inlineRadio2">{{$t('modalAdicionarAnimal.nao')}}</label>
                                </div>
                            </div>

                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="nome" class="form-label mb-0">{{$t('modalAdicionarAnimal.nome')}}*</label>
                                <input type="text" id="nome" class="form-control" v-model="animalModal.nome">
                            </div>
                            <div class="col">
                                <label class="form-label mb-0">{{$t('modalAdicionarAnimal.agressivo')}}*</label><br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions2"
                                        id="inlineRadio3" value="1" v-model="animalModal.agressivo">
                                    <label class="form-check-label" for="inlineRadio3">{{$t('modalAdicionarAnimal.sim')}}</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions2"
                                        id="inlineRadio4" value="0" v-model="animalModal.agressivo">
                                    <label class="form-check-label" for="inlineRadio4">{{$t('modalAdicionarAnimal.nao')}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="porte" class="form-label mb-0">{{ $t('formAnimalMsg.porte') }}*</label>
                                <select class="form-select" id="porte" v-model="animalModal.porte">
                                    <option v-for="(item, index) in $tm('formAnimalMsg.portes')" :key="item"
                                        :value="index + 1">{{ item }}
                                    </option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="sexo" class="form-label mb-0">{{$t('dashboardAnimais.sexo')}}*</label>
                                <select class="form-select" id="sexo" v-model="animalModal.sexo">
                                    <option v-bind:value="1">{{ $t('formAnimalMsg.sexos[0]') }}</option>
                                    <option v-bind:value="2">{{ $t('formAnimalMsg.sexos[1]') }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="especie" class="form-label mb-0">{{$t('dashboardAnimais.especie')}}*</label>
                                <select class="form-select" id="especie" v-model="animalModal.especie"
                                    v-on:change="alterarRacas">
                                    <option v-bind:value="1">{{ $t('formAnimalMsg.especies[0]') }}</option>
                                    <option v-bind:value="2">{{ $t('formAnimalMsg.especies[1]') }}</option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="raca" class="form-label mb-0">{{ $t('formAnimalMsg.raca') }}*</label>
                                <select class="form-select" id="raca" v-model="animalModal.raca">
                                    <option v-for="(item, index) in racas" :key="item" :value="index + 1">{{ item }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="idade" class="form-label mb-0">{{ $t('formAnimalMsg.idade') }}*</label>
                                <select class="form-select" id="idade" v-model="animalModal.idade">
                                    <option v-for="(item, index) in $tm('formAnimalMsg.idades')" :key="item"
                                        :value="index + 1">{{ item }}
                                    </option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="cor" class="form-label mb-0">{{ $t('formAnimalMsg.cor') }}*</label>
                                <select class="form-select" id="cor" v-model="animalModal.cor">
                                    <option v-for="(item, index) in $tm('formAnimalMsg.cores')" :key="item"
                                        :value="index + 1">{{ item }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col">

                                <label class="form-label mb-0">{{$t('modalAdicionarAnimal.identificacao')}}*</label><br>
                                <div class="input-group">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions3"
                                            id="inlineRadio5" value="1" v-model="chipSelecionado">
                                        <label class="form-check-label" for="inlineRadio5">{{$t('modalAdicionarAnimal.sim')}}</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions3"
                                            id="inlineRadio6" value="0" v-model="chipSelecionado">
                                        <label class="form-check-label" for="inlineRadio6">{{$t('modalAdicionarAnimal.nao')}}</label>
                                    </div>
                                    <label for="identificacao" class="form-label mb-0">{{$t('modalAdicionarAnimal.numeroChip')}}</label>
                                    <input type="text" id="identificacao" class="form-control" v-model="animalModal.chip">
                                </div>
                            </div>

                            <div class="col">
                                <label for="desparasitacao" class="form-label mb-0">{{$t('modalAdicionarAnimal.desparasitacao')}}</label>
                                <input type="date" id="desparasitacao" class="form-control"
                                    v-model="animalModal.desparasitacao">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col">
                                <label for="temperatura" class="form-label mb-0">{{$t('modalAdicionarAnimal.temperaturaRectal')}}</label>
                                <div class="input-group">
                                    <input type="number" id="temperatura" class="form-control"
                                        v-model="animalModal.temperatura">
                                    <span class="input-group-text">ºC</span>
                                </div>
                            </div>
                            <div class="col">
                                <label for="medicacao" class="form-label mb-0">{{$t('modalAdicionarAnimal.medicacao')}}</label>
                                <input type="text" id="medicacao" class="form-control" v-model="animalModal.medicacao">
                            </div>
                        </div>
                        <div>* {{$t('modalAdicionarAnimal.camposObrigatorios')}}</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="btnClose" class="btn btn-secondary" data-bs-dismiss="modal"
                        @click="$emit('close')">{{$t('modalAdicionarAnimal.cancelar')}}</button>
                    <button type="button" class="btn text-white" style="background-color: #FD7E14;"
                        @click="publicarAnimal">{{$t('modalAdicionarAnimal.confirmar')}}</button>
                </div>
            </div>
        </div>
    </div>
</template>
   
<script>


export default {
    name: 'ModalAdicionarAnimal',
    props: [
        'animal'
    ],
    watch: {
        animal(novoAnimal) {
            this.animalModal = novoAnimal
            this.chipSelecionado = 0
            this.editar = false
            this.erro = false
            if (novoAnimal.id) {
                this.axios.get('associacao/animal/num/' + novoAnimal.id).then(response => {
                    this.animalModal = response.data.animal
                    this.chipSelecionado = this.animalModal.chip ? 1 : 0
                    this.editar = true;
                })
                    .catch((error) => {
                        console.log(error)
                    });
            }
        }
    },
    data() {
        return {
            racas: this.$tm('formAnimalMsg.racas_caes'),
            animalModal: this.animal,
            editar: false,
            chipSelecionado: 0,
            mensagemErro: null,
            erro: false,
        }
    },

    methods: {
        publicarAnimal() {
            if(this.animal.data_recolha == null || this.animal.nome == null || this.animal.nome == '' || (this.chipSelecionado && this.animal.chip == null || this.animal.chip == '')) {
                this.erro = true
                this.mensagemErro = this.$t('mensagens.camposObrigatorios')
                return
            }

            if(!this.editar) {
                this.axios.post("/publicaranimal", this.animalModal)
                .then(response => {
                this.$emit('novoAnimal', response.data.animal)
                alert(this.$t('mensagens.animalCriado'))
                document.getElementById('btnClose').click()
            })
                .catch((error) => {
                    var dot = error.response.data.message.indexOf('.');
                        this.mensagemErro = error.response.data.message.substring(0, dot + 1);
                        this.erro = true
                });
            } else {
                if(this.animalModal.fotografia == this.animal.fotografia) {
                    this.animalModal.fotografia = null
                }
                
                this.axios.post('editaranimal/' + this.animalModal.id, this.animalModal, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then(response => {
                this.$emit('editarAnimal', response.data.animal)
                alert(this.$t('mensagens.animalEditado'))
                document.getElementById('btnClose').click()

            })
                .catch((error) => {
                    var dot = error.response.data.message.indexOf('.');
                        this.mensagemErro = error.response.data.message.substring(0, dot + 1);
                        this.erro = true
                });
            }
            
        },

        alterarRacas() {
            if (this.animalModal.especie == 1) {
                this.racas = this.$tm('formAnimalMsg.racas_caes')
            } else {
                this.racas = this.$tm('formAnimalMsg.racas_gatos')
            }
        },

        atualizaFotografia(event) {
            var dot = event.target.files[0].name.lastIndexOf('.');
            var extension = event.target.files[0].name.substring(dot + 1);
            if (extension != "jpg" && extension != "jpeg" && extension != "png") {
                this.mensagemErro = this.$t('mensagens.fotografiaInvalida')
                this.erro = true
            }
            this.animalModal.fotografia = event.target.files[0]
        },
    }
}
</script>
    