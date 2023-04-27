<template>
    <div class="container m-1 p-1" style="max-width: 600px; background-color:white;">
        <div class="row">
            Aqui fica foto da pessoa e nome
        </div>
        <div class="row">
            <MensagemEnviada></MensagemEnviada>
        </div>
        <div class="row">
            <MensagemRecebida></MensagemRecebida>
        </div>
    </div>
</template>
<script>

import MensagemEnviada from './MensagemEnviada.vue';
import MensagemRecebida from './MensagemRecebida.vue';

export default({
    
    name: 'CardConversa',
    components: {
        MensagemEnviada,
        MensagemRecebida
    }
})

</script>