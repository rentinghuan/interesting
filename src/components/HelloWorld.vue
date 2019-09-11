<template>
  <div class="hello">
      <v-header></v-header>
      <!-- <ul>
        <li v-for="(item, index) in lists"  :key="index" class="gg">
          {{item.name}}
        </li>
      </ul> -->
      <router-link to="/type/buy/12">手机</router-link>
      <!-- <a @click="clickphonefn">手机</a> -->
      <!-- <router-link :to="{name:'Buy'}">手机</router-link> -->

  </div>
</template>

<script>
import VHeader from './header/Header'
export default {
  components :{
    VHeader
  },
  name: 'HelloWorld',
  data () {
    return {
      lists:[
        {name:'种类'},
        {name:'机型'},
        {name:'种类'}
      ]
    }
  }, 
  created:function(){

  },
  methods:{
    clickphonefn:function(){
      this.$router.push({path:'/type/buy/12',query:{typeid:12}},function(){
        console.log(2323);
      });
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
