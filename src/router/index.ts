import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new page
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: () => import('../views/DoctorsView.vue'),
    },
    {
      path: '/doctor/:id',
      name: 'doctor-detail',
      component: () => import('../views/DoctorDetailView.vue'),
    },
    {
      path: '/doctor-detail',
      name: 'doctor-detail-static',
      component: () => import('../views/DoctorDetailView.vue'),
    },
    {
      path: '/departments',
      name: 'departments',
      component: () => import('../views/DepartmentsView.vue'),
    },
    {
      path: '/department/:name',
      name: 'department-detail',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    // Specific department routes
    {
      path: '/oncology',
      name: 'oncology',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/neurology',
      name: 'neurology',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/gynecological',
      name: 'gynecological',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/pediatrical',
      name: 'pediatrical',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/laboratory',
      name: 'laboratory',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/orthopedic',
      name: 'orthopedic',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/physiotherapy',
      name: 'physiotherapy',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/palliative-care',
      name: 'palliative-care',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    // Department routes with /departments/ prefix
    {
      path: '/departments/oncology',
      name: 'departments-oncology',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/departments/neurology',
      name: 'departments-neurology',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/departments/gynecological',
      name: 'departments-gynecological',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/departments/pediatrical',
      name: 'departments-pediatrical',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/departments/laboratory',
      name: 'departments-laboratory',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/departments/orthopedic',
      name: 'departments-orthopedic',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/departments/physiotherapy',
      name: 'departments-physiotherapy',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/departments/palliative-care',
      name: 'departments-palliative-care',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: () => import('../views/AppointmentView.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
  ],
})

export default router
