<template>
    <div class="container m-1 p-1" style="max-width: 300px; background-color:white;">
        <div class="row">
        <div class="col-auto" >
            <img :src="require('../../assets/default_user.jpg')" class="rounded-circle" style="width:50px;height:50px;object-fit:cover;">
        </div>
        <div class="col-auto">
            <div class="row">
                <h6 class="fw-bold px-2">Joana Almeida</h6>
            </div>
            <div class="row">
                <span class="px-2">Joao: não</span>
            </div>
        </div>
    </div>
    </div>
</template>
<script>

export default({
    name: 'CardPessoa',
})

</script>