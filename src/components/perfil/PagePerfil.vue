<template>
    <NavBar></NavBar>
    <PerfilParticular></PerfilParticular>
    <PerfilAssociacao></PerfilAssociacao>
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
    }
}

</script>