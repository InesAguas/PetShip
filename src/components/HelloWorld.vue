<template>
  
    <h1>{{ count }}</h1>
    <button @click="adicionar">Adicionar</button>
  
    
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      count: 0
    }
  },
  methods: {
    adicionar(){
      this.count++;
    }

  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
