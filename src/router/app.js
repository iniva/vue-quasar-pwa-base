export default [
  {
    path: '/',
    component: () => import('layouts/AppLayout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/Home'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/Login'),
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('pages/Profile'),
      },
    ],
  },
];
