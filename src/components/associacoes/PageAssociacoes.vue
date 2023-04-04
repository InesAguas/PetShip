<template>
    <NavBar></NavBar>
    <div class="container">
        <div class="row">
            <h1>Associações</h1>
        </div>
        <div class="row">
            <CardAssociacao v-for="(row) in associacoes" :key="row" :associacao="row" class="col-auto m-2"></CardAssociacao>
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
                console.log(response.data)
                this.associacoes = response.data
            })
        }
}


</script>