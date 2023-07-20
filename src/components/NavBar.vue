<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">
              <div class="image-container">
                <img
                  src="../assets/img/head_screen.png"
                  height="50" 
                  alt="MDB Logo"
                  loading="lazy"
                  class="rounded-image" 
                />
              </div>
            </router-link>
          </li> 
          <li class="nav-item" v-for="nav in navBar" :key="nav.id">
            <router-link :to="nav.rout" class="nav-link nav_title">
              {{ nav.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navBar = [
  {
    id: 2,
    title: "Shop",
    rout: "/shop"
  },
  {
    id: 3,
    title: "About us",
    rout: "/about"
  },
  {
    id: 4,
    title: "Contact",
    rout: "/contact"
  },
]
</script>


<style scoped>
  .nav_title {
    font-size: 1rem;
    font-weight: bold;
    padding: 8px 15px;
    text-decoration: none;
    color: #333;
    border-bottom: 2px solid transparent;
    transition: border-bottom-color 0.3s ease;
  }

  .nav_title:hover {
    border-bottom-color: #00b4d8;
  }

  @media (max-width: 768px) {
    .navbar-nav {
      flex-direction: column;
    }

    .nav-item {
      margin-bottom: 10px; /* Increased the margin for more space between list items */
    }

    .image-container {
      display: flex;
      justify-content: center;
      padding-right: 0; /* Remove right padding on smaller screens */
    }
  }

  /* Additional styles for larger screens */
  @media (min-width: 769px) {
    .image-container {
      padding-right: 35px; /* Adjust the padding for larger screens */
    }
  }

</style>
