import styled, { css } from 'styled-components';
import {
    ColorType,
    FontFamilies,
    FontSizes,
    FontWeights,
} from '@@types/CommonTypes';

export interface ITextProps {
    center?: boolean;
    color?: ColorType;
    fontFamily?: FontFamilies;
    fontSize?: FontSizes;
    fontStyle?: boolean;
    fontWeight?: FontWeights;
    italic?: boolean;
}

export const textStylesCss = css<ITextProps>`
    color: ${({ theme, color }) =>
        color ? theme.colors[color] : theme.colors.text};
    font-family: ${({ theme, fontFamily }) =>
        fontFamily ? theme.fontFamily[fontFamily] : theme.fontFamily.roboto};
    font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
    font-weight: ${({ theme, fontWeight }) =>
        fontWeight ? theme.fontWeights[fontWeight] : theme.fontWeights.regular};
    margin: 0;
    text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const Header = styled.h1<ITextProps>`
    ${textStylesCss};
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.xxl}px;
    line-height: 1.7;
`;

export const DefaultText = styled.p<ITextProps>`
    ${textStylesCss};
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.m}px;
    line-height: 1.75;
`;

// export const BigTitle = styled.h1<ITextProps>`
//     ${repeatableStyles};
//     font-size: ${({ theme, fontSize }) =>
//         fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.big}px;
//     line-height: 1.4;
// `;

// export const Title = styled.h2<ITextProps>`
//     ${repeatableStyles};
//     font-size: ${({ theme, fontSize }) =>
//         fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.xxxl}px;
//     line-height: 1.4;
// `;

// export const SubTitle = styled.h3<ITextProps>`
//     ${repeatableStyles};
//     font-size: ${({ theme, fontSize }) =>
//         fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.xxl}px;
//     line-height: 1.6;
// `;

// export const BigHeader = styled.h4<ITextProps>`
//     ${repeatableStyles};
//     font-size: ${({ theme, fontSize }) =>
//         fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.xl}px;
//     line-height: 1.6;
// `;

// export const Header = styled.h5<ITextProps>`
//     ${repeatableStyles};
//     font-size: ${({ theme, fontSize }) =>
//         fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.l}px;
//     line-height: 1.7;
// `;

// export const SubHeader = styled.h6<ITextProps>`
//     ${repeatableStyles};
//     font-size: ${({ theme, fontSize }) =>
//         fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.m}px;
//     line-height: 1.75;
// `;

// export const DefaultText = styled.p<ITextProps>`
//     ${repeatableStyles};
//     font-size: ${({ theme, fontSize }) =>
//         fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.m}px;
//     line-height: 1.75;
// `;

// export const LinkText = styled.a`
//     ${repeatableStyles};
//     color: ${({ theme, color }) =>
//         color ? theme.colors[color] : theme.colors.secondary};
//     font-size: ${({ theme, fontSize }) =>
//         fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.m}px;
// `;
