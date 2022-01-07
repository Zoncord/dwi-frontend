
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyCardsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cards.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
