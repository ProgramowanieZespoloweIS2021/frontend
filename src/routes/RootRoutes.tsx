import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routerConfig from './index';
import { AuthWrapper } from '@routes/AuthWrapper';

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
                                        { component, isProtected, ...rest },
                                        routeIndex,
                                    ) => (
                                        <Route
                                            key={routeIndex}
                                            render={(props) => {
                                                const Component = component as React.ElementType;
                                                return isProtected ? (
                                                    <AuthWrapper>
                                                        <Component {...props} />
                                                    </AuthWrapper>
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
            })}
        </Switch>
    );
};

export default RootRouter;
