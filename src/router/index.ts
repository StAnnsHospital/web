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
      path: '/cardiology',
      name: 'cardiology',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/neurology',
      name: 'neurology',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/urology',
      name: 'urology',
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
    // Department routes with /departments/ prefix
    {
      path: '/departments/cardiology',
      name: 'departments-cardiology',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/departments/neurology',
      name: 'departments-neurology',
      component: () => import('../views/DepartmentDetailView.vue'),
    },
    {
      path: '/departments/urology',
      name: 'departments-urology',
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
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogStandardView.vue'),
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: () => import('../views/BlogPostView.vue'),
    },
    // Blog variations
    {
      path: '/blog/checkerboard',
      name: 'blog-checkerboard',
      component: () => import('../views/BlogCheckerboardView.vue'),
    },
    {
      path: '/blog/masonry',
      name: 'blog-masonry',
      component: () => import('../views/BlogMasonryView.vue'),
    },
    {
      path: '/blog/two-col',
      name: 'blog-two-col',
      component: () => import('../views/BlogTwoColView.vue'),
    },
    {
      path: '/blog/three-col',
      name: 'blog-three-col',
      component: () => import('../views/BlogThreeColView.vue'),
    },
    {
      path: '/blog/four-col',
      name: 'blog-four-col',
      component: () => import('../views/BlogFourColWideView.vue'),
    },
    {
      path: '/blog/four-col-wide',
      name: 'blog-four-col-wide',
      component: () => import('../views/BlogFourColWideView.vue'),
    },
    // Blog post types
    {
      path: '/blog/post/image',
      name: 'blog-post-image',
      component: () => import('../views/BlogPostView.vue'),
    },
    {
      path: '/blog/post/gallery',
      name: 'blog-post-gallery',
      component: () => import('../views/BlogPostGalleryView.vue'),
    },
    {
      path: '/blog/post/link',
      name: 'blog-post-link',
      component: () => import('../views/BlogPostLinkView.vue'),
    },
    {
      path: '/blog/post/audio',
      name: 'blog-post-audio',
      component: () => import('../views/BlogPostAudioView.vue'),
    },
    {
      path: '/blog/post/quote',
      name: 'blog-post-quote',
      component: () => import('../views/BlogPostQuoteView.vue'),
    },
    {
      path: '/blog/post/video',
      name: 'blog-post-video',
      component: () => import('../views/BlogPostVideoView.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/PricingView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/elements',
      name: 'elements',
      component: () => import('../views/ElementsView.vue'),
    },
    {
      path: '/coming-soon',
      name: 'coming-soon',
      component: () => import('../views/ComingSoonView.vue'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue'),
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/ErrorPageView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/ErrorPageView.vue'),
    },
  ],
})

export default router
