import { RouteProps } from 'react-router-dom';
import { ShopLayout } from '@components/index';
import { DashboardPage } from '@domains/index';
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
                component: DashboardPage,
                exact: true,
                path: paths.dashboard,
            },
        ],
        layoutComponent: ShopLayout,
    },
];

export default routerConfig;
