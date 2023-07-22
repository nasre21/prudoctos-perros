<!-- src/components/Card.vue -->
<template>
<div class="container">
    <div class="card">
      <div class="card-content">
        <div class="image-container">
          <img src="@/assets/img/image_1.png" alt="Imagen">
        </div>
        <div class="text-container">
          <h5 class="card-title">Comedero Acero Inoxidable Antideslizante de Colores</h5>
          <p class="card-text">4.99$</p>
          <button class="btn-shop">Comprar</button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="image-container">
          <img src="@/assets/img/image_2.png" alt="Imagen">
        </div>
        <div class="text-container">
          <h5 class="card-title">Comedero Doble Acero Inoxidable</h5>
          <p class="card-text">10$</p>
          <button class="btn-shop" >Comprar</button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="image-container">
          <img src="@/assets/img/image_3.png" alt="Imagen">
        </div>
        <div class="text-container">
          <h5 class="card-title">Correa Extensible Perro Modern Design</h5>
          <p class="card-text">12,99$</p>
          <button class="btn-shop" >Comprar</button>
        </div>
      </div>
    </div>

  </div>
    
  </template>
  
  <script setup>

</script>
  
  <style scoped>
  .container{
    display: flex;
    flex-flow: row;
    justify-content: center;
    text-align: center;

  }

  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    width: 400px;
    margin: 20px auto;
  }
  
  .card-content {
    display: flex;
  }
  
  .image-container {
    flex: 1;
    padding: 10px;
  }
  
  .image-container img {
    width: 100%;
    height: auto;
  }
  
  .text-container {
    flex: 2;
    padding: 10px;
  }
  
  .card-title {
    font-size: 20px;
    margin: 0;
  }
  
  .card-text {
    font-size: 16px;
  }
  </style>
  

