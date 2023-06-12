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
                            <input type="text" class="form-control" id="nomeProduto" placeholder="Nome produto"
                                v-model="produto.nome">
                        </div>
                        <div class="mb-3">
                            <label for="descricao" class="form-label">Descrição</label>
                            <textarea class="form-control" placeholder="Descricao" id="descricao"
                                v-model="produto.descricao"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="quantAtual" class="form-label">Quantidade atual</label>
                            <input type="number" class="form-control" id="quantAtual" placeholder="Quantidade Atual" min="0"
                                v-model="produto.qnt_atual">
                        </div>
                        <div class="mb-3">
                            <label for="quantMin" class="form-label">Quantidade minima</label>
                            <input type="number" class="form-control" id="quantMin" placeholder="Quantidade Minima" min="0"
                                v-model="produto.qnt_min">
                        </div>
                        <div class="mb-3">
                            <label for="observacoes" class="form-label">Observações</label>
                            <textarea class="form-control" placeholder="Observações" id="observacoes"
                                v-model="produto.observacoes"></textarea>
                        </div>


                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" style="background-color: #FD7E14;" data-bs-dismiss="modal"
                        @click="adicionarProduto()">Adicionar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalAdicionarStock',
    data() {
        return {
            produto: {
                nome: '',
                descricao: '',
                qnt_atual: '',
                qnt_min: '',
                observacoes: ''
            }
        }
    },
    methods: {
        adicionarProduto() {
            if (this.produto.nomeProduto === '' || this.produto.descricao === '' || this.produto.quantAtual === '' || this.produto.quantMin === '') {
                alert('Preencha todos os campos!')
            } else {
                console.log(this.produto)
                this.axios.post('/adicionarstock', this.produto, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }).then((response) => {
                    alert('Produto adicionado com sucesso!')
                    this.$emit('produtoAdicionado', response.data.produto);
                    this.produto.nome = ''
                    this.produto.descricao = ''
                    this.produto.qnt_atual = ''
                    this.produto.qnt_min = ''
                    this.produto.observacoes = ''
                }).catch(() => {
                    alert('Erro ao adicionar produto!')
                });
            }
        }
    }
}
</script>