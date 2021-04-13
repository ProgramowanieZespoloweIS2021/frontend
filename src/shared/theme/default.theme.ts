import { palette, global, shadows } from './config';

const defaultTheme = {
    colors: {
        app_bg: palette.white,
        white: palette.white,
        black: palette.black,
        error: palette.crimsonRed,
        text: palette.black,
        primary: palette.turkeyBlue,
        secondary: palette.white,
        rating: palette.golden,
        optionalText: palette.navyGray,
    },
    ...global,
    ...shadows,
};

export default defaultTheme;
