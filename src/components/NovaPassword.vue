<template>
    <NavBar></NavBar>

    <div class="container">
        <div class="py-5">
            <div class="row justify-content-center">
                <div class="col-9 col-lg-4 col-md-7 col-sm-8">
                    <div class="card bg-white text-black" style="border-radius: 1rem;">
                        <div class="card-body p-4 text-center">
                            <img src="../assets/logo_sem_fundo.png" alt="Logo" width="150" height="150" class="">
                            <h2 class="fw-bold text-uppercase mb-4" style="color: #653208;">{{$t('recuperarPassword.tituloNova')}}</h2>
                            <div class="alert alert-danger" role="alert" style="padding:5px" v-show="erro">
                                {{ this.mensagemErro }}
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="Email" v-model="email">
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" placeholder="Password" v-model="password">
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" :placeholder="$t('recuperarPassword.confirmePassword')" v-model="password_confirmation">
                            </div>
                            <button class="btn px-5 text-white fw-bold mb-4 me-3" style="background-color:#FD7E14;" type="button"
                                v-on:click="alterarPassword">{{$t('recuperarPassword.alterar')}}</button>
                                <router-link to="/login"><button class="btn px-5 text-white fw-bold mb-4" style="background-color:gray;" type="button">{{$t('recuperarPassword.cancelar')}}</button></router-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
    name: 'PasswordEsquecida',
    data() {
        return {
           password: null,
           password_confirmation: null,
           email: null,
            mensagemErro: null,
            erro : false
        }
    },
    components: {
        NavBar
    },
    methods: {
        alterarPassword() {
            if(this.password == null || this.password_confirmation == null || this.email == null) {
                this.mensagemErro = this.$t('mensagens.camposVazios');
                this.erro = true;
                return;
            }

            if(this.password != this.password_confirmation) {
                this.mensagemErro = this.$t('mensagens.passwordNaoCoincide');
                this.erro = true;
                return;
            }

            if(this.password.length < 8) {
                this.mensagemErro = this.$t('mensagens.passwordLength');
                this.erro = true;
                return;
            }

            this.axios.post('/reset-password', 
            {
                email : this.email, password : this.password, password_confirmation : this.password_confirmation, token : this.$route.params.token
            }).then(() => {
                    alert(this.$t('mensagens.passwordAlterada'));
                    this.$router.push('/login');
                })
                .catch((error) => {
                    this.mensagemErro = error.response.data.message;
                    this.erro = true;
                });
        }

    }
}
</script>