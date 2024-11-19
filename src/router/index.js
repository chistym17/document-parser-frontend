import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import HomePage from '@/views/Home.vue';
import AboutMe from '@/views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Maps to Home.vue
  },
  {
    path: '/about',
    name: 'About',
    component: AboutMe, // Maps to About.vue
  },
];

const router = createRouter({
  history: createWebHistory(), // For SPA routing (hash or history mode)
  routes,
});

export default router;
