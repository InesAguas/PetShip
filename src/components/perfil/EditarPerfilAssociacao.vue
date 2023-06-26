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
                                <div class="mb-3">
                                    <label for="name" class="form-label">IBAN</label>
                                    <div class="input-group flex-nowrap">
                                        <span class="input-group-text" id="addon-wrapping">PT</span>
                                        <input type="number" @input="checkIBAN" class="form-control" v-model="utilizadorEditado.iban">
                                      </div>
                                </div>
                                <div class="text-end " style="padding-top:40%;">
                                    <button @click="editarPerfil" type="button" class="btn btn-lg"
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
                    <DiaSemana v-for="(dia, index) in $tm('perfilAssMsg.dias')" :key="dia" :dia="dia"
                        :isChecked="utilizador.horario && utilizador.horario[index] != null ? utilizador.horario[index][0] : false"
                        :abertura="utilizador.horario && utilizador.horario[index] != null && utilizador.horario[index].length > 1 ? utilizador.horario[index][1] : null"
                        :encerramento="utilizador.horario && utilizador.horario[index] != null && utilizador.horario[index].length > 2 ? utilizador.horario[index][2] : null"
                        @atualizarHorario="atualizarHorario"></DiaSemana>
                </div>
            </div>
        </div>
    </div>
</template>
    <style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    
    input[type=number] {
        -moz-appearance:textfield; /* Firefox */
    }
</style>
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
            distritos: ["Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", "Coimbra", "Évora", "Faro", "Guarda", "Leiria", "Lisboa", "Portalegre", "Porto", "Santarém", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"],
            utilizadorEditado: {
                nome: this.utilizador.nome,
                email: this.utilizador.email,
                telefone: this.utilizador.telefone,
                localizacao: this.utilizador.localizacao,
                website: this.utilizador.website,
                instagram: this.utilizador.instagram,
                facebook: this.utilizador.facebook,
                iban: this.utilizador.iban,
                horario: this.utilizador.horario ? [
                    this.utilizador.horario[0],
                    this.utilizador.horario[1],
                    this.utilizador.horario[2],
                    this.utilizador.horario[3],
                    this.utilizador.horario[4],
                    this.utilizador.horario[5],
                    this.utilizador.horario[6],
                ] : [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ]
            },
            preview: this.utilizador.fotografia,

        }
    },
    methods: {
        alterarFoto(e) {
            this.utilizadorEditado.fotografia = e.target.files[0]
            this.preview = URL.createObjectURL(this.utilizadorEditado.fotografia)
        },
        atualizarHorario(valor) {
            switch (valor[0]) {
                case 'Segunda-feira':
                    this.utilizadorEditado.horario[0] = []
                    this.utilizadorEditado.horario[0][0] = valor[1] //aberto ou fechado
                    this.utilizadorEditado.horario[0][1] = valor[2] //hora de abertura
                    this.utilizadorEditado.horario[0][2] = valor[3] //hora de encerramento
                    break
                case 'Terça-feira':
                    this.utilizadorEditado.horario[1] = []
                    this.utilizadorEditado.horario[1][0] = valor[1]
                    this.utilizadorEditado.horario[1][1] = valor[2]
                    this.utilizadorEditado.horario[1][2] = valor[3]
                    break
                case 'Quarta-feira':
                    this.utilizadorEditado.horario[2] = []
                    this.utilizadorEditado.horario[2][0] = valor[1]
                    this.utilizadorEditado.horario[2][1] = valor[2]
                    this.utilizadorEditado.horario[2][2] = valor[3]
                    break
                case 'Quinta-feira':
                    this.utilizadorEditado.horario[3] = []
                    this.utilizadorEditado.horario[3][0] = valor[1]
                    this.utilizadorEditado.horario[3][1] = valor[2]
                    this.utilizadorEditado.horario[3][2] = valor[3]
                    break
                case 'Sexta-feira':
                    this.utilizadorEditado.horario[4] = []
                    this.utilizadorEditado.horario[4][0] = valor[1]
                    this.utilizadorEditado.horario[4][1] = valor[2]
                    this.utilizadorEditado.horario[4][2] = valor[3]
                    break
                case 'Sábado':
                    this.utilizadorEditado.horario[5] = []
                    this.utilizadorEditado.horario[5][0] = valor[1]
                    this.utilizadorEditado.horario[5][1] = valor[2]
                    this.utilizadorEditado.horario[5][2] = valor[3]
                    break
                case 'Domingo':
                    this.utilizadorEditado.horario[6] = []
                    this.utilizadorEditado.horario[6][0] = valor[1]
                    this.utilizadorEditado.horario[6][1] = valor[2]
                    this.utilizadorEditado.horario[6][2] = valor[3]
                    break
            }
            console.log(this.utilizadorEditado.horario)
        },
        editarPerfil() {
            for (let i = 0; i < this.utilizadorEditado.horario.length; i++) {
                if (this.utilizadorEditado.horario[i][0] == false) {
                    if (this.utilizadorEditado.horario[i][1] == null || this.utilizadorEditado.horario[i][2] == null) {
                        alert("Preencha os horários de abertura e encerramento")
                        return
                    }
                }
            }
            console.log(this.utilizadorEditado)
            this.utilizadorEditado.horario = JSON.stringify(this.utilizadorEditado.horario);
            this.axios.post('/editarperfilA', this.utilizadorEditado, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }

            }).then(response => {
                console.log(response.data)
                sessionStorage.setItem('utilizador', JSON.stringify(response.data.utilizador));

                alert("Perfil editado com sucesso!")
            }).catch(error => {
                console.log(error)
            })
        },

        checkIBAN(event) {
            const value = event.target.value
            if (String(value).length > 25) {
                this.utilizadorEditado.iban = String(value).slice(0, 25)
                console.log(this.utilizadorEditado.iban)
            } 
        }
    }
}

</script>