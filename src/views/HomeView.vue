<template>
    <div>
      <NavBar />
      <InecioView/>
      <qienessomos/>
      <cardView/>
      <formContact/>
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
  </script>
