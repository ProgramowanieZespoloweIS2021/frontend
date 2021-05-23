import { RouteProps } from 'react-router-dom';
import { ShopLayout } from '@components/index';
import {
    OfferDetailsPage,
    LandingPage,
    LoginPage,
    RegisterPage,
    CartPage,
    AccountPage,
    OfferAddPage,
} from '@domains/index';
import paths from '@shared/paths';

interface IRouteConfig extends RouteProps {
    path: string;
    isProtected?: boolean;
}

export interface IAppRoutes {
    layoutComponent: React.ElementType;
    pageName?: string;
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
                component: OfferAddPage,
                exact: true,
                path: paths.offerAdd,
                // isProtected: true,
            },
        ],
        layoutComponent: ShopLayout,
        pageName: 'Add offer',
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
        pageName: 'Login',
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
        pageName: 'Register',
    },
    {
        routes: [
            {
                component: AccountPage,
                exact: true,
                path: paths.account,
                isProtected: true,
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
