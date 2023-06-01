<template>
  <ModalAdicionarStock @produtoAdicionado="produtoCriado"></ModalAdicionarStock>
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
              <td>{{ produto.qnt_atual }}</td>
              <td>{{ produto.qnt_min }}</td>
              <td>{{ produto.observacoes }}</td>
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
    }
  },
  mounted() {
    this.axios.get("utilizador/stock", {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(response => {
      this.produtos = response.data.stocks
      console.log(this.produtos)
    })
    console.log(localStorage.getItem('token'))
  },
  methods: {
    produtoCriado(produto) {
      this.produtos.unshift(produto)
    }
  }
}
</script>