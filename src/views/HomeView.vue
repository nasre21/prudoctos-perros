<template>
    <div>
      <NavBar />
      <InecioView/>
      <qienessomos/>
      <cardView :dataInfo ="dataInfo"/>
      <FormContact/>
      <FootterView />
    </div>
  </template>
  
  <script setup>
  import NavBar from '@/components/NavBar.vue';
  import InecioView from '@/components/InecioView.vue';
  import qienessomos from '@/components/QienessomosView.vue';
  import cardView    from '@/components/CardView.vue';
  import FormContact from '@/components/FormContact.vue';
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
