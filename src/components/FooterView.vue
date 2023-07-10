<template>
<!-- Footer -->
<footer class="text-center text-lg-start bg-light text-muted">
  <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div v-for="icon in icons" :key="icon.id">
<router-link :to="icon.rout" class="text-reset">
  <i :class="icon.icon"></i>
</router-link>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>About Us
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatem eveniet eligendi quam repellendus!
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Spain, Bio 48004, SP</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            mailto@mail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 34 603 64 34 56</p>
        </div>
      
      </div>
      
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
</template>

<script setup>

const icons = [{
  name: 'facebook',
  icon: 'fab fa-facebook-f',
  rout:'https://es-es.facebook.com'
},

  {
    name: 'twitter',
    icon: 'fab fa-twitter',
    rout:'https://es-es.facebook.com'
  },
{
  name: 'google',
  icon: 'fab fa-google',
  rout:'https://es-es.facebook.com'
},{
  name: 'instagram',
  icon: 'fab fa-instagram',
  rout:'https://es-es.facebook.com'
},
{
  name: 'linkedin',
  icon: 'fab fa-linkedin',
  rout:'https://es-es.facebook.com'
},
{
  name: 'github',
  icon: 'fab fa-github',
  rout:'https://es-es.facebook.com'
}
  ]

</script>