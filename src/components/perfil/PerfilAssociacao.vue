<template>
    <div class="container mt-5 p-5 pt-3 rounded-3 border" style="max-width: 1000px; background-color:white;"
        v-if="utilizador">
        <div>
            <h2 class="fw-bold mb-4" style="color: #653208;">{{ utilizador.nome }}</h2> 
        </div>
        <div class="row">
            <div class="col-3 ">
                
                <img :src="utilizador.fotografia == null ? require('../../assets/default_user.jpg') : utilizador.fotografia"
                    class="rounded-circle" style="width:150px;height:150px;object-fit:cover;">
            </div>
            <div class="col-5">
                <h6>{{ $t('perfilMsg.localizacao') }}</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                {{ utilizador.localizacao != null ? utilizador.localizacao : $t('perfilMsg.vazio') }}<br><br>
                <h6>{{ $t('perfilMsg.doacoes') }}</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                  </svg>
                  {{ utilizador.iban != null ? utilizador.iban : $t('perfilMsg.vazio') }}
                <br><br>
                <h6>{{ $t('perfilMsg.contacto') }}</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-telephone-fill"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg> {{ utilizador.telefone != null ? utilizador.telefone : $t('perfilMsg.vazio') }}<br>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-envelope-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg> {{ utilizador.email }}<br>
                <svg v-if="utilizador.website" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                  </svg> {{ utilizador.website }}<br>
                <svg v-if="utilizador.facebook" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg> {{ utilizador.facebook }}<br>
                  <svg v-if="utilizador.instagram" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg> {{ utilizador.instagram }}<br>
                <div class="text-start">
                    <a href="https://www.facebook.com/" class="me-1"><img class="mt-3" src="../../assets/facebook.png"
                            height="30px"></a>
                    <a href="https://www.instagram.com/" class="me-1 mt-4"><img class="mt-3"
                            src="../../assets/instagram.png" height="30px"></a>
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
                        <button @click="editarPerfil"
                            v-if="utilizadorLogado != null && utilizador.id == utilizadorLogado.id" type="button"
                            class="btn btn-sm mt-3 me-2" style="background-color:#FD7E14; color:white"><svg
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
                        <div class="modal fade" id="modalEliminar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">{{ $t('paginaEliminar.cancelar') }}</button>
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                            @click="eliminarConta">{{ $t('paginaEliminar.eliminar') }}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <h6>{{ $t('perfilMsg.horario') }}</h6>
                <ul v-if="utilizador.horario != null" class="list-group m-0 p-0"
                    style="list-style-type: none; text-align:justify;">
                    <li style="display: inline;" v-for="(item, index) in $tm('perfilAssMsg.dias')" :key="item"> {{ item }}:
                        <span v-if="utilizador.horario[index][0] == true" class="text-end">Fechado</span> <span v-else
                            class="text-end">{{ utilizador.horario[index][1] }} - {{ utilizador.horario[index][2] }}</span>
                    </li>
                </ul>
                <p v-else>{{ $t('perfilMsg.vazio') }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PerfilAssociacao',
    props: [
        'utilizadorLogado',
        'utilizador'
    ],
    data() {
        return {
            dias: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"],
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
            this.axios.delete("eliminarconta/" + this.utilizadorLogado.id)
                .then(response => {
                    console.log(response);
                    //ir para o login
                    this.mostrarModal = false;
                    localStorage.removeItem('token');
                    localStorage.removeItem('utilizador');
                    sessionStorage.removeItem('token');
                    sessionStorage.removeItem('utilizador');

                    this.$router.push('/login');

                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>