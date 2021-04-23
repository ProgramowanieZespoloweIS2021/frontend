import styled, { css } from 'styled-components';
import { TableCell } from '@material-ui/core';
import { Header } from '@components/_universal/Typography.styled';

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

export {};
