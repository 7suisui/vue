<template>
  <div id="app">
    <leftsidebar></leftsidebar>
    <navsidebar></navsidebar>
  </div>
</template>
<script>

import leftsidebar from './leftsidebar/leftsidebar.vue' 
import navsidebar from './navsidebar/navsidebar.vue'
export default {
  name:"app",
  components:{
    leftsidebar,
    navsidebar
  }
}
</script>


<style>
body{
  overflow-y: hidden;
  
}
*{
  margin:0;
  padding:0;
}
#app{
  width:100%;
  height:100%;
  display: flex;
}

</style>
