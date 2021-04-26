import styled, { css } from 'styled-components';
import { Chip, Fab } from '@material-ui/core';
export {};

export const TagChip = styled(Chip)(
    ({ theme }) => css`
        margin-right: 5px;
    `,
);

export const AddBtnContainer = styled.div(
    ({ theme }) => css`
        position: fixed;
        bottom: 10%;
        right: 10%;
    `,
);
