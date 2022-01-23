const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('components/Header.vue') },
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/cards',
    component: () => import('layouts/TestLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cards.vue') }
    ]
  },
  {
    path: '/my',
    component: () => import('layouts/MyCardsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cards.vue') }
    ]
  },
  {
    path: '/img',
    component: () => import('layouts/PhoneLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PhoneAnimation.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
