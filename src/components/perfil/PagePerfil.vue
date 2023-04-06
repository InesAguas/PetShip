<template>
    <NavBar></NavBar>
    <PerfilParticular v-if="utilizador.tipo == 1" :utilizador="utilizador"></PerfilParticular>
    <PerfilAssociacao v-if="utilizador.tipo == 2" :utilizador="utilizador"></PerfilAssociacao>
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
            utilizador: []
        }
    },
    mounted() {
        this.utilizador = JSON.parse(localStorage.getItem('utilizador'));
        console.log(this.utilizador);
    }
}

</script>