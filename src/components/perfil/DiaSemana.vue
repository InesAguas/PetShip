<template>
    <div class="row">
        <span class="fw-bold" style="color: #653208;">{{ dia }}</span>
        <div class="row">
            <div class="col">
                <div class="form-check  mb-2">
                    <input class="form-check-input" type="checkbox" v-model="isChecked" :id="dia + 'Check'">
                    <label class="form-check-label" :for="dia + 'Check'">{{ $t('paginaEditarPerfilAss.fechado') }}</label>
                </div>
            </div>
            <div class="col">
                <div v-if="isChecked == false" class="form-group">
                    <label for="inputTime">{{ $t('paginaEditarPerfilAss.abertura') }}</label>
                    <input type="time" class="form-control" :id="dia + 'Abertura'">
                </div>
            </div>
            <div class="col">
                <div v-if="isChecked == false" class="form-group">
                    <label for="inputTime">{{ $t('paginaEditarPerfilAss.encerramento') }}</label>
                    <input type="time" class="form-control" :id="dia + 'Encerramento'">
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.form-check-input:checked {
    background-color: #FD7E14;
}
</style>
<script>
export default {
    props: {
        dia: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            isChecked: false,
        }
    }
}
</script>
  