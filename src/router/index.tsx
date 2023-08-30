import { createBrowserRouter } from 'react-router-dom';
import { PageLogin } from '../pages/page-login/PageLogin';
import { BadRequest } from '../pages/errors/BadRequest';
import RoutesMenu from './RoutesMenu';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLogin />,
  },
  RoutesMenu,
  {
    path: '*',
    element: <BadRequest />,
  },
]);

