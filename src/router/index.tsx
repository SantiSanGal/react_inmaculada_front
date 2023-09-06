import { createBrowserRouter } from 'react-router-dom';
import { PageLogin } from '../pages/page-login/PageLogin';
import { BadRequest } from '../pages/errors/BadRequest';
import RoutesMenu from './RoutesMenu';
import RoutesCompras from './RoutesCompras';
import RoutesVentas from './RoutesVentas';
import RoutesReportes from './RoutesReportes';
import RoutesStock from './RoutesStock';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLogin />,
  },
  RoutesMenu,
  RoutesCompras,
  RoutesVentas,
  RoutesReportes,
  RoutesStock,
  {
    path: '*',
    element: <BadRequest />,
  },
]);

