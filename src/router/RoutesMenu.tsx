import { PageMenu } from "../pages/page-menu/PageMenu"
import { Brands } from "../pages/page-menu/sub-pages/Brands";
import { Category } from "../pages/page-menu/sub-pages/Category";
import { Contact } from "../pages/page-menu/sub-pages/Contact";

const RoutesMenu = {
    path: '/menu',
    element: <PageMenu />,
    children: [
        { path: 'brands', element: <Brands />,  },
        { path: 'category', element: <Category />,  },
        { path: 'contact', element: <Contact />,  },
    ]
}

export default RoutesMenu;