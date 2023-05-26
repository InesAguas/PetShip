<template>
    <NavBar></NavBar>

    <div class="container">
        <div class="py-5">
            <div class="row justify-content-center">
                <div class="col-9 col-lg-4 col-md-7 col-sm-8">
                    <div class="card bg-white text-black" style="border-radius: 1rem;">
                        <div class="card-body p-4 text-center">
                            <img src="../assets/logo_sem_fundo.png" alt="Logo" width="150" height="150" class="">
                            <h2 class="fw-bold text-uppercase mb-4" style="color: #653208;">Recuperar password</h2>
                            <div class="alert alert-danger" role="alert" style="padding:5px" v-show="erro">
                                {{ this.mensagemErro }}
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="Email" v-model="email">
                            </div>

                            <button class="btn px-5 text-white fw-bold mb-4 me-3" style="background-color:#FD7E14;" type="button"
                                v-on:click="recuperar">Recuperar</button>
                                <router-link to="/login"><button class="btn px-5 text-white fw-bold mb-4" style="background-color:gray;" type="button">Cancelar</button></router-link>

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
            email: null,
            mensagemErro: null,
            erro : false
        }
    },
    components: {
        NavBar
    },
    methods: {

        recuperar() {
            if(this.email == null) {
                return;
            }

            this.axios.post('/forgot-password', {email : this.email})
            .then(() => {
                    alert("Foi enviado um email para o seu endereço de email com as instruções para recuperar a sua password.");
                })
                .catch((error) => {
                    if(error.response.status == 422) {
                        this.mensagemErro = "Email inválido.";
                        this.erro = true;
                    } else {
                        this.mensagemErro = "Ocorreu um erro. Tente novamente mais tarde.";
                        this.erro = true;
                    }
                });
        }
    }
}
</script>