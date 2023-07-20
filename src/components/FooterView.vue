<template>
  <footer class="footer">
    <p>&copy;<a href="https://www.zooplus.es" target="_blank">2023 zooplus.es</a>All rights reserved.</p>
    <div class="social-icons">
      <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
      <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 1.25rem;
    text-align: center;
  }

  .footer p {
    margin-bottom: 0; /* Remove default margin for <p> tag */
  }

  .footer a {
    color: #fff;
    text-decoration: none;
    padding: 0.313rem 0.625rem;
  }

  .footer a:hover {
    color: #eaeaea;
    background-color: #444; /* Hover background color */
    border-radius: 5px; /* Add border-radius for rounded look */
  }

  .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 0.625rem;
  }

  .social-icons a {
    color: #fff;
    text-decoration: none;
    margin: 0.625rem;
    font-size: 1.25rem;
  }
</style>
