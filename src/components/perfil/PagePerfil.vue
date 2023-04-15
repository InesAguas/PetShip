<template>
    <div v-if="utilizador">
    <NavBar></NavBar>
    <PerfilParticular v-if="utilizador.tipo == 1" :utilizador="utilizador" :utilizadorLogado="utilizadorLogado"></PerfilParticular>
    <PerfilAssociacao v-if="utilizador.tipo == 2" :utilizador="utilizador" :utilizadorLogado="utilizadorLogado"></PerfilAssociacao>
</div>
</template>
<script>

import NavBar from '../NavBar.vue';
import PerfilParticular from './PerfilParticular.vue';
import PerfilAssociacao from './PerfilAssociacao.vue';

export default {
    name: 'PagePerfil',
    components: {
        NavBar,
        PerfilParticular,
        PerfilAssociacao
    },
    data() {
        return {
            utilizadorLogado: null,
            utilizador: null,
        }
    },
    mounted() {
        this.utilizadorLogado = JSON.parse(localStorage.getItem('utilizador'));
        console.log(this.utilizadorLogado);

        if(this.$route.params.id == null) {
            this.utilizador = this.utilizadorLogado;
            console.log(this.utilizador);
        } else {
            this.axios.get('/perfil/' + this.$route.params.id)
        .then(response => {
            this.utilizador = response.data.utilizador;
        })
        .catch(error => {
            this.erro = true;
            this.mensagemErro = error.response.data.message;
        })
        }
    }
}

</script>