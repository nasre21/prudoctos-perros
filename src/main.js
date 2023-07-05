import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import fonts
import '@fortawesome/fontawesome-free/css/all.css';



createApp(App).use(router).mount('#app')
