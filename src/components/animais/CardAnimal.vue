<template>
    <div class="card" style="width: 18rem">
        <img :src="require('../../assets/' + animal.fotografias[0])" class="card-img-top" alt="..." height="162" />
        <div class="card-body">
            <div class="row">
                <div class="col-7">
                    <h5 class="card-title fw-bold" style="color: #653208">{{ animal.nome }}</h5>
                </div>
                <div class="col-4">
                    <span class="badge rounded-pill " style="background-color: #ED727E;">{{animal.etiqueta}}</span>
                </div>
            </div>
            <p class="card-text" style="color: #152536">
                {{animal.descricao}}
            </p>
            <a href="" class="fw-semibold" style="text-decoration: none; color: #fd7e14">{{$t('cardMsg.verMais')}}</a>
        </div>
    </div>
</template>

<script>


export default {
    name: 'CardAnimal',
    props: [
        'animal'
    ],
}
</script>