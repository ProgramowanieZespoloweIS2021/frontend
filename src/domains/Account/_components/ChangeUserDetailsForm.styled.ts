import styled, { css } from 'styled-components';
import { TextField, Button as ButtonMui, Grid } from '@material-ui/core';

export const Container = styled(Grid)(
    ({ theme }) => css`
        padding: 16px;
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

export const Button = styled(ButtonMui)`
    width: 100%;

    && {
        margin-top: 16px;
    }
`;

export {};
