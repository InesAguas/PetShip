<template>
    <!-- Modal para criar um animal -->
    <div class="modal modal-lg" id="formRegisto" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 v-if="editar" class="modal-title fs-5" id="exampleModalLabel">{{ $t('dashboardAnuncios.modalModificarTitulo') }}</h1>
                    <h1 v-else class="modal-title fs-5" id="exampleModalLabel">{{ $t('dashboardAnuncios.modalAdicionarTitulo') }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <label for="nome" class="form-label">{{ $t('formAnimalMsg.nome') }}</label>
                                <input type="text" id="nome" class="form-control"
                                    v-bind:placeholder="$t('formAnimalMsg.nome')" v-model="animal.nome" required>
                                <label for="sexo" class="form-label">{{ $t('formAnimalMsg.sexo') }}</label>
                                <select class="form-select" id="sexo" v-model="animal.sexo">
                                    <option v-bind:value="1">{{ $t('formAnimalMsg.sexos[0]') }}</option>
                                    <option v-bind:value="2">{{ $t('formAnimalMsg.sexos[1]') }}</option>
                                </select>
                                <label for="especie" class="form-label">{{ $t('formAnimalMsg.especie') }}</label>
                                <select class="form-select" id="especie" v-model="animal.especie"
                                    v-on:change="alterarRacas">
                                    <option v-bind:value="1">{{ $t('formAnimalMsg.especies[0]') }}</option>
                                    <option v-bind:value="2">{{ $t('formAnimalMsg.especies[1]') }}</option>
                                </select>
                                <label for="raca" class="form-label">{{ $t('formAnimalMsg.raca') }}</label>
                                <select class="form-select" id="raca" v-model="animal.raca">
                                    <option v-for="(item, index) in racas" :key="item" :value="index + 1">{{ item }}</option>
                                </select>

                                <label for="idade" class="form-label">{{ $t('formAnimalMsg.idade') }}</label>
                                <select class="form-select" id="idade" v-model="animal.idade">
                                    <option v-for="(item, index) in $tm('formAnimalMsg.idades')" :key="item"
                                        :value="index + 1">{{ item }}</option>
                                </select>
                                <label for="cor" class="form-label">{{ $t('formAnimalMsg.cor') }}</label>
                                <select class="form-select" id="cor" v-model="animal.cor">
                                    <option v-for="(item, index) in $tm('formAnimalMsg.cores')" :key="item"
                                        :value="index + 1">{{ item }}</option>
                                </select>

                            </div>
                            <div class="col">
                                <label for="distrito" class="form-label">{{ $t('formAnimalMsg.distrito') }}</label>
                                <select class="form-select" id="distrito" v-model="animal.distrito">
                                    <option v-for="item in distritos" :key="item" :value="item">{{ item }}</option>
                                </select>
                                <label for="etiqueta" class="form-label">{{ $t('formAnimalMsg.etiqueta') }}</label>
                                <select class="form-select" id="etiqueta" v-model="animal.etiqueta">
                                    <option v-for="(item, index) in $tm('formAnimalMsg.etiquetas')" :key="item"
                                        :value="index + 1">{{ item }}</option>
                                </select>
                                <label for="porte" class="form-label">{{ $t('formAnimalMsg.porte') }}</label>
                                <select class="form-select" id="porte" v-model="animal.porte">
                                    <option v-for="(item, index) in $tm('formAnimalMsg.portes')" :key="item"
                                        :value="index + 1">{{ item }}</option>
                                </select>
                                <label for="descricao" class="form-label">{{ $t('formAnimalMsg.descricao') }}</label>
                                <textarea id="descricao" class="form-control" placeholder="Desccrição"
                                    v-model="animal.descricao"></textarea>
                                <label for="imagens" class="form-label">{{ $t('formAnimalMsg.fotografias') }}</label>
                                <input type="file" class="form-control" id="imagens" accept="image/*" multiple
                                    v-on:change="mostrarFotos">

                                <div class="row row-cols-5 mt-3">
                                    <div class="col-2" v-for="p in preview" :key="p">
                                        <img :src="p" width="60" height="60" class="rounded">
                                    </div>
                                </div>

                            </div>
                            <div>* {{ $t('modalAdicionarAnimal.camposObrigatorios') }}</div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('modalAdicionarAnimal.cancelar') }}</button>
                    <button type="button" class="btn text-white" style="background-color: #FD7E14;" @click="anunciarAnimal"
                        data-bs-dismiss="modal">{{ $t('modalAdicionarAnimal.confirmar') }}</button>
                        
                </div>
            </div>
        </div>
    </div>
