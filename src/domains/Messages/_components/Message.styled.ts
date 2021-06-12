import styled, { css } from 'styled-components';

export const DateContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-flow: column;
        margin-right: 16px;
    `,
);

export const Container = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-flow: row;
        align-items: center;
        margin: 4px 0;
        padding: 8px;
        border-top: 1px solid #ebebeb;
    `,
);
