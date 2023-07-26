<template>
<h3 class="text-center fs-20">Shop</h3>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="data in dataInfo.data" :key="data.id_product" >
        <div class="card">
          <div  class="card-content">
            <div class="image-container">
              <img src="@/assets/img/image_1.png" alt="Imagen" class="img-fluid">
            </div>
            <div class="text-container">
              <h5 class="card-title">{{data.description}}</h5>
              <p class="card-text">{{data.precio}}</p>
              <button class="btn btn-shop">Comprar</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  dataInfo: Object
})


</script>

<style scoped>
.container {
  max-width: 75rem;
  margin: 0 auto;
  padding: 1.25rem;
}

/* Customize your card styles */
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%; /* Aseguramos que todas las tarjetas tengan la misma altura */
}

.card-content {
  padding: 1.25rem;
  height: 100%; /* Aseguramos que todas las tarjetas tengan la misma altura */
}

.image-container {
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
}

.text-container {
  text-align: center;
  margin-top: 1.25rem;
}

.card-title {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
}

.card-text {
  font-size: 1rem;
}

.btn-shop {
  display: block;
  margin: 0 auto;
  background-color: #ff2600;
  color: #fff;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 4px;
  cursor: pointer;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .row-cols-md-3 .col {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
}

@media (max-width: 767px) {
  .row-cols-md-3 .col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
