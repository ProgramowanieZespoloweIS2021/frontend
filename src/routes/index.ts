import { RouteProps } from 'react-router-dom';
import { ShopLayout } from '@components/index';
import {
    OfferDetailsPage,
    LandingPage,
    LoginPage,
    RegisterPage,
    CartPage,
    OfferAddPage,
    MyOffersPage,
    OfferEditPage,
    MyOrdersPage,
    MessagesPage,
    PaymentsPage,
    PaymentDetailsPage,
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
                isProtected: true,
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
                isProtected: true,
            },
        ],
        layoutComponent: ShopLayout,
        pageName: 'Add offer',
    },
    {
        routes: [
            {
                component: OfferEditPage,
                exact: true,
                path: paths.offerEdit,
                isProtected: true,
            },
        ],
        layoutComponent: ShopLayout,
        pageName: 'Edit offer',
    },
    {
        routes: [
            {
                component: MyOffersPage,
                exact: true,
                path: paths.myOffers,
                isProtected: true,
            },
        ],
        layoutComponent: ShopLayout,
        pageName: 'My Offers',
    },
    {
        routes: [
            {
                component: MyOrdersPage,
                exact: true,
                path: paths.orders,
                isProtected: true,
            },
        ],
        layoutComponent: ShopLayout,
        pageName: 'My Orders',
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
                component: MessagesPage,
                exact: true,
                path: paths.messages,
                isProtected: true,
            },
        ],
        layoutComponent: ShopLayout,
        pageName: 'Messages',
    },
    {
        routes: [
            {
                component: PaymentDetailsPage,
                exact: true,
                path: paths.paymentDetails,
                isProtected: true,
            },
        ],
        layoutComponent: ShopLayout,
        pageName: 'Payment Details',
    },
    {
        routes: [
            {
                component: PaymentsPage,
                exact: true,
                path: paths.payments,
                isProtected: true,
            },
        ],
        layoutComponent: ShopLayout,
        pageName: 'Payments',
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
