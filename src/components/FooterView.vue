<template>
<footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container">
    <!-- Section: Social media -->

    <section class="section_footer">
 
      <div class="img_footer">
      <router-link to="/">
    <img
        src="../assets/img/head_screen.png"
        height="80"
        alt="MDB Logo"
        loading="lazy"
        class="img"
      />
  </router-link>
</div>

<div class="icon_foter">
        <!-- Facebook -->
        <a class="btn btn-outline-light btn-floating" href="#!" role="button"
          ><i class="fab fa-facebook-f"></i
        ></a>

        <!-- Linkedin -->
        <a class="btn btn-outline-light btn-floating " href="#!" role="button"
          ><i class="fab fa-linkedin-in"></i
        ></a>

        <!-- Github -->
        <a class="btn btn-outline-light btn-floating" href="#!" role="button"
          ><i class="fab fa-github"></i
        ></a>
  </div>
</section>
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(14, 13, 13, 0.2);">
    © 2023 Copyright:
    <a class="text-white" href="https://www.tiendanimal.es">Tiendanimal.com</a>
  </div>
  <!-- Copyright -->
</footer>
</template>

<script setup>

</script>

<style scoped>



.img_footer .img{
 display: flex;
 justify-content: center;
 padding-top: 1.2;

}

.icon_foter{
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 4rem;
}
</style>