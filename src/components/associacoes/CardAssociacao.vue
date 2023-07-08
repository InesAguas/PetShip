<template>
      <div class="card" style="width: 17rem">
      <img :src="associacao.fotografia == null ? require('../../assets/default_user.jpg') : associacao.fotografia" class="card-img-top mt-3" alt="..." height="180" />
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