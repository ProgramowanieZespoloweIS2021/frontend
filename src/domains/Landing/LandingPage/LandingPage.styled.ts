import styled, { css } from 'styled-components';

export const MainTitle = styled.h1(
    ({ theme }) => css`
        font-weight: ${theme.fontWeights.semiBold};
        font-size: ${theme.fontSizes.max};
        line-height: 1.2;
        margin-bottom: 0;
    `  
);

export const MainSubtitle = styled.h1(
    ({ theme }) => css`
        font-weight: ${theme.fontWeights.light};
        font-size: ${theme.fontSizes.xxl};
        line-height: 1.5;
    `  
);


