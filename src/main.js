import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';

const DashboardApp = createApp(App);
DashboardApp.use(router);
DashboardApp.mount('#app');





//which one is the best option?
