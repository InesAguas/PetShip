<template>
    <NavBar></NavBar>
    <div class="container">
        <div class="row">
            <h1>Associações</h1>
        </div>
        <div class="row">
            <div class="col-auto mb-2"><CardAssociacao></CardAssociacao></div>
            <div class="col-auto mb-2"><CardAssociacao></CardAssociacao></div>
            <div class="col-auto mb-2"><CardAssociacao></CardAssociacao></div>
            <div class="col-auto mb-2"><CardAssociacao></CardAssociacao></div>
            <div class="col-auto mb-2"><CardAssociacao></CardAssociacao></div>
            <div class="col-auto mb-2"><CardAssociacao></CardAssociacao></div>
            <div class="col-auto mb-2"><CardAssociacao></CardAssociacao></div>
            <div class="col-auto mb-2"><CardAssociacao></CardAssociacao></div>
            <div class="col-auto mb-2"><CardAssociacao></CardAssociacao></div>
            <div class="col-auto mb-2"><CardAssociacao></CardAssociacao></div>
        </div>
    </div>
    
</template>
<script>
import NavBar from './NavBar.vue';
import CardAssociacao from './CardAssociacao.vue';
export default {
    name: 'PageAssociacao',
    components: {
        NavBar,
        CardAssociacao
    }
}


</script>