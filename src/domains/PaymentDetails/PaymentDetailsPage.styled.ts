import styled, { css } from 'styled-components';
import {
    TextField,
    Button as ButtonMui,
    Grid,
    Checkbox as CheckboxMui,
    Box,
    Paper,
    InputLabel,
} from '@material-ui/core';
import IconButton from '@components/_universal/IconButton/IconButton';
export {};

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

export const Label = styled(InputLabel)(
    ({ theme }) => css`
        && {
            color: ${theme.colors.black};
            margin: 10px 0;
            align-self: flex-start;
        }
    `,
);

export const FormContainer = styled(Paper)(
    ({ theme }) => css`
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px;
    `,
);
