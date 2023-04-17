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
                <select class="form-select w-auto">
                    <option>Procurar Cães e Gatos</option>
                </select>
                <select class="form-select w-auto">
                    <option>Idade</option>
                </select>
                <select class="form-select w-auto">
                    <option>Sexo</option>
                </select>
                <select class="form-select w-auto">
                    <option>Distrito</option>
                </select>
                <button type="button" class="btn text-white fw-bold" style="background-color: #FD7E14;">{{$t('paginaInicialMsg.procurar')}}</button>
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
            <div class="col-auto <-0 d-flex justify-content-center align-items-end"><a href="/adotar"><img
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
            <CardAnimal v-for="(row) in animais" :key="row" :animal="row" class="col m-2"></CardAnimal>
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
        this.axios.get('/adotar')
            .then(response => {
                console.log(response.data)
                this.animais = response.data.animais
                this.animais = this.animais.slice(-4)
                console.log(this.animais)
            });
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
        });
    },
    data() {
        return {
            animais: [],
            latitude: 40.3609438,
            longitude: -7.8633804
        }
    },
    components: {
        NavBar,
        CardAnimal
    },
    methods: {
    }
}


</script>