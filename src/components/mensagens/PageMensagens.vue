<template>
    <NavBar></NavBar>
    <div class="container h-75" >
        <div class="row" style="height:10%; backgroud-color:#F8F9FA">
            <div class="col ps-0">
                <h1 class="fw-bold" style="color: #653208">{{$t('paginaMensagens.titulo')}}</h1>
            </div>
        </div>
        <div class="row bg-white shadow-sm" style="height:90%;">
            <div class="col-3 overflow-y-scroll">
            <div v-if="conversas.length <= 0">{{$t('paginaMensagens.semMensagens')}}</div>
                <CardPessoa v-for="(row, index) in conversas" :key="row" v-on:click="troca(index)" :conversa="row" :utilizador="utilizador" :selected="selected == index ? true : false"></CardPessoa>
            </div>
            <CardConversa @mensagemEnviada="atualizaConversa" v-if="conversas.length > 0" :id="conversas[selected].id_envia == utilizador.id ? conversas[selected].id_recebe:conversas[selected].id_envia" :utilizador="utilizador" :key="selected"></CardConversa>

        </div>
    </div>
</template>
<script>

import NavBar from '../NavBar.vue';
import CardPessoa from './CardPessoa.vue';
import CardConversa from './CardConversa.vue';

export default ({
    name: 'PageMensagens',
    components: {
        NavBar,
        CardPessoa,
        CardConversa
    },
    mounted() {
        this.utilizador = JSON.parse(localStorage.getItem('utilizador'));
        console.log(localStorage.getItem('token'));
        this.getConversas();

        this.$socket.emit('authenticate', {token: this.utilizador.id});

        

    },
    data() {
        return {
            utilizador: null,
            conversas: [],
            selected : 0
        }
    },
    methods: {
        getConversas() {
            this.axios.get('conversasativas', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(response => {
                console.log(response.data.conversas);
                 this.conversas = response.data.conversas;
                 console.log(this.conversas);
                 

                 if(this.$route.params.id != null && this.$route.params.id != this.utilizador.id) {
                    var index = this.conversas.findIndex(x => x.id_envia == this.$route.params.id || x.id_recebe == this.$route.params.id);
                    if(index >= 0) {
                        this.selected = index;
                    } else {
                        var conversa = {
                            id_envia: this.utilizador.id,
                            id_recebe: this.$route.params.id,
                            nome_recebe:this.$route.params.nome,
                        }
                        this.conversas.unshift(conversa);
                    }
        }
                
            console.log(this.conversas);
            }).catch(error => {
                    console.log(error);
            });          
        },

        troca(index) {
            this.selected = index;
        },

        atualizaConversa(mensagem) {
            var index = this.conversas.findIndex(x => x.id_envia == mensagem.id_recebe || x.id_recebe == mensagem.id_recebe);

            this.conversas[index].mensagem = mensagem.mensagem;
            this.conversas[index].nome_envia = mensagem.nome_envia;
        }
    },
    sockets: {
        connection() {
            console.log('socket connected')
        },
        message(data) {
            console.log("Page conversa");
            console.log(data)

            //procurar o cardpessoa que corresponde a mensagem
            var index = this.conversas.findIndex(x => x.id_envia == data.id_envia || x.id_recebe == data.id_envia);

            this.conversas[index].mensagem = data.mensagem;
            this.conversas[index].nome_envia = data.nome_envia;

        }

    }
})

</script>