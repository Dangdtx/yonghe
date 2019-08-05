<template>
  <div id="app"> 
    <router-view></router-view>
    <TabBar />  
  </div>
</template>

<script> 
import TabBar from "common/tabBar" 
 import http from "utils/http.js" 
 

export default {
  name:"App",
  components:{
    TabBar, 
  },
  created(){
    
  // https://m.228.cn/server/person/order/list.json
    http("get","/server/subject/detail-xiechunhua0621.json").then((data)=>{
      console.log(data)
    })

  }
  
}
</script>


<style lang="scss">
 
</style>
