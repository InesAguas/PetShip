<template>
    <NavBar></NavBar>
    <div class="container">
    <div class="py-5">
        <div class="row justify-content-center">
            <div class="col-9 col-lg-4 col-md-7 col-sm-8">
                <div class="card bg-white text-black" style="border-radius: 1rem;">
                    <div class="card-body p-4 text-center">
                        <img src="../assets/logo_sem_fundo.png" alt="Logo" width="150" height="150" class="">
                        <h2 class="fw-bold text-uppercase mb-4" style="color: #653208;">Login</h2>
                        <div class="alert alert-danger" role="alert" style="padding:5px" v-show="erro">
                            {{ this.mensagemErro }}
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email" v-model="utilizador.email">
                        </div>

                        <div class="mb-3">
                            <input type="password" class="form-control" v-bind:placeholder="$t('loginMsg.pass')" v-model="utilizador.password">
                        </div>
                        <div class="mb-3 form-check text-start">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="lembrar">
                            <label class="form-check-label" for="exampleCheck1">{{ $t('loginMsg.lembrar') }}</label>
                          </div>
                        <button class="btn px-5 text-white fw-bold mb-4" style="background-color:#FD7E14;" type="button"
                            v-on:click="login">Login</button>
                        <p><router-link to="password-esquecida" style="color:#ADB5BD;text-decoration: none;">{{ $t('loginMsg.esqueceuPass') }}</router-link></p>
                        <p style="color:#ADB5BD;">{{ $t('loginMsg.semConta') }}<router-link to="/registar" class="fw-bold"
                                style="color:#6c757d;text-decoration: none;">{{ $t('loginMsg.registar') }}</router-link></p>

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
    name: 'FormLogin',
    data() {
        return {
            utilizador: {
                email: null,
                password: null
            },
            erro: false,
            mensagemErro: null,
            lembrar: false

        }
    },
    components: {
        NavBar
    },
    methods: {
        login() {
            console.log(this.$store.state.utilizador)

            if (this.utilizador.email == null || this.utilizador.password == null) {
                this.mensagemErro = "Não pode deixar campos vazios."
                this.erro = true;
                return;
            }


            this.axios.post("/login?lang=" + this.$i18n.locale, this.utilizador)
                .then((response) => {
                    //guardar o token na localstorage se tiver o remember me ? e depois meter na session storage???
                    //guardar na session storage se não tiver o remember me ?
                    if(this.lembrar){
                        localStorage.setItem('utilizador', JSON.stringify(response.data.utilizador));
                        localStorage.setItem('token', response.data.token);

                    }
                    
                    sessionStorage.setItem('utilizador', JSON.stringify(response.data.utilizador));
                    sessionStorage.setItem('token', response.data.token);

                    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
                    this.$router.push('/');
                })
                .catch((error) => {
                    console.log(error)
                    if (error.response.status == 422) {
                        this.mensagemErro = error.response.data.message;
                        this.erro = true;
                    } else if (error.response.status == 403) {
                        this.mensagemErro = error.response.data.message;
                        this.erro = true;
                    }
                });

        }
    }
}
</script>