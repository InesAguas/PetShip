<style>
#imagem {
    opacity: 0.7;
}

#imagem:hover {
    opacity: 1;
}
</style>

<template>
    <NavBar></NavBar>

    <div class="container-fluid p-0">
        <div class="d-flex" style="height:400px">
            <img src="../assets/cat_dog.jpg" class="w-100 z-0 h-100 opacity-75" style="object-fit:cover;">
            <h1 class="fw-bold p-5 z-1 position-absolute" style="color: #653208;">{{$t('paginaInicialMsg.tituloImagem')}} <br>{{$t('paginaInicialMsg.tituloAdote')}}</h1>
            <div class="input-group z-1 p-2 position-absolute rounded"
                style="width:40%; margin-top:320px; margin-left:30%;  background-color:white;">
                <select class="form-select w-auto" v-model="filtroEspecie">
                    <option value="">{{ $t('paginaInicialMsg.caesgatos') }}</option>
                    <option v-bind:value=" $t('formAnimalMsg.especies[0]')">{{ $t('paginaInicialMsg.caes') }}</option>
                    <option v-bind:value=" $t('formAnimalMsg.especies[1]')">{{ $t('paginaInicialMsg.gatos') }}</option>
                </select>
                <select class="form-select w-auto" v-model="filtroIdade">
                    <option value="">{{ $t('paginaInicialMsg.idade') }}</option>
                    <option v-for="item in $tm('formAnimalMsg.idades')" :key="item" :value="item">{{item}}</option>
                </select>
                <select class="form-select w-auto" v-model="filtroSexo">
                    <option value="">{{ $t('paginaInicialMsg.sexo') }}</option>
                    <option v-bind:value=" $t('formAnimalMsg.sexos[0]')">{{ $t('formAnimalMsg.sexos[0]') }}</option>
                    <option v-bind:value=" $t('formAnimalMsg.sexos[1]')">{{ $t('formAnimalMsg.sexos[1]') }}</option>
                </select>
                <select class="form-select w-auto" v-model="filtroDistrito">
                    <option value="">{{ $t('paginaInicialMsg.distrito') }}</option>
                    <option v-for="item in distritos" :key="item" :value="item">{{item}}</option>  
                </select>
                <button type="button" class="btn text-white fw-bold" @click="procurarAnimais()" style="background-color: #FD7E14;">{{$t('paginaInicialMsg.procurar')}}</button>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-auto">
                <h1 class="fw-bold" style="color: #653208;">{{$t('paginaInicialMsg.adocao')}}</h1>
            </div>

        </div>
        <div class="row justify-content-center">
            <div class="col-auto z-0 d-flex justify-content-center align-items-end"><a href="/adotar"><img 
                src="../assets/dog.jpg" id="imagem" width="200px" height="200px" style="object-fit:cover;"></a>
                        <!--<h2 class="fw-bold z-1 position-absolute" style="color:white">{{$t('paginaInicialMsg.caes')}}</h2>-->
            </div>
            <div class="col-auto z-0 d-flex justify-content-center align-items-end"><a href="/adotar"><img
                        src="../assets/cat.jpg" id="imagem" width="200px" height="200px" style="object-fit:cover;"></a>
                <!--<h2 class="fw-bold z-1 position-absolute" style="color:white">{{$t('paginaInicialMsg.gatos')}}</h2>-->
            </div>
        </div>
        <div class="row justify-content-center mt-5">

            <div class="col-auto">
                <h1 class="fw-bold" style="color: #653208;">{{$t('paginaInicialMsg.ultimosAnuncios')}}</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <CardAnimal v-for="(row) in animais" :key="row" :animal="row" class="col-auto m-2"></CardAnimal>
        </div>
        <div class="row mt-5">
            <div class="col me-2 mb-5" style="background-color:white;">
                <h1 class="fw-bold" style="color: #653208;">{{$t('paginaInicialMsg.associacoesPerto')}}</h1>
                <h6>{{$t('paginaInicialMsg.encontreAssociacao')}}</h6>
                <div width="500" height="500">
                    <GMapMap :center="{ lat: latitude, lng: longitude }" :zoom="13" map-type-id="terrain" style="height:400px">
                        <GMapMarker :position="{ lat: latitude, lng: longitude }" />
                    </GMapMap>
                </div>
            </div>
            <div class="col ms-2 mb-5" style="background-color:white;">
                <h1 class="fw-bold" style="color: #653208;">{{$t('paginaInicialMsg.ajudarTexto')}}</h1>
                <h6>{{$t('paginaInicialMsg.textAjudas')}}</h6>
            </div>
        </div>
    </div>
</template>


<script>
import NavBar from './NavBar.vue'
import CardAnimal from './animais/CardAnimal.vue'

export default {
    name: 'PaginaInicial',
    mounted() {
        this.loadAnimais();
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
        });
    },
    watch: {
        '$i18n.locale': function () {
            this.loadAnimais();
        }
    },
    data() {
        return {
            animais: [],
            latitude: 40.3609438,
            longitude: -7.8633804,
            distritos: ["Aveiro", "Beja", "Braga", "Bragança","Castelo Branco", 
            "Coimbra", "Évora","Faro","Guarda","Leiria","Lisboa","Portalegre","Porto","Santarém","Setúbal","Viana do Castelo","Vila Real","Viseu"],
            filtroEspecie: "",
            filtroIdade: "",
            filtroSexo: "",
            filtroDistrito: ""
        }
    },
    components: {
        NavBar,
        CardAnimal
    },
    methods: {
        loadAnimais() {
            this.axios.get('/adotar?lang=' + this.$i18n.locale)
            .then(response => {
                console.log(response.data)
                this.animais = response.data.animais
                this.animais = this.animais.slice(-4)
                console.log(this.animais)
            });
        
        },

        procurarAnimais() {
            let filtros = {
                especie: this.filtroEspecie,
                idade: this.filtroIdade,
                sexo: this.filtroSexo,
                distrito: this.filtroDistrito
            }   

            this.$router.push({
            name: "adotar", //use name for router push
            params: filtros
      });

            //console.log(filtros);
        }
    }
}


</script>