</template>
   
<script>

export default {

    name: 'ModalAdicionarAnuncio',
    components: {

    },
    props: [
        'anuncioSelecionado'
    ],
    watch: {
        anuncioSelecionado(novoAnimal) {
            this.animal = novoAnimal
            this.editar = false
            if (novoAnimal.id != null) {
                this.axios.get('anuncio/num/' + novoAnimal.id).then(response => {
                    this.animal = response.data.anuncio
                    this.editar = true;
                    this.animal.fotografias = []
                })
                    .catch((error) => {
                        console.log(error)
                    });
            } else {
                this.animal = {
                    nome: null,
                    sexo: 1,
                    especie: 1,
                    raca: 1,
                    porte: 1,
                    idade: 1,
                    cor: 1,
                    distrito: "Aveiro",
                    etiqueta: 1,
                    descricao: null,
                    fotografias: []
                }
            }
        }
    },
    data() {
        return {
            animal: {
                nome: null,
                sexo: 1,
                especie: 1,
                raca: 1,
                porte: 1,
                idade: 1,
                cor: 1,
                distrito: "Aveiro",
                etiqueta: 1,
                descricao: null,
                fotografias: []
            },
            distritos: ["Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco",
                "Coimbra", "Évora", "Faro", "Guarda", "Leiria", "Lisboa", "Portalegre", "Porto", "Santarém", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"],
            racas: this.$tm('formAnimalMsg.racas_caes'),
            preview: [],
            mensagemErro: null,
            erro: false,
            editar: false
        }
    },

    mounted() {
        this.animal = this.anuncioSelecionado
        this.animal.animal_id = this.anuncioSelecionado.animal_id
        this.racas = this.animal.raca == 1 ? this.$tm('formAnimalMsg.racas_caes') : this.$tm('formAnimalMsg.racas_gatos')
    },

    methods: {
        mostrarFotos(e) {
            this.preview = []
            this.animal.fotografias = []
            for (let i = 0; i < e.target.files.length; i++) {
                this.preview.push(URL.createObjectURL(e.target.files[i]))
                this.animal.fotografias.push(e.target.files[i])
            }
        },

        anunciarAnimal() {

            if (this.animal.nome == null || this.animal.nome == "") {
                this.mensagemErro = "O nome do animal é obrigatório"
                this.erro = true;
                return;
            }

            this.erro = false;

            if (this.editar) {
                //editar animal
                this.axios.post('editaranuncio/' + this.animal.id, this.animal, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }).then((response) => {
                    console.log(response.data.anuncio)
                    alert("Animal editado com sucesso")
                    this.$emit('anuncioEditado', response.data.anuncio);
                })
                    .catch((error) => {
                        if (error.response.status == 422) {
                            this.mensagemErro = error.response.data.message
                            this.erro = true;
                        } else {
                            this.mensagemErro = error.response.data.message
                            this.erro = true;
                        }
                        console.log(error.response)
                    });
            } else {
                this.axios.post("/novoanuncio", this.animal, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                    .then((response) => {
                        alert("Anuncio criado com sucesso")
                        this.$emit('anuncioCriado', response.data.anuncio);
                    })
                    .catch((error) => {
                        if (error.response.status == 422) {
                            this.mensagemErro = error.response.data.message
                            this.erro = true;
                        } else {
                            this.mensagemErro = error.response.data.message
                            this.erro = true;
                        }
                        console.log(this.mensagemErro)
                    });
            }

        },

        alterarRacas() {
            if (this.animal.especie == 1) {
                this.racas = this.$tm('formAnimalMsg.racas_caes')
            } else {
                this.racas = this.$tm('formAnimalMsg.racas_gatos')
            }
        }
    }
}
</script>