<template>
    <NavBar></NavBar>
    <div v-if="utilizador">
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
        this.utilizadorLogado = JSON.parse(sessionStorage.getItem('utilizador'));
        console.log(this.utilizadorLogado);

        if(this.$route.params.id == null) {
            this.utilizador = this.utilizadorLogado;
            console.log(this.utilizador);
        } else {
            this.axios.get('/perfil/' + this.$route.params.id)
        .then(response => {
            this.utilizador = response.data.utilizador;
        })
        .catch(() => {
           this.$router.push({ name: 'notFound' });
        })
        }
    }
}

</script>