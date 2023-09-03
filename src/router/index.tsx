import { createBrowserRouter } from 'react-router-dom';
import { PageLogin } from '../pages/page-login/PageLogin';
import { BadRequest } from '../pages/errors/BadRequest';
import RoutesMenu from './RoutesMenu';
import RoutesCompras from './RoutesCompras';
import RoutesVentas from './RoutesVentas';
import RoutesReportes from './RoutesReportes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLogin />,
  },
  RoutesMenu,
  RoutesCompras,
  RoutesVentas,
  RoutesReportes,
  {
    path: '*',
    element: <BadRequest />,
  },
]);

