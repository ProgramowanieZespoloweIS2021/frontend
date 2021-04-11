import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyled } from '@components/_global/Global.styled';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'src/boot/configureStore';
import { resolveEnv } from '@utils/helpers';
import { RootWrapper } from './App.styled';
import { Theme } from '@@types/CommonTypes';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import RootRoutes from 'src/routes/RootRoutes';
import themeVariant from '@utils/themeVariant';
import ToastNotification from '@components/ToastNotification/ToastNotification';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '@shared/theme/mui.theme';

const App = () => {
    return (
        // <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={resolveEnv('PUBLIC_URL')}>
            <ThemeProvider theme={themeVariant[Theme.DEFAULT]}>
                <MuiThemeProvider theme={muiTheme}>
                    <GlobalStyled />
                    <RootWrapper>
                        <RootRoutes />
                        <ToastNotification />
                    </RootWrapper>
                </MuiThemeProvider>
            </ThemeProvider>
        </BrowserRouter>
        // </PersistGate>
    );
};

export default App;
