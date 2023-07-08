<template>
    <!-- Modal -->
    <div class="modal fade" id="formStock" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{$t('gestaoStock.botaoAdicionar')}}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="mb-0">
                            <div class="alert alert-danger" role="alert" style="padding:5px" v-show="erro">
                                {{ this.mensagemErro }}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="nomeProduto" class="form-label">{{$t('gestaoStock.nome')}}</label>
                            <input type="text" class="form-control" id="nomeProduto" :placeholder="$t('gestaoStock.nome')"
                                v-model="produto.nome">
                        </div>
                        <div class="mb-3">
                            <label for="descricao" class="form-label">{{$t('gestaoStock.descricao')}}</label>
                            <textarea class="form-control" :placeholder="$t('gestaoStock.descricao')" id="descricao"
                                v-model="produto.descricao"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="quantAtual" class="form-label">{{$t('gestaoStock.quantidadeAtual')}}</label>
                            <input type="number" class="form-control" id="quantAtual" :placeholder="$t('gestaoStock.quantidadeAtual')" min="0"
                                v-model="produto.qnt_atual">
                        </div>
                        <div class="mb-3">
                            <label for="quantMin" class="form-label">{{$t('gestaoStock.quantidadeMinima')}}</label>
                            <input type="number" class="form-control" id="quantMin" :placeholder="$t('gestaoStock.quantidadeMinima')" min="0"
                                v-model="produto.qnt_min">
                        </div>
                        <div class="mb-3">
                            <label for="observacoes" class="form-label">{{$t('gestaoStock.observacoes')}}</label>
                            <textarea class="form-control" :placeholder="$t('gestaoStock.observacoes')" id="observacoes"
                                v-model="produto.observacoes"></textarea>
                        </div>
                        
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="btnCancel" class="btn btn-secondary" data-bs-dismiss="modal">{{$t('gestaoStock.cancelar')}}</button>
                    <button type="button" class="btn btn-primary" style="background-color: #FD7E14;"
                        @click="adicionarProduto()">{{$t('gestaoStock.adicionar')}}</button>
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
            },

            erro: false,
            mensagemErro: null,
        }
    },
    methods: {
        adicionarProduto() {
            if (this.produto.nomeProduto === '' || this.produto.descricao === '' || this.produto.quantAtual === '' || this.produto.quantMin === '') {
               this.mensagemErro = this.$t('mensagens.camposVazios')
               this.erro = true
            } else {
                this.erro = false;
                this.axios.post('/adicionarstock', this.produto, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }).then((response) => {
                    alert(this.$t('mensagens.sucessoProduto'))
                    this.$emit('produtoAdicionado', response.data.produto);
                    this.produto.nome = ''
                    this.produto.descricao = ''
                    this.produto.qnt_atual = ''
                    this.produto.qnt_min = ''
                    this.produto.observacoes = ''
                    document.getElementById('btnCancel').click()
                }).catch((error) => {
                    var dot = error.response.data.message.indexOf('.');
                    this.mensagemErro = error.response.data.message.substring(0, dot + 1);
                    this.erro = true
                });
            }
        }
    }
}
</script>