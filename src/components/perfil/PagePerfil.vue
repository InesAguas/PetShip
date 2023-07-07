<template>
    <NavBar></NavBar>
    
        <div class="container-fluid ms-0">
            <div class="row flex-nowrap">
                <PainelDashboard :isActive="'perfil'"></PainelDashboard>
                <div class="col-8" style="height:500px;">
                    <div v-if="utilizador">
                    <PerfilParticular v-if="utilizador.tipo == 1" :utilizador="utilizador"
                        :utilizadorLogado="utilizadorLogado"></PerfilParticular>
                    <PerfilAssociacao v-if="utilizador.tipo == 2" :utilizador="utilizador"
                        :utilizadorLogado="utilizadorLogado"></PerfilAssociacao>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>

import NavBar from '../NavBar.vue';
import PerfilParticular from './PerfilParticular.vue';
import PerfilAssociacao from './PerfilAssociacao.vue';
import PainelDashboard from '../dashboard/PainelDashboard.vue';


export default {
    name: 'PagePerfil',
    components: {
        NavBar,
        PerfilParticular,
        PerfilAssociacao,
        PainelDashboard,
    },
    data() {
        return {
            utilizadorLogado: null,
            utilizador: null,
        }
    },
    mounted() {
        this.utilizadorLogado = JSON.parse(sessionStorage.getItem('utilizador'));
       

        if (this.$route.params.id == null) {
            this.utilizador = this.utilizadorLogado;
            
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