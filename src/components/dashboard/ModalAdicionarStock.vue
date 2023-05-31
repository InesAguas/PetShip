<template>
    <!-- Modal -->
    <div class="modal fade" id="formStock" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Adicionar Produto</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                            <div class="mb-3">
                                <label for="nomeProduto" class="form-label">Nome Produto</label>
                                <input type="text" class="form-control" id="nomeProduto" placeholder="Nome produto">
                            </div>
                            <div class="mb-3">
                                <label for="descricao" class="form-label">Descrição</label>
                                <textarea class="form-control" placeholder="Descricao" id="descricao"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="quantAtual" class="form-label">Quantidade atual</label>
                                <input type="number" class="form-control" id="quantAtual" placeholder="Quantidade Atual">
                            </div>
                            <div class="mb-3">
                                <label for="quantMin" class="form-label">Quantidade minima</label>
                                <input type="number" class="form-control" id="quantMin" placeholder="Quantidade Minima">
                            </div>
                            <div class="mb-3">
                                <label for="observacoes" class="form-label">Observações</label>
                                <textarea class="form-control" placeholder="Observações" id="observacoes"></textarea>
                            </div>
                        
                        
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalAdicionarStock',
    data(){
        return{
            
        }
    },
    
}
</script>