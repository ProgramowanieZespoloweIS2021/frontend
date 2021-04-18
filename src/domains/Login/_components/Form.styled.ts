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

        & label {
            color: ${theme.colors.primary};
        }
    `,
);

export const Button = styled(ButtonMui)`
    && {
        margin-top: 16px;
    }

    width: 100%;
`;

export {};
