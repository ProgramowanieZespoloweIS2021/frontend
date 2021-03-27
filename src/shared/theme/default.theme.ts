import { palette, global, shadows } from './config';

const defaultTheme = {
    colors: {
        app_bg: palette.white,
        white: palette.white,
        black: palette.black,
        error: palette.crimsonRed,
        text: palette.black,
        primary: palette.blue,
        secondary: palette.white,
    },
    ...global,
    ...shadows,
};

export default defaultTheme;
