
<template>
 <div class="containerr">
    <div class="heading">
      <h1>Shop</h1>
    </div>
  </div>
<div class="container">
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card">
        <div class="card-content">
          <div class="image-container">
            <img src="@/assets/img/image_1.png" alt="Imagen" class="img-fluid">
          </div>
          <div class="text-container">
            <h5 class="card-title">Comedero Acero Inoxidable Antideslizante de Colores</h5>
            <p class="card-text">4.99$</p>
            <button class="btn btn-shop">Comprar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="card-content">
          <div class="image-container">
            <img src="@/assets/img/image_2.png" alt="Imagen" class="img-fluid">
          </div>
          <div class="text-container">
            <h5 class="card-title">Comedero Doble Acero Inoxidable</h5>
            <p class="card-text">10$</p>
            <button class="btn btn-shop">Comprar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="card-content">
          <div class="image-container">
            <img src="@/assets/img/image_3.png" alt="Imagen" class="img-fluid">
          </div>
          <div class="text-container">
            <h5 class="card-title">Correa Extensible Perro Modern Design</h5>
            <p class="card-text">12,99$</p>
            <button class="btn btn-shop">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
</template>
  <script setup>

</script>
  
  <style scoped>
  .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Customize your card styles */
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-content {
  padding: 20px;
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
  margin-top: 20px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 16px;
}

.btn-shop {
  display: block;
  margin: 0 auto;
  background-color: #ff2600;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .row-cols-md-3 .col {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 767px) {
  .row-cols-md-3 .col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.container {
  text-align: center;
}

.heading h1 {
  font-size: 3.3rem;
  /* Adjust the font size as needed */
  margin-bottom: 1.3rem;
  text-align: center;
}
  </style>
  

