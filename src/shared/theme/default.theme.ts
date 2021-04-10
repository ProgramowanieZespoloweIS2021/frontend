import { palette, global, shadows } from './config';

const defaultTheme = {
    colors: {
        app_bg: palette.white,
        black: palette.black,
        error: palette.crimsonRed,
        text: palette.black,
        primary: palette.turkeyBlue,
        secondary: palette.white,
        rating: palette.golden,
        optionalText: palette.navyGray,
        white: palette.white,
    },
    ...global,
    ...shadows,
};

export default defaultTheme;
