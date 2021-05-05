import styled, { css } from 'styled-components';
import {
    TextField,
    Button as ButtonMui,
    Grid,
    Checkbox as CheckboxMui,
} from '@material-ui/core';
import IconButton from '@components/_universal/IconButton/IconButton';

export const Container = styled(Grid)(
    ({ theme }) => css`
        padding: 16px;
    `,
);

export const Checkbox = styled(CheckboxMui)(
    ({ theme }) => css`
        && {
            color: ${theme.colors.primary} !important;
        }
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
    && {
        margin: 8px 0;
    }
`;

export const TierContainer = styled(Grid)(
    ({ theme }) => css`
        border: 1px solid #000000;
        // background: ${theme.colors.primary};
        border-radius: ${theme.borderRadius.card}px;
        padding: 16px;

        && {
            margin: 16px 0;
        }
    `,
);

export const TierInput = styled(Input)(
    ({ theme }) => css`
        && {
            // input {
            //     background: ${theme.colors.secondary};
            // }
        }
    `,
);

export const CancelIcon = styled(IconButton)`
    margin-left: 16px;
`;
