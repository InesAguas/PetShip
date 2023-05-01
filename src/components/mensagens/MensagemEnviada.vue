<template>
    <div class="d-flex flex-wrap flex-row-reverse">
    <div class="rounded-pill text-black px-3 py-1 mb-1" style="background-color:#FEB272">
        {{mensagem}}
    </div>
</div>
</template>
<script>

export default({
    name: 'MensagemEnviada',
    props: [
        'mensagem'
        ],
})

</script>