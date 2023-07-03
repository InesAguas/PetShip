<template>
    <NavBar></NavBar>
    <div v-if="utilizador">
        <div class="container-fluid ms-0">
            <div class="row flex-nowrap">
                <PainelDashboard :isActive="'perfil'"></PainelDashboard>
                <div class="col-8" style="height:500px;">
                    <div v-if="utilizador">
                        <EditarPerfilParticular v-if="utilizador.tipo == 1 " :utilizador="utilizador"></EditarPerfilParticular>
                        <EditarPerfilAssociacao v-if="utilizador.tipo == 2"  :utilizador="utilizador"></EditarPerfilAssociacao>
                    </div>
                </div>
            </div>
        </div>


    </div>

</template>
    
<script>
import NavBar from '../NavBar.vue';
import EditarPerfilParticular from './EditarPerfilParticular.vue';
import EditarPerfilAssociacao from './EditarPerfilAssociacao.vue';
import PainelDashboard from '../dashboard/PainelDashboard.vue';

export default {
    name: 'EditarPerfil',
    components: {
        NavBar,
        EditarPerfilParticular,
        EditarPerfilAssociacao,
        PainelDashboard,
    },
    data() {
        return {
            utilizador: null,
        }
    },
    mounted() {
        this.utilizador = JSON.parse(sessionStorage.getItem('utilizador'));
        console.log(this.utilizador);
    }
}

</script>