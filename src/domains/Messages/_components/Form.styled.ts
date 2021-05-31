import styled, { css } from 'styled-components';
import { TextField, Button } from '@material-ui/core';

export const Input = styled(TextField)(
    ({ theme }) => css`
        flex: 1;

        && {
            margin: 4px;
        }

        & label {
            color: ${theme.colors.primary};
        }
    `,
);

export const SendButton = styled(Button)(
    ({ theme }) => css`
        && {
            min-width: 100px;
            margin: 4px;
        }
    `,
);

export const Form = styled.form(
    ({ theme }) => css`
        display: flex;
        justify-content: center;
    `,
);
