<template>
  <div class="type">
    <ul>
      <router-link :to="{path:'/type/buy/22'}">华为</router-link>
      <router-link :to="{name:'Addshop'}">iphone</router-link>
    </ul>
  <a @click="returnfn">返回</a>
  <div class="detail">
      这是手机详情
      <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Type',  
  data () {
    return {
        msg:''
    }
  }, 
  created:function(){

  },
  methods:{
    returnfn:function(){
      this.$router.go(-1);
    }
  },
  watch:{
    '$route' (to,from){
        console.log("323",to,from);
    }
  }
  
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
