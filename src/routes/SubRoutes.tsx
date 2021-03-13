import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IAppSubRoutes } from './index';

interface IProps extends IAppSubRoutes {}

export const SubRoutes: React.FC<IProps> = ({
    routes,
    layoutComponent: Layout,
}) => {
    return (
        <Switch>
            <Route path={routes?.map(({ path }) => path)}>
                <Layout>
                    <Switch>
                        {routes?.map((props, index) => (
                            <Route key={index} {...props} />
                        ))}
                    </Switch>
                </Layout>
            </Route>
        </Switch>
    );
};

export default SubRoutes;
