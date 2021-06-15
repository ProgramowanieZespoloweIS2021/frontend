import React from 'react';
import { Router } from 'react-router-dom';
import { GlobalStyled } from '@components/_global/Global.styled';
import { RootWrapper } from './App.styled';
import { Theme } from '@@types/CommonTypes';
import { ThemeProvider } from 'styled-components';
import RootRoutes from 'src/routes/RootRoutes';
import themeVariant from '@utils/themeVariant';
import ToastNotification from '@components/ToastNotification/ToastNotification';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '@shared/theme/mui.theme';
import { history } from '@utils/history';
import { AuthContainer } from '@routes/AuthContainer';

const App = () => {
    return (
        <Router history={history}>
            <ThemeProvider theme={themeVariant[Theme.DEFAULT]}>
                <MuiThemeProvider theme={muiTheme}>
                    <GlobalStyled />
                    <AuthContainer>
                        <RootWrapper>
                            <RootRoutes />
                            <ToastNotification />
                        </RootWrapper>
                    </AuthContainer>
                </MuiThemeProvider>
            </ThemeProvider>
        </Router>
    );
};

export default App;
