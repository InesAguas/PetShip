<template>
        <NavBar></NavBar>
    <div class="container">
        <div class="row">
            <h1 class="fw-bold" style="color: #653208">Mensagens</h1>
        </div>
        <div class="row bg-white">
            <div class="col-4">
                <div class="row">
                    <CardPessoa></CardPessoa>
                </div>
                <div class="row">
                   <CardPessoa></CardPessoa>
                </div>
                <div class="row">
                    <CardPessoa></CardPessoa>
                </div>
                <div class="row">
                    <CardPessoa></CardPessoa>
                </div>
                <div class="row">
                    <CardPessoa></CardPessoa>
                </div>
                <div class="row">
                    <CardPessoa></CardPessoa>
                </div>
            </div>
            <div class="col-8">
                <CardConversa></CardConversa>
            </div>
        </div>
    </div>
</template>
<script>

import NavBar from '../NavBar.vue';
import CardPessoa from './CardPessoa.vue';
import CardConversa from './CardConversa.vue';

export default({
    name: 'PageMensagens',
    components: {
        NavBar,
        CardPessoa,
        CardConversa
    },
})

</script>