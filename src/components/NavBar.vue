<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item" v-for='nav in navBar' :key='nav.title'>
          <router-link :to="nav.rout" class="nav-link">{{ nav.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>

const navBar = [
  {
   
    src1:require("@/assets/img/head_screen.png"),
    rout:"/"
  },
  {
    title:"Shop",
    rout:"/shop"
  },
  {
   title:"About us",
    rout:"/about"
  },
  {
    title:"Contact",
    rout:"/contact"
  },
]

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
