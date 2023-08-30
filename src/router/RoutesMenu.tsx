import { PageMenu } from "../pages/page-menu/PageMenu"

const RoutesMenu = {
    path: '/menu',
    element: <PageMenu />,
    children: [
        // { path: 'list', element: <ListView />,  },
        // { path: 'issue/:id', element: <IssueView /> }, //useParams para obtener el parámetro del id
        // { path: '*', element: <Navigate to="list" /> },
    ]
}

export default RoutesMenu;