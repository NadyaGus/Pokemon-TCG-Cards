import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/layout/layout';
import { DetailsPage } from '@/pages/details-page';
import { loader as DetailsLoader } from '@/pages/details-page-loader';
import { NotFoundPage } from '@/pages/not-found-page/not-found-page';

export const APP_ROUTES = {
  cards: '/cards',
  root: '/',
};

export const ROUTES = [
  {
    children: [
      {
        element: <DetailsPage />,
        loader: DetailsLoader,
        path: `${APP_ROUTES.cards}/:cardId`,
      },
    ],
    element: <Layout />,
    errorElement: <NotFoundPage />,
    path: APP_ROUTES.root,
  },
];

export const router = createBrowserRouter(ROUTES);
