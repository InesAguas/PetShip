<template>
  <div class="col-4">
    <form>
      <div class="mb-3">
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="utilizador.nome">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" id="exampleInputPassword1" v-model="utilizador.apelido">
      </div>
      <button type="button" class="btn btn-primary" v-on:click="adicionar">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data() {
    return {
      utilizador: {
        nome: "",
        apelido: ""
      }
      
    }
  },
  methods: {
    adicionar() {

     /* axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/utilizadores',
      data: {
        nome: this.nome,
        apelido: this.apelido
      }
    });*/

      axios.post("http://127.0.0.1:8000/api/utilizadores", this.utilizador);

      /*this.$http.post('https://api.example.com/data')
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })*/

    }




  }
}
</script>
