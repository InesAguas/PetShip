<template>
    <div class="row">
        <span class="fw-bold" style="color: #653208;">{{ dia }}</span>
        <div class="row">
            <div class="col">
                <div class="form-check  mb-2">
                    <input class="form-check-input" type="checkbox" v-model="isCheckedAlterar" :id="dia + 'Check'"
                        v-on:change="atualizarHorario">
                    <label class="form-check-label" :for="dia + 'Check'">{{ $t('paginaEditarPerfilAss.fechado') }}</label>
                </div>
            </div>
            <div class="col">
                <div v-if="isCheckedAlterar == false" class="form-group">
                    <label for="inputTime">{{ $t('paginaEditarPerfilAss.abertura') }}</label>
                    <input type="time" class="form-control" :id="dia + 'Abertura'" v-model="aberturaAlterar"
                        v-on:change="atualizarHorario">
                </div>
            </div>
            <div class="col">
                <div v-if="isCheckedAlterar == false" class="form-group">
                    <label for="inputTime">{{ $t('paginaEditarPerfilAss.encerramento') }}</label>
                    <input type="time" class="form-control" :id="dia + 'Encerramento'" v-model="encerramentoAlterar"
                        v-on:change="atualizarHorario">
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
    props: [
        'dia',
        'isChecked',
        'abertura',
        'encerramento'
    ],
    data() {
        return {
        isCheckedAlterar: this.isChecked,
        aberturaAlterar: this.abertura,
        encerramentoAlterar: this.encerramento
            
        }
    },
    methods: {
        atualizarHorario() {
            this.$emit('atualizarHorario', [this.dia, this.isCheckedAlterar, this.aberturaAlterar, this.encerramentoAlterar])
        }
    }
}
</script>
  