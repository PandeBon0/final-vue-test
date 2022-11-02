import { createApp } from 'vue';
import App from "./App.vue";
import router from './router';
import './assets/tailwind.css';
import store from '@/store';

const DashboardApp = createApp(App);
DashboardApp.use(router);
DashboardApp.mount('#app');
DashboardApp.use(store);
// DashboardApp.config.globalProperties.$isValidated = true
DashboardApp.config.globalProperties.$isAuth = true;




