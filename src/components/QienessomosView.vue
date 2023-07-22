<template>
    <div class="hero">
        <div class="izq">
            <img src="@/assets/imgaboutus.png" alt="photo" id="imgaboutus">
        </div>
        <div class="derecha">
            <h2>¿quienes somos?</h2>
            <p>Somos la única empresa española de cuidadores de mascota profesionales que ofrece una alternativa personalizada de hospedaje canino, paseos caninos y cuidado de gatos.
no nos gustan las jaulas, ofrecemos el calor de un hogar. uno de nuestros cuidadores hospedará a tu mascota en su propio domicilio, ofreciéndole las comodidades, el confort y el calor de su propio hogar durante tu ausencia,  garantizándote un servicio personalizado e integral que incluye entrega y recogida a domicilio.
            </p>
        </div>
    </div>
    
</template>

<script>
</script>

<style scoped>
.hero{
    display: flex;
    flex-flow: row;
    margin-inline: 10%;
}
#imgaboutus{
    width: 80%;
}
.izq{
    width: 45%;
    
}
.derecha{
    display: flex;
    flex-flow: column;
    text-align: center;
    justify-content: center;
    width: 45%;
}
@media only screen and (max-width: 600px) {
    .hero{
    display: flex;
    flex-flow: column;
    }
}
</style>