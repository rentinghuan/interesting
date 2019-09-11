<template>
  <div class="buy">
    购买{{buyid}}
  </div>
</template>

<script>
export default {
  props:['buyid'],
  name: 'Buy',  
  data () {
    return {
        msg:''
    }
  }, 
  created:function(){

  },
  methods:{

  },

  
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
h1, h2 {
  font-weight: normal;
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
.header{
  font-size:20px;
}
</style>
