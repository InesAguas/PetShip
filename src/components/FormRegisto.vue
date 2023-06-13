<template>
    <NavBar></NavBar>
    <div class="container">
    <div class="row py-5 justify-content-center">
        <div class="col-lg-4 col-md-7 col-sm-8 col-9">
            <div class="card" style="border-radius: 1rem;">
                <div class="card-body p-4 text-center">
                    <img src="../assets/logo_sem_fundo.png" alt="Logo" width="150" height="150" class="">
                    <h2 class="fw-bold text-uppercase mb-4" style="color: #653208;">{{ $t('registarMsg.registar') }}</h2>
                    <div class="alert alert-danger" role="alert" style="padding:5px" v-show="erro">
                        {{ this.mensagemErro }}
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" v-bind:placeholder="$t('registarMsg.nome')" v-model="utilizador.nome">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email" v-model="utilizador.email">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" v-bind:placeholder="$t('registarMsg.pass')"
                            v-model="utilizador.password">
                    </div>
                    <div class="mb-3">
                        <select class="form-select" v-model="utilizador.tipo">
                            <option selected disabled value="0">{{ $t('registarMsg.tipoConta') }}</option>
                            <option value="1">{{ $t('registarMsg.particular') }}</option>
                            <option value="2">{{ $t('registarMsg.associacao') }}</option>
                        </select>
                    </div>
                    <button class="btn px-5 text-white fw-bold mb-4" style="background-color:#FD7E14;" type="button"
                        v-on:click="registar">{{ $t('registarMsg.registar') }}</button>
                    <p style="color:#ADB5BD;">{{ $t('registarMsg.temConta') }} <router-link to="/login" class="fw-bold"
                            style="color:#6c757d;text-decoration: none;">Login</router-link></p>
                </div>
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
                this.mensagemErro = this.$t('mensagens.camposVazios');
                this.erro = true;
                return;
            }

            if (this.utilizador.tipo != 1 && this.utilizador.tipo != 2) {
                this.mensagemErro = this.$t('mensagens.tipoConta');
                this.erro = true;
                return;
            }

            this.axios.post("/registar", this.utilizador)
                .then(() => {
                    alert(this.$t('mensagens.emailRegistoEnviado'))
                    this.$router.push('/login')
                })
                .catch((error) => {
                    var dot = error.response.data.message.indexOf('.');
                    this.mensagemErro = error.response.data.message.substring(0, dot + 1);
                    this.erro = true;
                });
        }
    }
}
</script>