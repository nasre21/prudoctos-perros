<template>
  <form @submit.prevent class="container" method="post">
    <!-- Name input -->

  

    <div>
      <h2 class="d-flex justify-content-center">Contact Us</h2>
    </div>


     <div class="form-outline  mb-2">
       <input type="hidden" v-model="id" class="form-control1" />
      </div>

      
    <div class="form-outline  mb-2">
      <input placeholder="Name" type="text" v-model="name" id="form4Example1" class="form-control" />
    </div>

    <!-- Email input -->
    <div class="form-outline mb-2">
      <input type="email" v-model="adress" placeholder="Email" id="form4Example2" class="form-control" />
    </div>

    <!-- Phone input -->
    <div class="form-outline mb-2">
      <input type="text" v-model="phone" placeholder="Phone" id="form4Example3" class="form-control" maxlength="9" />
    </div>

    <!-- Password input -->
    <div class="form-outline mb-2">
      <input type="password" v-model="password" placeholder="Password" id="form4Example4" class="form-control" />
    </div>

    <!-- Message input -->
    <div class="form-outline mb-2">
      <textarea class="form-control" v-model="message" placeholder="Message" id="form4Example5" rows="4"></textarea>
    </div>

    <!-- Submit button -->
    <button @click="createUser" type="submit" class="btn btn-red btn-block">Send</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const id = ref('');

const name = ref('');
const adress = ref('');
const phone = ref('');
const password = ref('');
const message = ref('');

const createUser = async () => {
  try {

    // Make a POST request to the backend API
    await axios.post('http://127.0.0.1:5000/user',
    {
      id: id.value,
      name: name.value,
      adress: adress.value,
      phone: phone.value,
      password: password.value,
      message: message.value,
    });

    router.push('/');
} catch (error) {
  console.log(error);
}
}

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


