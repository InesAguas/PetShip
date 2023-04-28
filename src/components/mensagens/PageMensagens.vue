<template>
    <NavBar></NavBar>
    <div class="container">
        <div class="row">
            <h1 class="fw-bold" style="color: #653208">Mensagens</h1>
        </div>
        <div class="row bg-white">
            <div class="col-4">
                <div class="row">
                    <CardPessoa></CardPessoa>
                </div>
                <div class="row">
                    <CardPessoa></CardPessoa>
                </div>
                <div class="row">
                    <CardPessoa></CardPessoa>
                </div>
                <div class="row">
                    <CardPessoa></CardPessoa>
                </div>
                <div class="row">
                    <CardPessoa></CardPessoa>
                </div>
                <div class="row">
                    <CardPessoa></CardPessoa>
                </div>
            </div>
            <div class="col-8">
                <CardConversa></CardConversa>
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
        this.getNomesConversas();

    },
    data() {
        return {
            utilizador: null,
            conversas: null,
        }
    },
    methods: {
        getIdConversas() {
            
        },

        getNomesConversas() {
            this.axios.get('conversasativas', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(response => {
                console.log(response.data.conversas);
                 let hello = response.data.conversas;
                hello.forEach(element => {
                    console.log(element);
                this.axios.get('perfil/' + element)
                    .then(response => {
                        console.log(response.data.utilizador);
                        this.conversas = response.data.utilizador;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            });

            console.log(this.conversas);
            }).catch(error => {
                    console.log(error);
                })
            
        }
    }
})

</script>