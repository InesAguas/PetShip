<template>
    <!-- Modal para criar um animal -->
    <div class="modal modal-lg" id="formRegisto" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Registar Animal</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row mb-3">
                            <div class="col">
                                <label for="data_recolha" class="form-label mb-0">Data de recolha*</label>
                                <input type="date" id="data_recolha" class="form-control"
                                    v-model="animalModal.data_recolha">
                            </div>
                            <div class="col">
                                <label for="formFile" class="form-label mb-0">Fotografia</label>
                                <input class="form-control" type="file" id="formFile" accept="image/*"
                                    @change="atualizaFotografia">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-6">
                                <label for="local" class="form-label mb-0">Local de captura</label>
                                <input type="text" id="local" class="form-control" v-model="animalModal.local_captura">
                            </div>
                            <div class="col">
                                <label class="form-label mb-0">Animal ferido*</label><br>
                                <div class="form-check form-check-inline" id="checkferido">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                        value="1" v-model="animalModal.ferido">
                                    <label class="form-check-label" for="inlineRadio1">Sim</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                        value="0" v-model="animalModal.ferido">
                                    <label class="form-check-label" for="inlineRadio2">Não</label>
                                </div>
                            </div>

                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="nome" class="form-label mb-0">Nome*</label>
                                <input type="text" id="nome" class="form-control" v-model="animalModal.nome">
                            </div>
                            <div class="col">
                                <label class="form-label mb-0">Comportamento agressivo*</label><br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions2"
                                        id="inlineRadio3" value="1" v-model="animalModal.agressivo">
                                    <label class="form-check-label" for="inlineRadio3">Sim</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions2"
                                        id="inlineRadio4" value="0" v-model="animalModal.agressivo">
                                    <label class="form-check-label" for="inlineRadio4">Não</label>
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
                                <label for="sexo" class="form-label mb-0">Sexo*</label>
                                <select class="form-select" id="sexo" v-model="animalModal.sexo">
                                    <option v-bind:value="1">{{ $t('formAnimalMsg.sexos[0]') }}</option>
                                    <option v-bind:value="2">{{ $t('formAnimalMsg.sexos[1]') }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="especie" class="form-label mb-0">Especie*</label>
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

                                <label class="form-label mb-0">Identificação eletrónica*</label><br>
                                <div class="input-group">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions3"
                                            id="inlineRadio5" value="1" v-model="animalModal.identificacao">
                                        <label class="form-check-label" for="inlineRadio5">Sim</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions3"
                                            id="inlineRadio6" value="0" v-model="animalModal.identificacao">
                                        <label class="form-check-label" for="inlineRadio6">Não</label>
                                    </div>
                                    <label for="identificacao" class="form-label mb-0">Nº de chip</label>
                                    <input type="text" id="identificacao" class="form-control" v-model="animalModal.chip">
                                </div>
                            </div>

                            <div class="col">
                                <label for="desparasitacao" class="form-label mb-0">Desparasitação</label>
                                <input type="date" id="desparasitacao" class="form-control"
                                    v-model="animalModal.desparasitacao">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col">
                                <label for="temperatura" class="form-label mb-0">Temperatura rectal</label>
                                <div class="input-group">
                                    <input type="number" id="temperatura" class="form-control"
                                        v-model="animalModal.temperatura">
                                    <span class="input-group-text">ºC</span>
                                </div>
                            </div>
                            <div class="col">
                                <label for="medicacao" class="form-label mb-0">Medicação</label>
                                <input type="text" id="medicacao" class="form-control" v-model="animalModal.medicacao">
                            </div>
                        </div>
                        <div>* Campos obrigatórios</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        @click="$emit('close')">Cancelar</button>
                    <button type="button" class="btn text-white" data-bs-dismiss="modal" style="background-color: #FD7E14;"
                        @click="publicarAnimal">Confirmar</button>
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
            this.editar = false
            if (novoAnimal.id) {
                this.axios.get('associacao/animal/num/' + novoAnimal.id, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then(response => {
                    this.animalModal = response.data.animal
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
        }
    },

    methods: {
        publicarAnimal() {
            if(!this.editar) {
               console.log("novo animal")
            this.axios.post("/publicaranimal", this.animalModal, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(response => {
                this.$emit('novoAnimal', response.data.animal)
                alert("Animal inserido com sucesso!")
                this.$emit('close')
            })
                .catch((error) => {
                    console.log(error)
                });
            } else {
                if(this.animalModal.fotografia == this.animal.fotografia) {
                    this.animalModal.fotografia = null
                }
                
                this.axios.post('editaranimal/' + this.animalModal.id, this.animalModal, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(response => {
                this.$emit('editarAnimal', response.data.animal)
                console.log("eloo")
                console.log(response.data.animal)
                alert("Animal editado com sucesso!")
                this.$emit('close')
            })
                .catch((error) => {
                    console.log(error)
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
            this.animalModal.fotografia = event.target.files[0]
            console.log(this.animalModal)
        },
    }
}
</script>
    