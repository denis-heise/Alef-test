import {createRouter, createWebHistory} from 'vue-router';
import FormPage from '../pages/form/form';
import PreviewPage from '../pages/preview/preview';

const routes = [
  { path: '/', component: FormPage },
  { path: '/preview', component: PreviewPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
 