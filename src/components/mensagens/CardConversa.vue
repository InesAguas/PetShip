<template>
    <div class="col-9 " style="background-color:#F3F3F3; height:100%;">
        <div class="row mb-2 pb-2" style="height:10%">
            <div class="col position-fixed"><img :src="require('../../assets/default_user.jpg')" class="rounded-circle"
                    style="width:50px;height:50px;object-fit:cover;">
            </div>
        </div>
        <div class="d-flex flex-column-reverse p-3" style="height:75%; overflow-y:scroll;" :key="mensagens">
            <div class="row" v-for="m in mensagens" :key="m">
                <MensagemEnviada v-if="m.id_envia == utilizador.id" :mensagem="m.mensagem"></MensagemEnviada>
                <MensagemRecebida :mensagem="m.mensagem" v-else></MensagemRecebida>
            </div>

        </div>
        <div class="row pt-2">
            <div class="input-group my-auto ms-2" style="width:95%">
                <input type="text" class="form-control" :placeholder="$t('paginaMensagens.mensagem')" aria-label="Mensagem"
                    aria-describedby="button-addon2" @keydown.enter="enviarMensagem" v-model="mensagem" id="mensagemInput">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="enviarMensagem"><svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send"
                        viewBox="0 0 16 16">
                        <path
                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg></button>
            </div>
        </div>
    </div>
</template>
<script>

import MensagemEnviada from './MensagemEnviada.vue';
import MensagemRecebida from './MensagemRecebida.vue';

export default ({

    name: 'CardConversa',
    components: {
        MensagemEnviada,
        MensagemRecebida
    },
    props: [
        'id',
        'utilizador'
    ],
    mounted() {
        this.obterMensagens();
    },
    data() {
        return {
            mensagens: null,
            mensagem: null
        }
    },
    methods: {
        obterMensagens() {
            this.axios.get('mensagens/' + this.id).then(
                response => {
                    this.mensagens = response.data.mensagens;
                }
            )
        },

        enviarMensagem() { 
            if(this.mensagem == null || this.mensagem == "") {
                return;
            }
            this.axios.post('enviarmensagem', {id_recebe: this.id, mensagem: this.mensagem})
            .then( response => {
                    this.mensagens.unshift(response.data.mensagem);
                    this.$socket.emit('message', response.data.mensagem)
                    this.$emit('mensagemEnviada', response.data.mensagem)
                    this.mensagem = null;
                    document.getElementById("mensagemInput").value = "";
                }
            ).catch( () => {
                alert(this.$t('mensagens.erroEnvioMensagem'))
            })
        }
    },
    sockets: {
        message(data) {
            if(data.id_envia == this.id) {
                this.mensagens.unshift(data);
            }
        }
    },

})



</script>