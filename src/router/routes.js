const routes = [
  {
    path: '/greeting',
    component: () => import('layouts/StartLayout.vue'),
    children: [
      // { path: '', component: () => import('components/MainPageHeader.vue') },
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
    path: '/',
    redirect: '/feed'
  },
  {
    path: '/:id',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/curve-test',
    component: () => import('layouts/CurveTestLayout.vue'),
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
