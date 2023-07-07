<template>

    <NavBar></NavBar>
    <div class="container mt-5" v-if="animal.nome">
        <div class="row">
            <h1 class="fw-bold" style="color: #653208">{{ animal.nome }} <small><small><small><small
                                class="badge rounded-pill" style="background-color: #FD7E14">{{
                                    animal.etiqueta }}</small></small></small></small></h1>

        </div>
        <div class="row">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner" v-if="animal.fotografias">
                    <div class="carousel-item active">
                        <img :src="animal.fotografias.length == 0 ? require('../../assets/default_animal.png') : animal.fotografias[0]"
                            class="d-block w-100" height="400" style="object-fit:scale-down;" alt="...">
                    </div>
                    <div class="carousel-item" v-for="(imagem) in animal.fotografias.slice(1)" :key="imagem">
                        <img :src=imagem class="d-block w-100" height="400" style="object-fit:scale-down;" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
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
                            <router-link :to="'/perfil/' + utilizador.id"><img
                                    :src="utilizador.fotografia == null ? require('../../assets/default_user.jpg') : utilizador.fotografia"
                                    class="rounded-circle" style="width:70px;height:70px;object-fit:cover;"></router-link>
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
                        <p v-if="utilizador.telefone"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
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
                        <p v-if="utilizador.iban">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-credit-card" viewBox="0 0 16 16">
                                <path
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                            </svg>
                            {{ utilizador.iban }}
                        </p>
                    </div>
                    <div class="row">

                        <div class="col-1 m-1" v-if="utilizador.facebook">
                            <a :href="utilizador.facebook" target='_blank' class="me-1"><img class="mt-3"
                                    src="../../assets/facebook.png" height="30"></a>
                        </div>
                        <div class="col-1 m-1" v-if="utilizador.instagram">
                            <a :href="utilizador.instagram" target='_blank' class="me-1 mt-4"><img class="mt-3"
                                    src="../../assets/instagram.png" height="30"></a>
                        </div>
                        <div class="col">
                            <button @click="mandarMensagem" type="button" class="btn mt-3"
                                style="background-color:#FD7E14; color:white"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" fill="white" class="bi bi-chat-dots me-2" viewBox="0 0 16 16">
                                    <path
                                        d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    <path
                                        d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>{{ $t('paginaAnimalMsg.enviarMensagem') }}</button>
                            <button v-if="animal.etiqueta == 'Adoção' || animal.etiqueta == 'Adoption'"
                                @click="modalAberto = true" type="button" class="btn mt-3 ms-2"
                                style="background-color:#FD7E14; color:white" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">{{ $t('paginaAnimalMsg.adotar')
                                }}</button>

                            <!--Modal de adotar -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">{{
                                                $t('modalCandidatura.titulo') }}</h1>

                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row" v-if="conteudoCurrent == 1">
                                                <div class="col">
                                                    <form>
                                                        <div class="mb-3">
                                                            <label for="name" class="form-label">{{ $t('registarMsg.nome')
                                                            }}*</label>
                                                            <input type="text" class="form-control" id="name"
                                                                aria-describedby="name"
                                                                :placeholder="$t('registarMsg.nome')"
                                                                v-if="utilizadorLogado.nome !== null"
                                                                :value="utilizadorLogado.nome"
                                                                @input="utilizadorLogado.nome = $event.target.value; verificarCamposPreenchidos()">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="cc" class="form-label">{{ $t('modalCandidatura.cc')
                                                            }}*</label>
                                                            <input type="text" class="form-control" id="cc"
                                                                aria-describedby="cc"
                                                                :placeholder="$t('modalCandidatura.cc')" v-model="cc"
                                                                @input="verificarCamposPreenchidos">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="telefone" class="form-label">{{
                                                                $t('modalCandidatura.telefone') }}*</label>
                                                            <input type="text" class="form-control" id="telefone"
                                                                aria-describedby="telefone"
                                                                :placeholder="$t('modalCandidatura.telefone')"
                                                                v-if="utilizadorLogado.telefone !== null || utilizadorLogado.telefone == null"
                                                                :value="utilizadorLogado.telefone"
                                                                @input="utilizadorLogado.telefone = $event.target.value; verificarCamposPreenchidos()">
                                                        </div>
                                                        <div>
                                                            <p class="fw-bold">*{{ $t('modalCandidatura.camposObrigatorios')
                                                            }}</p>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="col">
                                                    <form>
                                                        <div class="mb-3">
                                                            <label for="morada" class="form-label">{{
                                                                $t('modalCandidatura.morada') }}*</label>
                                                            <input type="text" class="form-control" id="morada"
                                                                aria-describedby="morada"
                                                                :placeholder="$t('modalCandidatura.morada')"
                                                                v-if="utilizadorLogado.localizacao !== null || utilizadorLogado.localizacao == null"
                                                                :value="utilizadorLogado.localizacao"
                                                                @input="utilizadorLogado.localizacao = $event.target.value; verificarCamposPreenchidos()">
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col">
                                                                <label for="exampleFormControlInput1" class="form-label">{{
                                                                    $t('modalCandidatura.distrito') }}*</label>
                                                                <select class="form-select"
                                                                    aria-label="Default select example"
                                                                    v-model="utilizadorLogado.distrito">
                                                                    <option selected value="">{{ $t('pageAdotar.qualquer')
                                                                    }}</option>
                                                                    <option v-for="(distrito, index) in distritos"
                                                                        :key="index" :value="distrito">{{
                                                                            distrito }}
                                                                    </option>

                                                                </select>
                                                            </div>
                                                            <div class="col">
                                                                <label for="codPostal" class="form-label">{{
                                                                    $t('modalCandidatura.codPostal') }}*</label>
                                                                <input type="text" class="form-control" id="codPostal"
                                                                    aria-describedby="codPostal" placeholder="0000-000"
                                                                    v-if="utilizadorLogado.codigo_postal !== null || utilizadorLogado.codigo_postal == null"
                                                                    :value="utilizadorLogado.codigo_postal"
                                                                    @input="utilizadorLogado.codigo_postal = $event.target.value; verificarCamposPreenchidos()">
                                                            </div>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="email" class="form-label">Email*</label>
                                                            <input type="text" class="form-control" id="email"
                                                                aria-describedby="email" placeholder="Email"
                                                                v-if="utilizadorLogado.email !== null || utilizadorLogado.email == null"
                                                                :value="utilizadorLogado.email"
                                                                @input="utilizadorLogado.email = $event.target.value; verificarCamposPreenchidos()">
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                            <div class="row ms-3 me-3" v-if="conteudoCurrent == 2">
                                                <h5>{{ $t('modalCandidatura.declaracaoTitulo') }}</h5>
                                                <textarea class="form-control disabled mb-3" rows="15" readonly>Declara,ainda,que assume a responsabilidade pelo estado de saúde do animal adotado, uma vez que foi informado de que, dadas as caraterísticas de um canil/ centro de recolha e/ ou qualquer animal que se puder encontrar em período de incubação de qualquer doença sem sintimatologia aparente, não é possível atestar, garantir e comprovar um perfeito estado sanitário de todos os animais aqui alojados.


