import 'styled-components';
import { ThemeType } from '@@types/CommonTypes';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
