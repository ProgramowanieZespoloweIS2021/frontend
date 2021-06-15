import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routerConfig from './index';
import { ProtectedComponent } from '@components/_universal/ProtectedComponent/ProtectedComponent';

const RootRouter = () => {
    return (
        <Switch>
            {routerConfig.map(
                ({ layoutComponent: Layout, pageName, routes }, index) => {
                    return (
                        <Route
                            key={index}
                            path={routes?.map(({ path }) => path)}
                        >
                            <Layout {...{ pageName }}>
                                <Switch>
                                    {routes?.map(
                                        (
                                            { component, isProtected, ...rest },
                                            routeIndex,
                                        ) => (
                                            <Route
                                                key={routeIndex}
                                                render={(props) => {
                                                    const Component = component as React.ElementType;
                                                    return isProtected ? (
                                                        <ProtectedComponent>
                                                            <Component
                                                                {...props}
                                                            />
                                                        </ProtectedComponent>
                                                    ) : (
                                                        <Component {...props} />
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
                },
            )}
        </Switch>
    );
};

export default RootRouter;
