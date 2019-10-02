import appRoutes from './app';

const routes = [
  ...appRoutes,
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('layouts/AppLayout'),
    children: [
      {
        path: '*',
        component: () => import('pages/Error404.vue'),
      },
    ],
  });
}

export default routes;
