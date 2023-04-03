<template>
    <div class="container mt-5 p-5 pt-3 rounded-3 border" style="max-width: 500px; background-color:white;">
       
    </div>
</template>

<script>

export default {
    name: 'PerfilParticular',
    data() {
        return {
            utilizador: {
                nome: "José Almeida",
                email: null,
                password: null,
                tipo: 0
            },
            erro: false,
            mensagemErro: null
        }
    },

    components: {
    },
    methods: {
    }
}
</script>