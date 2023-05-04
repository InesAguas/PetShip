<template>
    <div v-if="utilizador">
        <NavBar></NavBar>
        <EditarPerfilParticular v-if="utilizador.tipo == 1 " :utilizador="utilizador"></EditarPerfilParticular>
        <EditarPerfilAssociacao v-if="utilizador.tipo == 2"  :utilizador="utilizador"></EditarPerfilAssociacao>
    </div>
    

</template>
    
<script>
import NavBar from '../NavBar.vue';
import EditarPerfilParticular from './EditarPerfilParticular.vue';
import EditarPerfilAssociacao from './EditarPerfilAssociacao.vue';

export default {
    name: 'PagePerfil',
    components: {
        NavBar,
        EditarPerfilParticular,
        EditarPerfilAssociacao
    },
    data() {
        return {
            utilizador: null,
        }
    },
    mounted() {
        this.utilizador = JSON.parse(localStorage.getItem('utilizador'));
        console.log(this.utilizador);
    }
}

</script>