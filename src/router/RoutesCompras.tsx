import { PageCompras } from "../pages/page-compras/PageCompras";

const RoutesCompras = {
    path: '/compras',
    element: <PageCompras />,
    children: [
        // { path: 'list', element: <ListView />,  },
        // { path: 'issue/:id', element: <IssueView /> }, //useParams para obtener el parámetro del id
        // { path: '*', element: <Navigate to="list" /> },
    ]
}

export default RoutesCompras;