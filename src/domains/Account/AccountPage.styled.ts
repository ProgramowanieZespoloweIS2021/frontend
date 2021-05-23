import { Header } from '@components/_universal/Typography.styled';
import styled, { css } from 'styled-components';
import {Grid, Paper, TextField} from '@material-ui/core';

export const Container = styled(Paper)(
    ({ theme }) => css`
        margin: 32px 0;
    `,
);

export const LoginHeader = styled(Header)(
    ({ theme }) => css`
        text-align: center;
        padding-top: 16px;
    `,
);

export const Input = styled(TextField)(
    ({ theme }) => css`
        width: 100%;

        && {
            margin: 4px 0;
        }

        & label {
            color: ${theme.colors.primary};
        }
    `,
);

export const Wrapper = styled(Grid)(
    ({ theme }) => css`
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
    `,
);

export {};
