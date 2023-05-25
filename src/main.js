import { createApp } from 'vue';
import store from './store/index'
import {router} from './router/index';
import './assets/styles/main.scss';

import App from "./App.vue";

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

