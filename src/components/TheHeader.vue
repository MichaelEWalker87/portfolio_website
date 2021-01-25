<template>
  <div>
    <h1>{{ msg }} hello {{name}} {{doThis()}}</h1>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    msg: String
  }, 
  data(){
    return{
      name: "Mike"
    }
  },
  methods: {
    addThree(){
      return(3 + 3) 
    }, 
    doThis(){
      return(4 + 4)
    }
  }

  // props: ["msg"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
