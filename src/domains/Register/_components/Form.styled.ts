import styled, { css } from 'styled-components';
import {
    TextField,
    Button as ButtonMui,
    Grid,
    Checkbox as CheckboxMui,
} from '@material-ui/core';

export const Container = styled(Grid)(
    ({ theme }) => css`
        padding: 16px;
    `,
);

export const Checkbox = styled(CheckboxMui)(
    ({ theme }) => css`
        color: ${theme.colors.primary} !important;
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
    width: 100%;
`;

export {};
