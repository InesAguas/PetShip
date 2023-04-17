<template>
    <NavBar></NavBar>
    <div class="container-fluid p-0">
        <div class="row d-flex align-items-center justify-content-center" style="height:400px">
            <img src="../assets/cat_dog.jpg" class="w-100 z-0 h-100" >
            <h1 class="fw-bold p-5 z-1" style="color: #653208; margin-top:-600px">Faça um animal feliz <br>Adote</h1>

            <div class="input-group z-1 p-2 rounded" style="max-width:40%; margin-top:-60px; margin-bottom:30px; background-color:white;">
                <select class="form-select w-auto">
                    <option>Procurar Cães e Gatos</option>
                </select>
                <select class="form-select w-auto">
                    <option >Idade</option>
                </select>
                <select class="form-select w-auto">
                    <option >Sexo</option>
                </select>
                <select class="form-select w-auto">
                    <option >Distrito</option>
                </select>
                <button type="button" class="btn text-white fw-bold" style="background-color: #FD7E14;">Procurar</button>   
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-auto" >
                <h1 class="fw-bold" style="color: #653208;">Animais para adoção</h1>
            </div>

        </div>
        <div class="row justify-content-center" >
            <div class="col-auto"><img src="../assets/dog.jpg"  width="150px" height="150px"></div>
            <div class="col-auto"><img src="../assets/cat.jpg"  width="150px" height="150px"></div>
        </div>
        <div class="row justify-content-center mt-5">

        <div class="col-auto">
                <h1 class="fw-bold" style="color: #653208;">Ultimos anuncios</h1>
            </div>
        </div>
            <div class="row justify-content-center">
                <CardAnimal v-for="(row) in animais" :key="row" :animal="row" class="col-auto m-2"></CardAnimal>
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
            })
    },
    data() {
        return {
            animais: [],
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