import { TextField, Select, FormControl } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const Input = styled(TextField)(
    ({ theme }) => css`
        width: 100%;
        && {
            margin-bottom: 8px;
        }
        & label {
            color: ${theme.colors.primary};
        }
        &:first-child {
            margin-right: 5px;
        }
    `,
);

export const MaterialSelect = styled(Select)(
    ({ theme }) => css`
        width: 100%;
    `,
);

export const SelectControl = styled(FormControl)(
    ({ theme }) => css`
        width: 100%;

        & label {
            color: ${theme.colors.primary};
        }
    `,
);
