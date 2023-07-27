<template>
  <form class="container">
    <!-- Name input -->
    <div>
      <h2 class="d-flex justify-content-center">Contact Us</h2>
    </div>

    <div class="form-outline  mb-2">
      <input placeholder="Name" type="text" id="form4Example1" class="form-control" />
    </div>

    <!-- Email input -->
    <div class="form-outline mb-2">
      <input type="email" placeholder="Email" id="form4Example2" class="form-control" />
    </div>

    <!-- Pasword input -->
    <div class="form-outline mb-2">
      <input type="password" placeholder="Password" id="form4Example2" class="form-control" />
    </div>

    <!-- Message input -->
    <div class="form-outline mb-2">
      <textarea class="form-control" placeholder="Message" id="form4Example3" rows="4"></textarea>
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-red btn-block">Send</button>
  </form>
</template>

<script setup>
  // No need to add any JavaScript code for now.
</script>

<style scoped>
  /* Custom styles */
  .container {
    max-width: 25rem;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f7f7f7;
  }

  h2 {
    color: #333;
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 1rem;
  }

  .form-control {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: none;
    color: #333;
  }

  .form-control::placeholder {
    color: #999;
  }

  .btn-red {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #fff; /* White background color */
    color: #f00; /* Red text color */
    cursor: pointer;
  }

  .btn-red:hover {
    background-color: #f00; /* Red background color on hover */
    color: #fff; /* White text color on hover */
  }
</style>


