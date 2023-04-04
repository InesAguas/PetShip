<template>
    <NavBar></NavBar>
    <FormAnimal></FormAnimal> 
</template>
<script>

import NavBar from '../NavBar.vue';
import FormAnimal from './FormAnimal.vue';
export default {
    name: 'PageAnunciarAnimal',
    components: {
        NavBar,
        FormAnimal
    }
}

</script>