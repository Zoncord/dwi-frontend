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
    path: '/explore',
    component: () => import('pages/ExplorePage.vue'),
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
    path: '/achievement/edit/:achievementId',
    component: () => import('pages/EditAchievement.vue'),
  },
  {
    path: '/post/edit/:postId',
    component: () => import('pages/EditPost.vue'),
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
    path: '/logout',
    component: () => import('pages/Logout.vue'),
  },
  {
    path: '/create-post',
    component: () => import('pages/CreatePost.vue'),
  },
  {
    path: '/test',
    component: () => import('pages/Test.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },

]

export default routes
