<template>
  <div class=" relative w-full h-full">
    <Navbar />
    <Sidebar />
    <div class="h-full pt-[75px] ml-[260px] bg-white">
     <router-view/>
    </div>

  </div>
  
</template>
<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components:{Navbar,Sidebar},
  data(){
    return{

    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
