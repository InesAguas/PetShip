<template>
    <NavBar></NavBar>
    <div class="row py-5 justify-content-center">
        <div class="col-4 ">
            <div class="card" style="border-radius: 1rem;">
                <div class="card-body p-4 text-center">
                    <img src="../assets/logo_sem_fundo.png" alt="Logo" width="150" height="150" class="">
                    <h2 class="fw-bold text-uppercase mb-4" style="color: #653208;">Registar</h2>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Nome">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" placeholder="Palavra-passe">
                    </div>
                    <div class="mb-3">
                        <select class="form-select">
                            <option selected>Escolha o tipo de conta</option>
                            <option value="1">Particular</option>
                            <option value="2">Associação</option>
                        </select>
                    </div>
                    <button class="btn px-5 text-white fw-bold mb-4" style="background-color:#FD7E14;"
                        type="button">Registar</button>
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
            utilizador:{
                nome:"",
                email:"",
                password:"",
                tipo: 0
            }

        }
    },
    components: {
        NavBar
    },
    methods:{
     registar(){
        axios.post("/registar", this.utilizador);
     }   
    }
}
</script>