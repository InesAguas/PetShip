<template>
    <NavBar></NavBar>
    <div class="container h-75" style="background-color:white; border:solid black;">
        <div class="row" style="height:10%">
            <div class="col ps-0">
                <h1 class="fw-bold" style="color: #653208">Mensagens</h1>
            </div>
        </div>
        <div class="row bg-white" style="height:90%">
            <div class="col-3 overflow-y-scroll">
                <CardPessoa v-for="(row, index) in conversas" :key="row" v-on:click="troca(index)" :conversa="row" :utilizador="utilizador" :selected="selected == index ? true : false"></CardPessoa>
            </div>
                <CardConversa  v-if="conversas != null" :id="conversas[selected].id_envia == utilizador.id ? conversas[selected].id_recebe:conversas[selected].id_envia" :utilizador="utilizador" :key="selected"></CardConversa>
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