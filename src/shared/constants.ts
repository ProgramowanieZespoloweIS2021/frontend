import { EnvType } from '@@types/CommonTypes';

export const __DEV__ = process.env.NODE_ENV !== EnvType.production;
export const API_URL = process.env.REACT_APP_GRAPHQL;

export const breakpoints = {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200,
};
