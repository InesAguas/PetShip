<template>
  <!--Modal Adicionar-->
  <ModalAdicionarStock @produtoAdicionado="produtoCriado"></ModalAdicionarStock>

  <!--Modal Remover-->
  <div class="modal" tabindex="-1" id="modalApagar">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Remover anuncio</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Tem a certeza que pretende remover o produto:
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn text-white" data-bs-dismiss="modal" style="background-color:#FD7E14"
            @click="remover">Remover</button>
        </div>
      </div>
    </div>
  </div>
  <NavBar></NavBar>
  <div class="container-fluid ms-0">
    <div class="row flex-nowrap">
      <PainelDashboard></PainelDashboard>
      <div class="col-8">
        <div class="row my-3">
          <div class="col">
            <h2 class="fw-bold" style="color: #653208;">Stock</h2>
          </div>
          <div class="col">
            <button type="button" class="btn text-white fw-bold float-end" style="background-color: #FD7E14;"
              @click="abrirModalAdicionar" data-bs-toggle="modal" data-bs-target="#formStock">Adicionar</button>
          </div>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Qnt atual</th>
              <th scope="col">Qnt minima</th>
              <th scope="col">Observações</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody v-if="produtos">
            <tr v-for="produto in produtos" :key="produto">
              <td>{{ produto.nome }}</td>
              <td>{{ produto.descricao }}</td>
              <td style="width: 15%;">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button"
                      @click="decrementarQuantidade(produto)">-</button>
                  </div>
                  <input type="number" class="form-control" id="quantAtual" :placeholder="produto.qnt_atual"
                    :value="produto.qnt_atual" min="0" readonly>
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"
                      @click="incrementarQuantidade(produto)">+</button>
                  </div>
                </div>
              </td>
              <td>{{ produto.qnt_min }}</td>
              <td>{{ produto.observacoes }}</td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-trash me-3"
                  viewBox="0 0 16 16">
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  <rect class="btn" x="0" y="0" width="24" height="24" fill="transparent"
                    @click="abrirModalRemover(produto)" data-bs-toggle="modal" data-bs-target="#modalApagar" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '../NavBar.vue';
import PainelDashboard from './PainelDashboard.vue';
import ModalAdicionarStock from './ModalAdicionarStock.vue';


export default {
  name: 'GestaoAnuncios',
  components: {
    NavBar,
    PainelDashboard,
    ModalAdicionarStock
  },
  data() {
    return {
      produtos: [],
      produtoSelecionado: null,
      timeoutId: null,
    }
  },
  mounted() {
    this.axios.get("utilizador/stock").then(response => {
      this.produtos = response.data.stocks
      console.log(this.produtos)
    })
    console.log(localStorage.getItem('token'))
  },
  methods: {
    produtoCriado(produto) {
      this.produtos.unshift(produto)
    },
    abrirModalRemover(produto) {
      this.produtoSelecionado = produto
    },
    remover() {
      if (this.produtoSelecionado) {
        this.axios.delete('removerstock/' + this.produtoSelecionado.id).then(response => {
          console.log(response)
          const index = this.produtos.indexOf(this.produtoSelecionado);
          if (index > -1) {
            this.produtos.splice(index, 1);
          }
          this.produtoSelecionado = null;
        }).catch(error => {
          console.log(error)
        });
      }
    },
    incrementarQuantidade(produto) {
      produto.qnt_atual++
      this.atualizarQuantidade(produto)
    },
    decrementarQuantidade(produto) {
      if (produto.qnt_atual >= 0) {
        produto.qnt_atual--
        this.atualizarQuantidade(produto)
      }
    },
    atualizarQuantidade(produto) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
      }

      this.timeoutId = setTimeout(() => {
        this.axios.post('editarstock/' + produto.id, produto).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      }, 500)
    }
  }
}
</script>