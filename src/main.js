import { createApp } from 'vue';
import App from "./App.vue";
import router from './router';
import './assets/tailwind.css';


var DashboardApp = createApp(App);
DashboardApp.use(router);
DashboardApp.mount('#app');
