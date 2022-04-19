const routes = [
  // {
  //   path: '/greeting',
  //   component: () => import('layouts/StartLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // },
  // {
  //   path: '/cards',
  //   component: () => import('layouts/TestLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Cards.vue') }
  //   ]
  // },
  // {
  //   path: '/my',
  //   component: () => import('layouts/MyCardsLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Cards.vue') }
  //   ]
  // },
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
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
