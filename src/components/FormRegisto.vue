<template>
    <NavBar></NavBar>
    <div class="row py-5 justify-content-center">
        <div class="col-3 ">
            <div class="card" style="border-radius: 1rem;">
                <div class="card-body p-4 text-center">
                    <img src="../assets/logo_sem_fundo.png" alt="Logo" width="150" height="150" class="">
                    <h2 class="fw-bold text-uppercase mb-4" style="color: #653208;">Registar</h2>
                    <div class="alert alert-danger" role="alert" style="padding:5px" v-show="erro">
                        {{ this.mensagemErro }}
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Nome" v-model="utilizador.nome">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email" v-model="utilizador.email">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" placeholder="Palavra-passe"
                            v-model="utilizador.password">
                    </div>
                    <div class="mb-3">
                        <select class="form-select">
                            <option selected disabled value="0">Escolha o tipo de conta</option>
                            <option value="1">Particular</option>
                            <option value="2">Associação</option>
                        </select>
                    </div>
                    <button class="btn px-5 text-white fw-bold mb-4" style="background-color:#FD7E14;" type="button"
                        v-on:click="registar">Registar</button>
                    <p style="color:#ADB5BD;">Já tem conta? <router-link to="/login" class="fw-bold"
                            style="color:#6c757d;text-decoration: none;">Login</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
    name: 'FormRegisto',
    data() {
        return {
            utilizador: {
                nome: null,
                email: null,
                password: null,
                tipo: 0
            },
            erro: false,
            mensagemErro: null

        }
    },
    components: {
        NavBar
    },
    methods: {
        registar() {

            if (this.utilizador.nome == null || this.utilizador.email == null || this.utilizador.password == null) {
                this.mensagemErro = "Não podem existir campos vazios."
                this.erro = true;
                return;
            }

            if (this.utilizador.tipo != 1 && this.utilizador.tipo != 2) {
                this.mensagemErro = "Selecione um tipo de conta."
                this.erro = true;
                return;
            }


            this.axios.post("/registar", this.utilizador)
                .then(function (response) {
                    console.log(response);
                    //aqui ou diz que o registo foi feito e existe a verificaçao de email
                    //ou entao faz diretamente login...
                })
                .catch((error) => {
                    if (error.response.status == 422) {
                        //aqui temos de modificar a mensagem de erro, talvez meter a mensagem que o servidor envia???
                        this.mensagemErro = "????"
                        this.erro = true;
                    }
                });
        }
    }
}
</script>