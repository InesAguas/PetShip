<template>
        <div class="row p-1 pb-3" :style="{'background-color': selected ? '#F3F3F3':'white'}">
        <div class="col-3" >
            <img :src="conversa.fotografia ? conversa.fotografia : require('../../assets/default_user.jpg')" class="rounded-circle" style="width:50px;height:50px;object-fit:cover;">
        </div>
        <div class="col-8">
            <div class="row">
                <h6 class="fw-bold px-2">{{utilizador.id == conversa.id_envia ? conversa.nome_recebe : conversa.nome_envia }}</h6>
            </div>
            <div class="row">
                <span class="px-2 text-truncate" v-if="conversa.nome_envia">{{ conversa.nome_envia }}: {{conversa.mensagem}}</span>
            </div>
        </div>
    </div>
</template>
<script>

export default({
    name: 'CardPessoa',
    props: [
        'conversa',
        'utilizador',
        'selected'
        ],
})

</script>