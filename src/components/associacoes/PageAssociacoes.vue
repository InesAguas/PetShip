<template>
    <NavBar></NavBar>
    <div class="container">
        <div class="row mt-3">
            <h1 class="fw-bold" style="color: #653208">{{ $t('pageAssociacoes.titulo') }}</h1>
        </div>
        <div class="row">
            <CardAssociacao v-for="(row) in associacoes" :key="row" :associacao="row" v-on:click="paginaAssociacao(row)" class="col-auto m-2" style="cursor:pointer"></CardAssociacao>
        </div>
    </div>
    
</template>
<script>
import NavBar from '../NavBar.vue';
import CardAssociacao from './CardAssociacao.vue';
export default {
    name: 'PageAssociacao',
    components: {
        NavBar,
        CardAssociacao
    },
    data() {
        return {
            associacoes: [],
        }
    },
    mounted() {

        this.axios.get('/associacoes')
            .then(response => {
                console.log(response.data.associacoes)
                this.associacoes = response.data.associacoes
            })
        },
        methods: {
            paginaAssociacao(associacao) {
                this.$router.push({ name: 'perfilOutro', params: { id: associacao.id } })
            }
        }
}


</script>