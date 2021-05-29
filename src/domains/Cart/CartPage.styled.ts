import styled, { css } from 'styled-components';
import { Paper, TableCell, Grid } from '@material-ui/core';
import { DefaultText, Header } from '@components/_universal/Typography.styled';

export const TableImageCell = styled(TableCell)(
    ({ theme }) => css`
        width: 150px;
    `,
);

export const CartTitle = styled(Header)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.xxxl}px;
    `,
);

export const PriceText = styled(DefaultText)(
    ({ theme }) => css`
        font-weight: ${theme.fontWeights.bold};
        margin-bottom: 10px;
    `,
);

export const CartPaymentContainer = styled(Paper)(
    ({ theme }) => css`
        margin-top: 50px;
        padding: 20px 10px;
    `,
);

export const CartPaymentItem = styled(Grid)(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
);

export {};
