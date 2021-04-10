import * as Icons from '@shared/svgs/Icons';
import defaultTheme from '@shared/theme/default.theme';
import { StateType } from 'typesafe-actions';
import reducers from '@state/_redux/reducers';

export enum EnvType {
    development = 'development',
    production = 'production',
}

export enum Theme {
    DEFAULT = 'DEFAULT',
    DARK = 'DARK',
}

export interface RootState extends StateType<typeof reducers> {}

export type ThemeType = typeof defaultTheme;
export type ColorType = keyof ThemeType['colors'];
export type FontWeights = keyof ThemeType['fontWeights'];
export type FontSizes = keyof ThemeType['fontSizes'];
export type FontFamilies = keyof ThemeType['fontFamily'];
export type CursorType = keyof ThemeType['cursors'];

export type IconName = keyof typeof Icons;

export enum ToastTypes {
    DEFAULT = 'default',
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
}
