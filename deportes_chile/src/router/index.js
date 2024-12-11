import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Contacto from '@/views/Contacto.vue';
import Detalles from '@/views/Detalles.vue';
import NotFound from '@/views/NotFound.vue';

const routes= [
  {path: '/', redirect: '/home'},
  {path: '/home',component: Home},
  {path: '/contacto',component: Contacto},
  {path:'/deporte/:id', component: Detalles, props: true},
  {path:'/:pathMatch(.*)*', component: NotFound},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  
});

export default router
