<template>
    <div>
      <NavBar />
      <div>
        <img src="@/assets/imgg/error.png" alt="" v-if="dataInfo.isError">
        <img src="@/assets/imgg/1488.gif" alt="" v-if="isLoading">
        <div>
        <CardView :dataInfo ="dataInfo"/>
      </div>
      </div>
      
      <FootterView />
    </div>
  </template>
  
  <script setup>
  import NavBar from '@/components/NavBar.vue';
  import CardView from '@/components/CardView.vue';
  import FootterView from '@/components/FooterView.vue';
  
  import info from '@/Controls/infoProduct'
  import { ref, onMounted } from 'vue';

  let isLoading = ref(true) 

let dataInfo = ref(onMounted(async () => {
    dataInfo.value = await info.getProduct()
    if( !dataInfo.value.isLoading){
      isLoading.value = false
    }

}))

  </script>