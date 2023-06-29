<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <!-- <li class="nav-item" v-for='navs in navImg' :key='navs.id'>
          <router-link :to="navs.rout" class="nav-link active" aria-current="page"><img :src="navs.src1" alt="Image"></router-link>
        </li> -->
        <li class="nav-item" v-for='nav in navBar' :key='nav.id'>
          <router-link :to="nav.rout" class="nav-link">{{ nav.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>


// const navImg=  {
//    id:1,
//    src1:require("@/assets/img/head_screen.png"),
//    rout:"/"
//  }
const navBar = [
 
  {
    id:2,
    title:"Shop",
    rout:"/shop"
  },
  {
    id:3,
   title:"About us",
    rout:"/about"
  },
  {
    id:4,
    title:"Contact",
    rout:"/contact"
  },
]

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
