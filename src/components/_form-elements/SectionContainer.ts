import styled, { css } from 'styled-components';

export const SectionContainer = styled.div(
    ({ theme }) => css`
        background: ${theme.colors.white};
        border-radius: 5px;
        padding: 32px;
    `,
);