Condições exigidas ao adotante:

Para realizar a adoção de um animal de companhia,deve:
    
    1. Ter mais de 16 anos de idade;
    2. Ter condições de alojamento e manutenção para o animal;
    3. Apresentar o seu cartão de cidadão;
    4. Aceitar o termo de responsabilidade;
    5. No caso do canídeo não se encontrar vacinado contra a raiva e tiver idade superior a 3 meses, é obrigatório a vacinação antirrábica no momento da restituição, devendo, para o efeito, pagar a respectiva vacina;


Tratamento dos dados pessoais:

Aceita que os seus dados pessoais sejam utilizados afim de receber informações e/ou ser contactado pelos serviços do canil/centro de recolha,se assim considerar pertinente.

                        </textarea>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="responsabilidade" v-model="aceitouResponsabilidade">
                                                    <label class="form-check-label" for="responsabilidade">
                                                        {{ $t('modalCandidatura.checkResponsabilidade') }}*
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="condicoes"
                                                        v-model="aceitouCondicoes">
                                                    <label class="form-check-label" for="condicoes">
                                                        {{ $t('modalCandidatura.checkCondicoes') }}*
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="dadosPessoais" v-model="aceitouDadosPessoais">
                                                    <label class="form-check-label" for="dadosPessoais">
                                                        {{ $t('modalCandidatura.checkDadosPessoais') }}*
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" v-if="first">{{
                                                $t('modalCandidatura.cancelar') }}</button>
                                            <button type="button" class="btn btn-secondary" @click="prev" v-if="!first">{{
                                                $t('modalCandidatura.voltar') }}</button>
                                            <button type="button" class="btn btn-primary" id="seguinte"
                                                style="background-color:#FD7E14; display: block;" @click="next()" v-if="first">{{
                                                    $t('modalCandidatura.seguinte') }}</button>
                                             <button type="button" class="btn btn-primary" style="background-color:#FD7E14;"
                                                v-if="!first && checkboxesSelecionadas" @click="confirmar" data-bs-dismiss="modal" 
                                                >{{ $t('modalCandidatura.confirmar') }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <p class="mt-3">{{ $t('paginaAnimalMsg.anuncioCriado') }} <span>{{ animal.created_at }}</span></p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class=" mt-3 p-3 pt-3 rounded-3 border" style=" background-color:white;">
                    <div class="row">
                        <div class="col">
                            <h4 class="fw-bold text-start">{{ $t('paginaAnimalMsg.carateristicas') }}</h4>
                        </div>
                        <div class="col-1">

                            <a :href="'https://www.facebook.com/sharer/sharer.php?u=https://petship.pt/animal/' + animal.id + '&title=' + animal.nome"
                                target="_blank" rel="noopener"><img class="img p-0 m-0" src="../../assets/facebook.png"
                                    height="30" width="30"></a>
                        </div>
                    </div>


                    <div class="text-start">

                        <p class="fw-bold fs-6">
                            {{ $t('formAnimalMsg.especie') }}: <span class="fw-normal">{{ animal.especie }}</span><br>
                            {{ $t('formAnimalMsg.raca') }}: <span class="fw-normal">{{ animal.raca }}</span><br>
                            {{ $t('formAnimalMsg.sexo') }}: <span class="fw-normal">{{ animal.sexo }}</span><br>
                            {{ $t('paginaAnimalMsg.tamanho') }}: <span class="fw-normal">{{ animal.porte }}</span><br>
                            {{ $t('formAnimalMsg.idade') }}: <span class="fw-normal">{{ animal.idade }}</span><br>
                            {{ $t('formAnimalMsg.cor') }}: <span class="fw-normal">{{ animal.cor }}</span><br>
                        </p>
                        <h4 class="fw-bold">{{ $t('formAnimalMsg.descricao') }}</h4>
                        <p>
                            {{ animal.descricao }}
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
//import ModalCandidatura from './ModalCandidatura.vue'
export default {

    name: 'PagePetSitting',
    components: {
        NavBar,
       
    },

    data() {
        return {
            animal: [],
            utilizador: [],
           
            utilizadorLogado: null,
            distritos: ["Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", "Coimbra", "Évora", "Faro", "Guarda", "Leiria", "Lisboa", "Portalegre", "Porto", "Santarém", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"],
            cc: "",
            camposPreenchidos: false,
            conteudoCurrent: 1,
            modalAberto: false,
            first: true,
            aceitouResponsabilidade: false,
            aceitouCondicoes: false,
            aceitouDadosPessoais: false,
            candidatura: {
                id_anuncio: null ,
                id_utilizador: null,
                cc: '',
                termos: true,
            }




        }

    },
    mounted() {

        this.utilizadorLogado = JSON.parse(sessionStorage.getItem('utilizador'));
        this.axios.get('animal/' + this.$route.params.id)
            .then(response => {
                this.animal = response.data.animal
                this.utilizador = response.data.utilizador
                console.log(this.animal)
            })
            .catch(() => {
                this.$router.push({ name: 'notFound' });
            })
    },
    computed: {
        checkboxesSelecionadas() {
            return this.aceitouResponsabilidade && this.aceitouCondicoes && this.aceitouDadosPessoais
        }
    },
    methods: {
        mandarMensagem() {
            if (sessionStorage.getItem('token') == null || sessionStorage.getItem('utilizador') == null) {
                this.$router.push({ name: "login" })
            }

            if (this.utilizador.id == JSON.parse(sessionStorage.getItem('utilizador')).id) {
                alert("Não pode enviar mensagens a si mesmo")
            } else {
                this.$router.push({
                    name: "mensagens", //use name for router push
                    params: {
                        id: this.utilizador.id,
                        nome: this.utilizador.nome,
                    }
                });
            }
        },
        next() {
            if (this.camposPreenchidos) {
                this.conteudoCurrent++;
                if (this.conteudoCurrent == 2) {
                    this.first = false;
                }
            }
            else {
                alert("Erro ao preencher os campos")
            }


        },
        prev() {
            this.conteudoCurrent--;
            if (this.conteudoCurrent == 1) {
                this.first = true;
            }

        },
        verificarCamposPreenchidos() {
            const nomePreenchido = this.utilizadorLogado.nome != null && this.utilizadorLogado.nome != "";
            const emailPreenchido = this.utilizadorLogado.email != null && this.utilizadorLogado.email != "";
            const telefonePreenchido = this.utilizadorLogado.telefone != null && this.utilizadorLogado.telefone != "" && /^[9|2]\d{8}$/.test(this.utilizadorLogado.telefone);
            const localizacaoPreenchido = this.utilizadorLogado.localizacao != null && this.utilizadorLogado.localizacao != "";
            const distritoPreenchido = this.utilizadorLogado.distrito != null && this.utilizadorLogado.distrito != "";
            const codigoPostalPreenchido = this.utilizadorLogado.codigo_postal != null && this.utilizadorLogado.codigo_postal != "" && /^\d{4}-\d{3}$/.test(this.utilizadorLogado.codigo_postal);
            const ccPreenchido = this.cc != null && this.cc != "" && this.cc.length == 12;
            const camposPreenchidos = nomePreenchido && emailPreenchido && telefonePreenchido && localizacaoPreenchido && distritoPreenchido && codigoPostalPreenchido && ccPreenchido;
            this.camposPreenchidos = camposPreenchidos;
        },
        confirmar() {
         
            this.candidatura = {
                id_anuncio: this.animal.id,
                id_utilizador: this.utilizadorLogado.id,
                cc: this.cc,
                termos: true,
            };
            console.log(this.candidatura);
            this.axios.post('/candidaturainserir', this.candidatura, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response);
                 //Mostrar mensagem de sucesso
                 alert("Candidatura efetuada com sucesso!");
                this.modalAberto = false;
                //Reiniciar os dados do modal
                this.conteudoCurrent = 1;
                this.first = true;
                this.aceitouResponsabilidade = false;
                this.aceitouCondicoes = false;
                this.aceitouDadosPessoais = false;
                this.cc = "";
                this.camposPreenchidos = false;
                this.candidatura = {
                    id_anuncio: this.animal.id,
                    id_utilizador: this.utilizadorLogado.id,
                    cc: '',
                    termos: true,
                }
    
               

            }).catch(error => {
                console.log(error);
            });
          
        },
    },

}

</script>