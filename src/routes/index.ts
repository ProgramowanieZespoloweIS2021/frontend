import { RouteProps } from 'react-router-dom';
import { ShopLayout } from '@components/index';
import {
    OfferDetailsPage,
    LandingPage,
    LoginPage,
    RegisterPage,
    CartPage,
} from '@domains/index';
import paths from '@shared/paths';

interface IRouteConfig extends RouteProps {
    path: string;
}
interface IMainRouteConfig extends IRouteConfig {
    subRoutes?: IAppSubRoutes;
}
export interface IAppRoutes {
    layoutComponent: React.ElementType;
    routes?: IMainRouteConfig[];
}

export interface IAppSubRoutes {
    layoutComponent: React.ElementType;
    routes?: IRouteConfig[];
}

type RouterConfig = IAppRoutes[];

const routerConfig: RouterConfig = [
    // Main Layout
    {
        routes: [
            {
                component: CartPage,
                exact: true,
                path: paths.cart,
            },
        ],
        layoutComponent: ShopLayout,
    },
    {
        routes: [
            {
                component: OfferDetailsPage,
                exact: true,
                path: paths.offerDetails,
            },
        ],
        layoutComponent: ShopLayout,
    },
    {
        routes: [
            {
                component: LoginPage,
                exact: true,
                path: paths.login,
            },
        ],
        layoutComponent: ShopLayout,
    },
    {
        routes: [
            {
                component: RegisterPage,
                exact: true,
                path: paths.register,
            },
        ],
        layoutComponent: ShopLayout,
    },
    {
        routes: [
            {
                component: LandingPage,
                exact: true,
                path: paths.home,
            },
        ],
        layoutComponent: ShopLayout,
    },
];

export default routerConfig;
