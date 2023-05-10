<template>
    <NavBar></NavBar>
    <PainelDashboard></PainelDashboard>
</template>
<script>
import NavBar from '../NavBar.vue';
import PainelDashboard from './PainelDashboard.vue';

export default {
    name: 'GestaAnimais',
    components: {
        NavBar,
        PainelDashboard
    },
    data() {
        return {
        }
    },
    mounted() {
        }
}

</script>