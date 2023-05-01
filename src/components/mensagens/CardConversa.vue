<template>
    <div class="container m-1 p-1" style="max-width: 600px; background-color:white;">
        <div class="row">
            Aqui fica foto da pessoa e nome
        </div>
        <div class="row" v-for="m in mensagens" :key="m">
            <MensagemEnviada v-if="m.id_envia == utilizador.id" :mensagem="m.mensagem"></MensagemEnviada>
            <MensagemRecebida :mensagem="m.mensagem" v-else></MensagemRecebida>
        </div>
    </div>
</template>
<script>

import MensagemEnviada from './MensagemEnviada.vue';
import MensagemRecebida from './MensagemRecebida.vue';

export default({
    
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
            this.axios.get('mensagens/' + this.id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(
                response => {
                    console.log("hi");
                    console.log(response.data);
                    this.mensagens = response.data.mensagens;
                }
            ).catch(error => {
                console.log(error);
            }
            )
        },
        data() {
            return {
                mensagens: null,
            }
        }

})

</script>