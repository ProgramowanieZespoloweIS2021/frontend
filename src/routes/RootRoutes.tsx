import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routerConfig from './index';
import { AuthContainer } from '@routes/AuthContainer';

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
                                                        <AuthContainer>
                                                            <Component
                                                                {...props}
                                                            />
                                                        </AuthContainer>
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
