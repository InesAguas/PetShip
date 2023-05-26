<template>
    <NavBar></NavBar>
    <div class="container mt-5">
        <div class="row">
            <h1 class="fw-bold" style="color: #653208">{{ animal.nome }} <small><small><small><small
                                class="badge rounded-pill" style="background-color: #FD7E14">{{ animal.etiqueta
                                }}</small></small></small></small></h1>
        </div>
        <div class="row">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner" v-if="animal.fotografias">
                    <div class="carousel-item active">
                        <img :src="animal.fotografias.length == 0 ? require('../../assets/default_animal.png') : animal.fotografias[0] "
                            class="d-block w-100" height="400" style="object-fit:scale-down;" alt="...">
                    </div>
                    <div class="carousel-item" v-for="(imagem) in animal.fotografias.slice(1)" :key="imagem">
                        <img :src=imagem
                            class="d-block w-100" height="400" style="object-fit:scale-down;" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"  aria-hidden="true" ></span>
                    <span class="visually-hidden" >Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="container mt-3 p-3 pt-3 rounded-3 border" style="background-color:white;">
                    <div class="row">
                        <div class="col-3 me-2">
                            <img :src="utilizador.fotografia == null ? require('../../assets/default_user.jpg') : utilizador.fotografia"
                                class="rounded-circle" style="width:70px;height:70px;object-fit:cover;">
                        </div>
                        <div class="col">
                            {{ $t('paginaAnimalMsg.anunciado') }}<h5>{{ utilizador.nome }}</h5>
                            <p v-if="utilizador.localizacao">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z">
                                    </path>
                                </svg>
                                {{ utilizador.localizacao }}
                            </p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <h4 class="fw-bold">{{ $t('paginaAnimalMsg.contactos') }}</h4>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            {{ utilizador.telefone }}
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path
                                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg>
                            {{ utilizador.email }}
                        </p>
                    </div>
                    <div class="row">
                        
                            <a :href="`http://www.facebook.com/sharer/sharer.php?u=localhost:8080/animal/${animal.id}&title=hello`" class="me-1"><img class="mt-3" src="../../assets/facebook.png" height="300px"></a>
                        
                            <div class="col-1 m-1">
                            <a href="https://www.instagram.com/" class="me-1 mt-4"><img class="mt-3" src="../../assets/instagram.png" height="30px"></a>
                        </div>
                            <div class="col">
                            <button @click="mandarMensagem" type="button" class="btn mt-3 ms-2" style="background-color:#FD7E14; color:white"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                                    class="bi bi-chat-dots me-2" viewBox="0 0 16 16">
                                    <path
                                        d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    <path
                                        d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>Enviar mensagem</button>
                                </div>
                       
                    </div>
                    <div class="row">
                        <p class="mt-3">{{ $t('paginaAnimalMsg.anuncioCriado') }} <span>{{ animal.created_at }}</span></p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="container mt-3 p-3 pt-3 rounded-3 border" style=" background-color:white;">
                    <div class="text-start">
                        <h4 class="fw-bold">{{ $t('paginaAnimalMsg.carateristicas') }}</h4>
                        <p class="fw-bold fs-6">
                            {{ $t('formAnimalMsg.especie') }}: <span class="fw-normal">{{animal.especie}}</span><br>
                            {{ $t('formAnimalMsg.raca') }}: <span class="fw-normal">{{animal.raca}}</span><br>
                            {{ $t('formAnimalMsg.sexo') }}: <span class="fw-normal">{{animal.sexo}}</span><br>
                            {{ $t('paginaAnimalMsg.tamanho') }}: <span class="fw-normal">{{animal.porte}}</span><br>
                            {{ $t('formAnimalMsg.idade') }}: <span class="fw-normal">{{animal.idade}}</span><br>
                            {{ $t('formAnimalMsg.cor') }}: <span class="fw-normal">{{animal.cor}}</span><br>
                        </p>
                        <h4 class="fw-bold">{{ $t('formAnimalMsg.descricao') }}</h4>
                        <p>
                            {{animal.descricao}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #FD7E14;
}

</style>
<script>

import NavBar from '../NavBar.vue'
export default {

    name: 'PagePetSitting',
    components: {
        NavBar,

    },
    data() {
        return {
            animal: [],
            utilizador: [],
        }

    },
    mounted() {
        this.axios.get('animal/' + this.$route.params.id)
            .then(response => {
                this.animal = response.data.animal
                this.utilizador = response.data.utilizador
                console.log(this.animal)
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        mandarMensagem() {
            this.$router.push({
            name: "mensagens", //use name for router push
            params: {
                id: this.utilizador.id,
                nome: this.utilizador.nome,
            }
            });
        }
    }
}
</script>