<template>
      <div class="card" style="width: 18rem">
      <img :src="require('../../assets/associacoes/' + associacao.fotografia)" class="card-img-top" alt="..." height="180" />
      <div class="card-body">
            <h5 class="card-title fw-bold text-center" style="color: #653208">{{associacao.nome}}</h5>
      </div>
    </div>
</template>
<script>

export default {
    name: 'CardAssociacao',
    props: [
        'associacao'
    ],
}


</script>