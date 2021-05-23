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
                color: theme.colors.white,
            },
            outlinedPrimary: {
                color: theme.colors.white,
                background: theme.colors.primary,
                '&:hover': {
                    color: theme.colors.primary,
                },
            },
            containedPrimary: {
                color: theme.colors.white,
            },
            containedSizeLarge: {
                padding: '19px 34px',
            },
        },
        // MuiInput: {
        //     root: {
        //         background: theme.colors.white,
        //     },
        //     input: {
        //         background: theme.colors.white,
        //     },
        // },
        // MuiInputLabel: {
        //     root: {
        //         color: theme.colors.white,
        //     },
        // },
        // MuiTextField: {
        //     root: {
        //         background: '#36a1cc',
        //     },
        // },
        // MuiFormControl: {
        //     root: {
        //         background: '#36a1cc',
        //     },
        // },
    },
});

export default muiTheme;
