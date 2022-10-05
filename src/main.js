import { createApp } from 'vue';
// import {App} from './App.vue'
import App from "./App.vue";
// import App as path from './App.vue';
import router from './router';
import './assets/tailwind.css';
// let myApp = new path.App();
// // const DashboardApp = createApp(myApp);
var DashboardApp = createApp(App);
DashboardApp.use(router);
DashboardApp.mount('#app');
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map