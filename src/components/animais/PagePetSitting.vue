<template>
    <NavBar></NavBar>
    <div class="container">
        <div class="row mt-3">
            <h1 class="fw-bold" style="color: #653208">Pet Sitting</h1>
        </div>
        <div class="row">
            <div class="col-2 mt-3">
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">{{$t('pageAdotar.distrito')}}</label>
                    <select class="form-select" aria-label="Default select example" v-model="filtroDistrito">"
                        <option selected value="">{{$t('pageAdotar.qualquer')}}</option>
                        <option v-for="(distrito, index) in distritos" :key="index" :value="distrito">{{ distrito }}</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">{{$t('pageAdotar.especie')}}</label>
                    <select class="form-select" aria-label="Default select example"  v-model="filtroEspecie">
                        <option selected value="">{{$t('pageAdotar.qualquer')}}</option>
                        <option v-bind:value="$t('formAnimalMsg.especies[0]')">{{ $t('formAnimalMsg.especies[0]') }}</option>
                    <option v-bind:value="$t('formAnimalMsg.especies[1]')">{{ $t('formAnimalMsg.especies[1]') }}</option>
                    </select>
                </div>
                <div class="mb-2 text-center">
                <button type="button" class="btn px-4 mt-2 text-white fw-bold"
                    style="background-color: #FD7E14;" v-on:click="filtrar" >{{$t('pageAdotar.pesquisar')}}</button>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <CardAnimal v-for="(row) in animais" :key="row" :animal="row" class="col-auto m-2" v-on:click="irPaginaAnimal(row)"></CardAnimal>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import NavBar from '../NavBar.vue'
import CardAnimal from './CardAnimal.vue'

export default {

    name: 'PagePetSitting',
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
        }

    },
    watch: {
        '$i18n.locale': function () {
            this.loadAnimais();
        }
    },
    mounted() {
        this.loadAnimais();
    },
    methods: {
        loadAnimais() {
            this.axios.get('/petsitting?lang=' + this.$i18n.locale)
            .then(response => {
                console.log(response.data)
                this.todosAnimais = response.data.animais
                this.animais = this.todosAnimais
                console.log(this.animais)
                
            })
        },

        filtrar() {
            this.animais = this.todosAnimais.filter((animal) => {
                return (this.filtroDistrito != "" ? animal.distrito === this.filtroDistrito : true)
                    && (this.filtroEspecie != "" ? animal.especie === this.filtroEspecie : true)
            });

            console.log(this.animais)

        },
        irPaginaAnimal(animal) {
            this.$router.push({ name: 'animal', params: { id: animal.id } })

        }
    }
}

</script>