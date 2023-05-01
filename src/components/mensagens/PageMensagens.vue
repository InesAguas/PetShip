<template>
    <NavBar></NavBar>
    <div class="container">
        <div class="row">
            <h1 class="fw-bold" style="color: #653208">Mensagens</h1>
        </div>
        <div class="row bg-white">
            <div class="col-4">
                <div class="row" v-for="(row, index) in conversas" :key="row" v-on:click="troca(index)"><CardPessoa :conversa="row" :utilizador="utilizador" :selected="selected == index ? true : false"></CardPessoa></div>
            </div>
            <div class="col-8" v-if="conversas != null">
                <CardConversa :id="conversas[selected].id_envia == utilizador.id ? conversas[selected].id_recebe:conversas[selected].id_envia" :utilizador="utilizador" :key="selected"></CardConversa>
            </div>
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
        this.getConversas();

    },
    data() {
        return {
            utilizador: null,
            conversas: null,
            mensagens: null,
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
                 console.log("teste");

                 console.log(this.conversas);   
                
            console.log(this.conversas);
            }).catch(error => {
                    console.log(error);
            });

               

                
            
        },

        troca(index) {
            this.selected = index;
        }
    }
})

</script>