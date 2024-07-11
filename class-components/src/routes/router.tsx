import { createBrowserRouter } from 'react-router-dom';

import { NotFoundPage } from '@/pages/not-found-page';
import { SearchPage } from '@/pages/search-page';

export const APP_ROUTES = {
  page: '/page',
  root: '/',
};

const routes = [
  {
    children: [{ element: <SearchPage />, path: `${APP_ROUTES.page}/:pageId` }],
    element: <SearchPage />,
    errorElement: <NotFoundPage />,
    path: APP_ROUTES.root,
  },
];

export const router = createBrowserRouter(routes);
