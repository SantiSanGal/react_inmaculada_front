import { PageStock } from "../pages/page-stock/PageStock";

const RoutesStock = {
    path: '/stock',
    element: <PageStock />,
    children: [
        // { path: 'list', element: <ListView />,  },
        // { path: 'issue/:id', element: <IssueView /> }, //useParams para obtener el parámetro del id
        // { path: '*', element: <Navigate to="list" /> },
    ]
}

export default RoutesStock;