<template>
    <NavBar></NavBar>
    <div class="py-5">
        <div class="row justify-content-center">
        <div class="col-4">
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
                    <button class="btn px-5 text-white fw-bold mb-4" style="background-color: orange;"
                        type="button">Login</button>
                    <p><a style="color: gray;" href="#!">Forgot password?</a></p>
                    <p style="color: gray;">Ainda não tens conta?<a href="#!" class="fw-bold" style="color: gray;">Registar</a></p>
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