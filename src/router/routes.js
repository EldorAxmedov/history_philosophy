
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
      { path: '/themes', component: () => import('pages/ThemeList.vue') },
      { path: '/theme/:id', component: () => import('pages/ThemeView.vue') },
      { path: '/literatures', component: () => import('pages/LiteraturesPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
