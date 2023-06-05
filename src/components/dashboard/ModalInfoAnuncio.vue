<template>
    <!-- Modal para ver info um animal -->
    <div class="modal" tabindex="-1" id="modalInformativo">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ $t('dashboardAnuncios.modalInfoTitulo') }}
                          <span v-if="anuncio.estado == 'Ativo' || anuncio.estado == 'Active'" class="badge bg-success">{{anuncio.estado}}</span>
                          <span v-else class="badge bg-danger">{{anuncio.estado}}</span></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" @click="$emit('close')"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class=" mt-3 p-3 pt-3 rounded-3 border" style=" background-color:white;">

                        <div v-if="anuncio.fotografias != null && anuncio.fotografias.length > 0" class="row mb-3 ">


                            <div v-for="f in anuncio.fotografias" :key="f" class="col-3">
                                <img :src="f" width="100" height="100" class="rounded">
                            </div>
                        </div>

                        <div class="row">



                            <div class="col">
                                <h4 class="fw-bold text-start">{{ $t('paginaAnimalMsg.carateristicas') }}</h4>
                            </div>



                            <div class="row fw-bold fs-6">
                                <div class="col">
                                    {{ $t('formAnimalMsg.especie') }}: <span class="fw-normal">{{ anuncio.especie }}</span>
                                </div>
                                <div class="col">
                                    {{ $t('formAnimalMsg.raca') }}: <span class="fw-normal ">{{ anuncio.raca }}</span>
                                </div>
                            </div>
                            <div class="row fw-bold fs-6">
                                <div class="col">
                                    {{ $t('formAnimalMsg.sexo') }}: <span class="fw-normal">{{ anuncio.sexo }}</span>
                                </div>
                                <div class="col">
                                    {{ $t('paginaAnimalMsg.tamanho') }}: <span class="fw-normal">{{ anuncio.porte }}</span>
                                </div>
                            </div>
                            <div class="row fw-bold fs-6">
                                <div class="col">
                                    {{ $t('formAnimalMsg.idade') }}: <span class="fw-normal">{{ anuncio.idade }}</span>
                                </div>
                                <div class="col">
                                    {{ $t('formAnimalMsg.cor') }}: <span class="fw-normal">{{ anuncio.cor }}</span>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <h4 class="fw-bold">{{ $t('formAnimalMsg.descricao') }}</h4>
                                <p>
                                    {{ anuncio.descricao }}
                                </p>
                            </div>


                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        @click="$emit('close')">{{ $t('modalAdicionarAnimal.cancelar') }}</button>
                    <button type="button" class="btn text-white" data-bs-dismiss="modal"
                        style="background-color:#FD7E14">Ok</button>
                </div>
            </div>
        </div>
    </div>
</template>
   
<script>


export default {
    name: 'ModalInfoAnuncio',
    props: [
        'anuncio'
    ],
}
</script>
    
    
   