import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/layout/layout';
import { NotFoundPage } from '@/pages/not-found-page';

const routes = [{ element: <Layout />, errorElement: <NotFoundPage />, path: '/' }];

export const router = createBrowserRouter(routes);
