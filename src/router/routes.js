const routes = [
  {
    path: '/',
    redirect: '/feed'
  },
  {
    path: '/feed',
    component: () => import('pages/FeedPage.vue'),
  },
  {
    path: '/profile/:userId',
    component: () => import('pages/ProfilePage.vue'),
  },
  {
    path: '/profile',
    component: () => import('pages/Error404.vue'),
  },
  {
    path: '/achievement/create',
    component: () => import('pages/CreateAchievement.vue'),
  },
  {
    path: '/achievement/:id',
    component: () => import('pages/AchievementPage.vue'),
  },
  {
    path: '/auth',
    component: () => import('pages/Auth.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },

]

export default routes
