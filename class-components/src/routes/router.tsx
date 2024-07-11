import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/layout/layout';
import { DetailsPage } from '@/pages/details-page';
import { NotFoundPage } from '@/pages/not-found-page';

export const APP_ROUTES = {
  page: '/search',
  root: '/',
};

const routes = [
  {
    children: [{ element: <DetailsPage /> }],
    element: <Layout />,
    errorElement: <NotFoundPage />,
    path: APP_ROUTES.root,
  },
];

export const router = createBrowserRouter(routes);
