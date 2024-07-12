import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/layout/layout';
import { DetailsPage } from '@/pages/details-page';
import { NotFoundPage } from '@/pages/not-found-page';

export const APP_ROUTES = {
  cards: '/cards',
  page: '/page',
  root: '/',
};

const routes = [
  {
    children: [
      {
        element: <DetailsPage />,
        path: `${APP_ROUTES.cards}/:cardId`,
      },
    ],
    element: <Layout />,
    errorElement: <NotFoundPage />,
    path: APP_ROUTES.root,
  },
];

export const router = createBrowserRouter(routes);
