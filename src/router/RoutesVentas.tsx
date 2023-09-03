import { PageVentas } from "../pages/page-ventas/PageVentas";

const RoutesVentas = {
    path: '/ventas',
    element: <PageVentas />,
    children: [
        // { path: 'list', element: <ListView />,  },
        // { path: 'issue/:id', element: <IssueView /> }, //useParams para obtener el parámetro del id
        // { path: '*', element: <Navigate to="list" /> },
    ]
}

export default RoutesVentas;