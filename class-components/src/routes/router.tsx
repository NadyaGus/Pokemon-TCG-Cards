import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/layout/layout';
import { NotFoundPage } from '@/pages/not-found-page';
import { SearchPage } from '@/pages/search-page';

export const APP_ROUTES = {
  page: '/search',
  root: '/',
};

const routes = [
  {
    children: [{ element: <SearchPage />, path: `${APP_ROUTES.page}/:pageId` }],
    element: <Layout />,
    errorElement: <NotFoundPage />,
    path: APP_ROUTES.root,
  },
];

export const router = createBrowserRouter(routes);
