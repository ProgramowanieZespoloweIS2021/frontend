import { palette, global, shadows } from './config';

const defaultTheme = {
    colors: {
        app_bg: palette.white,
        black: palette.black,
        error: palette.crimsonRed,
        text: palette.black,
        primary: palette.crimsonRed,
        secondary: palette.white,
    },
    ...global,
    ...shadows,
};

export default defaultTheme;
