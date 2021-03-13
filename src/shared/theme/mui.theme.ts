import { createMuiTheme } from '@material-ui/core';
import { Theme } from '@@types/CommonTypes';
import themeVariant from '@utils/themeVariant';

const theme = themeVariant[Theme.DEFAULT];

const muiTheme = createMuiTheme({
    palette: {
        error: {
            main: theme.colors.error,
        },
        primary: {
            main: theme.colors.primary,
            dark: theme.colors.primary,
        },
        secondary: {
            main: theme.colors.primary,
            dark: theme.colors.primary,
        },
        success: {
            main: theme.colors.primary,
        },
        text: {
            primary: theme.colors.text,
            secondary: theme.colors.secondary,
        },
    },
    typography: {
        fontFamily: theme.fontFamily.open_sans,
    },
    overrides: {
        MuiButton: {
            root: {
                fontWeight: theme.fontWeights.semiBold,
            },
            contained: {
                fontSize: theme.fontSizes.xs,
                fontWeight: theme.fontWeights.semiBold,
                borderRadius: 30,
                padding: '11px 34px',
            },
            containedPrimary: {
                color: theme.colors.text,
            },
            containedSizeLarge: {
                padding: '19px 34px',
            },
        },
    },
});

export default muiTheme;