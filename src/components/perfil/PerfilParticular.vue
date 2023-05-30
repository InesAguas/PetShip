<template>
    <div class="container mt-5 p-5 pt-3 rounded-3 border" style="max-width: 600px; background-color:white;"
        v-if="utilizador">
        <div>
            <h2 class="fw-bold mb-4" style="color: #653208;">{{ utilizador.nome }}</h2>
        </div>
        <div class="row">
            <div class="col">
                <img :src="utilizador.fotografia == null ? require('../../assets/default_user.jpg') : utilizador.fotografia"
                    class="rounded-circle" style="width:150px;height:150px;object-fit:cover;">
            </div>
            <div class="col">
                <h4>{{ $t('perfilMsg.contacto') }}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-telephone-fill"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg> {{ utilizador.telefone != null ? utilizador.telefone : $t('perfilMsg.vazio') }}<br>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-envelope-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg> {{ utilizador.email }}

                <button @click="mandarMensagem" v-if="utilizadorLogado == null || utilizador.id != utilizadorLogado.id"
                    type="button" class="btn mt-3" style="background-color:#FD7E14; color:white"><svg
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-chat-dots"
                        viewBox="0 0 16 16">
                        <path
                            d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path
                            d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                    </svg>{{ $t('perfilMsg.mensagem') }}</button>

                <div class="d-flex">
                    <button @click="editarPerfil" v-if="utilizadorLogado != null && utilizador.id == utilizadorLogado.id"
                        type="button" class="btn btn-sm mt-3 me-2" style="background-color:#FD7E14; color:white"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-pencil-fill me-1" viewBox="0 0 16 16">
                            <path
                                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>{{ $t('perfilMsg.editar') }}</button>
                    <button @click="mostrarModal = true"
                        v-if="utilizadorLogado != null && utilizador.id == utilizadorLogado.id" type="button"
                        class="btn btn-sm mt-3 btn-danger" data-bs-toggle="modal" data-bs-target="#modalEliminar"
                        style="color:white">{{ $t('paginaEliminar.titulo') }}</button>
                    <!-- Modal -->
                    <div class="modal fade" id="modalEliminar" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ $t('paginaEliminar.titulo') }}</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>{{ $t('paginaEliminar.texto') }}</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('paginaEliminar.cancelar') }}</button>
                                    <button type="button" class="btn btn-danger" @click="eliminarConta">{{ $t('paginaEliminar.eliminar') }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'PerfilParticular',
    props: [
        'utilizadorLogado',
        'utilizador'
    ],
    data() {
        return {
            erro: false,
            mensagemErro: null,
            mostrarModal: false
        }
    },
    components: {
    },
    methods: {
        mandarMensagem() {
            this.$router.push({
                name: "mensagens", //use name for router push
                params: {
                    id: this.utilizador.id,
                    nome: this.utilizador.nome,
                }
            });
        },
        editarPerfil() {
            this.$router.push({
                name: "editarPerfil", //use name for router push
            });
        },
        eliminarConta() {
            console.log(this.utilizadorLogado.id);
            this.axios.delete("eliminarconta/" + this.utilizadorLogado.id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    console.log(response);
                    //ir para o login
                    this.mostrarModal = false;
                    localStorage.removeItem('token');
                    localStorage.removeItem('utilizador');

                    this.$router.push('/login');

                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>