<template>
 <!-- Modal para ver info um animal -->
 <div class="modal" tabindex="-1" id="modalInformativo">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{animal.nome}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" @click="$emit('close')" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <img v-if="animal.fotografia" :src="animal.fotografia" class="rounded-circle" style="width:50px; height:50px; object-fit:cover"> 
                {{ animal.nome }}
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('close')">Cancelar</button>
          <button type="button" class="btn text-white" style="background-color:#FD7E14">Remover</button>
        </div>
      </div>
    </div>
  </div>


</template>

<script>


export default {
name: 'ModalInformacoesAnimal',
props: [
'animal'
],
}
</script>
 
 
