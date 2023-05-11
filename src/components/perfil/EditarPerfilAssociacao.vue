<template>
    <div class="container">
        <div class="row mt-3">
            <h1 class="fw-bold" style="color: #653208">{{ $t('paginaEditarPerfil.titulo') }}</h1>
        </div>
        <div class="row">
            <div class="col-7">
                <div class="container" style="background-color: white;">
                    <div class="row">
                        <div class="col-6">
                            <h3 class="fw-bold mt-2" style="color: #653208">{{ $t('paginaEditarPerfil.dadosPessoais') }}
                            </h3>
                            <div class="row">
                                <div class="col-6">
                                    <div class="text-center">
                                        <img :src="preview == null ? require('../../assets/default_user.jpg') : preview"
                                            alt="Avatar" id="avatar" class="rounded-circle"
                                            style="width: 150px;height: 150px;object-fit:cover;">
                                        <div class="mt-2">
                                            <label class="btn btn-sm" style="background-color:#FD7E14; color: white;">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-upload me-2" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                    <path
                                                        d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                                </svg>{{ $t('paginaEditarPerfil.alterarFoto') }}
                                                <input type="file" style="display: none;" v-on:change="alterarFoto">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form class="mt-3">
                                <div class="mb-3">
                                    <label for="name" class="form-label">{{ $t('registarMsg.nome') }}</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="name"
                                        v-bind:placeholder="utilizador.nome" v-model="utilizadorEditado.nome">
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="email"
                                        v-bind:placeholder="utilizador.email" v-model="utilizadorEditado.email">
                                </div>
                                <div class="mb-3">
                                    <label for="telefone" class="form-label">{{ $t('perfilMsg.localizacao') }}</label>
                                    <input type="text" class="form-control" id="telefone" aria-describedby="telefone"
                                        v-bind:placeholder="utilizador.localizacao ? utilizador.localizacao : $t('perfilMsg.localizacao')"
                                        v-model="utilizadorEditado.localizacao">
                                </div>
                            </form>
                        </div>
                        <div class="col-6">
                            <h3 class="fw-bold mt-2" style="color: #653208">{{ $t('paginaAnimalMsg.contactos') }}</h3>
                            <form>
                                <div class="mb-3">
                                    <label for="telefone" class="form-label">{{ $t('paginaEditarPerfil.telefone')
                                    }}</label>
                                    <input type="text" class="form-control" id="telefone" aria-describedby="telefone"
                                        v-bind:placeholder="utilizador.telefone ? utilizador.telefone : $t('paginaEditarPerfil.telefone')"
                                        v-model="utilizadorEditado.telefone">
                                </div>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Website</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="name"
                                        v-bind:placeholder="utilizador.website ? utilizador.website : 'Website'"
                                        v-model="utilizadorEditado.website">
                                </div>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Instagram</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="name"
                                    v-bind:placeholder="utilizador.instagram ? utilizador.instagram : 'Instagram'"
                                        v-model="utilizadorEditado.instagram">
                                </div>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Facebook</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="name"
                                    v-bind:placeholder="utilizador.facebook ? utilizador.facebook : 'Facebook'"
                                        v-model="utilizadorEditado.facebook">
                                </div>

                                <div class="text-end pt-5">
                                    <button type="button" class="btn btn-lg"
                                        style="background-color:#FD7E14; color: white;">{{ $t('paginaEditarPerfil.editar')
                                        }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="container ms-2 pb-4" style="background-color: white;">
                    <div class="row">
                        <h3 class="fw-bold mt-2" style="color: #653208">{{ $t('paginaEditarPerfilAss.horario') }}</h3>
                    </div>
                    <DiaSemana v-for="dia in $tm('perfilAssMsg.dias')" :key="dia" :dia="dia"></DiaSemana>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>

import DiaSemana from './DiaSemana.vue'
export default {
    name: 'EditarPerfilAssociacao',
    props: [
        'utilizador'
    ],
    components: {
        DiaSemana,
    },
    data() {
        return {
            utilizadorEditado: {
                nome: this.utilizador.nome,
                email: this.utilizador.email,
                telefone: this.utilizador.telefone,
                localizacao: this.utilizador.localizacao,
                website: this.utilizador.website,
                instagram: this.utilizador.instagram,
                facebook: this.utilizador.facebook,
            },
            preview: this.utilizador.fotografia,

        }
    },
    mounted() {

    },
    methods:{
        alterarFoto(e){
            this.utilizadorEditado.fotografia = e.target.files[0]
            this.preview = URL.createObjectURL(this.utilizadorEditado.fotografia)
        }
    }
}

</script>