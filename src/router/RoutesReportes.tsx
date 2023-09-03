import { PageReportes } from "../pages/page-reportes/PageReportes";

const RoutesReportes = {
    path: '/reportes',
    element: <PageReportes />,
    children: [
        // { path: 'list', element: <ListView />,  },
        // { path: 'issue/:id', element: <IssueView /> }, //useParams para obtener el parámetro del id
        // { path: '*', element: <Navigate to="list" /> },
    ]
}

export default RoutesReportes;