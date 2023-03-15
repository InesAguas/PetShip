<template>
    <NavBar></NavBar>
    <div class="py-5">
        <div class="row justify-content-center">
        <div class="col-3">
            <div class="card bg-white text-black" style="border-radius: 1rem;">
                <div class="card-body p-4 text-center">
                    <img src="../assets/logo_sem_fundo.png" alt="Logo" width="150" height="150" class="">
                    <h2 class="fw-bold text-uppercase mb-4" style="color: #653208;">Login</h2>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email">
                    </div>

                    <div class="mb-3">
                        <input type="password" class="form-control" placeholder="Palavra-passe">
                    </div>
                    <button class="btn px-5 text-white fw-bold mb-4" style="background-color:#FD7E14;"
                        type="button">Login</button>
                    <p><router-link to="" style="color:#ADB5BD;text-decoration: none;">Esqueceu-se da password?</router-link></p>
                    <p style="color:#ADB5BD;">Ainda não tens conta?<router-link to="" class="fw-bold" style="color:#6c757d;text-decoration: none;">Registar</router-link></p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <router-view></router-view>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
    name: 'FormLogin',
    data() {
        return {
            utilizador: {
                email: "",
                password: ""
            }

        }
    },
    components: {
        NavBar
  }
}
</script>