<template>
    <div class="hero">
      <div class="izq">
        <img src="@/assets/imgaboutus.png" alt="photo" id="imgaboutus">
      </div>
      <div class="derecha">
        <h2>¿Quiénes somos?</h2>
        <p>Somos la única empresa española de cuidadores de mascota profesionales que ofrece una alternativa personalizada de hospedaje canino, paseos caninos y cuidado de perros. No nos gustan las jaulas, ofrecemos el calor de un hogar. Uno de nuestros cuidadores hospedará a tu mascota en su propio domicilio, ofreciéndole las comodidades, el confort y el calor de su propio hogar durante tu ausencia, garantizándote un servicio personalizado e integral que incluye entrega y recogida a domicilio.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  // Your JavaScript logic goes here, if needed
  </script>
  
  <style scoped>
  .hero {
    display: flex;
    flex-flow: row;
    margin-inline: 10%;
  }
  
  #imgaboutus {
    width: 80%;
  }
  
  .izq {
    width: 45%;
  }
  
  .derecha {
    display: flex;
    flex-flow: column;
    text-align: center;
    justify-content: center;
    width: 45%;
  }
  
  /* Media Query for Mobile */
  @media only screen and (max-width: 600px) {
    .hero {
      flex-direction: column;
    }
  
    #imgaboutus {
      width: 100%;
    }
  
    .izq, .derecha {
      width: 100%;
    }
  }
  
  /* Media Query for iPad */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    .hero {
      flex-direction: row;
    }
  
    #imgaboutus {
      width: 60%;
    }
  
    .izq {
      width: 35%;
    }
  
    .derecha {
      width: 60%;
    }
  }
  </style>
  