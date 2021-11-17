<template>
  <div id="app">
    <router-view/>
    <div>
  <b-nav pills class="mainMenus">
    <b-nav-item  class="mainMenu" @click="mainLink()">Main</b-nav-item>
    <b-nav-item class="mainMenu" @click="videoListLink()">Video</b-nav-item>
    <b-nav-item class="mainMenu" @click="aboutLink()">About</b-nav-item>
  </b-nav>
</div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        file1: null,
        file2: null
      }
    },
    methods:{
      mainLink()
      {
          this.$router.push({
              path : '/'
          })
      },
      videoListLink(){
        this.$router.push({
          path : '/videoList'
        })
      },
      aboutLink(){
        this.$router.push({
          path : '/about'
        })
      }
    }
  }
</script>
<style>
a{
  text-decoration-style: none;
}
.mainMenus{
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
}
.mainMenu{
  margin: 10px;
  border-radius: 10px;
}
.mainMenu a{
  color: rgb(255, 194, 194);
}
.mainMenu a:hover{
  color: #333;
}

ul, li{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>