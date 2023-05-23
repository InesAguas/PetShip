<template>
 <!-- Modal para ver info um animal -->
 <div class="modal" tabindex="-1" id="modalInformativo">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Dados do animal: {{animal.nome}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" @click="$emit('close')" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card" >
            <img v-if="animal.fotografia" :src="animal.fotografia" class="card-img-top w-100" alt="..." height="162" style="object-fit:cover;"> 
            <div class="card-body">
                <div class="row">
                        <h5 class="card-title fw-bold" style="color: #653208">{{ animal.nome }}</h5>
                </div>
                <p class="card-text" style="color: #152536">
                    {{animal.especie}} - {{ animal.raca }}<br>
                    {{animal.idade}}, {{ animal.porte }}<br>
                </p>
            </div>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('close')">Cancelar</button>
          <button type="button" class="btn text-white" data-bs-dismiss="modal" style="background-color:#FD7E14">Ok</button>
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
 
 
