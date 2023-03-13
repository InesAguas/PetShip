<template>
  <div class="col-4">
    <form>
      <div class="mb-3">
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="nome">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" id="exampleInputPassword1" v-model="apelido">
      </div>
      <button type="button" class="btn btn-primary" v-on:click="adicionar">Submit</button>
    </form>
  </div>
</template>

<script>
import { tSMethodSignature } from '@babel/types';
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data() {
    return {
      nome: "",
      apelido: ""
    }
  },
  methods: {
    adicionar() {
      console.log(this.nome);
      console.log(this.apelido);

      this.$http.post('https://api.example.com/data')
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })

    }




  }
}
</script>
