import { PageMenu } from "../pages/page-menu/PageMenu"
import { Brands } from "../pages/page-menu/sub-pages/Brands";

const RoutesMenu = {
    path: '/menu',
    element: <PageMenu />,
    children: [
        { path: 'brands', element: <Brands />,  },
    ]
}

export default RoutesMenu;