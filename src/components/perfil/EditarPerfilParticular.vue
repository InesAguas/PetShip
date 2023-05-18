<template>
    <div class="container" style="max-width: 700px;">
        <div class="row mt-5">
            <h1 class="fw-bold" style="color: #653208">{{ $t('paginaEditarPerfil.titulo') }}</h1>
        </div>
        <div class="container bg-white mt-3 rounded-3 border">
            <div class="row pt-3 pb-3">
                <h3 class="fw-bold" style="color: #653208">{{ $t('paginaEditarPerfil.dadosPessoais') }}</h3>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <img :src="preview == null ? require('../../assets/default_user.jpg') : preview" alt="Avatar"
                        id="avatar" class="rounded-circle ms-3 " style="width: 150px;height: 150px;object-fit:cover;">
                    <div class="mt-2 ms-4 ps-2">
                        <label class="btn btn-sm" style="background-color:#FD7E14; color: white;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-upload me-2" viewBox="0 0 16 16">
                                <path
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path
                                    d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg>{{ $t('paginaEditarPerfil.alterarFoto') }}
                            <input type="file" style="display: none;" v-on:change="alterarFoto">
                        </label>
                    </div>
                    <form>
                        <div class=" mt-2 mb-3">
                            <label for="name" class="form-label">{{ $t('registarMsg.nome') }}</label>
                            <input type="text" class="form-control" id="name" aria-describedby="name"
                                v-bind:placeholder="utilizador.nome" v-model="utilizadorEditado.nome">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" aria-describedby="email"
                                v-bind:placeholder="utilizador.email" v-model="utilizadorEditado.email">
                        </div>
                    </form>
                </div>
                <div class="col mb-3">
                    <form>
                        <div class="mb-3">
                            <label for="telefone" class="form-label">{{ $t('paginaEditarPerfil.telefone') }}</label>
                            <input type="text" class="form-control" id="telefone" aria-describedby="telefone"
                                v-bind:placeholder="utilizador.telefone ? utilizador.telefone : $t('paginaEditarPerfil.telefone')"
                                v-model="utilizadorEditado.telefone">
                        </div>
                        <div class="mb-3">
                            <label for="telefone" class="form-label">{{ $t('perfilMsg.localizacao') }}</label>
                            <input type="text" class="form-control" id="telefone" aria-describedby="telefone"
                                v-bind:placeholder="utilizador.localizacao ? utilizador.localizacao : $t('perfilMsg.localizacao')"
                                v-model="utilizadorEditado.localizacao">
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="exampleFormControlInput1" class="form-label">Distrito</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected value="">{{ $t('pageAdotar.qualquer') }}</option>
                                    <option v-for="(distrito, index) in distritos" :key="index" :value="distrito">{{
                                        distrito }}
                                    </option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="codPostal" class="form-label">Código Postal</label>
                                <input type="text" class="form-control" id="codPostal" aria-describedby="codPostal"
                                    placeholder="0000-000">
                            </div>
                        </div>
                        <div class="text-end pt-5">
                            <button @click="editarPerfil" type="button" class="btn btn-lg"
                                style="background-color:#FD7E14; color: white;">{{ $t('paginaEditarPerfil.editar')
                                }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>
    
<script>
export default {
    name: 'EditarPerfilParticular',
    props: [
        'utilizador'
    ],
    data() {
        return {
            distritos: ["Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", "Coimbra", "Évora", "Faro", "Guarda", "Leiria", "Lisboa", "Portalegre", "Porto", "Santarém", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"],
            utilizadorEditado: {
                nome: this.utilizador.nome,
                email: this.utilizador.email,
                telefone: this.utilizador.telefone,
                fotografia: null,
                localizacao: this.utilizador.localizacao
            },
            preview: this.utilizador.fotografia
        }
    },
    methods: {
        editarPerfil() {
            console.log(this.utilizadorEditado)
            this.axios.post('/editarperfil', this.utilizadorEditado, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }

            }).then(response => {
                console.log(response.data)
                localStorage.setItem('utilizador', JSON.stringify(response.data.utilizador));

                alert("Perfil editado com sucesso!")
            }).catch(error => {
                console.log(error)
            })
        },
        alterarFoto(e) {
            this.utilizadorEditado.fotografia = e.target.files[0]
            this.preview = URL.createObjectURL(this.utilizadorEditado.fotografia)
        }





    }

}

</script>