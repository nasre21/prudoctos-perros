<template>
  <div class="bg-container">
    <article class="bg-left">
      <h1 class="bg-title">The best FOOD FOR YOUR DOG</h1>
      <span>Delicious food made with Love</span>
      <p>Cuidadores profesionales y el calor de un hogar, la alternativa de confianza para el hospedaje de tu mejor amigo</p>
    </article>

    <article class="bg-right">
      <img src="@/assets/imgprincipale.png" alt="photos perros" id="img-principale">
    </article>
  </div>
</template>

<script setup>
// Your JavaScript logic goes here, if needed
</script>

<style scoped>
.bg-container {
  display: flex;
  flex-flow: row;
  padding-block: 10%;
}

.bg-left {
  width: 100%;
  max-width: 50%;
  margin-inline: 10%;
}

.bg-title {
  font-size: 3rem;
  color: #333;
}

.bg-right {
  width: 100%;
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10%;
}

#img-principale {
  width: 100%;
  max-width: 500px;
}

/* Media Query for Tablets and Larger Phones */
@media (max-width: 768px) {
  .bg-container {
    flex-direction: column;
  }

  .bg-left, .bg-right {
    max-width: 100%;
    margin-inline: 0;
  }

  .bg-right {
    margin-top: 20px;
  }
}

/* Media Query for Smaller Phones */
@media (max-width: 480px) {
  .bg-title {
    font-size: 2rem;
  }
}
</style>
