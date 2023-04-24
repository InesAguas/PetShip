<template>
    <NavBar></NavBar>
    <div class="container">
        <div class="row mt-3">
            <h1 class="fw-bold" style="color: #653208">{{ $t('pageAdotar.titulo') }}</h1>
        </div>
        <div class="row">
            <div class="col-2 mt-3">
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Distrito</label>
                    <select class="form-select" aria-label="Default select example" v-model="filtroDistrito">"
                        <option selected value="">Qualquer</option>
                        <option v-for="(distrito, index) in distritos" :key="index" :value="distrito">{{ distrito }}
                        </option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Espécie</label>
                    <select class="form-select" aria-label="Default select example" v-model="filtroEspecie">
                        <option selected value="">Qualquer</option>
                        <option v-bind:value="$t('formAnimalMsg.especies[0]')">{{ $t('formAnimalMsg.especies[0]') }}
                        </option>
                        <option v-bind:value="$t('formAnimalMsg.especies[1]')">{{ $t('formAnimalMsg.especies[1]') }}
                        </option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Raça</label>
                    <select class="form-select" aria-label="Default select example" v-model="filtroRaca">
                        <option selected value="">Qualquer</option>
                        <option disabled>--- CÃES ---</option>
                        <option v-for="item in $tm('formAnimalMsg.racas_caes')" :key="item" :value="item">{{ item }}</option>
                        <option disabled>--- GATOS ---</option>
                        <option v-for="item in $tm('formAnimalMsg.racas_gatos')" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Idade</label>
                    <select class="form-select" aria-label="Default select example" v-model="filtroIdade">
                        <option selected value="">Qualquer</option>
                        <option v-for="item in $tm('formAnimalMsg.idades')" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Sexo</label>
                    <select class="form-select" aria-label="Default select example" v-model="filtroSexo">
                        <option selected value="">Qualquer</option>
                        <option v-bind:value="$t('formAnimalMsg.sexos[0]')">{{ $t('formAnimalMsg.sexos[0]') }}</option>
                        <option v-bind:value="$t('formAnimalMsg.sexos[0]')">{{ $t('formAnimalMsg.sexos[1]') }}</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Tamanho</label>
                    <select class="form-select" aria-label="Default select example" v-model="filtroTamanho">
                        <option selected value="">Qualquer</option>
                        <option v-for="item in $tm('formAnimalMsg.portes')" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Cor</label>
                    <select class="form-select" aria-label="Default select example" v-model="filtroCor">
                        <option selected value="">Qualquer</option>
                        <option v-for="item in $tm('formAnimalMsg.cores')" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>
                <div class="mb-2 text-center">
                    <button type="button" class="btn px-4 mt-2 text-white fw-bold" style="background-color: #FD7E14;"
                        v-on:click="filtrar">Pesquisar</button>
                </div>


            </div>
            <div class="col">
                <div class="row">
                    <CardAnimal v-for="(row) in animais" :key="row" :animal="row" class="col-auto m-2"></CardAnimal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../NavBar.vue'
import CardAnimal from './CardAnimal.vue'

export default {

    name: 'PageAdotar',
    components: {
        NavBar,
        CardAnimal
    },
    data() {
        return {
            distritos: ["Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", "Coimbra", "Évora", "Faro", "Guarda", "Leiria", "Lisboa", "Portalegre", "Porto", "Santarém", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"],
            animais: [],
            todosAnimais: [],
            filtroDistrito: "",
            filtroEspecie: "",
            filtroRaca: "",
            filtroIdade: "",
            filtroSexo: "",
            filtroTamanho: "",
            filtroCor: "",
        }

    },
    mounted() {
        this.loadAnimais();
    },
    watch: {
        '$i18n.locale': function () {
            this.loadAnimais();
        }
    },
    methods: {
        filtrar() {
            this.animais = this.todosAnimais.filter((animal) => {
                return (this.filtroDistrito != "" ? animal.distrito === this.filtroDistrito : true)
                    && (this.filtroEspecie != "" ? animal.especie === this.filtroEspecie : true)
                    && (this.filtroRaca != "" ? animal.raca === this.filtroRaca : true)
                    && (this.filtroIdade != "" ? animal.idade === this.filtroIdade : true)
                    && (this.filtroSexo != "" ? animal.sexo === this.filtroSexo : true)
                    && (this.filtroTamanho != "" ? animal.tamanho === this.filtroTamanho : true)
                    && (this.filtroCor != "" ? animal.cor === this.filtroCor : true)
            });

            console.log(this.animais)

        },


        loadAnimais() {
            this.axios.get('/adotar?lang=' + this.$i18n.locale)
            .then(response => {
                console.log(response.data)
                this.todosAnimais = response.data.animais
                this.animais = this.todosAnimais
                console.log(this.animais)

            })
        }



    }
}



</script>