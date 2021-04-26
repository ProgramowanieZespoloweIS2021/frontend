import { Paper } from '@material-ui/core';
import styled, { css } from 'styled-components';
export {};

export const ModalCard = styled(Paper)(
    ({ theme }) => css`
        position: absolute;
        width: 600px;
        padding: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
);
