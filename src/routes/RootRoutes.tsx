import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routerConfig from './index';

const RootRouter = () => {
    return (
        <Switch>
            {routerConfig.map(({ layoutComponent: Layout, routes }, index) => {
                return (
                    <Route key={index} path={routes?.map(({ path }) => path)}>
                        <Layout>
                            <Switch>
                                {routes?.map(
                                    (
                                        { component, subRoutes, ...rest },
                                        routeIndex,
                                    ) => (
                                        <Route
                                            key={routeIndex}
                                            render={(props) => {
                                                const Component = component as React.ElementType;
                                                return (
                                                    <Component
                                                        {...props}
                                                        {...subRoutes}
                                                    />
                                                );
                                            }}
                                            {...rest}
                                        />
                                    ),
                                )}
                            </Switch>
                        </Layout>
                    </Route>
                );
            })}
        </Switch>
    );
};

export default RootRouter;
