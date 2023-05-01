<template>
        <div class="d-flex flex-wrap">
        <div class="rounded-pill text-black px-3 py-1 mb-1" style="background-color:#E9ECEF">
            {{mensagem}}
        </div>
    </div>
    </template>
    <script>


export default({
    name: 'MensagemRecebida',
    props: [
        'mensagem'
        ],
})

</script>