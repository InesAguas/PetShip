<template>
    <router-view></router-view>
</template>


<script>
export default {
    data() {
        return {
            BackgroundColor: '#F8F9FA',
        }
    },
    mounted() {
        alert("Aviso: As imagens são apagadas ao fazer update do site, faça update se necessário. Se tiver erros tente fazer logout e login novamente.")
    }
}
</script>

